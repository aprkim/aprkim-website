'use client';

import { useState, ReactNode } from 'react';

interface EmailCardProps {
  email: string;
  icon: ReactNode;
}

export default function EmailCard({ email, icon }: EmailCardProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable: fall back to opening the mail app.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Copy email address ${email}`}
      className="group card-hover flex items-center gap-4 p-5 w-full text-left bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius)]"
    >
      <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--color-soft-surface)] flex items-center justify-center text-[var(--color-text)] group-hover:bg-[var(--color-brand-soft)] group-hover:text-[var(--color-brand)] transition-colors flex-shrink-0">
        {icon}
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors">
          Email
        </h3>
        <p
          aria-live="polite"
          className={`text-sm leading-snug break-words ${
            copied
              ? 'text-[var(--color-success-text)] font-medium'
              : 'text-[var(--color-muted)]'
          }`}
        >
          {copied ? 'Copied to clipboard!' : email}
        </p>
      </div>
      <div
        className={`flex-shrink-0 transition-colors ${
          copied
            ? 'text-[var(--color-success-text)]'
            : 'text-[var(--color-muted)] group-hover:text-[var(--color-brand)]'
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </div>
    </button>
  );
}

function CopyIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
