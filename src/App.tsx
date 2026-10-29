import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AppDataState, BankTxnItem, ExpenseItem, GlobalSettings, SalesLineItem } from './types';
import { INITIAL_DATA } from './data/initialData';
import {
  computeAuditHealth,
  computeBankTxns,
  computeBomAndSkuMaster,
  computeExpenses,
  computePlCalculation,
  computeSalesLines,
  generateReviewNarratives
} from './utils/calculations';
import { exportBackupJson } from './utils/csvHelper';
import { Sidebar, TabKey } from './components/Sidebar';
import { Sheet01ControlSettings } from './components/sheets/Sheet01ControlSettings';
import { Sheet02SalesImport } from './components/sheets/Sheet02SalesImport';
import { Sheet03ProductCostMaster } from './components/sheets/Sheet03ProductCostMaster';
import { Sheet04ExpenseFxInput } from './components/sheets/Sheet04ExpenseFxInput';
import { Sheet05BankWiseRecon } from './components/sheets/Sheet05BankWiseRecon';
import { Sheet06PlCalculation } from './components/sheets/Sheet06PlCalculation';
import { Sheet07MonthlyReview } from './components/sheets/Sheet07MonthlyReview';
import { CsvImportModal } from './components/modals/CsvImportModal';
import { ConfirmModal } from './components/modals/ConfirmModal';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'shopify_dual_store_pl_saas_state_v1';

