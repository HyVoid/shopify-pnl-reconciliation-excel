import React from 'react';

export interface InlineDataBarProps {
  value: number;
  max: number;
  width?: string;
  showText?: boolean;
  text?: string;
}

export const InlineDataBar: React.FC<InlineDataBarProps> = ({
  value,
  max,
  width = '80px',
  showText = false,
  text
}) => {
  const percentage = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div className="flex items-center gap-2" style={{ minWidth: width }}>
      <div
        className="h-2 rounded-full flex-1 overflow-hidden"
        style={{ backgroundColor: 'rgba(5, 28, 44, 0.10)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: 'var(--color-accent)'
          }}
        />
      </div>
      {showText && (
        <span className="text-[11px] text-[var(--color-muted)] font-mono tabular-nums w-8 text-right">
          {text || `${percentage.toFixed(0)}%`}
        </span>
      )}
    </div>
  );
};

export interface StatusPillProps {
  status: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  status,
  onClick,
  interactive = false
}) => {
  const isWarning = status.includes('⚠️') || status.toLowerCase().includes('discrepancy') || status.toLowerCase().includes('missing') || status.toLowerCase().includes('below') || status.toLowerCase().includes('omission') || status.toLowerCase().includes('error');
  const isSuccess = status.includes('✅') || status.toLowerCase().includes('clean') || status.toLowerCase().includes('matches') || status.toLowerCase().includes('normal');

  // Semantic color discipline: red/green ONLY for anomaly / action-required verification states
  let bg = 'rgba(5, 28, 44, 0.05)';
  let text = 'var(--color-primary)';
  let border = 'rgba(5, 28, 44, 0.10)';

  if (isWarning) {
    bg = 'var(--anomaly-bg)';
    text = 'var(--color-negative)';
    border = 'rgba(211, 47, 47, 0.25)';
  } else if (isSuccess) {
    bg = 'rgba(0, 200, 83, 0.08)';
    text = '#008738';
    border = 'rgba(0, 200, 83, 0.25)';
  }

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-medium tracking-wide rounded-full border transition-all ${
        interactive ? 'status-interactive' : ''
      }`}
      style={{
        backgroundColor: bg,
        color: text,
        borderColor: border
      }}
    >
      {status}
    </span>
  );
};

export interface InsightBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const InsightBox: React.FC<InsightBoxProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`insight-block ${className}`}>
      {title && (
        <h4 className="text-[13px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.05em] mb-1.5">
          {title}
        </h4>
      )}
      <div className="text-[13px] leading-relaxed text-[var(--color-body-text)]">
        {children}
      </div>
    </div>
  );
};
