import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDestructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isDestructive = false,
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="card-surface p-6 max-w-md w-full border border-[var(--color-border)] shadow-[var(--shadow-lg)] space-y-4">
        <div className="flex items-start gap-3">
          <div
            className={`p-2 rounded-full shrink-0 ${
              isDestructive ? 'bg-red-50 text-[var(--color-negative)]' : 'bg-blue-50 text-[var(--color-accent)]'
            }`}
          >
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)]">
              {title}
            </h3>
            <p className="text-[13px] text-[var(--color-muted)] mt-1.5 leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-[var(--color-border)]">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-[12px] font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-[12px] font-semibold text-white rounded-[var(--radius-sm)] shadow-xs transition-colors cursor-pointer active:scale-97 ${
              isDestructive ? 'bg-[var(--color-negative)] hover:bg-red-700' : 'bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90'
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
