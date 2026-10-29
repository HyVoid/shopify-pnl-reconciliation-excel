export interface GlobalSettings {
  currentMonth: string; // e.g. "2026-09"
  comparisonMonth: string; // e.g. "2026-08"
  baseCurrencySymbol: string; // e.g. "$"
  intlStoreCurrency: string; // e.g. "USD"
  euStoreCurrency: string; // e.g. "EUR"
  euStoreCurrencySymbol: string; // e.g. "€"
  intlToEuRate: number; // e.g. 0.9091 (1 USD = 0.9091 EUR)
  sharedExpIntlShare: number; // e.g. 0.60 (60%)
  sharedExpEuShare: number; // e.g. 0.40 (40%)
  reconTolerance: number; // e.g. 5.00
  targetNetProfitMargin: number; // e.g. 0.15 (15%)
  momAnomalyThreshold: number; // e.g. 0.20 (20%)
  fxRates: FxRateItem[];
  expenseCategories: ExpenseCategoryItem[];
}

export interface FxRateItem {
  code: string; // e.g. "USD", "EUR", "AED"
  rateToIntl: number; // rate to convert 1 unit of currency into Intl store currency (USD)
}

export interface ExpenseCategoryItem {
  id: string; // e.g. "EXP-01"
  name: string; // e.g. "Paid Advertising (Meta/Google Ads)"
  plCode: string;
}

export interface SalesStoreSummary {
  month: string;
  store: 'International Store' | 'European Store';
  totalOrders: number;
  backendBenchmarkSales: number;
}

export interface SalesLineItem {
  id: string; // e.g. "SLS-0001"
  month: string;
  store: 'International Store' | 'European Store';
  sku: string;
  productName: string;
  netQty: number;
  netSales: number; // In store's native currency (USD or EUR)
}

export interface BomItem {
  id: string;
  bundleSku: string;
  bundleName: string;
  componentSku: string;
  componentQty: number;
}

export interface SkuMasterItem {
  sku: string;
  productName: string;
  type: 'Single' | 'Bundle';
  singleFixedCostIntl: number; // In Intl currency ($)
  originalCurrency: string;
}

export type StoreAttribution = 'International Store' | 'European Store' | 'Shared 60/40 Expense';

export interface ExpenseItem {
  id: string; // e.g. "EXP-202609-01"
  month: string;
  vendorSummary: string;
  category: string;
  storeAttribution: StoreAttribution;
  currency: string; // "USD" | "EUR" | "AED"
  amount: number;
}

export type ReconDisposition = 
  | 'Pending Review'
  | 'Confirmed Operating Expense'
  | 'Confirmed Omission - Need Entry'
  | 'Non-Operating / Internal Transfer (Excluded)'
  | 'Deferred Expense (Non-current Month)';

export interface BankTxnItem {
  txnId: string; // e.g. "WISE-88190"
  month: string;
  channel: string; // "Wise-USD" | "Wise-EUR" | "Operating Bank USD"
  payeeSummary: string;
  currency: string;
  amount: number;
  linkedExpenseId: string; // Reference to ExpenseItem.id
  disposition: ReconDisposition;
  notes: string;
}

export interface PlRowComputed {
  code: string;
  name: string;
  intlBaseline: number;
  intlActual: number;
  intlMoMAmount: number;
  intlMoMPct: number | null; // null if N/A
  intlAnomaly: string; // e.g. "✅ Stable" | "⚠️ Below Target Margin" | "⚠️ MoM Variance > Threshold"
  
  euBaseline: number;
  euActual: number;
  euMoMAmount: number;
  euMoMPct: number | null;
  euAnomaly: string;
}

export interface AuditHealthSummary {
  salesErrors: number;
  costMasterErrors: number;
  expenseErrors: number;
  bankUnmatchedOmissions: number;
  bankDiffOrDuplicates: number;
  totalErrors: number;
  isAllClean: boolean;
  globalStatusText: string;
}

export interface AppDataState {
  settings: GlobalSettings;
  salesSummaries: SalesStoreSummary[];
  salesLines: SalesLineItem[];
  bomList: BomItem[];
  skuList: SkuMasterItem[];
  expenses: ExpenseItem[];
  bankTxns: BankTxnItem[];
  historicalPl: {
    intlBaseline: Record<string, number>;
    euBaseline: Record<string, number>;
  };
  reviewNotes: Record<number, string>;
  lastSaved: string | null;
}
