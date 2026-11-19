import { ReactNode } from 'react';

interface HomeSectionProps {
  id?: string;
  en: string;
  ko: string;
  children: ReactNode;
}

/** A homepage section with the small uppercase eyebrow heading from the design. */
export default function HomeSection({ id, en, ko, children }: HomeSectionProps) {
  return (
    <section id={id} className="pt-[72px] scroll-mt-6">
      <h2 className="mb-5 text-[13px] font-bold uppercase tracking-[.1em] text-muted">
        <span className="en">{en}</span>
        <span className="ko tracking-[.04em]">{ko}</span>
      </h2>
      {children}
    </section>
  );
}
