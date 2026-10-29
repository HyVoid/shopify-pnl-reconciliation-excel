import React from 'react';
import { AppDataState, PlRowComputed } from '../../types';
import { StatusPill, InlineDataBar, InsightBox } from '../common/UIComponents';
import { Calculator, ArrowRightLeft, CopyCheck } from 'lucide-react';

interface Sheet06PlCalculationProps {
  state: AppDataState;
  plRows: PlRowComputed[];
  onUpdateState: (updater: (prev: AppDataState) => AppDataState) => void;
}

export const Sheet06PlCalculation: React.FC<Sheet06PlCalculationProps> = ({
  state,
  plRows,
  onUpdateState
}) => {
  const intlSymbol = state.settings.baseCurrencySymbol;
  const euSymbol = state.settings.euStoreCurrencySymbol;

  // Find max expense for data bars
  const maxIntlExp = Math.max(
    ...plRows.filter(r => r.code.startsWith('EXP-') && r.code !== 'EXP-TOT').map(r => r.intlActual),
    1
  );
  const maxEuExp = Math.max(
    ...plRows.filter(r => r.code.startsWith('EXP-') && r.code !== 'EXP-TOT').map(r => r.euActual),
    1
  );

  const handleUpdateBaseline = (
    store: 'intl' | 'eu',
    code: string,
    value: number
  ) => {
    onUpdateState(prev => {
      const field = store === 'intl' ? 'intlBaseline' : 'euBaseline';
      return {
        ...prev,
        historicalPl: {
          ...prev.historicalPl,
          [field]: {
            ...prev.historicalPl[field],
            [code]: value
          }
        }
      };
    });
  };

  const handleSolidifyBaseline = () => {
    if (confirm('Solidify current month actuals into last month baseline for future MoM comparison?')) {
      onUpdateState(prev => {
        const newIntlBase: Record<string, number> = {};
        const newEuBase: Record<string, number> = {};

        plRows.forEach(r => {
          newIntlBase[r.code] = r.intlActual;
          newEuBase[r.code] = r.euActual;
        });

        return {
          ...prev,
          historicalPl: {
            intlBaseline: newIntlBase,
            euBaseline: newEuBase
          }
        };
      });
    }
  };

  const formatNumber = (
    val: number,
    code: string,
    symbol: string
  ) => {
    if (code === 'GM-01' || code === 'NPM-01') {
      return `${(val * 100).toFixed(1)}%`;
    }
    if (code === 'ORD-01') {
      return val.toLocaleString('en-US');
    }
    return `${symbol}${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatDiffMoney = (
    diff: number,
    code: string,
    symbol: string
  ) => {
    if (code === 'GM-01' || code === 'NPM-01') {
      const sign = diff > 0 ? '+' : '';
      return `${sign}${(diff * 100).toFixed(1)}% pts`;
    }
    if (code === 'ORD-01') {
      const sign = diff > 0 ? '+' : '';
      return `${sign}${diff.toLocaleString('en-US')}`;
    }
    const sign = diff > 0 ? '+' : diff < 0 ? '-' : '';
    return `${sign}${symbol}${Math.abs(diff).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatMoMPct = (pct: number | null, isMargin: boolean) => {
    if (pct === null) return 'N/A';
    const sign = pct > 0 ? '+' : '';
    return `${sign}${(pct * 100).toFixed(1)}%`;
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--color-muted)]">
            Sheet 06 / Dual-Store P&L Calculation
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
            Independent Dual-Store P&L Matrix
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Parallel financial statement comparing International Store ({state.settings.intlStoreCurrency}) and European Store ({state.settings.euStoreCurrency}), tracking gross margin, operating overhead, net profit, and profit per order.
          </p>
        </div>

        <button
          onClick={handleSolidifyBaseline}
          className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          title="Save current month as new historical comparison baseline"
        >
          <CopyCheck className="w-4 h-4 text-[var(--color-accent)]" />
          <span>Copy Actuals to Baseline</span>
        </button>
      </div>

      <InsightBox title="Operating Net Profit Formula">
        Net Profit = Confirmed Net Revenue - Cost of Goods Sold (COGS) - Total Operating Expenses.
        Both stores are accounted for in their native operating currencies to avoid deceptive FX swing distortions on trading profitability.
      </InsightBox>

      {/* Side-by-Side Dual-Store P&L Table */}
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              {/* Super Header */}
              <tr className="bg-[var(--color-primary)] text-white text-[11px] uppercase tracking-wider font-semibold border-b border-slate-700">
                <th colSpan={2} className="py-2.5 px-3 bg-[var(--color-primary)]">
                  P&L Line Structure ({state.settings.currentMonth})
                </th>
                <th colSpan={4} className="py-2.5 px-3 text-center bg-[#072438] border-l border-slate-700">
                  International Store ({state.settings.intlStoreCurrency} - {intlSymbol})
                </th>
                <th colSpan={4} className="py-2.5 px-3 text-center bg-[#0a2e46] border-l border-slate-700">
                  European Store ({state.settings.euStoreCurrency} - {euSymbol})
                </th>
              </tr>
              {/* Sub Header */}
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label select-none">
                <th className="py-2.5 px-3 w-20">Code</th>
                <th className="py-2.5 px-3 min-w-[220px]">Account Line Item</th>

                {/* Intl Columns */}
                <th className="py-2.5 px-3 text-right border-l border-[var(--color-border)]">Baseline ({state.settings.comparisonMonth})</th>
                <th className="py-2.5 px-3 text-right">Actual ({state.settings.currentMonth})</th>
                <th className="py-2.5 px-3 text-right min-w-[130px]">MoM Var.</th>
                <th className="py-2.5 px-3">Status</th>

                {/* EU Columns */}
                <th className="py-2.5 px-3 text-right border-l border-[var(--color-border)]">Baseline ({state.settings.comparisonMonth})</th>
                <th className="py-2.5 px-3 text-right">Actual ({state.settings.currentMonth})</th>
                <th className="py-2.5 px-3 text-right min-w-[130px]">MoM Var.</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {plRows.map((row, idx) => {
                const isMajor =
                  row.code === 'REV-01' ||
                  row.code === 'GP-01' ||
                  row.code === 'EXP-TOT' ||
                  row.code === 'NP-01';

                const isMargin = row.code === 'GM-01' || row.code === 'NPM-01';
                const isExpense = row.code.startsWith('EXP-') && row.code !== 'EXP-TOT';

                const rowBg = isMajor
                  ? 'bg-slate-50 font-semibold'
                  : idx % 2 === 0
                  ? 'bg-[var(--color-surface)]'
                  : 'bg-[var(--color-bg)]/40';

                return (
                  <tr key={row.code} className={`transition-colors ${rowBg} hover:bg-[#F5F5F2]`}>
                    {/* Line Code */}
                    <td className="py-2.5 px-3 font-mono text-[11px] text-[var(--color-muted)] font-medium">
                      {row.code}
                    </td>

                    {/* Account Label */}
                    <td className={`py-2.5 px-3 text-[13px] ${isMajor ? 'text-[var(--color-primary)] font-bold' : isExpense ? 'text-[var(--color-body-text)] pl-6' : 'text-[var(--color-primary)] font-medium'}`}>
                      {row.name}
                    </td>

                    {/* INTL: Baseline (Editable) */}
                    <td className="py-2.5 px-3 text-right border-l border-[var(--color-border)]">
                      <input
                        type="number"
                        step={isMargin ? '0.0001' : '0.01'}
                        value={row.intlBaseline}
                        onChange={e => handleUpdateBaseline('intl', row.code, parseFloat(e.target.value) || 0)}
                        className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-24"
                      />
                    </td>

                    {/* INTL: Actual */}
                    <td className={`py-2.5 px-3 text-right font-mono text-[13px] tabular-nums ${isMajor ? 'font-bold text-[var(--color-primary)]' : 'text-[var(--color-primary)]'}`}>
                      {isExpense && (
                        <div className="flex items-center justify-end gap-2">
                          <InlineDataBar value={row.intlActual} max={maxIntlExp} width="40px" />
                          <span>{formatNumber(row.intlActual, row.code, intlSymbol)}</span>
                        </div>
                      )}
                      {!isExpense && formatNumber(row.intlActual, row.code, intlSymbol)}
                    </td>

                    {/* INTL: MoM Var */}
                    <td className="py-2.5 px-3 text-right font-mono text-[12px] tabular-nums text-[var(--color-muted)]">
                      <div className="flex flex-col items-end">
                        <span className="font-medium text-[var(--color-primary)]">
                          {formatDiffMoney(row.intlMoMAmount, row.code, intlSymbol)}
                        </span>
                        {!isMargin && (
                          <span className="text-[10px] text-[var(--color-muted)]">
                            {formatMoMPct(row.intlMoMPct, isMargin)}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* INTL: Anomaly Status */}
                    <td className="py-2.5 px-3">
                      <StatusPill status={row.intlAnomaly} />
                    </td>

                    {/* EU: Baseline (Editable) */}
                    <td className="py-2.5 px-3 text-right border-l border-[var(--color-border)]">
                      <input
                        type="number"
                        step={isMargin ? '0.0001' : '0.01'}
                        value={row.euBaseline}
                        onChange={e => handleUpdateBaseline('eu', row.code, parseFloat(e.target.value) || 0)}
                        className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-24"
                      />
                    </td>

                    {/* EU: Actual */}
                    <td className={`py-2.5 px-3 text-right font-mono text-[13px] tabular-nums ${isMajor ? 'font-bold text-[var(--color-primary)]' : 'text-[var(--color-primary)]'}`}>
                      {isExpense && (
                        <div className="flex items-center justify-end gap-2">
                          <InlineDataBar value={row.euActual} max={maxEuExp} width="40px" />
                          <span>{formatNumber(row.euActual, row.code, euSymbol)}</span>
                        </div>
                      )}
                      {!isExpense && formatNumber(row.euActual, row.code, euSymbol)}
                    </td>

                    {/* EU: MoM Var */}
                    <td className="py-2.5 px-3 text-right font-mono text-[12px] tabular-nums text-[var(--color-muted)]">
                      <div className="flex flex-col items-end">
                        <span className="font-medium text-[var(--color-primary)]">
                          {formatDiffMoney(row.euMoMAmount, row.code, euSymbol)}
                        </span>
                        {!isMargin && (
                          <span className="text-[10px] text-[var(--color-muted)]">
                            {formatMoMPct(row.euMoMPct, isMargin)}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* EU: Anomaly Status */}
                    <td className="py-2.5 px-3">
                      <StatusPill status={row.euAnomaly} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
