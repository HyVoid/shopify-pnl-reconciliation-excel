import React, { useState } from 'react';
import { AppDataState, PlRowComputed, AuditHealthSummary, BankTxnItem } from '../../types';
import { ComputedBankTxn } from '../../utils/calculations';
import { StatusPill, InsightBox } from '../common/UIComponents';
import {
  FileText,
  Copy,
  Check,
  TrendingUp,
  AlertTriangle,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

interface Sheet07MonthlyReviewProps {
  state: AppDataState;
  plRows: PlRowComputed[];
  health: AuditHealthSummary;
  computedBankTxns: ComputedBankTxn[];
  narratives: Record<number, string>;
  onUpdateState: (updater: (prev: AppDataState) => AppDataState) => void;
}

export const Sheet07MonthlyReview: React.FC<Sheet07MonthlyReviewProps> = ({
  state,
  plRows,
  health,
  computedBankTxns,
  narratives,
  onUpdateState
}) => {
  const [copied, setCopied] = useState(false);

  const intlSymbol = state.settings.baseCurrencySymbol;
  const euSymbol = state.settings.euStoreCurrencySymbol;

  // Pending Bank/Wise Discrepancy Items for the penetration table
  const pendingTxns = computedBankTxns.filter(
    t => t.autoReconStatus.includes('⚠️') || t.duplicateWarning.includes('⚠️')
  );

  const getRow = (code: string) => plRows.find(r => r.code === code);
  const rev = getRow('REV-01');
  const cogs = getRow('COGS-01');
  const gp = getRow('GP-01');
  const gm = getRow('GM-01');
  const expTot = getRow('EXP-TOT');
  const np = getRow('NP-01');
  const npm = getRow('NPM-01');
  const ord = getRow('ORD-01');
  const ppo = getRow('PPO-01');

  const handleUpdateNote = (lineNum: number, text: string) => {
    onUpdateState(prev => ({
      ...prev,
      reviewNotes: {
        ...prev.reviewNotes,
        [lineNum]: text
      }
    }));
  };

  const handleQuickResolveTxn = (
    txnId: string,
    disposition: 'Non-Operating / Internal Transfer (Excluded)' | 'Confirmed Operating Expense'
  ) => {
    onUpdateState(prev => ({
      ...prev,
      bankTxns: prev.bankTxns.map(t =>
        t.txnId === txnId ? { ...t, disposition } : t
      )
    }));
  };

  const handleCopyNarrative = () => {
    const fullText = Object.entries(narratives)
      .map(([num, text]) => {
        const userNote = state.reviewNotes[parseInt(num)];
        return `${text}${userNote ? `\n[Executive Commentary]: ${userNote}` : ''}\n`;
      })
      .join('\n');

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const kpis = [
    {
      title: 'Net Confirmed Revenue',
      intlVal: `$${(rev?.intlActual ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      euVal: `€${(rev?.euActual ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      intlMoM: rev?.intlMoMPct !== null ? `${((rev?.intlMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A',
      euMoM: rev?.euMoMPct !== null ? `${((rev?.euMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A'
    },
    {
      title: 'Gross Margin %',
      intlVal: `${((gm?.intlActual ?? 0) * 100).toFixed(1)}%`,
      euVal: `${((gm?.euActual ?? 0) * 100).toFixed(1)}%`,
      intlMoM: `${((gm?.intlMoMAmount ?? 0) * 100).toFixed(1)}% pts`,
      euMoM: `${((gm?.euMoMAmount ?? 0) * 100).toFixed(1)}% pts`
    },
    {
      title: 'Operating Net Profit',
      intlVal: `$${(np?.intlActual ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      euVal: `€${(np?.euActual ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      intlMoM: np?.intlMoMPct !== null ? `${((np?.intlMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A',
      euMoM: np?.euMoMPct !== null ? `${((np?.euMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A'
    },
    {
      title: 'Net Profit Margin %',
      intlVal: `${((npm?.intlActual ?? 0) * 100).toFixed(1)}%`,
      euVal: `${((npm?.euActual ?? 0) * 100).toFixed(1)}%`,
      intlMoM: `${((npm?.intlMoMAmount ?? 0) * 100).toFixed(1)}% pts`,
      euMoM: `${((npm?.euMoMAmount ?? 0) * 100).toFixed(1)}% pts`
    },
    {
      title: 'Total Effective Orders',
      intlVal: (ord?.intlActual ?? 0).toLocaleString('en-US'),
      euVal: (ord?.euActual ?? 0).toLocaleString('en-US'),
      intlMoM: ord?.intlMoMPct !== null ? `${((ord?.intlMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A',
      euMoM: ord?.euMoMPct !== null ? `${((ord?.euMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A'
    },
    {
      title: 'Profit Per Order (PPO)',
      intlVal: `$${(ppo?.intlActual ?? 0).toFixed(2)}`,
      euVal: `€${(ppo?.euActual ?? 0).toFixed(2)}`,
      intlMoM: ppo?.intlMoMPct !== null ? `${((ppo?.intlMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A',
      euMoM: ppo?.euMoMPct !== null ? `${((ppo?.euMoMPct ?? 0) * 100).toFixed(1)}%` : 'N/A'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--color-muted)]">
            Sheet 07 / Monthly Executive Review
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
            Executive Performance Brief & Exception Review
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Synthesized management dashboard featuring hero KPI cards, an auto-generated 8-line narrative review draft, and real-time bank discrepancy resolution.
          </p>
        </div>

        <button
          onClick={handleCopyNarrative}
          className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer active:scale-97"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[var(--color-accent)]" />}
          <span>{copied ? 'Copied Narrative!' : 'Copy 8-Line Review Draft'}</span>
        </button>
      </div>

      {/* Hero KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpis.map((k, i) => (
          <div key={i} className="card-surface p-5">
            <span className="text-[11px] uppercase tracking-label text-[var(--color-muted)] font-semibold">
              {k.title}
            </span>

            <div className="mt-3 grid grid-cols-2 gap-4 divide-x divide-[var(--color-border)]">
              <div>
                <span className="text-[10px] font-mono text-[var(--color-muted)]">Intl ($)</span>
                <div className="font-heading text-[24px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
                  {k.intlVal}
                </div>
                {/* Trend text uses muted color direction-neutral discipline */}
                <div className="text-[11px] text-[var(--color-muted)] mt-0.5 font-mono">
                  MoM: {k.intlMoM}
                </div>
              </div>

              <div className="pl-4">
                <span className="text-[10px] font-mono text-[var(--color-muted)]">EU (€)</span>
                <div className="font-heading text-[24px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
                  {k.euVal}
                </div>
                {/* Trend text uses muted color direction-neutral discipline */}
                <div className="text-[11px] text-[var(--color-muted)] mt-0.5 font-mono">
                  MoM: {k.euMoM}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 8-Line Structured Monthly Narrative Review */}
      <div className="card-surface p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[var(--color-accent)]" />
            <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)] tracking-heading">
              8-Line Structured Monthly Review Narrative
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[var(--color-muted)]">
            Auto-Generated Financial Draft
          </span>
        </div>

        <p className="text-[12px] text-[var(--color-muted)]">
          This 8-line narrative is generated dynamically from the underlying P&L, BOM, and reconciliation calculations. You can augment any row with specific business context in the commentary box on the right.
        </p>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(lineNum => (
            <div
              key={lineNum}
              className="p-4 rounded-[var(--radius-sm)] bg-[#F5F5F2]/50 border border-[var(--color-border)] grid grid-cols-1 lg:grid-cols-12 gap-4"
            >
              {/* Auto Text (8 cols) */}
              <div className="lg:col-span-8 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-[11px] font-mono font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  {lineNum}
                </span>
                <div className="text-[13px] leading-relaxed text-[var(--color-primary)] font-medium">
                  {narratives[lineNum]}
                </div>
              </div>

              {/* Management Note Input (4 cols) */}
              <div className="lg:col-span-4">
                <textarea
                  rows={2}
                  placeholder="Add executive context or note for line..."
                  value={state.reviewNotes[lineNum] || ''}
                  onChange={e => handleUpdateNote(lineNum, e.target.value)}
                  className="input-editable w-full p-2 text-[12px] resize-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Unresolved Bank / Wise Discrepancy Penetration Table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[var(--color-negative)]" />
            <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)] tracking-heading">
              Pending Bank / Wise Discrepancies Penetration Table
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[var(--color-muted)]">
            {pendingTxns.length} Unresolved Action Item{pendingTxns.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="table-container">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label select-none">
                  <th className="py-2.5 px-3">Txn ID</th>
                  <th className="py-2.5 px-3">Channel</th>
                  <th className="py-2.5 px-3">Payee / Description</th>
                  <th className="py-2.5 px-3 text-right">Debit Amount</th>
                  <th className="py-2.5 px-3 text-right">Variance ($)</th>
                  <th className="py-2.5 px-3">Audit State</th>
                  <th className="py-2.5 px-3 text-right">Quick Resolution Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {pendingTxns.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-[var(--color-muted)]">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-[var(--color-primary)]">
                          All statement transactions cleanly reconciled! Zero pending audit discrepancies.
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  pendingTxns.map(t => (
                    <tr key={t.txnId} className="bg-red-50/20 hover:bg-red-50/40 transition-colors">
                      <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">{t.txnId}</td>
                      <td className="py-2 px-3 text-[12px] font-mono text-[var(--color-primary)]">{t.channel}</td>
                      <td className="py-2 px-3 text-[12px] font-medium text-[var(--color-primary)] max-w-[200px] truncate">
                        {t.payeeSummary}
                      </td>
                      <td className="py-2 px-3 text-right font-mono text-[12px]">
                        {t.currency} {t.amount.toFixed(2)}
                      </td>
                      <td className="py-2 px-3 text-right font-mono text-[12px] font-semibold text-[var(--color-negative)]">
                        {t.reconDiffIntl > 0 ? `+$${t.reconDiffIntl.toFixed(2)}` : `-$${Math.abs(t.reconDiffIntl).toFixed(2)}`}
                      </td>
                      <td className="py-2 px-3">
                        <StatusPill status={t.autoReconStatus} />
                      </td>
                      <td className="py-2 px-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() =>
                              handleQuickResolveTxn(t.txnId, 'Non-Operating / Internal Transfer (Excluded)')
                            }
                            className="px-2 py-1 text-[11px] font-medium bg-white hover:bg-slate-50 text-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
                            title="Exclude from P&L as non-operating internal transfer"
                          >
                            Mark as Excluded Non-Op
                          </button>
                          <button
                            onClick={() =>
                              handleQuickResolveTxn(t.txnId, 'Confirmed Operating Expense')
                            }
                            className="px-2 py-1 text-[11px] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
                            title="Confirm as legitimate operating debit"
                          >
                            Confirm Operating
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
