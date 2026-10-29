import {
  AppDataState,
  AuditHealthSummary,
  ExpenseItem,
  PlRowComputed,
  SalesLineItem,
  SkuMasterItem,
  BomItem,
  BankTxnItem
} from '../types';

export interface ComputedSkuMaster extends SkuMasterItem {
  bundleRolledCostIntl: number;
  finalApprovedCostIntl: number;
  finalApprovedCostEu: number;
  status: string;
  intlUnitsSold: number;
  euUnitsSold: number;
}

export interface ComputedBomItem extends BomItem {
  componentUnitCostIntl: number;
  subtotalCostIntl: number;
  mappingStatus: string;
}

export interface ComputedSalesLine extends SalesLineItem {
  currencyCode: string;
  skuType: string;
  matchedUnitCost: number;
  lineCogs: number;
  rowStatus: string;
}

export interface ComputedExpense extends ExpenseItem {
  fxRateToIntl: number;
  convertedTotalIntl: number;
  intlAccruedExpense: number;
  euAccruedExpense: number;
  bankReconStatus: string;
  complianceStatus: string;
}

export interface ComputedBankTxn extends BankTxnItem {
  fxRateToIntl: number;
  convertedTxnIntl: number;
  matchedExpenseIntl: number;
  reconDiffIntl: number;
  autoReconStatus: string;
  duplicateWarning: string;
}

export function computeBomAndSkuMaster(
  skuList: SkuMasterItem[],
  bomList: BomItem[],
  salesLines: SalesLineItem[],
  intlToEuRate: number,
  currentMonth: string
): { computedSkus: ComputedSkuMaster[]; computedBoms: ComputedBomItem[] } {
  // Step 1: Compute BOM components based on single SKU fixed costs
  const singleSkuMap = new Map<string, SkuMasterItem>();
  skuList.forEach(sku => {
    if (sku.type === 'Single') {
      singleSkuMap.set(sku.sku, sku);
    }
  });

  const computedBoms: ComputedBomItem[] = bomList.map(bom => {
    const singleComp = singleSkuMap.get(bom.componentSku);
    const unitCost = singleComp ? singleComp.singleFixedCostIntl : -1;
    const subtotal = unitCost > 0 ? unitCost * bom.componentQty : 0;
    const mappingStatus = unitCost > 0 ? '✅ Normal' : '⚠️ Component Cost Missing';
    return {
      ...bom,
      componentUnitCostIntl: unitCost,
      subtotalCostIntl: subtotal,
      mappingStatus
    };
  });

  // Step 2: Sum BOM rollups per bundle SKU
  const bundleRollupMap = new Map<string, { total: number; hasMissing: boolean }>();
  computedBoms.forEach(bom => {
    const existing = bundleRollupMap.get(bom.bundleSku) || { total: 0, hasMissing: false };
    existing.total += bom.subtotalCostIntl;
    if (bom.mappingStatus !== '✅ Normal') {
      existing.hasMissing = true;
    }
    bundleRollupMap.set(bom.bundleSku, existing);
  });

  // Step 3: Compute SKU master costs and sales volumes
  const computedSkus: ComputedSkuMaster[] = skuList.map(sku => {
    let rolledCost = 0;
    let finalIntl = 0;
    let status = '✅ Normal';

    if (sku.type === 'Bundle') {
      const bundleData = bundleRollupMap.get(sku.sku);
      rolledCost = bundleData ? bundleData.total : 0;
      finalIntl = rolledCost;
      if (bundleData?.hasMissing) {
        status = '⚠️ BOM Component Missing';
      } else if (finalIntl <= 0) {
        status = '⚠️ Missing Cost or BOM Not Expanded';
      }
    } else {
      finalIntl = sku.singleFixedCostIntl;
      if (finalIntl <= 0) {
        status = '⚠️ Missing Unit Cost';
      }
    }

    const finalEu = Number((finalIntl * intlToEuRate).toFixed(2));

    // Calculate units sold in current month
    let intlUnits = 0;
    let euUnits = 0;
    salesLines.forEach(line => {
      if (line.sku === sku.sku && line.month === currentMonth) {
        if (line.store === 'International Store') {
          intlUnits += line.netQty;
        } else if (line.store === 'European Store') {
          euUnits += line.netQty;
        }
      }
    });

    return {
      ...sku,
      bundleRolledCostIntl: rolledCost,
      finalApprovedCostIntl: finalIntl,
      finalApprovedCostEu: finalEu,
      status,
      intlUnitsSold: intlUnits,
      euUnitsSold: euUnits
    };
  });

  return { computedSkus, computedBoms };
}

