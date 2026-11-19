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
    soft: 'bg-[var(--color-brand-soft)]',
    brand: 'bg-[var(--color-brand-soft)]',
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${bgClasses[background]} ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        {title && (
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-3">
              <h2
                id={`${id}-heading`}
                className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)]"
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
