import React, { useRef, useState } from 'react';
import {
  FileSpreadsheet,
  Upload,
  Download,
  RotateCcw,
  CheckCircle2,
  FolderInput,
  Sliders,
  ShoppingBag,
  Layers,
  Receipt,
  Building2,
  Calculator,
  FileText,
  Menu,
  X,
  HardDrive
} from 'lucide-react';

export type TabKey =
  | '01_control'
  | '02_sales'
  | '03_cost'
  | '04_expenses'
  | '05_bank_recon'
  | '06_pl_calc'
  | '07_monthly_review';

interface SidebarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  lastSaved: string | null;
  onExportBackup: () => void;
  onImportBackup: (file: File) => void;
  onOpenCsvModal: () => void;
  onResetData: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  lastSaved,
  onExportBackup,
  onImportBackup,
  onOpenCsvModal,
  onResetData
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tabs: {
    key: TabKey;
    label: string;
    sheetId: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
  }[] = [
    {
      key: '01_control',
      sheetId: '01',
      label: 'Control & Settings',
      icon: Sliders,
      description: 'FX & Tolerance Parameters'
    },
    {
      key: '02_sales',
      sheetId: '02',
      label: 'Sales Import',
      icon: ShoppingBag,
      description: 'Order Totals & Product CSV'
    },
    {
      key: '03_cost',
      sheetId: '03',
      label: 'Cost Master (BOM)',
      icon: Layers,
      description: 'Bundle Rollups & Unit Costs'
    },
    {
      key: '04_expenses',
      sheetId: '04',
      label: 'Expenses & FX',
      icon: Receipt,
      description: 'Multi-Currency 8 Categories'
    },
    {
      key: '05_bank_recon',
      sheetId: '05',
      label: 'Bank Recon Engine',
      icon: Building2,
      description: 'Wise & Bank Stream Matching'
    },
    {
      key: '06_pl_calc',
      sheetId: '06',
      label: 'Dual-Store P&L',
      icon: Calculator,
      description: 'Side-by-Side Margin Matrix'
    },
    {
      key: '07_monthly_review',
      sheetId: '07',
      label: 'Monthly Review',
      icon: FileText,
      description: 'Executive Brief & Discrepancies'
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImportBackup(file);
      e.target.value = '';
    }
  };

  const handleSelectTab = (key: TabKey) => {
    onTabChange(key);
    setMobileOpen(false);
  };

  // Sidebar content component (used for both desktop and mobile drawer)
  const sidebarContent = (
    <div className="h-full flex flex-col justify-between select-none">
      {/* Top Branding Section */}
      <div>
        <div className="p-5 pb-4 border-b border-[var(--nav-border)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-xs">
                <FileSpreadsheet className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-[18px] tracking-tight text-[var(--color-primary)] leading-none">
                    Dual-Store P&L
                  </span>
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-[var(--color-accent)] text-white tracking-widest font-semibold">
                    SaaS
                  </span>
                </div>
                <div className="text-[11px] text-[var(--color-muted)] mt-1 font-medium">
                  Shopify & Wise Engine
                </div>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 rounded-md text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation List */}
        <nav className="p-3 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            Workbook Sheets
          </div>
          {tabs.map(tab => {
            const isActive = activeTab === tab.key;
            const IconComponent = tab.icon;

            return (
              <button
                key={tab.key}
                onClick={() => handleSelectTab(tab.key)}
                className={`w-full text-left px-3 py-2.5 rounded-[var(--radius-sm)] flex items-center gap-3 transition-all cursor-pointer group ${
                  isActive
                    ? 'bg-[var(--insight-bg)] text-[var(--color-primary)] font-semibold border-l-[3px] border-[var(--color-accent)] shadow-xs'
                    : 'text-[var(--nav-text-inactive)] hover:bg-[#F5F5F2] hover:text-[var(--nav-text)] border-l-[3px] border-transparent'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors shrink-0 ${
                    isActive
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'bg-transparent text-[var(--color-muted)] group-hover:text-[var(--color-primary)]'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] truncate">{tab.label}</span>
                    <span className="text-[10px] font-mono text-[var(--color-muted)] opacity-70">
                      {tab.sheetId}
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--color-muted)] truncate font-normal">
                    {tab.description}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions & Storage Info */}
      <div className="p-4 border-t border-[var(--nav-border)] space-y-3 bg-white">
        {/* Last Saved Status */}
        {lastSaved && (
          <div className="flex items-center justify-between px-2.5 py-1.5 text-[11px] text-[var(--color-muted)] font-mono bg-[#F5F5F2] rounded-md border border-[var(--color-border)]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#008738]" />
              <span>Saved</span>
            </div>
            <span>{lastSaved}</span>
          </div>
        )}

        {/* Action Button Grid */}
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={onOpenCsvModal}
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-[var(--radius-sm)] text-[11.5px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] transition-all cursor-pointer active:scale-97 shadow-xs"
            title="Import Shopify Sales, Expenses, or Bank statement CSV"
          >
            <Upload className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Bulk CSV</span>
          </button>

          <button
            onClick={onExportBackup}
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-[var(--radius-sm)] text-[11.5px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] transition-all cursor-pointer active:scale-97 shadow-xs"
            title="Export full workspace JSON backup"
          >
            <Download className="w-3.5 h-3.5 text-[var(--color-muted)]" />
            <span>Export</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-[var(--radius-sm)] text-[11.5px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] transition-all cursor-pointer active:scale-97 shadow-xs"
            title="Restore workspace from JSON backup"
          >
            <FolderInput className="w-3.5 h-3.5 text-[var(--color-muted)]" />
            <span>Import</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            onClick={onResetData}
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-[var(--radius-sm)] text-[11.5px] font-medium text-[var(--color-negative)] bg-red-50 hover:bg-red-100 border border-red-200 transition-all cursor-pointer active:scale-97 shadow-xs"
            title="Reset to clean baseline dataset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Local Storage Indicator */}
        <div className="flex items-center gap-1.5 text-[10.5px] text-[var(--color-muted)] font-mono px-1">
          <HardDrive className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
          <span className="truncate">Local browser storage active</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header (only visible on mobile/tablet below lg) */}
      <div className="lg:hidden sticky top-0 z-40 h-14 bg-white border-b border-[var(--nav-border)] shadow-[var(--shadow-nav)] px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-1.5 rounded-md text-[var(--color-primary)] hover:bg-[#F5F5F2] transition-colors"
            aria-label="Open navigation sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-heading font-bold text-[17px] text-[var(--color-primary)]">
            Shopify Dual-Store P&L
          </span>
        </div>

        {lastSaved && (
          <div className="flex items-center gap-1 text-[11px] text-[var(--color-muted)] font-mono bg-[#F5F5F2] px-2 py-0.5 rounded-full border border-[var(--color-border)]">
            <CheckCircle2 className="w-3 h-3 text-[#008738]" />
            <span>{lastSaved}</span>
          </div>
        )}
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Mobile Off-Canvas Drawer */}
      <aside
        className={`lg:hidden fixed top-0 bottom-0 left-0 z-50 w-72 bg-[var(--nav-bg)] shadow-[var(--shadow-lg)] transform transition-transform duration-250 ease-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop Sticky Left Sidebar */}
      <aside className="hidden lg:block w-64 h-screen sticky top-0 shrink-0 bg-[var(--nav-bg)] border-r border-[var(--nav-border)] z-30">
        {sidebarContent}
      </aside>
    </>
  );
};
