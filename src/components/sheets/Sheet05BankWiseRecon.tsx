import React, { useState } from 'react';
import { AppDataState, BankTxnItem, ReconDisposition } from '../../types';
import { ComputedBankTxn, ComputedExpense } from '../../utils/calculations';
import { StatusPill, InsightBox } from '../common/UIComponents';
import { Plus, Trash2, Filter, Search, Building2, CheckCheck, AlertCircle } from 'lucide-react';

interface Sheet05BankWiseReconProps {
  state: AppDataState;
  computedBankTxns: ComputedBankTxn[];
  computedExpenses: ComputedExpense[];
  onUpdateState: (updater: (prev: AppDataState) => AppDataState) => void;
  onOpenCsvModal: () => void;
}

export const Sheet05BankWiseRecon: React.FC<Sheet05BankWiseReconProps> = ({
  state,
  computedBankTxns,
  computedExpenses,
  onUpdateState,
  onOpenCsvModal
}) => {
  const [channelFilter, setChannelFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newTxn, setNewTxn] = useState<Partial<BankTxnItem>>({
    channel: 'Wise-USD',
    payeeSummary: '',
    currency: 'USD',
    amount: 500.00,
    linkedExpenseId: '',
    disposition: 'Pending Review',
    notes: ''
  });

  const currentMonth = state.settings.currentMonth;

  // Filtered transactions
  const filteredTxns = computedBankTxns.filter(t => {
    const matchesChannel = channelFilter === 'ALL' || t.channel === channelFilter;
    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'UNMATCHED' && t.autoReconStatus.includes('⚠️')) ||
      (statusFilter === 'MATCHED' && t.autoReconStatus.includes('✅'));
    const matchesSearch =
      searchQuery === '' ||
      t.txnId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.payeeSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.linkedExpenseId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesChannel && matchesStatus && matchesSearch;
  });

  // KPI Calculations
  const totalDebitsIntl = computedBankTxns.reduce((acc, curr) => acc + curr.convertedTxnIntl, 0);
  const unmatchedCount = computedBankTxns.filter(t => t.autoReconStatus === '⚠️ Unmatched Suspected Omission').length;
  const discrepancyCount = computedBankTxns.filter(t => t.autoReconStatus === '⚠️ Amount Discrepancy').length;
  const matchedCount = computedBankTxns.filter(t => t.autoReconStatus === '✅ Matched' || t.autoReconStatus.startsWith('✅ Excluded')).length;

  const handleUpdateField = (txnId: string, field: keyof BankTxnItem, value: any) => {
    onUpdateState(prev => ({
      ...prev,
      bankTxns: prev.bankTxns.map(t => (t.txnId === txnId ? { ...t, [field]: value } : t))
    }));
  };

  const handleDeleteTxn = (txnId: string) => {
    onUpdateState(prev => ({
      ...prev,
      bankTxns: prev.bankTxns.filter(t => t.txnId !== txnId)
    }));
  };

  const handleAddTxn = () => {
    if (!newTxn.payeeSummary || !newTxn.amount) return;
    const item: BankTxnItem = {
      txnId: `TXN-${Date.now().toString().slice(-5)}`,
      month: currentMonth,
      channel: newTxn.channel || 'Wise-USD',
      payeeSummary: newTxn.payeeSummary.trim(),
      currency: (newTxn.currency || 'USD').toUpperCase(),
      amount: Number(newTxn.amount) || 0,
      linkedExpenseId: newTxn.linkedExpenseId || '',
      disposition: newTxn.disposition as ReconDisposition,
      notes: newTxn.notes || ''
    };

    onUpdateState(prev => ({
      ...prev,
      bankTxns: [item, ...prev.bankTxns]
    }));
    setShowAddModal(false);
    setNewTxn({ channel: 'Wise-USD', payeeSummary: '', currency: 'USD', amount: 500, linkedExpenseId: '', disposition: 'Pending Review', notes: '' });
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--color-muted)]">
            Sheet 05 / Bank & Wise Cross-Reconciliation
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
            Cross-Channel Statement Reconciliation Engine
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Reconcile raw statement debits from Operating Bank and Wise against declared operational expenses. Prevent unrecorded outflows, double billing, and non-operating leakages.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCsvModal}
            className="px-3 py-2 text-[12px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            Import Bank Statement CSV
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Statement Debit</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              Total Statement Outflows
            </span>
            <Building2 className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display">
            ${totalDebitsIntl.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            {computedBankTxns.length} total statement line debits
          </div>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              Reconciled Clean / Excluded
            </span>
            <CheckCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="font-heading text-[28px] font-bold text-emerald-700 tracking-display">
            {matchedCount}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Cleanly matched or authorized exclusions
          </div>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              Unmatched Suspected Omissions
            </span>
            <AlertCircle className="w-4 h-4 text-[var(--color-negative)]" />
          </div>
          <div className={`font-heading text-[28px] font-bold tracking-display ${unmatchedCount > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}`}>
            {unmatchedCount}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Debits with no associated expense claim
          </div>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              Variance or Duplicate Alerts
            </span>
            <AlertCircle className="w-4 h-4 text-[var(--color-negative)]" />
          </div>
          <div className={`font-heading text-[28px] font-bold tracking-display ${discrepancyCount > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}`}>
            {discrepancyCount}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Difference exceeding tolerance ({state.settings.baseCurrencySymbol}{state.settings.reconTolerance.toFixed(2)})
          </div>
        </div>
      </div>

      <InsightBox title="Omission vs. Non-Operating Treasury Isolation">
        Bank and Wise debits that lack an expense claim are flagged as "⚠️ Unmatched Suspected Omission" by default. If a transaction represents an internal FX transfer between accounts or an owner distribution, selecting "Non-Operating / Internal Transfer (Excluded)" immediately clears the audit warning without polluting your operational P&L.
      </InsightBox>

      {/* Filter and Search */}
      <div className="card-surface p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-[var(--color-muted)]" />
          <select
            value={channelFilter}
            onChange={e => setChannelFilter(e.target.value)}
            className="p-1.5 text-[12px] rounded-[var(--radius-sm)] bg-[#F5F5F2] border border-[var(--color-border)] text-[var(--color-primary)]"
          >
            <option value="ALL">All Financial Accounts / Channels</option>
            <option value="Wise-USD">Wise-USD</option>
            <option value="Wise-EUR">Wise-EUR</option>
            <option value="Operating Bank USD">Operating Bank USD</option>
          </select>

          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="p-1.5 text-[12px] rounded-[var(--radius-sm)] bg-[#F5F5F2] border border-[var(--color-border)] text-[var(--color-primary)]"
          >
            <option value="ALL">All Recon Statuses</option>
            <option value="UNMATCHED">Action Required / Discrepancies Only</option>
            <option value="MATCHED">Matched & Reconciled Only</option>
          </select>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            placeholder="Search txn ID, payee, or claim..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-[12px] rounded-[var(--radius-sm)] bg-[#F5F5F2] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>
      </div>

      {/* Bank Recon Stream Table */}
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label select-none">
                <th className="py-3 px-3">Txn ID</th>
                <th className="py-3 px-3">Account Channel</th>
                <th className="py-3 px-3">Payee & Memo</th>
                <th className="py-3 px-3 text-right">Debit Amount</th>
                <th className="py-3 px-3">Linked Expense Claim</th>
                <th className="py-3 px-3">Manual Disposition</th>
                <th className="py-3 px-3 text-right">Debit (USD eq.)</th>
                <th className="py-3 px-3 text-right">Matched Claim ($)</th>
                <th className="py-3 px-3 text-right">Variance ($)</th>
                <th className="py-3 px-3">System Recon Status</th>
                <th className="py-3 px-3">Duplicate Check</th>
                <th className="py-3 px-2 text-center w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {filteredTxns.map((t, idx) => {
                const isEven = idx % 2 === 0;
                const isWarning = t.autoReconStatus.includes('⚠️') || t.duplicateWarning.includes('⚠️');

                return (
                  <tr
                    key={t.txnId}
                    className={`transition-colors ${
                      isWarning ? 'anomaly-row' : isEven ? 'bg-[var(--color-surface)]' : 'bg-[var(--color-bg)]/40'
                    } hover:bg-[#F5F5F2]`}
                  >
                    <td className="py-2.5 px-3 font-mono text-[11px] text-[var(--color-muted)]">{t.txnId}</td>
                    <td className="py-2.5 px-3 text-[12px] font-mono text-[var(--color-primary)]">{t.channel}</td>
                    <td className="py-2.5 px-3 text-[12px] font-medium text-[var(--color-primary)] max-w-[180px] truncate">
                      {t.payeeSummary}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1 font-mono text-[12px]">
                        <span className="text-[10px] text-[var(--color-muted)]">{t.currency}</span>
                        <input
                          type="number"
                          step="0.01"
                          value={t.amount}
                          onChange={e => handleUpdateField(t.txnId, 'amount', parseFloat(e.target.value) || 0)}
                          className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-24"
                        />
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-[11px]">
                      <select
                        value={t.linkedExpenseId}
                        onChange={e => handleUpdateField(t.txnId, 'linkedExpenseId', e.target.value)}
                        className="bg-transparent border border-[var(--color-border)] rounded text-[11px] font-mono p-1 max-w-[160px] truncate text-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-accent)]"
                      >
                        <option value="">(None - Unmatched)</option>
                        {state.expenses.map(exp => (
                          <option key={exp.id} value={exp.id}>
                            {exp.id} - {exp.vendorSummary} (${exp.amount} {exp.currency})
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-3 text-[11px]">
                      <select
                        value={t.disposition}
                        onChange={e => handleUpdateField(t.txnId, 'disposition', e.target.value as any)}
                        className="bg-transparent border border-[var(--color-border)] rounded text-[11px] p-1 text-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-accent)]"
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="Confirmed Operating Expense">Confirmed Operating Expense</option>
                        <option value="Confirmed Omission - Need Entry">Confirmed Omission - Need Entry</option>
                        <option value="Non-Operating / Internal Transfer (Excluded)">Non-Operating Transfer (Excluded)</option>
                        <option value="Deferred Expense (Non-current Month)">Deferred Expense (Non-current Month)</option>
                      </select>
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-[12px] text-[var(--color-primary)]">
                      ${t.convertedTxnIntl.toFixed(2)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-[12px] text-[var(--color-muted)]">
                      ${t.matchedExpenseIntl.toFixed(2)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-[12px] font-semibold">
                      <span className={Math.abs(t.reconDiffIntl) > state.settings.reconTolerance ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}>
                        {t.reconDiffIntl > 0 ? `+$${t.reconDiffIntl.toFixed(2)}` : t.reconDiffIntl < 0 ? `-$${Math.abs(t.reconDiffIntl).toFixed(2)}` : '$0.00'}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <StatusPill status={t.autoReconStatus} />
                    </td>
                    <td className="py-2.5 px-3">
                      <StatusPill status={t.duplicateWarning} />
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <button
                        onClick={() => handleDeleteTxn(t.txnId)}
                        className="text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors p-1"
                        title="Delete statement transaction"
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

      {/* Add Bank Txn Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="card-surface p-6 max-w-md w-full border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] mb-4">
              Add Statement Debit Record
            </h3>

            <div className="space-y-3 text-[13px]">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Account / Channel Source
                </label>
                <select
                  value={newTxn.channel}
                  onChange={e => setNewTxn({ ...newTxn, channel: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  <option value="Wise-USD">Wise-USD</option>
                  <option value="Wise-EUR">Wise-EUR</option>
                  <option value="Operating Bank USD">Operating Bank USD</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Payee / Memo Summary
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google Ireland, Meta Ads, Wire transfer"
                  value={newTxn.payeeSummary}
                  onChange={e => setNewTxn({ ...newTxn, payeeSummary: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                    Debit Currency
                  </label>
                  <select
                    value={newTxn.currency}
                    onChange={e => setNewTxn({ ...newTxn, currency: e.target.value })}
                    className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px] font-mono"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="AED">AED (AED)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                    Debit Amount
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={newTxn.amount}
                    onChange={e => setNewTxn({ ...newTxn, amount: parseFloat(e.target.value) || 0 })}
                    className="input-editable w-full p-2 text-[13px] font-mono text-right"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Link Existing Expense Claim (Optional)
                </label>
                <select
                  value={newTxn.linkedExpenseId}
                  onChange={e => setNewTxn({ ...newTxn, linkedExpenseId: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px] font-mono"
                >
                  <option value="">(None - Unmatched)</option>
                  {state.expenses.map(exp => (
                    <option key={exp.id} value={exp.id}>
                      {exp.id} - {exp.vendorSummary} (${exp.amount} {exp.currency})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Manual Disposition
                </label>
                <select
                  value={newTxn.disposition}
                  onChange={e => setNewTxn({ ...newTxn, disposition: e.target.value as any })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  <option value="Pending Review">Pending Review</option>
                  <option value="Confirmed Operating Expense">Confirmed Operating Expense</option>
                  <option value="Confirmed Omission - Need Entry">Confirmed Omission - Need Entry</option>
                  <option value="Non-Operating / Internal Transfer (Excluded)">Non-Operating Transfer (Excluded)</option>
                  <option value="Deferred Expense (Non-current Month)">Deferred Expense (Non-current Month)</option>
                </select>
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
                onClick={handleAddTxn}
                className="px-4 py-1.5 text-[12px] font-semibold bg-[var(--color-primary)] text-white rounded-[var(--radius-sm)]"
              >
                Save Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
