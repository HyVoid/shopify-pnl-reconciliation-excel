import { AppDataState, BankTxnItem, ExpenseItem, SalesLineItem } from '../types';

export function parseCsv(text: string): string[][] {
  const lines = text.trim().split(/\r?\n/);
  return lines.map(line => {
    const row: string[] = [];
    let insideQuotes = false;
    let entry = '';
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (insideQuotes && line[i + 1] === '"') {
          entry += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        row.push(entry.trim());
        entry = '';
      } else {
        entry += char;
      }
    }
    row.push(entry.trim());
    return row;
  });
}

export function generateSampleSalesCsv(): string {
  return `Record ID,Month,Store,SKU,Product Name,Net Qty,Confirmed Net Sales
SLS-1001,2026-09,International Store,SKU-SERUM-30ML,Botanical Radiance Serum 30ml,150,7800.00
SLS-1002,2026-09,International Store,BNDL-GLOW-3PC,Glow Daily Routine 3-Piece Kit,80,7840.00
SLS-1003,2026-09,European Store,SKU-CREAM-50ML,Ceramide Barrier Cream 50ml,120,6600.00
SLS-1004,2026-09,European Store,BNDL-WEEKEND-DUO,Cleanse & Protect Weekend Duo,60,3300.00`;
}

export function generateSampleExpenseCsv(): string {
  return `Claim ID,Month,Vendor & Summary,Category,Store Attribution,Currency,Amount
EXP-202609-20,2026-09,Pinterest Ads Pilot,Paid Advertising (Meta / Google Ads),International Store,USD,1850.00
EXP-202609-21,2026-09,Notion & Linear Team,Daily Productivity & Tech Subscriptions,Shared 60/40 Expense,USD,420.00
EXP-202609-22,2026-09,Berlin Creator Hub,Influencer & Ambassador Collabs,European Store,EUR,2400.00`;
}

export function generateSampleBankCsv(): string {
  return `Transaction ID,Month,Channel Source,Payee & Summary,Currency,Amount,Linked Claim ID,Disposition,Notes
WISE-EUR-501,2026-09,Wise-EUR,Berlin Creator Hub,EUR,2400.00,EXP-202609-22,Confirmed Operating Expense,Verified invoice
BANK-US-702,2026-09,Operating Bank USD,Pinterest Ads,USD,1850.00,EXP-202609-20,Confirmed Operating Expense,Card settlement
WISE-USD-703,2026-09,Wise-USD,Unknown Digital Tools charge,USD,350.00,,Pending Review,Needs review for potential omission`;
}

export function exportBackupJson(state: AppDataState): void {
  const jsonStr = JSON.stringify(state, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const timestamp = new Date().toISOString().slice(0, 10);
  link.download = `Shopify_DualStore_PL_Backup_${state.settings.currentMonth}_${timestamp}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function parseSalesCsv(text: string): SalesLineItem[] {
  const rows = parseCsv(text);
  if (rows.length < 2) return [];

  const header = rows[0].map(h => h.toLowerCase());
  const items: SalesLineItem[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < 5 || !row[0]) continue;

    // Default mapping: id, month, store, sku, name, qty, sales
    const id = row[0] || `SLS-${Date.now()}-${i}`;
    const month = row[1] || '2026-09';
    const storeRaw = row[2] || '';
    const store: 'International Store' | 'European Store' =
      storeRaw.toLowerCase().includes('euro') ? 'European Store' : 'International Store';
    const sku = row[3] || 'UNKNOWN-SKU';
    const productName = row[4] || sku;
    const netQty = parseFloat(row[5]) || 0;
    const netSales = parseFloat(row[6]) || 0;

    items.push({
      id,
      month,
      store,
      sku,
      productName,
      netQty,
      netSales
    });
  }

  return items;
}

export function parseExpenseCsv(text: string): ExpenseItem[] {
  const rows = parseCsv(text);
  if (rows.length < 2) return [];

  const items: ExpenseItem[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < 5 || !row[0]) continue;

    const id = row[0] || `EXP-${Date.now()}-${i}`;
    const month = row[1] || '2026-09';
    const vendorSummary = row[2] || 'Expense Item';
    const category = row[3] || 'Paid Advertising (Meta / Google Ads)';
    const storeAttrRaw = (row[4] || '').toLowerCase();
    let storeAttribution: any = 'Shared 60/40 Expense';
    if (storeAttrRaw.includes('intl') || storeAttrRaw.includes('international')) {
      storeAttribution = 'International Store';
    } else if (storeAttrRaw.includes('eu') || storeAttrRaw.includes('euro')) {
      storeAttribution = 'European Store';
    }
    const currency = (row[5] || 'USD').toUpperCase();
    const amount = parseFloat(row[6]) || 0;

    items.push({
      id,
      month,
      vendorSummary,
      category,
      storeAttribution,
      currency,
      amount
    });
  }

  return items;
}

export function parseBankCsv(text: string): BankTxnItem[] {
  const rows = parseCsv(text);
  if (rows.length < 2) return [];

  const items: BankTxnItem[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < 5 || !row[0]) continue;

    const txnId = row[0] || `TXN-${Date.now()}-${i}`;
    const month = row[1] || '2026-09';
    const channel = row[2] || 'Wise-USD';
    const payeeSummary = row[3] || 'Bank Transaction';
    const currency = (row[4] || 'USD').toUpperCase();
    const amount = parseFloat(row[5]) || 0;
    const linkedExpenseId = row[6] || '';
    const disposition: any = row[7] || (linkedExpenseId ? 'Confirmed Operating Expense' : 'Pending Review');
    const notes = row[8] || '';

    items.push({
      txnId,
      month,
      channel,
      payeeSummary,
      currency,
      amount,
      linkedExpenseId,
      disposition,
      notes
    });
  }

  return items;
}