export function computeSalesLines(
  salesLines: SalesLineItem[],
  computedSkus: ComputedSkuMaster[],
  intlCurrency: string,
  euCurrency: string
): ComputedSalesLine[] {
  const skuMap = new Map<string, ComputedSkuMaster>();
  computedSkus.forEach(s => skuMap.set(s.sku, s));

  return salesLines.map(line => {
    const isIntl = line.store === 'International Store';
    const currencyCode = isIntl ? intlCurrency : euCurrency;
    const skuMaster = skuMap.get(line.sku);

    let skuType = '⚠️ Unregistered SKU';
    let matchedUnitCost = -1;
    let lineCogs = 0;
    let rowStatus = '✅ Normal';

    if (skuMaster) {
      skuType = skuMaster.type;
      matchedUnitCost = isIntl ? skuMaster.finalApprovedCostIntl : skuMaster.finalApprovedCostEu;
      if (matchedUnitCost > 0) {
        lineCogs = Number((line.netQty * matchedUnitCost).toFixed(2));
      } else {
        rowStatus = '⚠️ Missing Unit Cost';
      }
    } else {
      rowStatus = '⚠️ Missing SKU Mapping';
    }

    if (line.netQty < 0) {
      rowStatus = '⚠️ Negative Qty Review';
    }

    return {
      ...line,
      currencyCode,
      skuType,
      matchedUnitCost,
      lineCogs,
      rowStatus
    };
  });
}

export function computeExpenses(
  expenses: ExpenseItem[],
  fxRates: { code: string; rateToIntl: number }[],
  intlToEuRate: number,
  sharedIntlShare: number,
  sharedEuShare: number,
  bankTxns: BankTxnItem[],
  validCategoryNames: string[]
): ComputedExpense[] {
  const fxMap = new Map<string, number>();
  fxRates.forEach(fx => fxMap.set(fx.code.toUpperCase(), fx.rateToIntl));

  const matchedExpenseIds = new Set<string>();
  bankTxns.forEach(b => {
    if (b.linkedExpenseId) {
      matchedExpenseIds.add(b.linkedExpenseId.trim());
    }
  });

  const categorySet = new Set(validCategoryNames);

  return expenses.map(exp => {
    const rateToIntl = fxMap.get(exp.currency.toUpperCase()) ?? -1;
    let convertedTotalIntl = 0;
    let intlAccrued = 0;
    let euAccrued = 0;

    if (rateToIntl > 0) {
      convertedTotalIntl = Number((exp.amount * rateToIntl).toFixed(2));
    }

    if (exp.storeAttribution === 'International Store') {
      intlAccrued = convertedTotalIntl;
      euAccrued = 0;
    } else if (exp.storeAttribution === 'European Store') {
      intlAccrued = 0;
      euAccrued = Number((convertedTotalIntl * intlToEuRate).toFixed(2));
    } else {
      // Shared 60/40
      intlAccrued = Number((convertedTotalIntl * sharedIntlShare).toFixed(2));
      euAccrued = Number((convertedTotalIntl * sharedEuShare * intlToEuRate).toFixed(2));
    }

    const bankReconStatus = matchedExpenseIds.has(exp.id.trim())
      ? '✅ Matched Bank Flow'
      : '⚠️ Not Yet Matched';

    let complianceStatus = '✅ Normal';
    if (rateToIntl <= 0) {
      complianceStatus = '⚠️ Unknown Currency';
    } else if (!categorySet.has(exp.category)) {
      complianceStatus = '⚠️ Non-standard Category';
    } else if (exp.amount <= 0) {
      complianceStatus = '⚠️ Abnormal Amount';
    }

    return {
      ...exp,
      fxRateToIntl: rateToIntl,
      convertedTotalIntl,
      intlAccruedExpense: intlAccrued,
      euAccruedExpense: euAccrued,
      bankReconStatus,
      complianceStatus
    };
  });
}

