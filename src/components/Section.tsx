'use client';

import { useState, ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'soft' | 'brand';
}

function LinkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
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

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'default',
}: SectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const bgClasses = {
    default: 'bg-[var(--color-background)]',
    soft: 'bg-[var(--color-soft-surface)]',
    brand: 'bg-[var(--color-brand-soft)]',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        {title && (
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-3">
              <h2
                id={`${id}-heading`}
                className="text-2xl md:text-3xl font-semibold text-[var(--color-brand)]"
              >
                {title}
              </h2>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-brand)] hover:bg-[var(--color-soft-surface)] transition-colors"
                aria-label={copied ? 'Link copied' : 'Copy link to section'}
                title={copied ? 'Link copied!' : 'Copy link to section'}
              >
                {copied ? <CheckIcon /> : <LinkIcon />}
              </button>
            </div>
            {subtitle && (
              <p className="mt-3 text-lg text-[var(--color-muted)] max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