export default function App() {
  // Load initial state from local storage or fallback to INITIAL_DATA
  const [state, setState] = useState<AppDataState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.settings && parsed.salesLines) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading saved state from localStorage:', e);
    }
    return INITIAL_DATA;
  });

  const [activeTab, setActiveTab] = useState<TabKey>('01_control');
  const [showCsvModal, setShowCsvModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [pendingImportFile, setPendingImportFile] = useState<File | null>(null);

  const isInitialMount = useRef(true);

  // Auto-save effect to localStorage with timestamp
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const timer = setTimeout(() => {
      try {
        const timestamp = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        const updatedState = { ...state, lastSaved: timestamp };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedState));
        // Update local state lastSaved without triggering loop
        setState(prev => ({ ...prev, lastSaved: timestamp }));
      } catch (err) {
        console.error('Failed to save state to localStorage:', err);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [
    state.settings,
    state.salesSummaries,
    state.salesLines,
    state.bomList,
    state.skuList,
    state.expenses,
    state.bankTxns,
    state.historicalPl,
    state.reviewNotes
  ]);

  // Real-time calculation pipeline
  const { computedSkus, computedBoms } = useMemo(() => {
    return computeBomAndSkuMaster(
      state.skuList,
      state.bomList,
      state.salesLines,
      state.settings.intlToEuRate,
      state.settings.currentMonth
    );
  }, [
    state.skuList,
    state.bomList,
    state.salesLines,
    state.settings.intlToEuRate,
    state.settings.currentMonth
  ]);

  const computedSales = useMemo(() => {
    return computeSalesLines(
      state.salesLines,
      computedSkus,
      state.settings.intlStoreCurrency,
      state.settings.euStoreCurrency
    );
  }, [state.salesLines, computedSkus, state.settings.intlStoreCurrency, state.settings.euStoreCurrency]);

  const computedExpenses = useMemo(() => {
    return computeExpenses(
      state.expenses,
      state.settings.fxRates,
      state.settings.intlToEuRate,
      state.settings.sharedExpIntlShare,
      state.settings.sharedExpEuShare,
      state.bankTxns,
      state.settings.expenseCategories.map(c => c.name)
    );
  }, [
    state.expenses,
    state.settings.fxRates,
    state.settings.intlToEuRate,
    state.settings.sharedExpIntlShare,
    state.settings.sharedExpEuShare,
    state.bankTxns,
    state.settings.expenseCategories
  ]);

  const computedBankTxns = useMemo(() => {
    return computeBankTxns(
      state.bankTxns,
      computedExpenses,
      state.settings.fxRates,
      state.settings.reconTolerance
    );
  }, [state.bankTxns, computedExpenses, state.settings.fxRates, state.settings.reconTolerance]);

  const health = useMemo(() => {
    return computeAuditHealth(
      computedSales,
      computedSkus,
      computedExpenses,
      computedBankTxns
    );
  }, [computedSales, computedSkus, computedExpenses, computedBankTxns]);

  const plRows = useMemo(() => {
    return computePlCalculation(state, computedSales, computedExpenses);
  }, [state, computedSales, computedExpenses]);

  const narratives = useMemo(() => {
    return generateReviewNarratives(state, plRows, health);
  }, [state, plRows, health]);

  // Handlers
  const handleUpdateSettings = (updater: (prev: GlobalSettings) => GlobalSettings) => {
    setState(prev => ({
      ...prev,
      settings: updater(prev.settings)
    }));
  };

  const handleExportBackup = () => {
    exportBackupJson(state);
  };

  const handleImportBackupFile = (file: File) => {
    setPendingImportFile(file);
  };

  const confirmImportBackup = () => {
    if (!pendingImportFile) return;
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.settings && parsed.salesLines) {
          setState({
            ...parsed,
            lastSaved: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          });
          setPendingImportFile(null);
        } else {
          alert('Invalid backup JSON format: Missing core configuration schema.');
        }
      } catch (e: any) {
        alert(`Error importing backup file: ${e.message}`);
      }
    };
    reader.readAsText(pendingImportFile);
  };

  const confirmResetData = () => {
    setState({
      ...INITIAL_DATA,
      lastSaved: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });
    localStorage.removeItem(STORAGE_KEY);
    setShowResetModal(false);
  };

  // CSV Import Handlers
  const handleImportSales = (items: SalesLineItem[], mode: 'append' | 'replace') => {
    setState(prev => ({
      ...prev,
      salesLines: mode === 'replace' ? items : [...items, ...prev.salesLines]
    }));
  };

  const handleImportExpenses = (items: ExpenseItem[], mode: 'append' | 'replace') => {
    setState(prev => ({
      ...prev,
      expenses: mode === 'replace' ? items : [...items, ...prev.expenses]
    }));
  };

  const handleImportBank = (items: BankTxnItem[], mode: 'append' | 'replace') => {
    setState(prev => ({
      ...prev,
      bankTxns: mode === 'replace' ? items : [...items, ...prev.bankTxns]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[var(--color-bg)] text-[var(--color-body-text)]">
      {/* Left Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        lastSaved={state.lastSaved}
        onExportBackup={handleExportBackup}
        onImportBackup={handleImportBackupFile}
        onOpenCsvModal={() => setShowCsvModal(true)}
        onResetData={() => setShowResetModal(true)}
      />

      {/* Main Content Area Container */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-10 py-8">
          <div key={activeTab} className="animate-fade-up">
          {activeTab === '01_control' && (
            <Sheet01ControlSettings
              settings={state.settings}
              health={health}
              onUpdateSettings={handleUpdateSettings}
              onNavigateToTab={setActiveTab}
            />
          )}

          {activeTab === '02_sales' && (
            <Sheet02SalesImport
              state={state}
              computedSales={computedSales}
              onUpdateState={setState}
              onOpenCsvModal={() => setShowCsvModal(true)}
            />
          )}

          {activeTab === '03_cost' && (
            <Sheet03ProductCostMaster
              state={state}
              computedSkus={computedSkus}
              computedBoms={computedBoms}
              onUpdateState={setState}
            />
          )}

          {activeTab === '04_expenses' && (
            <Sheet04ExpenseFxInput
              state={state}
              computedExpenses={computedExpenses}
              onUpdateState={setState}
              onOpenCsvModal={() => setShowCsvModal(true)}
            />
          )}

          {activeTab === '05_bank_recon' && (
            <Sheet05BankWiseRecon
              state={state}
              computedBankTxns={computedBankTxns}
              computedExpenses={computedExpenses}
              onUpdateState={setState}
              onOpenCsvModal={() => setShowCsvModal(true)}
            />
          )}

          {activeTab === '06_pl_calc' && (
            <Sheet06PlCalculation
              state={state}
              plRows={plRows}
              onUpdateState={setState}
            />
          )}

          {activeTab === '07_monthly_review' && (
            <Sheet07MonthlyReview
              state={state}
              plRows={plRows}
              health={health}
              computedBankTxns={computedBankTxns}
              narratives={narratives}
              onUpdateState={setState}
            />
          )}
        </div>
      </main>

      {/* Footer with English privacy and local storage security notice */}
      <Footer />
      </div>

      {/* Bulk CSV Modal */}
      <CsvImportModal
        isOpen={showCsvModal}
        onClose={() => setShowCsvModal(false)}
        onImportSales={handleImportSales}
        onImportExpenses={handleImportExpenses}
        onImportBank={handleImportBank}
      />

      {/* Reset Data Confirmation Modal */}
      <ConfirmModal
        isOpen={showResetModal}
        title="Reset to Initial Baseline Dataset"
        message="Are you sure you want to reset all sheets, BOM relationships, expense allocations, and reconciliation states back to the original demo baseline? Any unsaved custom records will be replaced."
        confirmLabel="Reset Data"
        isDestructive={true}
        onConfirm={confirmResetData}
        onCancel={() => setShowResetModal(false)}
      />

      {/* Restore JSON Backup Confirmation Modal */}
      <ConfirmModal
        isOpen={!!pendingImportFile}
        title="Restore Workspace From Backup"
        message={`Are you sure you want to load backup file "${pendingImportFile?.name}"? This will overwrite your current workspace with the saved backup state.`}
        confirmLabel="Restore Backup"
        isDestructive={false}
        onConfirm={confirmImportBackup}
        onCancel={() => setPendingImportFile(null)}
      />
    </div>
  );
}