export function computeBankTxns(
  bankTxns: BankTxnItem[],
  computedExpenses: ComputedExpense[],
  fxRates: { code: string; rateToIntl: number }[],
  tolerance: number
): ComputedBankTxn[] {
  const fxMap = new Map<string, number>();
  fxRates.forEach(fx => fxMap.set(fx.code.toUpperCase(), fx.rateToIntl));

  const expMap = new Map<string, ComputedExpense>();
  computedExpenses.forEach(exp => expMap.set(exp.id.trim(), exp));

  // Count occurrences for duplicate detection
  const txnIdCounts = new Map<string, number>();
  const claimCounts = new Map<string, number>();

  bankTxns.forEach(t => {
    const tid = t.txnId.trim();
    txnIdCounts.set(tid, (txnIdCounts.get(tid) || 0) + 1);

    if (t.linkedExpenseId && t.linkedExpenseId.trim()) {
      const cid = t.linkedExpenseId.trim();
      claimCounts.set(cid, (claimCounts.get(cid) || 0) + 1);
    }
  });

  return bankTxns.map(t => {
    const tid = t.txnId.trim();
    const cid = t.linkedExpenseId.trim();

    const fxRate = fxMap.get(t.currency.toUpperCase()) ?? 0;
    const convertedTxnIntl = Number((t.amount * fxRate).toFixed(2));

    const matchedExp = cid ? expMap.get(cid) : undefined;
    const matchedExpenseIntl = matchedExp ? matchedExp.convertedTotalIntl : 0;
    const reconDiffIntl = cid ? Number((convertedTxnIntl - matchedExpenseIntl).toFixed(2)) : 0;

    let duplicateWarning = '✅ No Duplicate';
    if ((txnIdCounts.get(tid) || 0) > 1) {
      duplicateWarning = '⚠️ Duplicate Txn ID';
    } else if (cid && (claimCounts.get(cid) || 0) > 1) {
      duplicateWarning = '⚠️ Same Claim Linked Multiple Times';
    }

    let autoReconStatus = '✅ Matched';
    if (t.disposition === 'Non-Operating / Internal Transfer (Excluded)') {
      autoReconStatus = '✅ Excluded Non-Operating';
    } else if (t.disposition === 'Deferred Expense (Non-current Month)') {
      autoReconStatus = '✅ Excluded Deferred';
    } else if (!cid) {
      autoReconStatus = '⚠️ Unmatched Suspected Omission';
    } else if (Math.abs(reconDiffIntl) > tolerance) {
      autoReconStatus = '⚠️ Amount Discrepancy';
    } else {
      autoReconStatus = '✅ Matched';
    }

    return {
      ...t,
      fxRateToIntl: fxRate,
      convertedTxnIntl,
      matchedExpenseIntl,
      reconDiffIntl,
      autoReconStatus,
      duplicateWarning
    };
  });
}

export function computeAuditHealth(
  computedSales: ComputedSalesLine[],
  computedSkus: ComputedSkuMaster[],
  computedExpenses: ComputedExpense[],
  computedBankTxns: ComputedBankTxn[]
): AuditHealthSummary {
  const salesErrors = computedSales.filter(s => s.rowStatus !== '✅ Normal').length;
  const costMasterErrors = computedSkus.filter(s => s.status !== '✅ Normal').length;
  const expenseErrors = computedExpenses.filter(e => e.complianceStatus !== '✅ Normal').length;
  const bankUnmatchedOmissions = computedBankTxns.filter(b => b.autoReconStatus === '⚠️ Unmatched Suspected Omission').length;
  const bankDiffOrDuplicates = computedBankTxns.filter(
    b => b.autoReconStatus === '⚠️ Amount Discrepancy' || b.duplicateWarning.startsWith('⚠️')
  ).length;

  const totalErrors = salesErrors + costMasterErrors + expenseErrors + bankUnmatchedOmissions + bankDiffOrDuplicates;
  const isAllClean = totalErrors === 0;
  const globalStatusText = isAllClean
    ? '✅ All Clean - Ready to Issue P&L'
    : '⚠️ Pending Discrepancies - Verification Required';

  return {
    salesErrors,
    costMasterErrors,
    expenseErrors,
    bankUnmatchedOmissions,
    bankDiffOrDuplicates,
    totalErrors,
    isAllClean,
    globalStatusText
  };
}

