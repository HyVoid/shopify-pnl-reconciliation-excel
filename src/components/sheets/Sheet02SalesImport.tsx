import React, { useState } from 'react';
import { AppDataState, SalesLineItem, SalesStoreSummary } from '../../types';
import { ComputedSalesLine } from '../../utils/calculations';
import { StatusPill, InlineDataBar, InsightBox } from '../common/UIComponents';
import { Plus, Trash2, Filter, Search, ShoppingBag, AlertTriangle } from 'lucide-react';

interface Sheet02SalesImportProps {
  state: AppDataState;
  computedSales: ComputedSalesLine[];
  onUpdateState: (updater: (prev: AppDataState) => AppDataState) => void;
  onOpenCsvModal: () => void;
}

export const Sheet02SalesImport: React.FC<Sheet02SalesImportProps> = ({
  state,
  computedSales,
  onUpdateState,
  onOpenCsvModal
}) => {
  const [storeFilter, setStoreFilter] = useState<'ALL' | 'International Store' | 'European Store'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New row form state
  const [newRow, setNewRow] = useState<Partial<SalesLineItem>>({
    store: 'International Store',
    sku: 'SKU-SERUM-30ML',
    productName: 'Botanical Radiance Serum 30ml',
    netQty: 100,
    netSales: 5200.00
  });

  const currentMonth = state.settings.currentMonth;
  const tolerance = state.settings.reconTolerance;

  // Filtered sales
  const filteredSales = computedSales.filter(item => {
    const matchesStore = storeFilter === 'ALL' || item.store === storeFilter;
    const matchesSearch =
      searchQuery === '' ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStore && matchesSearch;
  });

  // Calculate maximum COGS for data bars
  const maxCogs = Math.max(...computedSales.map(s => s.lineCogs), 1);

  // Store Summary Benchmarking
  const intlSummary = state.salesSummaries.find(
    s => s.store === 'International Store' && s.month === currentMonth
  );
  const euSummary = state.salesSummaries.find(
    s => s.store === 'European Store' && s.month === currentMonth
  );

  const intlSummedSales = computedSales
    .filter(s => s.store === 'International Store' && s.month === currentMonth)
    .reduce((acc, curr) => acc + curr.netSales, 0);

  const euSummedSales = computedSales
    .filter(s => s.store === 'European Store' && s.month === currentMonth)
    .reduce((acc, curr) => acc + curr.netSales, 0);

  const intlDiff = Math.abs((intlSummary?.backendBenchmarkSales ?? 0) - intlSummedSales);
  const euDiff = Math.abs((euSummary?.backendBenchmarkSales ?? 0) - euSummedSales);

  const intlStatus = intlDiff <= tolerance ? '✅ Total Matches' : `⚠️ Diff: $${intlDiff.toFixed(2)}`;
  const euStatus = euDiff <= tolerance ? '✅ Total Matches' : `⚠️ Diff: €${euDiff.toFixed(2)}`;

  const handleUpdateSummary = (
    store: 'International Store' | 'European Store',
    field: 'totalOrders' | 'backendBenchmarkSales',
    value: number
  ) => {
    onUpdateState(prev => {
      const newSummaries = [...prev.salesSummaries];
      const index = newSummaries.findIndex(s => s.store === store && s.month === currentMonth);
      if (index >= 0) {
        newSummaries[index] = { ...newSummaries[index], [field]: value };
      } else {
        newSummaries.push({
          month: currentMonth,
          store,
          totalOrders: field === 'totalOrders' ? value : 0,
          backendBenchmarkSales: field === 'backendBenchmarkSales' ? value : 0
        });
      }
      return { ...prev, salesSummaries: newSummaries };
    });
  };

  const handleUpdateLine = (id: string, field: 'netQty' | 'netSales', value: number) => {
    onUpdateState(prev => ({
      ...prev,
      salesLines: prev.salesLines.map(line =>
        line.id === id ? { ...line, [field]: value } : line
      )
    }));
  };

  const handleDeleteLine = (id: string) => {
    onUpdateState(prev => ({
      ...prev,
      salesLines: prev.salesLines.filter(line => line.id !== id)
    }));
  };

  const handleAddLine = () => {
    if (!newRow.sku) return;
    const matchedSku = state.skuList.find(s => s.sku === newRow.sku);
    const item: SalesLineItem = {
      id: `SLS-${Date.now().toString().slice(-4)}`,
      month: currentMonth,
      store: newRow.store as any,
      sku: newRow.sku,
      productName: matchedSku?.productName || newRow.productName || 'New Product',
      netQty: Number(newRow.netQty) || 0,
      netSales: Number(newRow.netSales) || 0
    };

    onUpdateState(prev => ({
      ...prev,
      salesLines: [item, ...prev.salesLines]
    }));
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--color-muted)]">
            Sheet 02 / Shopify Sales Import
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
            Sales Records & Backend Benchmark Verification
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Capture product-level sales CSV exports, auto-match approved standard unit costs, and verify line totals against Shopify backend totals.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCsvModal}
            className="px-3 py-2 text-[12px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            Import Sales CSV
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Sales Row</span>
          </button>
        </div>
      </div>

      {/* Backend Totals Benchmark Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Intl Store Benchmark */}
        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[var(--color-accent)]" />
              <h4 className="font-heading text-[16px] font-semibold text-[var(--color-primary)]">
                International Store Benchmark ({state.settings.intlStoreCurrency})
              </h4>
            </div>
            <StatusPill status={intlStatus} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)]">Total Orders</span>
              <div className="mt-1">
                <input
                  type="number"
                  value={intlSummary?.totalOrders ?? 0}
                  onChange={e => handleUpdateSummary('International Store', 'totalOrders', parseInt(e.target.value) || 0)}
                  className="input-editable px-2 py-1 text-[13px] font-mono w-full text-right"
                />
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)]">Shopify Admin Sales</span>
              <div className="mt-1">
                <input
                  type="number"
                  step="0.01"
                  value={intlSummary?.backendBenchmarkSales ?? 0}
                  onChange={e => handleUpdateSummary('International Store', 'backendBenchmarkSales', parseFloat(e.target.value) || 0)}
                  className="input-editable px-2 py-1 text-[13px] font-mono w-full text-right"
                />
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)]">CSV Summed Sales</span>
              <div className="mt-1 font-mono text-[14px] font-semibold text-[var(--color-primary)] py-1 text-right">
                ${intlSummedSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </div>

        {/* EU Store Benchmark */}
        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[var(--color-accent)]" />
              <h4 className="font-heading text-[16px] font-semibold text-[var(--color-primary)]">
                European Store Benchmark ({state.settings.euStoreCurrency})
              </h4>
            </div>
            <StatusPill status={euStatus} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)]">Total Orders</span>
              <div className="mt-1">
                <input
                  type="number"
                  value={euSummary?.totalOrders ?? 0}
                  onChange={e => handleUpdateSummary('European Store', 'totalOrders', parseInt(e.target.value) || 0)}
                  className="input-editable px-2 py-1 text-[13px] font-mono w-full text-right"
                />
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)]">Shopify Admin Sales</span>
              <div className="mt-1">
                <input
                  type="number"
                  step="0.01"
                  value={euSummary?.backendBenchmarkSales ?? 0}
                  onChange={e => handleUpdateSummary('European Store', 'backendBenchmarkSales', parseFloat(e.target.value) || 0)}
                  className="input-editable px-2 py-1 text-[13px] font-mono w-full text-right"
                />
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)]">CSV Summed Sales</span>
              <div className="mt-1 font-mono text-[14px] font-semibold text-[var(--color-primary)] py-1 text-right">
                €{euSummedSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Filter Toolbar */}
      <div className="card-surface p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-[var(--color-muted)]" />
          <div className="flex items-center bg-[#F5F5F2] rounded-[var(--radius-sm)] p-0.5 border border-[var(--color-border)] text-[12px]">
            <button
              onClick={() => setStoreFilter('ALL')}
              className={`px-3 py-1 rounded-[var(--radius-sm)] cursor-pointer transition-all ${
                storeFilter === 'ALL'
                  ? 'bg-white font-semibold text-[var(--color-primary)] shadow-xs'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              All Stores ({computedSales.length})
            </button>
            <button
              onClick={() => setStoreFilter('International Store')}
              className={`px-3 py-1 rounded-[var(--radius-sm)] cursor-pointer transition-all ${
                storeFilter === 'International Store'
                  ? 'bg-white font-semibold text-[var(--color-primary)] shadow-xs'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              Intl Store
            </button>
            <button
              onClick={() => setStoreFilter('European Store')}
              className={`px-3 py-1 rounded-[var(--radius-sm)] cursor-pointer transition-all ${
                storeFilter === 'European Store'
                  ? 'bg-white font-semibold text-[var(--color-primary)] shadow-xs'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              EU Store
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            placeholder="Search SKU or product..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-[12px] rounded-[var(--radius-sm)] bg-[#F5F5F2] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>
      </div>

      {/* Product Sales Lines Table */}
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label select-none">
                <th className="py-3 px-3">ID</th>
                <th className="py-3 px-3">Store</th>
                <th className="py-3 px-3">SKU</th>
                <th className="py-3 px-3">Product Name</th>
                <th className="py-3 px-3">SKU Type</th>
                <th className="py-3 px-3 text-right">Net Qty</th>
                <th className="py-3 px-3 text-right">Net Sales (Store Ccy)</th>
                <th className="py-3 px-3 text-right">Unit Cost</th>
                <th className="py-3 px-3 text-right min-w-[160px]">Line COGS</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-2 text-center w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {filteredSales.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-8 text-center text-[var(--color-muted)]">
                    No sales records found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredSales.map((item, idx) => {
                  const symbol = item.currencyCode === 'USD' ? '$' : '€';
                  const isAnomaly = item.rowStatus !== '✅ Normal';
                  const isEven = idx % 2 === 0;

                  return (
                    <tr
                      key={item.id}
                      className={`transition-colors ${
                        isAnomaly ? 'anomaly-row' : isEven ? 'bg-[var(--color-surface)]' : 'bg-[var(--color-bg)]/40'
                      } hover:bg-[#F5F5F2]`}
                    >
                      <td className="py-2.5 px-3 font-mono text-[11px] text-[var(--color-muted)]">{item.id}</td>
                      <td className="py-2.5 px-3 text-[12px] font-medium text-[var(--color-primary)]">
                        {item.store === 'International Store' ? 'Intl Store ($)' : 'EU Store (€)'}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-[12px] text-[var(--color-primary)] font-medium">
                        {item.sku}
                      </td>
                      <td className="py-2.5 px-3 text-[12px] max-w-[220px] truncate text-[var(--color-body-text)]">
                        {item.productName}
                      </td>
                      <td className="py-2.5 px-3 text-[11px]">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-medium font-mono ${
                            item.skuType === 'Bundle'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : item.skuType === 'Single'
                              ? 'bg-slate-100 text-slate-700'
                              : 'bg-red-50 text-red-700 font-bold'
                          }`}
                        >
                          {item.skuType}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <input
                          type="number"
                          value={item.netQty}
                          onChange={e => handleUpdateLine(item.id, 'netQty', parseInt(e.target.value) || 0)}
                          className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-20"
                        />
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <input
                          type="number"
                          step="0.01"
                          value={item.netSales}
                          onChange={e => handleUpdateLine(item.id, 'netSales', parseFloat(e.target.value) || 0)}
                          className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-28"
                        />
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-[12px] text-[var(--color-primary)]">
                        {item.matchedUnitCost > 0 ? `${symbol}${item.matchedUnitCost.toFixed(2)}` : 'N/A'}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <InlineDataBar value={item.lineCogs} max={maxCogs} width="70px" />
                          <span className="font-mono text-[12px] font-semibold text-[var(--color-primary)] tabular-nums">
                            {symbol}{item.lineCogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3">
                        <StatusPill status={item.rowStatus} />
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        <button
                          onClick={() => handleDeleteLine(item.id)}
                          className="text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors p-1"
                          title="Delete row"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Line Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="card-surface p-6 max-w-md w-full border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] mb-4">
              Add Shopify Sales Line
            </h3>

            <div className="space-y-3 text-[13px]">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Store
                </label>
                <select
                  value={newRow.store}
                  onChange={e => setNewRow({ ...newRow, store: e.target.value as any })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  <option value="International Store">International Store ($ USD)</option>
                  <option value="European Store">European Store (€ EUR)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Select Product SKU
                </label>
                <select
                  value={newRow.sku}
                  onChange={e => {
                    const sku = e.target.value;
                    const found = state.skuList.find(s => s.sku === sku);
                    setNewRow({
                      ...newRow,
                      sku,
                      productName: found?.productName || ''
                    });
                  }}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  {state.skuList.map(s => (
                    <option key={s.sku} value={s.sku}>
                      [{s.type}] {s.sku} - {s.productName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Net Units Sold
                </label>
                <input
                  type="number"
                  value={newRow.netQty}
                  onChange={e => setNewRow({ ...newRow, netQty: parseInt(e.target.value) || 0 })}
                  className="input-editable w-full p-2 text-[13px] font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Net Confirmed Sales Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={newRow.netSales}
                  onChange={e => setNewRow({ ...newRow, netSales: parseFloat(e.target.value) || 0 })}
                  className="input-editable w-full p-2 text-[13px] font-mono"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-3 py-1.5 text-[12px] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLine}
                className="px-4 py-1.5 text-[12px] font-semibold bg-[var(--color-primary)] text-white rounded-[var(--radius-sm)]"
              >
                Save Line
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
