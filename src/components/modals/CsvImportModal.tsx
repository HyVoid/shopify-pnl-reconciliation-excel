import React, { useState } from 'react';
import {
  X,
  Upload,
  Download,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import {
  generateSampleBankCsv,
  generateSampleExpenseCsv,
  generateSampleSalesCsv,
  parseBankCsv,
  parseExpenseCsv,
  parseSalesCsv
} from '../../utils/csvHelper';
import { BankTxnItem, ExpenseItem, SalesLineItem } from '../../types';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportSales: (items: SalesLineItem[], mode: 'append' | 'replace') => void;
  onImportExpenses: (items: ExpenseItem[], mode: 'append' | 'replace') => void;
  onImportBank: (items: BankTxnItem[], mode: 'append' | 'replace') => void;
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({
  isOpen,
  onClose,
  onImportSales,
  onImportExpenses,
  onImportBank
}) => {
  if (!isOpen) return null;

  const [activeType, setActiveType] = useState<'sales' | 'expenses' | 'bank'>('sales');
  const [csvText, setCsvText] = useState('');
  const [importMode, setImportMode] = useState<'append' | 'replace'>('append');
  const [previewError, setPreviewError] = useState<string | null>(null);

  const handleDownloadSample = () => {
    let content = '';
    let filename = '';
    if (activeType === 'sales') {
      content = generateSampleSalesCsv();
      filename = 'Shopify_Sales_Sample_Template.csv';
    } else if (activeType === 'expenses') {
      content = generateSampleExpenseCsv();
      filename = 'Operating_Expenses_Sample_Template.csv';
    } else {
      content = generateSampleBankCsv();
      filename = 'Bank_Wise_Statements_Sample_Template.csv';
    }

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        setCsvText((event.target?.result as string) || '');
      };
      reader.readAsText(file);
      e.target.value = '';
    }
  };

  const handleExecuteImport = () => {
    setPreviewError(null);
    if (!csvText.trim()) {
      setPreviewError('Please paste CSV text or upload a CSV file.');
      return;
    }

    try {
      if (activeType === 'sales') {
        const parsed = parseSalesCsv(csvText);
        if (parsed.length === 0) {
          setPreviewError('Could not parse any valid sales rows. Please check format.');
          return;
        }
        onImportSales(parsed, importMode);
      } else if (activeType === 'expenses') {
        const parsed = parseExpenseCsv(csvText);
        if (parsed.length === 0) {
          setPreviewError('Could not parse any valid expense rows. Please check format.');
          return;
        }
        onImportExpenses(parsed, importMode);
      } else {
        const parsed = parseBankCsv(csvText);
        if (parsed.length === 0) {
          setPreviewError('Could not parse any valid bank transaction rows. Please check format.');
          return;
        }
        onImportBank(parsed, importMode);
      }

      onClose();
    } catch (err: any) {
      setPreviewError(err?.message || 'Error parsing CSV file');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="card-surface p-6 max-w-2xl w-full border border-[var(--color-border)] shadow-[var(--shadow-lg)] space-y-5">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading text-[20px] font-bold text-[var(--color-primary)]">
              Bulk CSV Data Importer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--color-muted)] hover:text-[var(--color-primary)] p-1 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dataset Type Tabs */}
        <div className="flex items-center bg-[#F5F5F2] rounded-[var(--radius-sm)] p-1 border border-[var(--color-border)] text-[12px]">
          <button
            onClick={() => {
              setActiveType('sales');
              setCsvText('');
              setPreviewError(null);
            }}
            className={`flex-1 py-1.5 rounded-[var(--radius-sm)] font-medium cursor-pointer transition-all ${
              activeType === 'sales'
                ? 'bg-white font-semibold text-[var(--color-primary)] shadow-xs'
                : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
            }`}
          >
            02 Shopify Sales CSV
          </button>
          <button
            onClick={() => {
              setActiveType('expenses');
              setCsvText('');
              setPreviewError(null);
            }}
            className={`flex-1 py-1.5 rounded-[var(--radius-sm)] font-medium cursor-pointer transition-all ${
              activeType === 'expenses'
                ? 'bg-white font-semibold text-[var(--color-primary)] shadow-xs'
                : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
            }`}
          >
            04 Operating Expenses CSV
          </button>
          <button
            onClick={() => {
              setActiveType('bank');
              setCsvText('');
              setPreviewError(null);
            }}
            className={`flex-1 py-1.5 rounded-[var(--radius-sm)] font-medium cursor-pointer transition-all ${
              activeType === 'bank'
                ? 'bg-white font-semibold text-[var(--color-primary)] shadow-xs'
                : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
            }`}
          >
            05 Bank & Wise Statement CSV
          </button>
        </div>

        {/* Action Controls: Download Template & File Input */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[12px]">
          <button
            onClick={handleDownloadSample}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[#F5F5F2] hover:bg-[#E8E8E6] text-[var(--color-primary)] font-medium border border-[var(--color-border)] transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Download Sample CSV Template</span>
          </button>

          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-medium shadow-xs transition-colors cursor-pointer">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Upload .CSV File</span>
            <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>

        {/* Text Area for Pasting Raw CSV */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)]">
            Or Paste CSV Text Directly Below:
          </label>
          <textarea
            rows={7}
            value={csvText}
            onChange={e => setCsvText(e.target.value)}
            placeholder={`Paste CSV data here with headers...\nExample:\nRecord ID,Month,Store,SKU,Product Name,Net Qty,Confirmed Net Sales\nSLS-9901,2026-09,International Store,SKU-SERUM-30ML,Botanical Radiance Serum,100,5200.00`}
            className="input-editable w-full p-3 font-mono text-[12px] rounded-[var(--radius-sm)]"
          />
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-4 text-[12px]">
          <span className="font-semibold text-[var(--color-primary)]">Import Mode:</span>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={importMode === 'append'}
              onChange={() => setImportMode('append')}
            />
            <span>Append to existing records</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={importMode === 'replace'}
              onChange={() => setImportMode('replace')}
            />
            <span className="text-[var(--color-negative)] font-medium">Replace current records</span>
          </label>
        </div>

        {/* Error Notification */}
        {previewError && (
          <div className="flex items-center gap-2 p-3 bg-red-50 text-[var(--color-negative)] text-[12px] rounded-[var(--radius-sm)] border border-red-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{previewError}</span>
          </div>
        )}

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-2 pt-3 border-t border-[var(--color-border)]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[12px] font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleExecuteImport}
            className="px-5 py-2 text-[12px] font-semibold bg-[var(--color-accent)] hover:bg-blue-700 text-white rounded-[var(--radius-sm)] shadow-xs transition-colors cursor-pointer active:scale-97"
          >
            Run Import
          </button>
        </div>
      </div>
    </div>
  );
};