export function computePlCalculation(
  state: AppDataState,
  computedSales: ComputedSalesLine[],
  computedExpenses: ComputedExpense[]
): PlRowComputed[] {
  const currentMonth = state.settings.currentMonth;
  const categories = state.settings.expenseCategories;

  // Intl actuals
  let intlRevenue = 0;
  let intlCogs = 0;
  computedSales.forEach(s => {
    if (s.store === 'International Store' && s.month === currentMonth) {
      intlRevenue += s.netSales;
      intlCogs += s.lineCogs;
    }
  });

  // EU actuals
  let euRevenue = 0;
  let euCogs = 0;
  computedSales.forEach(s => {
    if (s.store === 'European Store' && s.month === currentMonth) {
      euRevenue += s.netSales;
      euCogs += s.lineCogs;
    }
  });

  intlRevenue = Number(intlRevenue.toFixed(2));
  intlCogs = Number(intlCogs.toFixed(2));
  euRevenue = Number(euRevenue.toFixed(2));
  euCogs = Number(euCogs.toFixed(2));

  const intlGrossProfit = Number((intlRevenue - intlCogs).toFixed(2));
  const euGrossProfit = Number((euRevenue - euCogs).toFixed(2));

  const intlGrossMargin = intlRevenue > 0 ? intlGrossProfit / intlRevenue : 0;
  const euGrossMargin = euRevenue > 0 ? euGrossProfit / euRevenue : 0;

  // Expenses
  const intlExpByCategory = new Map<string, number>();
  const euExpByCategory = new Map<string, number>();

  computedExpenses.forEach(exp => {
    if (exp.month === currentMonth) {
      intlExpByCategory.set(exp.category, (intlExpByCategory.get(exp.category) || 0) + exp.intlAccruedExpense);
      euExpByCategory.set(exp.category, (euExpByCategory.get(exp.category) || 0) + exp.euAccruedExpense);
    }
  });

  let intlTotalExp = 0;
  let euTotalExp = 0;
  const expenseRows: PlRowComputed[] = categories.map(cat => {
    const intlVal = Number((intlExpByCategory.get(cat.name) || 0).toFixed(2));
    const euVal = Number((euExpByCategory.get(cat.name) || 0).toFixed(2));
    intlTotalExp += intlVal;
    euTotalExp += euVal;

    const intlBase = state.historicalPl.intlBaseline[cat.id] ?? 0;
    const euBase = state.historicalPl.euBaseline[cat.id] ?? 0;

    const intlDiff = intlVal - intlBase;
    const euDiff = euVal - euBase;

    const intlPct = intlBase !== 0 ? intlDiff / Math.abs(intlBase) : null;
    const euPct = euBase !== 0 ? euDiff / Math.abs(euBase) : null;

    const intlAnomaly = (intlPct !== null && Math.abs(intlPct) > state.settings.momAnomalyThreshold)
      ? '⚠️ MoM Variance > Threshold'
      : '✅ Stable';

    const euAnomaly = (euPct !== null && Math.abs(euPct) > state.settings.momAnomalyThreshold)
      ? '⚠️ MoM Variance > Threshold'
      : '✅ Stable';

    return {
      code: cat.id,
      name: cat.name,
      intlBaseline: intlBase,
      intlActual: intlVal,
      intlMoMAmount: Number(intlDiff.toFixed(2)),
      intlMoMPct: intlPct,
      intlAnomaly,
      euBaseline: euBase,
      euActual: euVal,
      euMoMAmount: Number(euDiff.toFixed(2)),
      euMoMPct: euPct,
      euAnomaly
    };
  });

  intlTotalExp = Number(intlTotalExp.toFixed(2));
  euTotalExp = Number(euTotalExp.toFixed(2));

  const intlNetProfit = Number((intlGrossProfit - intlTotalExp).toFixed(2));
  const euNetProfit = Number((euGrossProfit - euTotalExp).toFixed(2));

  const intlNetMargin = intlRevenue > 0 ? intlNetProfit / intlRevenue : 0;
  const euNetMargin = euRevenue > 0 ? euNetProfit / euRevenue : 0;

  // Orders
  const intlSummary = state.salesSummaries.find(
    s => s.store === 'International Store' && s.month === currentMonth
  );
  const euSummary = state.salesSummaries.find(
    s => s.store === 'European Store' && s.month === currentMonth
  );

  const intlOrders = intlSummary?.totalOrders ?? 0;
  const euOrders = euSummary?.totalOrders ?? 0;

  const intlPpo = intlOrders > 0 ? Number((intlNetProfit / intlOrders).toFixed(2)) : 0;
  const euPpo = euOrders > 0 ? Number((euNetProfit / euOrders).toFixed(2)) : 0;

  // Helper for summary rows
  const buildRow = (
    code: string,
    name: string,
    intlActual: number,
    euActual: number,
    isMargin = false
  ): PlRowComputed => {
    const intlBase = state.historicalPl.intlBaseline[code] ?? 0;
    const euBase = state.historicalPl.euBaseline[code] ?? 0;

    const intlDiff = Number((intlActual - intlBase).toFixed(isMargin ? 4 : 2));
    const euDiff = Number((euActual - euBase).toFixed(isMargin ? 4 : 2));

    const intlPct = isMargin ? intlDiff : (intlBase !== 0 ? intlDiff / Math.abs(intlBase) : null);
    const euPct = isMargin ? euDiff : (euBase !== 0 ? euDiff / Math.abs(euBase) : null);

    let intlAnomaly = '✅ Stable';
    if (code === 'NPM-01') {
      if (intlActual < state.settings.targetNetProfitMargin) {
        intlAnomaly = '⚠️ Margin Below Target';
      }
    } else if (intlPct !== null && Math.abs(intlPct) > state.settings.momAnomalyThreshold) {
      intlAnomaly = '⚠️ MoM Variance > Threshold';
    }

    let euAnomaly = '✅ Stable';
    if (code === 'NPM-01') {
      if (euActual < state.settings.targetNetProfitMargin) {
        euAnomaly = '⚠️ Margin Below Target';
      }
    } else if (euPct !== null && Math.abs(euPct) > state.settings.momAnomalyThreshold) {
      euAnomaly = '⚠️ MoM Variance > Threshold';
    }

    return {
      code,
      name,
      intlBaseline: intlBase,
      intlActual,
      intlMoMAmount: intlDiff,
      intlMoMPct: intlPct,
      intlAnomaly,
      euBaseline: euBase,
      euActual,
      euMoMAmount: euDiff,
      euMoMPct: euPct,
      euAnomaly
    };
  };

  const revRow = buildRow('REV-01', 'Net Confirmed Revenue', intlRevenue, euRevenue);
  const cogsRow = buildRow('COGS-01', 'Cost of Goods Sold (COGS)', intlCogs, euCogs);
  const gpRow = buildRow('GP-01', 'Gross Profit', intlGrossProfit, euGrossProfit);
  const gmRow = buildRow('GM-01', 'Gross Margin %', intlGrossMargin, euGrossMargin, true);

  const expTotRow = buildRow('EXP-TOT', 'Total Operating Expenses', intlTotalExp, euTotalExp);
  const npRow = buildRow('NP-01', 'Operating Net Profit', intlNetProfit, euNetProfit);
  const npmRow = buildRow('NPM-01', 'Net Profit Margin %', intlNetMargin, euNetMargin, true);
  const ordRow = buildRow('ORD-01', 'Total Effective Orders', intlOrders, euOrders);
  const ppoRow = buildRow('PPO-01', 'Profit Per Order', intlPpo, euPpo);

  return [
    revRow,
    cogsRow,
    gpRow,
    gmRow,
    ...expenseRows,
    expTotRow,
    npRow,
    npmRow,
    ordRow,
    ppoRow
  ];
}

