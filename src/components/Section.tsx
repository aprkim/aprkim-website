import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'soft' | 'brand';
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'default',
}: SectionProps) {
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
