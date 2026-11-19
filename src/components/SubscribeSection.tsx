const SUBSTACK_URL = 'https://aprkim.substack.com';

export default function SubscribeSection() {
  return (
    <section
      id="subscribe"
      className="py-16 md:py-20 bg-[var(--color-background)]"
      aria-labelledby="subscribe-heading"
    >
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center p-8 md:p-12 bg-[var(--color-brand-soft)] border border-[var(--color-border)] rounded-[var(--radius)]">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand)] mb-3">
            My newsletter
          </p>
          <h2
            id="subscribe-heading"
            className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] leading-tight mb-4"
          >
            Accent Included
          </h2>
          <p className="text-lg text-[var(--color-muted)] max-w-md mx-auto mb-8">
            Stories told with honesty, humor, and a little accent — what
            I&apos;m building, learning, and figuring out along the way.
          </p>
          <a
            href={`${SUBSTACK_URL}/subscribe`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-brand)] text-white font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity"
          >
            Subscribe for free
            <ArrowIcon />
          </a>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Free on Substack. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
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
      className="ml-2"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