export function generateReviewNarratives(
  state: AppDataState,
  plRows: PlRowComputed[],
  health: AuditHealthSummary
): Record<number, string> {
  const getRow = (code: string) => plRows.find(r => r.code === code);

  const rev = getRow('REV-01');
  const np = getRow('NP-01');
  const npm = getRow('NPM-01');
  const ppo = getRow('PPO-01');
  const gm = getRow('GM-01');

  const intlSymbol = state.settings.baseCurrencySymbol;
  const euSymbol = state.settings.euStoreCurrencySymbol;

  // Find top expense for Intl
  const expenseRows = plRows.filter(r => r.code.startsWith('EXP-') && r.code !== 'EXP-TOT');
  let topIntlExp = expenseRows[0];
  let topEuExp = expenseRows[0];

  expenseRows.forEach(r => {
    if (r.intlActual > (topIntlExp?.intlActual ?? 0)) topIntlExp = r;
    if (r.euActual > (topEuExp?.euActual ?? 0)) topEuExp = r;
  });

  const formatMoney = (val: number, symbol: string) =>
    `${symbol}${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const formatPct = (val: number | null) => {
    if (val === null) return 'N/A';
    const sign = val > 0 ? '+' : '';
    return `${sign}${(val * 100).toFixed(1)}%`;
  };

  const formatDiffMoney = (val: number, symbol: string) => {
    const sign = val > 0 ? '+' : val < 0 ? '-' : '';
    return `${sign}${symbol}${Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return {
    1: `[Accounting Overview] Reporting period is ${state.settings.currentMonth} (Benchmark period: ${state.settings.comparisonMonth}). Current global verification status: ${health.globalStatusText} (Pending open discrepancies: ${health.totalErrors} item${health.totalErrors !== 1 ? 's' : ''}).`,
    
    2: `[International Store Profitability] Confirmed net revenue of ${formatMoney(rev?.intlActual ?? 0, intlSymbol)}, achieving an operating net profit of ${formatMoney(np?.intlActual ?? 0, intlSymbol)} with a net profit margin of ${((npm?.intlActual ?? 0) * 100).toFixed(1)}% and profit per order of ${formatMoney(ppo?.intlActual ?? 0, intlSymbol)} (Target net margin benchmark: ${(state.settings.targetNetProfitMargin * 100).toFixed(1)}%).`,
    
    3: `[International Store MoM Changes] Net profit changed by ${formatDiffMoney(np?.intlMoMAmount ?? 0, intlSymbol)} (${formatPct(np?.intlMoMPct ?? 0)}), net margin moved by ${formatPct(npm?.intlMoMAmount ?? 0)} percentage points. Operating condition: ${np?.intlAnomaly ?? 'Stable'}.`,
    
    4: `[European Store Profitability] Confirmed net revenue of ${formatMoney(rev?.euActual ?? 0, euSymbol)}, achieving an operating net profit of ${formatMoney(np?.euActual ?? 0, euSymbol)} with a net profit margin of ${((npm?.euActual ?? 0) * 100).toFixed(1)}% and profit per order of ${formatMoney(ppo?.euActual ?? 0, euSymbol)}.`,
    
    5: `[European Store MoM Changes] Net profit changed by ${formatDiffMoney(np?.euMoMAmount ?? 0, euSymbol)} (${formatPct(np?.euMoMPct ?? 0)}), net margin moved by ${formatPct(npm?.euMoMAmount ?? 0)} percentage points. Operating condition: ${np?.euAnomaly ?? 'Stable'}.`,
    
    6: `[Cost Structure Analysis] #1 operating expense for International Store is "${topIntlExp?.name ?? 'Advertising'}" at ${formatMoney(topIntlExp?.intlActual ?? 0, intlSymbol)}; #1 operating expense for European Store is "${topEuExp?.name ?? 'Advertising'}" at ${formatMoney(topEuExp?.euActual ?? 0, euSymbol)}.`,
    
    7: `[COGS & Gross Margin Quality] International Store achieved a gross margin of ${((gm?.intlActual ?? 0) * 100).toFixed(1)}% vs European Store at ${((gm?.euActual ?? 0) * 100).toFixed(1)}%. Sales and BOM master data currently show ${health.salesErrors + health.costMasterErrors} pending mapping issue${(health.salesErrors + health.costMasterErrors) !== 1 ? 's' : ''}.`,
    
    8: `[Bank & Wise Reconciliation Audit] Engine identified ${health.bankUnmatchedOmissions} unmatched suspected omission(s) and ${health.bankDiffOrDuplicates} transaction(s) with amount differences or duplicate warnings (drill-down items available in the penetration table below for disposition confirmation).`
  };
}
