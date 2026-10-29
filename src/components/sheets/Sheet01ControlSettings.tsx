import React from 'react';
import { GlobalSettings, AuditHealthSummary } from '../../types';
import { StatusPill, InsightBox } from '../common/UIComponents';
import { Sliders, ShieldCheck, RefreshCw } from 'lucide-react';

interface Sheet01ControlSettingsProps {
  settings: GlobalSettings;
  health: AuditHealthSummary;
  onUpdateSettings: (updater: (prev: GlobalSettings) => GlobalSettings) => void;
  onNavigateToTab: (tab: any) => void;
}

export const Sheet01ControlSettings: React.FC<Sheet01ControlSettingsProps> = ({
  settings,
  health,
  onUpdateSettings,
  onNavigateToTab
}) => {
  const handleParamChange = (field: keyof GlobalSettings, value: any) => {
    onUpdateSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFxChange = (index: number, rateToIntl: number) => {
    onUpdateSettings(prev => {
      const newRates = [...prev.fxRates];
      newRates[index] = { ...newRates[index], rateToIntl };
      return { ...prev, fxRates: newRates };
    });
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--color-muted)]">
            Sheet 01 / Control & Settings
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
            Global Control & Parameter Matrix
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Central repository for dual-store currencies, conversion rates, shared expense splits, reconciliation tolerances, and audit health sign-off.
          </p>
        </div>

        {/* Global Health Badge */}
        <div className="card-surface p-4 flex items-center gap-4 border border-[var(--color-border)]">
          <div className={`p-2.5 rounded-full ${health.isAllClean ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-[var(--color-muted)] uppercase tracking-wider">
              Dual-Store P&L Sign-off Status
            </div>
            <div className="mt-0.5">
              <StatusPill status={health.globalStatusText} />
            </div>
          </div>
        </div>
      </div>

      {/* Insight Block */}
      <InsightBox title="Single-Point Control Architecture">
        All downstream calculations across Sales (02), BOM Master (03), Expenses (04), Bank Recon (05), and P&L (06) strictly reference these parameters.
        Editing any exchange rate, allocation ratio, or tolerance here immediately recalculates the entire model in real time without hardcoding.
      </InsightBox>

      {/* Grid: Global Parameters & Health Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Section A: Core Configuration Parameters (7 Cols) */}
        <div className="lg:col-span-7 card-surface p-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[var(--color-accent)]" />
              <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)] tracking-heading">
                Core Engine Parameters
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[var(--color-muted)]">PRM-01 to PRM-12</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label">
                  <th className="py-2.5 px-3">Code</th>
                  <th className="py-2.5 px-3">Parameter Name</th>
                  <th className="py-2.5 px-3 text-right">Value (Editable)</th>
                  <th className="py-2.5 px-3">Scope / Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {/* PRM-01 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-01</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Current Reporting Month</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="text"
                      value={settings.currentMonth}
                      onChange={e => handleParamChange('currentMonth', e.target.value)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-28"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)]">YYYY-MM format</td>
                </tr>

                {/* PRM-02 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-02</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Comparison Baseline Month</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="text"
                      value={settings.comparisonMonth}
                      onChange={e => handleParamChange('comparisonMonth', e.target.value)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-28"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)]">MoM comparison period</td>
                </tr>

                {/* PRM-03 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-03</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Intl Store Currency Symbol</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="text"
                      value={settings.baseCurrencySymbol}
                      onChange={e => handleParamChange('baseCurrencySymbol', e.target.value)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-20"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)]">Default ($)</td>
                </tr>

                {/* PRM-04 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-04</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Intl Store Currency Code</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="text"
                      value={settings.intlStoreCurrency}
                      onChange={e => handleParamChange('intlStoreCurrency', e.target.value)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-20"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)]">Global master code</td>
                </tr>

                {/* PRM-05 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-05</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">EU Store Currency Code</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="text"
                      value={settings.euStoreCurrency}
                      onChange={e => handleParamChange('euStoreCurrency', e.target.value)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-20"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)]">European master code</td>
                </tr>

                {/* PRM-06 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-06</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">EU Store Currency Symbol</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="text"
                      value={settings.euStoreCurrencySymbol}
                      onChange={e => handleParamChange('euStoreCurrencySymbol', e.target.value)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-20"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)]">Symbol (e.g. €)</td>
                </tr>

                {/* PRM-07 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-07</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Intl to EU FX Rate (USD to EUR)</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="number"
                      step="0.0001"
                      value={settings.intlToEuRate}
                      onChange={e => handleParamChange('intlToEuRate', parseFloat(e.target.value) || 0)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-24"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)]">1 USD in EUR</td>
                </tr>

                {/* PRM-08 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-08</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Shared Expense - Intl Share %</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="number"
                      step="0.05"
                      min="0"
                      max="1"
                      value={settings.sharedExpIntlShare}
                      onChange={e => handleParamChange('sharedExpIntlShare', parseFloat(e.target.value) || 0)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-24"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)] font-mono">
                    {(settings.sharedExpIntlShare * 100).toFixed(1)}%
                  </td>
                </tr>

                {/* PRM-09 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-09</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Shared Expense - EU Share %</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="number"
                      step="0.05"
                      min="0"
                      max="1"
                      value={settings.sharedExpEuShare}
                      onChange={e => handleParamChange('sharedExpEuShare', parseFloat(e.target.value) || 0)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-24"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)] font-mono">
                    {(settings.sharedExpEuShare * 100).toFixed(1)}%
                  </td>
                </tr>

                {/* PRM-10 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-10</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Recon Variance Tolerance</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="number"
                      step="1"
                      value={settings.reconTolerance}
                      onChange={e => handleParamChange('reconTolerance', parseFloat(e.target.value) || 0)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-24"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)] font-mono">
                    ±{settings.baseCurrencySymbol}{settings.reconTolerance.toFixed(2)}
                  </td>
                </tr>

                {/* PRM-11 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-11</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">Target Net Profit Margin</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="number"
                      step="0.01"
                      value={settings.targetNetProfitMargin}
                      onChange={e => handleParamChange('targetNetProfitMargin', parseFloat(e.target.value) || 0)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-24"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)] font-mono">
                    {(settings.targetNetProfitMargin * 100).toFixed(1)}% benchmark
                  </td>
                </tr>

                {/* PRM-12 */}
                <tr className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2 px-3 font-mono text-[11px] text-[var(--color-muted)]">PRM-12</td>
                  <td className="py-2 px-3 font-medium text-[var(--color-primary)]">MoM Anomaly Fluctuation Threshold</td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="number"
                      step="0.05"
                      value={settings.momAnomalyThreshold}
                      onChange={e => handleParamChange('momAnomalyThreshold', parseFloat(e.target.value) || 0)}
                      className="input-editable px-2 py-1 text-right text-[12px] font-mono w-24"
                    />
                  </td>
                  <td className="py-2 px-3 text-[11px] text-[var(--color-muted)] font-mono">
                    ±{(settings.momAnomalyThreshold * 100).toFixed(1)}% threshold
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section B: Global Audit & Health Dashboard (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-surface p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[var(--color-accent)]" />
                <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)] tracking-heading">
                  Data Quality & Audit Monitor
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[var(--color-muted)]">Real-time Check</span>
            </div>

            <div className="space-y-3">
              {/* Check 1 */}
              <div
                onClick={() => onNavigateToTab('02_sales')}
                className="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[#F5F5F2]/50 hover:bg-[#F5F5F2] border border-[var(--color-border)] cursor-pointer transition-all"
              >
                <div>
                  <div className="font-medium text-[12.5px] text-[var(--color-primary)]">
                    Sales Data SKU Mapping & Qty
                  </div>
                  <div className="text-[11px] text-[var(--color-muted)]">Sheet 02 Shopify Sales</div>
                </div>
                <div className="text-right">
                  <StatusPill status={health.salesErrors === 0 ? '✅ Clean' : `⚠️ ${health.salesErrors} Issue(s)`} />
                </div>
              </div>

              {/* Check 2 */}
              <div
                onClick={() => onNavigateToTab('03_cost')}
                className="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[#F5F5F2]/50 hover:bg-[#F5F5F2] border border-[var(--color-border)] cursor-pointer transition-all"
              >
                <div>
                  <div className="font-medium text-[12.5px] text-[var(--color-primary)]">
                    BOM Rollup & Missing Unit Costs
                  </div>
                  <div className="text-[11px] text-[var(--color-muted)]">Sheet 03 Product Cost Master</div>
                </div>
                <div className="text-right">
                  <StatusPill status={health.costMasterErrors === 0 ? '✅ Clean' : `⚠️ ${health.costMasterErrors} Issue(s)`} />
                </div>
              </div>

              {/* Check 3 */}
              <div
                onClick={() => onNavigateToTab('04_expenses')}
                className="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[#F5F5F2]/50 hover:bg-[#F5F5F2] border border-[var(--color-border)] cursor-pointer transition-all"
              >
                <div>
                  <div className="font-medium text-[12.5px] text-[var(--color-primary)]">
                    Expense Classification & FX Compliance
                  </div>
                  <div className="text-[11px] text-[var(--color-muted)]">Sheet 04 Expenses & FX</div>
                </div>
                <div className="text-right">
                  <StatusPill status={health.expenseErrors === 0 ? '✅ Clean' : `⚠️ ${health.expenseErrors} Issue(s)`} />
                </div>
              </div>

              {/* Check 4 */}
              <div
                onClick={() => onNavigateToTab('05_bank_recon')}
                className="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[#F5F5F2]/50 hover:bg-[#F5F5F2] border border-[var(--color-border)] cursor-pointer transition-all"
              >
                <div>
                  <div className="font-medium text-[12.5px] text-[var(--color-primary)]">
                    Bank / Wise Unmatched Omissions
                  </div>
                  <div className="text-[11px] text-[var(--color-muted)]">Sheet 05 Bank Recon Engine</div>
                </div>
                <div className="text-right">
                  <StatusPill status={health.bankUnmatchedOmissions === 0 ? '✅ Clean' : `⚠️ ${health.bankUnmatchedOmissions} Unmatched`} />
                </div>
              </div>

              {/* Check 5 */}
              <div
                onClick={() => onNavigateToTab('05_bank_recon')}
                className="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[#F5F5F2]/50 hover:bg-[#F5F5F2] border border-[var(--color-border)] cursor-pointer transition-all"
              >
                <div>
                  <div className="font-medium text-[12.5px] text-[var(--color-primary)]">
                    Recon Variances & Duplicate Flows
                  </div>
                  <div className="text-[11px] text-[var(--color-muted)]">Sheet 05 Bank Recon Engine</div>
                </div>
                <div className="text-right">
                  <StatusPill status={health.bankDiffOrDuplicates === 0 ? '✅ Clean' : `⚠️ ${health.bankDiffOrDuplicates} Diff / Dup`} />
                </div>
              </div>
            </div>
          </div>

          {/* Section C: Multi-Currency FX Rates */}
          <div className="card-surface p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--color-border)]">
              <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)] tracking-heading">
                Multi-Currency FX Rates
              </h3>
              <span className="text-[11px] font-mono text-[var(--color-muted)]">Base: USD</span>
            </div>

            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="border-b border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label">
                  <th className="py-2 px-2">Currency</th>
                  <th className="py-2 px-2 text-right">To Intl (USD)</th>
                  <th className="py-2 px-2 text-right">To EU (EUR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)] font-mono text-[12px]">
                {settings.fxRates.map((fx, idx) => {
                  const rateToEu = Number((fx.rateToIntl * settings.intlToEuRate).toFixed(4));
                  return (
                    <tr key={fx.code} className="hover:bg-[#F5F5F2]/50">
                      <td className="py-2 px-2 font-semibold text-[var(--color-primary)]">{fx.code}</td>
                      <td className="py-2 px-2 text-right">
                        <input
                          type="number"
                          step="0.0001"
                          value={fx.rateToIntl}
                          onChange={e => handleFxChange(idx, parseFloat(e.target.value) || 0)}
                          className="input-editable px-2 py-0.5 text-right w-24 text-[12px]"
                        />
                      </td>
                      <td className="py-2 px-2 text-right text-[var(--color-muted)]">
                        {rateToEu.toFixed(4)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
