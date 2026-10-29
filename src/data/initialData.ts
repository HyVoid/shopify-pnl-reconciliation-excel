import { AppDataState } from '../types';

export const INITIAL_DATA: AppDataState = {
  settings: {
    currentMonth: '2026-09',
    comparisonMonth: '2026-08',
    baseCurrencySymbol: '$',
    intlStoreCurrency: 'USD',
    euStoreCurrency: 'EUR',
    euStoreCurrencySymbol: '€',
    intlToEuRate: 0.9091,
    sharedExpIntlShare: 0.60,
    sharedExpEuShare: 0.40,
    reconTolerance: 5.00,
    targetNetProfitMargin: 0.15,
    momAnomalyThreshold: 0.20,
    fxRates: [
      { code: 'USD', rateToIntl: 1.0000 },
      { code: 'EUR', rateToIntl: 1.1000 },
      { code: 'AED', rateToIntl: 0.2723 }
    ],
    expenseCategories: [
      { id: 'EXP-01', name: 'Paid Advertising (Meta / Google Ads)', plCode: 'EXP-01' },
      { id: 'EXP-02', name: 'Email Marketing Tools (Klaviyo)', plCode: 'EXP-02' },
      { id: 'EXP-03', name: 'Influencer & Ambassador Collabs', plCode: 'EXP-03' },
      { id: 'EXP-04', name: 'UGC & Video Content Production', plCode: 'EXP-04' },
      { id: 'EXP-05', name: 'Freelancer & Specialist Services', plCode: 'EXP-05' },
      { id: 'EXP-06', name: 'Shopify Platform & App Subscriptions', plCode: 'EXP-06' },
      { id: 'EXP-07', name: 'Daily Productivity & Tech Subscriptions', plCode: 'EXP-07' },
      { id: 'EXP-08', name: 'Warehousing & 3PL Fulfillment Fees', plCode: 'EXP-08' }
    ]
  },
  salesSummaries: [
    {
      month: '2026-09',
      store: 'International Store',
      totalOrders: 2150,
      backendBenchmarkSales: 168420.00
    },
    {
      month: '2026-09',
      store: 'European Store',
      totalOrders: 1480,
      backendBenchmarkSales: 114650.00
    }
  ],
  skuList: [
    // Singles
    { sku: 'SKU-SERUM-30ML', productName: 'Botanical Radiance Serum 30ml', type: 'Single', singleFixedCostIntl: 6.80, originalCurrency: 'USD' },
    { sku: 'SKU-CREAM-50ML', productName: 'Ceramide Barrier Cream 50ml', type: 'Single', singleFixedCostIntl: 8.50, originalCurrency: 'USD' },
    { sku: 'SKU-CLEANSER-150ML', productName: 'Gentle Amino Gel Cleanser 150ml', type: 'Single', singleFixedCostIntl: 4.20, originalCurrency: 'USD' },
    { sku: 'SKU-TONER-120ML', productName: 'Hydra-Balancing Mist Toner 120ml', type: 'Single', singleFixedCostIntl: 3.90, originalCurrency: 'USD' },
    { sku: 'SKU-EYE-15ML', productName: 'Peptide Firming Eye Complex 15ml', type: 'Single', singleFixedCostIntl: 5.60, originalCurrency: 'USD' },
    { sku: 'SKU-MASK-75ML', productName: 'Overnight Recovery Moisture Mask 75ml', type: 'Single', singleFixedCostIntl: 7.10, originalCurrency: 'USD' },
    { sku: 'SKU-SPF-50ML', productName: 'Invisible Mineral Sunshield SPF 50', type: 'Single', singleFixedCostIntl: 5.90, originalCurrency: 'USD' },
    { sku: 'SKU-LIP-10ML', productName: 'Plumping Botanical Lip Balm 10ml', type: 'Single', singleFixedCostIntl: 2.10, originalCurrency: 'USD' },
    // Bundles
    { sku: 'BNDL-GLOW-3PC', productName: 'Glow Daily Routine 3-Piece Kit', type: 'Bundle', singleFixedCostIntl: 0, originalCurrency: 'USD' },
    { sku: 'BNDL-HYDRA-DELUXE', productName: 'Hydration Recovery Deluxe Set', type: 'Bundle', singleFixedCostIntl: 0, originalCurrency: 'USD' },
    { sku: 'BNDL-AGE-DEFY', productName: 'Ultimate Anti-Aging Regimen 4-Piece', type: 'Bundle', singleFixedCostIntl: 0, originalCurrency: 'USD' },
    { sku: 'BNDL-WEEKEND-DUO', productName: 'Cleanse & Protect Weekend Duo', type: 'Bundle', singleFixedCostIntl: 0, originalCurrency: 'USD' }
  ],
  bomList: [
    // BNDL-GLOW-3PC: Cleanser + Toner + Serum
    { id: 'BOM-01', bundleSku: 'BNDL-GLOW-3PC', bundleName: 'Glow Daily Routine 3-Piece Kit', componentSku: 'SKU-CLEANSER-150ML', componentQty: 1 },
    { id: 'BOM-02', bundleSku: 'BNDL-GLOW-3PC', bundleName: 'Glow Daily Routine 3-Piece Kit', componentSku: 'SKU-TONER-120ML', componentQty: 1 },
    { id: 'BOM-03', bundleSku: 'BNDL-GLOW-3PC', bundleName: 'Glow Daily Routine 3-Piece Kit', componentSku: 'SKU-SERUM-30ML', componentQty: 1 },
    
    // BNDL-HYDRA-DELUXE: Cleanser + Cream + Mask
    { id: 'BOM-04', bundleSku: 'BNDL-HYDRA-DELUXE', bundleName: 'Hydration Recovery Deluxe Set', componentSku: 'SKU-CLEANSER-150ML', componentQty: 1 },
    { id: 'BOM-05', bundleSku: 'BNDL-HYDRA-DELUXE', bundleName: 'Hydration Recovery Deluxe Set', componentSku: 'SKU-CREAM-50ML', componentQty: 1 },
    { id: 'BOM-06', bundleSku: 'BNDL-HYDRA-DELUXE', bundleName: 'Hydration Recovery Deluxe Set', componentSku: 'SKU-MASK-75ML', componentQty: 1 },

    // BNDL-AGE-DEFY: Serum + Cream + Eye + Lip
    { id: 'BOM-07', bundleSku: 'BNDL-AGE-DEFY', bundleName: 'Ultimate Anti-Aging Regimen 4-Piece', componentSku: 'SKU-SERUM-30ML', componentQty: 1 },
    { id: 'BOM-08', bundleSku: 'BNDL-AGE-DEFY', bundleName: 'Ultimate Anti-Aging Regimen 4-Piece', componentSku: 'SKU-CREAM-50ML', componentQty: 1 },
    { id: 'BOM-09', bundleSku: 'BNDL-AGE-DEFY', bundleName: 'Ultimate Anti-Aging Regimen 4-Piece', componentSku: 'SKU-EYE-15ML', componentQty: 1 },
    { id: 'BOM-10', bundleSku: 'BNDL-AGE-DEFY', bundleName: 'Ultimate Anti-Aging Regimen 4-Piece', componentSku: 'SKU-LIP-10ML', componentQty: 1 },

    // BNDL-WEEKEND-DUO: Cleanser + SPF
    { id: 'BOM-11', bundleSku: 'BNDL-WEEKEND-DUO', bundleName: 'Cleanse & Protect Weekend Duo', componentSku: 'SKU-CLEANSER-150ML', componentQty: 1 },
    { id: 'BOM-12', bundleSku: 'BNDL-WEEKEND-DUO', bundleName: 'Cleanse & Protect Weekend Duo', componentSku: 'SKU-SPF-50ML', componentQty: 1 }
  ],
  salesLines: [
    // International Store ($ USD)
    { id: 'SLS-0001', month: '2026-09', store: 'International Store', sku: 'SKU-SERUM-30ML', productName: 'Botanical Radiance Serum 30ml', netQty: 680, netSales: 35360.00 },
    { id: 'SLS-0002', month: '2026-09', store: 'International Store', sku: 'SKU-CREAM-50ML', productName: 'Ceramide Barrier Cream 50ml', netQty: 540, netSales: 31320.00 },
    { id: 'SLS-0003', month: '2026-09', store: 'International Store', sku: 'SKU-CLEANSER-150ML', productName: 'Gentle Amino Gel Cleanser 150ml', netQty: 420, netSales: 13440.00 },
    { id: 'SLS-0004', month: '2026-09', store: 'International Store', sku: 'SKU-TONER-120ML', productName: 'Hydra-Balancing Mist Toner 120ml', netQty: 310, netSales: 9920.00 },
    { id: 'SLS-0005', month: '2026-09', store: 'International Store', sku: 'SKU-EYE-15ML', productName: 'Peptide Firming Eye Complex 15ml', netQty: 290, netSales: 12180.00 },
    { id: 'SLS-0006', month: '2026-09', store: 'International Store', sku: 'SKU-SPF-50ML', productName: 'Invisible Mineral Sunshield SPF 50', netQty: 380, netSales: 14440.00 },
    { id: 'SLS-0007', month: '2026-09', store: 'International Store', sku: 'BNDL-GLOW-3PC', productName: 'Glow Daily Routine 3-Piece Kit', netQty: 260, netSales: 25480.00 },
    { id: 'SLS-0008', month: '2026-09', store: 'International Store', sku: 'BNDL-HYDRA-DELUXE', productName: 'Hydration Recovery Deluxe Set', netQty: 180, netSales: 17280.00 },
    { id: 'SLS-0009', month: '2026-09', store: 'International Store', sku: 'BNDL-WEEKEND-DUO', productName: 'Cleanse & Protect Weekend Duo', netQty: 160, netSales: 9000.00 },

    // European Store (€ EUR)
    { id: 'SLS-0010', month: '2026-09', store: 'European Store', sku: 'SKU-SERUM-30ML', productName: 'Botanical Radiance Serum 30ml', netQty: 490, netSales: 24500.00 },
    { id: 'SLS-0011', month: '2026-09', store: 'European Store', sku: 'SKU-CREAM-50ML', productName: 'Ceramide Barrier Cream 50ml', netQty: 420, netSales: 23100.00 },
    { id: 'SLS-0012', month: '2026-09', store: 'European Store', sku: 'SKU-CLEANSER-150ML', productName: 'Gentle Amino Gel Cleanser 150ml', netQty: 380, netSales: 11400.00 },
    { id: 'SLS-0013', month: '2026-09', store: 'European Store', sku: 'SKU-TONER-120ML', productName: 'Hydra-Balancing Mist Toner 120ml', netQty: 260, netSales: 7800.00 },
    { id: 'SLS-0014', month: '2026-09', store: 'European Store', sku: 'SKU-MASK-75ML', productName: 'Overnight Recovery Moisture Mask 75ml', netQty: 220, netSales: 10560.00 },
    { id: 'SLS-0015', month: '2026-09', store: 'European Store', sku: 'SKU-SPF-50ML', productName: 'Invisible Mineral Sunshield SPF 50', netQty: 310, netSales: 10850.00 },
    { id: 'SLS-0016', month: '2026-09', store: 'European Store', sku: 'BNDL-GLOW-3PC', productName: 'Glow Daily Routine 3-Piece Kit', netQty: 170, netSales: 15300.00 },
    { id: 'SLS-0017', month: '2026-09', store: 'European Store', sku: 'BNDL-AGE-DEFY', productName: 'Ultimate Anti-Aging Regimen 4-Piece', netQty: 85, netSales: 11140.00 }
  ],
  expenses: [
    { id: 'EXP-202609-01', month: '2026-09', vendorSummary: 'Meta Ads Manager (Global Campaign)', category: 'Paid Advertising (Meta / Google Ads)', storeAttribution: 'International Store', currency: 'USD', amount: 38500.00 },
    { id: 'EXP-202609-02', month: '2026-09', vendorSummary: 'Google Ads (EU Target Search & Shopping)', category: 'Paid Advertising (Meta / Google Ads)', storeAttribution: 'European Store', currency: 'EUR', amount: 22400.00 },
    { id: 'EXP-202609-03', month: '2026-09', vendorSummary: 'Klaviyo Email Automation Platform', category: 'Email Marketing Tools (Klaviyo)', storeAttribution: 'Shared 60/40 Expense', currency: 'USD', amount: 3200.00 },
    { id: 'EXP-202609-04', month: '2026-09', vendorSummary: 'Apex Talent Agency - US Ambassador Seeding', category: 'Influencer & Ambassador Collabs', storeAttribution: 'International Store', currency: 'USD', amount: 9500.00 },
    { id: 'EXP-202609-05', month: '2026-09', vendorSummary: 'Paris Creator Hub - EU Influencer Review Box', category: 'Influencer & Ambassador Collabs', storeAttribution: 'European Store', currency: 'EUR', amount: 6200.00 },
    { id: 'EXP-202609-06', month: '2026-09', vendorSummary: 'Dubai Digital Creators (UGC Reels Pack)', category: 'UGC & Video Content Production', storeAttribution: 'Shared 60/40 Expense', currency: 'AED', amount: 16500.00 },
    { id: 'EXP-202609-07', month: '2026-09', vendorSummary: 'Upwork Global - Senior Shopify Dev Retainer', category: 'Freelancer & Specialist Services', storeAttribution: 'Shared 60/40 Expense', currency: 'USD', amount: 4500.00 },
    { id: 'EXP-202609-08', month: '2026-09', vendorSummary: 'Shopify Advanced Plan Subscription (US & EU)', category: 'Shopify Platform & App Subscriptions', storeAttribution: 'Shared 60/40 Expense', currency: 'USD', amount: 798.00 },
    { id: 'EXP-202609-09', month: '2026-09', vendorSummary: 'Loox Product Reviews & Bundler Apps', category: 'Shopify Platform & App Subscriptions', storeAttribution: 'Shared 60/40 Expense', currency: 'USD', amount: 480.00 },
    { id: 'EXP-202609-10', month: '2026-09', vendorSummary: 'GSuite, Slack & Figma Team Workspace', category: 'Daily Productivity & Tech Subscriptions', storeAttribution: 'Shared 60/40 Expense', currency: 'USD', amount: 640.00 },
    { id: 'EXP-202609-11', month: '2026-09', vendorSummary: 'ShipBob US East Coast 3PL Storage & Pick/Pack', category: 'Warehousing & 3PL Fulfillment Fees', storeAttribution: 'International Store', currency: 'USD', amount: 14200.00 },
    { id: 'EXP-202609-12', month: '2026-09', vendorSummary: 'Rotterdam EuroLogistics 3PL Distribution Hub', category: 'Warehousing & 3PL Fulfillment Fees', storeAttribution: 'European Store', currency: 'EUR', amount: 9800.00 },
    { id: 'EXP-202609-13', month: '2026-09', vendorSummary: 'TikTok Spark Ads Pilot Experiment', category: 'Paid Advertising (Meta / Google Ads)', storeAttribution: 'International Store', currency: 'USD', amount: 4200.00 },
    { id: 'EXP-202609-14', month: '2026-09', vendorSummary: 'Gorgias Helpdesk Omni-Channel Suite', category: 'Shopify Platform & App Subscriptions', storeAttribution: 'Shared 60/40 Expense', currency: 'USD', amount: 750.00 }
  ],
  bankTxns: [
    { txnId: 'BANK-US-901', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Meta Platforms Inc - Online Ads', currency: 'USD', amount: 38500.00, linkedExpenseId: 'EXP-202609-01', disposition: 'Confirmed Operating Expense', notes: 'Matches Meta invoices' },
    { txnId: 'WISE-EUR-102', month: '2026-09', channel: 'Wise-EUR', payeeSummary: 'Google Ireland Limited', currency: 'EUR', amount: 22400.00, linkedExpenseId: 'EXP-202609-02', disposition: 'Confirmed Operating Expense', notes: 'Direct SEPA debit' },
    { txnId: 'BANK-US-903', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Klaviyo Inc Software', currency: 'USD', amount: 3200.00, linkedExpenseId: 'EXP-202609-03', disposition: 'Confirmed Operating Expense', notes: 'Monthly recurring tier' },
    { txnId: 'BANK-US-904', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Apex Talent Partners Wire', currency: 'USD', amount: 9500.00, linkedExpenseId: 'EXP-202609-04', disposition: 'Confirmed Operating Expense', notes: 'Q3 Seeding contract' },
    { txnId: 'WISE-EUR-105', month: '2026-09', channel: 'Wise-EUR', payeeSummary: 'Paris Creator Collective', currency: 'EUR', amount: 6200.00, linkedExpenseId: 'EXP-202609-05', disposition: 'Confirmed Operating Expense', notes: 'EUR transfer complete' },
    { txnId: 'WISE-USD-106', month: '2026-09', channel: 'Wise-USD', payeeSummary: 'Dubai Digital Agency LLC', currency: 'AED', amount: 16500.00, linkedExpenseId: 'EXP-202609-06', disposition: 'Confirmed Operating Expense', notes: 'AED batch remittance' },
    { txnId: 'BANK-US-907', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Upwork Escrow Inc', currency: 'USD', amount: 4500.00, linkedExpenseId: 'EXP-202609-07', disposition: 'Confirmed Operating Expense', notes: 'Shopify lead dev sprint' },
    { txnId: 'BANK-US-908', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Shopify Monthly Billing', currency: 'USD', amount: 798.00, linkedExpenseId: 'EXP-202609-08', disposition: 'Confirmed Operating Expense', notes: 'Dual store fees' },
    { txnId: 'BANK-US-909', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Shopify App Store Loox', currency: 'USD', amount: 480.00, linkedExpenseId: 'EXP-202609-09', disposition: 'Confirmed Operating Expense', notes: 'App charges' },
    { txnId: 'BANK-US-910', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Google Workspace & Slack', currency: 'USD', amount: 640.00, linkedExpenseId: 'EXP-202609-10', disposition: 'Confirmed Operating Expense', notes: 'SaaS tools' },
    { txnId: 'BANK-US-911', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'ShipBob Inc Logistics', currency: 'USD', amount: 14200.00, linkedExpenseId: 'EXP-202609-11', disposition: 'Confirmed Operating Expense', notes: 'US Fulfillment' },
    { txnId: 'WISE-EUR-112', month: '2026-09', channel: 'Wise-EUR', payeeSummary: 'Rotterdam Logistics BV', currency: 'EUR', amount: 9800.00, linkedExpenseId: 'EXP-202609-12', disposition: 'Confirmed Operating Expense', notes: 'EU Warehouse' },
    { txnId: 'BANK-US-913', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'TikTok Ads Singapore', currency: 'USD', amount: 4200.00, linkedExpenseId: 'EXP-202609-13', disposition: 'Confirmed Operating Expense', notes: 'Spark ads budget' },
    { txnId: 'BANK-US-914', month: '2026-09', channel: 'Operating Bank USD', payeeSummary: 'Gorgias Helpdesk App', currency: 'USD', amount: 750.00, linkedExpenseId: 'EXP-202609-14', disposition: 'Confirmed Operating Expense', notes: 'Customer support' },
    // Realistic Unmatched / Pending Flow (demonstrates reconciliation intelligence)
    { txnId: 'WISE-USD-991', month: '2026-09', channel: 'Wise-USD', payeeSummary: 'Internal FX Rebalance Transfer to Wise-EUR', currency: 'USD', amount: 15000.00, linkedExpenseId: '', disposition: 'Non-Operating / Internal Transfer (Excluded)', notes: 'Internal treasury rebalance, non-operating item excluded from P&L' }
  ],
  historicalPl: {
    intlBaseline: {
      'REV-01': 152000.00,
      'COGS-01': 38200.00,
      'GP-01': 113800.00,
      'GM-01': 0.7487, // 74.9%
      'EXP-01': 35000.00,
      'EXP-02': 2800.00,
      'EXP-03': 8200.00,
      'EXP-04': 2400.00,
      'EXP-05': 3800.00,
      'EXP-06': 1200.00,
      'EXP-07': 380.00,
      'EXP-08': 13500.00,
      'EXP-TOT': 67280.00,
      'NP-01': 46520.00,
      'NPM-01': 0.3061, // 30.6%
      'ORD-01': 1950,
      'PPO-01': 23.86
    },
    euBaseline: {
      'REV-01': 98500.00,
      'COGS-01': 24800.00,
      'GP-01': 73700.00,
      'GM-01': 0.7482, // 74.8%
      'EXP-01': 21000.00,
      'EXP-02': 1163.65,
      'EXP-03': 5400.00,
      'EXP-04': 1633.72,
      'EXP-05': 1636.38,
      'EXP-06': 736.37,
      'EXP-07': 232.73,
      'EXP-08': 8900.00,
      'EXP-TOT': 40702.85,
      'NP-01': 32997.15,
      'NPM-01': 0.3350, // 33.5%
      'ORD-01': 1280,
      'PPO-01': 25.78
    }
  },
  reviewNotes: {
    1: 'All source feeds closed for September 2026; preliminary audit cleared.',
    2: 'Strong international demand driven by Radiance Serum and Ceramide Cream sales.',
    3: 'Intl net profit improved by +$12.3k (+26.4%) with steady AOV.',
    4: 'European store reached healthy 30%+ net margins despite higher freight duties.',
    5: 'EU paid ads efficiency remained stable; expansion of German market contributing.',
    6: 'Meta and Google Ads represent the largest expense share across both storefronts.',
    7: 'Bundle BOM cost rollup accurate; all SKUs successfully mapped without cost leaks.',
    8: 'One internal FX transfer of $15,000 flagged and cleared as non-operating treasury flow.'
  },
  lastSaved: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
};
