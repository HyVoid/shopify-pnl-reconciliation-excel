import React from 'react';
import { ShieldCheck, HardDrive } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-[var(--color-border)] select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 text-[12px] text-[var(--color-muted)]">
          <HardDrive className="w-4 h-4 text-[var(--color-accent)]" />
          <span>Shopify Dual-Store P&L & Reconciliation Engine — Client-Side SaaS Edition</span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-muted)] font-mono max-w-xl">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Privacy & Security Note: All data storage is maintained strictly within your browser&apos;s local storage; no user financial data is transmitted to or retained on any server.
          </span>
        </div>
      </div>
    </footer>
  );
};
