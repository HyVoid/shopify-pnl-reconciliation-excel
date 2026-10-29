import React, { useState } from 'react';
import { AppDataState, ExpenseItem, StoreAttribution } from '../../types';
import { ComputedExpense } from '../../utils/calculations';
import { StatusPill, InlineDataBar, InsightBox } from '../common/UIComponents';
import { Plus, Trash2, Filter, Receipt, Search } from 'lucide-react';

interface Sheet04ExpenseFxInputProps {
  state: AppDataState;
  computedExpenses: ComputedExpense[];
  onUpdateState: (updater: (prev: AppDataState) => AppDataState) => void;
  onOpenCsvModal: () => void;
}

export const Sheet04ExpenseFxInput: React.FC<Sheet04ExpenseFxInputProps> = ({
  state,
  computedExpenses,
  onUpdateState,
  onOpenCsvModal
}) => {
  const [storeFilter, setStoreFilter] = useState<'ALL' | StoreAttribution>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newExp, setNewExp] = useState<Partial<ExpenseItem>>({
    vendorSummary: '',
    category: state.settings.expenseCategories[0]?.name || 'Paid Advertising (Meta / Google Ads)',
    storeAttribution: 'Shared 60/40 Expense',
    currency: 'USD',
    amount: 1000.00
  });

  const currentMonth = state.settings.currentMonth;

  // Filtered expenses
  const filteredExpenses = computedExpenses.filter(e => {
    const matchesStore = storeFilter === 'ALL' || e.storeAttribution === storeFilter;
    const matchesCategory = categoryFilter === 'ALL' || e.category === categoryFilter;
    const matchesSearch =
      searchQuery === '' ||
      e.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.vendorSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStore && matchesCategory && matchesSearch;
  });

  // Calculate totals
  const totalIntlAccrued = computedExpenses.reduce((acc, curr) => acc + curr.intlAccruedExpense, 0);
  const totalEuAccrued = computedExpenses.reduce((acc, curr) => acc + curr.euAccruedExpense, 0);
  const maxAccrued = Math.max(...computedExpenses.map(e => Math.max(e.intlAccruedExpense, e.euAccruedExpense)), 1);

  const handleUpdateAmount = (id: string, amount: number) => {
    onUpdateState(prev => ({
      ...prev,
      expenses: prev.expenses.map(exp => (exp.id === id ? { ...exp, amount } : exp))
    }));
  };

  const handleUpdateField = (id: string, field: keyof ExpenseItem, value: any) => {
    onUpdateState(prev => ({
      ...prev,
      expenses: prev.expenses.map(exp => (exp.id === id ? { ...exp, [field]: value } : exp))
    }));
  };

  const handleDeleteExpense = (id: string) => {
    onUpdateState(prev => ({
      ...prev,
      expenses: prev.expenses.filter(exp => exp.id !== id),
      bankTxns: prev.bankTxns.map(b => (b.linkedExpenseId === id ? { ...b, linkedExpenseId: '' } : b))
    }));
  };

  const handleAddExpense = () => {
    if (!newExp.vendorSummary || !newExp.amount) return;
    const item: ExpenseItem = {
      id: `EXP-${currentMonth.replace('-', '')}-${(state.expenses.length + 1).toString().padStart(2, '0')}`,
      month: currentMonth,
      vendorSummary: newExp.vendorSummary.trim(),
      category: newExp.category || state.settings.expenseCategories[0].name,
      storeAttribution: newExp.storeAttribution as StoreAttribution,
      currency: (newExp.currency || 'USD').toUpperCase(),
      amount: Number(newExp.amount) || 0
    };

    onUpdateState(prev => ({
      ...prev,
      expenses: [item, ...prev.expenses]
    }));
    setShowAddModal(false);
    setNewExp({ vendorSummary: '', category: state.settings.expenseCategories[0]?.name, storeAttribution: 'Shared 60/40 Expense', currency: 'USD', amount: 1000 });
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--color-muted)]">
            Sheet 04 / Expense & FX Input
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
            Operational Expenses & Multi-Currency Engine
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Standardize 8 operating expense categories across USD, EUR, and AED. Automatically apply conversion rates and shared dual-store apportionment.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCsvModal}
            className="px-3 py-2 text-[12px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            Import Expense CSV
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Expense Claim</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              Total Intl Accrued Expenses
            </span>
            <Receipt className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display">
            ${totalIntlAccrued.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Direct Intl charges + {(state.settings.sharedExpIntlShare * 100).toFixed(0)}% of shared claims
          </div>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              Total EU Accrued Expenses
            </span>
            <Receipt className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display">
            €{totalEuAccrued.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Direct EU charges + {(state.settings.sharedExpEuShare * 100).toFixed(0)}% of shared claims (EUR FX)
          </div>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              Bank Flow Reconciliation Rate
            </span>
            <span className="text-[11px] font-mono font-medium text-[var(--color-accent)]">
              {computedExpenses.filter(e => e.bankReconStatus === '✅ Matched Bank Flow').length} / {computedExpenses.length} Matched
            </span>
          </div>
          <div className="mt-3">
            <InlineDataBar
              value={computedExpenses.filter(e => e.bankReconStatus === '✅ Matched Bank Flow').length}
              max={computedExpenses.length}
              width="100%"
              showText
            />
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-2">
            Audit link to Sheet 05 Bank & Wise statements
          </div>
        </div>
      </div>

      <InsightBox title="Shared Dual-Store Allocation Rule">
        Brand awareness, SaaS tools, and shared creator fees marked as "Shared 60/40" are partitioned into {(state.settings.sharedExpIntlShare * 100).toFixed(0)}% for International Store ($) and {(state.settings.sharedExpEuShare * 100).toFixed(0)}% for European Store (€) automatically without duplicate manual vouchers.
      </InsightBox>

      {/* Filter and Search Bar */}
      <div className="card-surface p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-[var(--color-muted)]" />
          <select
            value={storeFilter}
            onChange={e => setStoreFilter(e.target.value as any)}
            className="p-1.5 text-[12px] rounded-[var(--radius-sm)] bg-[#F5F5F2] border border-[var(--color-border)] text-[var(--color-primary)]"
          >
            <option value="ALL">All Store Attributions</option>
            <option value="International Store">International Store Only</option>
            <option value="European Store">European Store Only</option>
            <option value="Shared 60/40 Expense">Shared 60/40 Expense</option>
          </select>

          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="p-1.5 text-[12px] rounded-[var(--radius-sm)] bg-[#F5F5F2] border border-[var(--color-border)] text-[var(--color-primary)] max-w-xs truncate"
          >
            <option value="ALL">All 8 Expense Categories</option>
            {state.settings.expenseCategories.map(c => (
              <option key={c.id} value={c.name}>
                {c.id} - {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            placeholder="Search vendor or category..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-[12px] rounded-[var(--radius-sm)] bg-[#F5F5F2] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>
      </div>

      {/* Expenses Table */}
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label select-none">
                <th className="py-3 px-3">Claim ID</th>
                <th className="py-3 px-3">Vendor / Summary</th>
                <th className="py-3 px-3">Expense Category</th>
                <th className="py-3 px-3">Store Attribution</th>
                <th className="py-3 px-3 text-right">Orig. Currency</th>
                <th className="py-3 px-3 text-right">Original Amount</th>
                <th className="py-3 px-3 text-right">FX to USD</th>
                <th className="py-3 px-3 text-right min-w-[130px]">Intl Accrued ($)</th>
                <th className="py-3 px-3 text-right min-w-[130px]">EU Accrued (€)</th>
                <th className="py-3 px-3">Bank Recon</th>
                <th className="py-3 px-3">Compliance</th>
                <th className="py-3 px-2 text-center w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {filteredExpenses.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                const isAnomaly = exp.complianceStatus !== '✅ Normal';

                return (
                  <tr
                    key={exp.id}
                    className={`transition-colors ${
                      isAnomaly ? 'anomaly-row' : isEven ? 'bg-[var(--color-surface)]' : 'bg-[var(--color-bg)]/40'
                    } hover:bg-[#F5F5F2]`}
                  >
                    <td className="py-2.5 px-3 font-mono text-[11px] font-medium text-[var(--color-muted)]">
                      {exp.id}
                    </td>
                    <td className="py-2.5 px-3 text-[12px] font-medium text-[var(--color-primary)] max-w-[200px] truncate">
                      {exp.vendorSummary}
                    </td>
                    <td className="py-2.5 px-3 text-[12px] text-[var(--color-body-text)]">
                      <select
                        value={exp.category}
                        onChange={e => handleUpdateField(exp.id, 'category', e.target.value)}
                        className="bg-transparent border-0 text-[12px] font-medium text-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-accent)] rounded"
                      >
                        {state.settings.expenseCategories.map(c => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-3 text-[11px]">
                      <select
                        value={exp.storeAttribution}
                        onChange={e => handleUpdateField(exp.id, 'storeAttribution', e.target.value as any)}
                        className="bg-transparent border-0 text-[11px] font-mono text-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-accent)] rounded"
                      >
                        <option value="International Store">International Store</option>
                        <option value="European Store">European Store</option>
                        <option value="Shared 60/40 Expense">Shared 60/40 Expense</option>
                      </select>
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-[11px] font-semibold text-[var(--color-primary)]">
                      {exp.currency}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        step="0.01"
                        value={exp.amount}
                        onChange={e => handleUpdateAmount(exp.id, parseFloat(e.target.value) || 0)}
                        className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-28"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-[11px] text-[var(--color-muted)]">
                      {exp.fxRateToIntl.toFixed(4)}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <InlineDataBar value={exp.intlAccruedExpense} max={maxAccrued} width="50px" />
                        <span className="font-mono text-[12px] font-semibold text-[var(--color-primary)] tabular-nums">
                          ${exp.intlAccruedExpense.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <InlineDataBar value={exp.euAccruedExpense} max={maxAccrued} width="50px" />
                        <span className="font-mono text-[12px] font-semibold text-[var(--color-primary)] tabular-nums">
                          €{exp.euAccruedExpense.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3">
                      <StatusPill status={exp.bankReconStatus} />
                    </td>
                    <td className="py-2.5 px-3">
                      <StatusPill status={exp.complianceStatus} />
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <button
                        onClick={() => handleDeleteExpense(exp.id)}
                        className="text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors p-1"
                        title="Delete expense claim"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Expense Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="card-surface p-6 max-w-md w-full border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] mb-4">
              Add Operating Expense Claim
            </h3>

            <div className="space-y-3 text-[13px]">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Vendor & Description
                </label>
                <input
                  type="text"
                  placeholder="e.g. Meta Ads, Klaviyo, 3PL Warehousing"
                  value={newExp.vendorSummary}
                  onChange={e => setNewExp({ ...newExp, vendorSummary: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Expense Category
                </label>
                <select
                  value={newExp.category}
                  onChange={e => setNewExp({ ...newExp, category: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  {state.settings.expenseCategories.map(c => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Store Attribution
                </label>
                <select
                  value={newExp.storeAttribution}
                  onChange={e => setNewExp({ ...newExp, storeAttribution: e.target.value as any })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  <option value="International Store">International Store (100% USD)</option>
                  <option value="European Store">European Store (100% EUR)</option>
                  <option value="Shared 60/40 Expense">Shared 60/40 Split</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                    Currency
                  </label>
                  <select
                    value={newExp.currency}
                    onChange={e => setNewExp({ ...newExp, currency: e.target.value })}
                    className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px] font-mono"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="AED">AED (AED)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={newExp.amount}
                    onChange={e => setNewExp({ ...newExp, amount: parseFloat(e.target.value) || 0 })}
                    className="input-editable w-full p-2 text-[13px] font-mono text-right"
                  />
                </div>
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
                onClick={handleAddExpense}
                className="px-4 py-1.5 text-[12px] font-semibold bg-[var(--color-primary)] text-white rounded-[var(--radius-sm)]"
              >
                Save Expense Claim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
