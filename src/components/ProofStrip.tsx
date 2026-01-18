const testimonials = [
  {
    quote:
      'April has an unusual ability to slow a team down in the right moments. She asks the questions everyone avoids—and makes the product better because of it.',
    author: 'Early-stage founder',
    role: '',
  },
  {
    quote:
      'Working with April changed how I think about product decisions. She cares deeply about language, edge cases, and the people behind the screen.',
    author: 'Engineer collaborator',
    role: '',
  },
  {
    quote:
      'April doesn\'t rush to ship. She builds trust first—and that shows in the work.',
    author: 'Product partner',
    role: '',
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--color-brand)] opacity-30"
      aria-hidden="true"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

export default function ProofStrip() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-background)] border-t border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-brand)] mb-3">
            Kind words
          </h2>
          <p className="text-[var(--color-muted)]">
            From people I&apos;ve had the privilege to work with.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="relative p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius)]"
            >
              <div className="absolute top-4 right-4">
                <QuoteIcon />
              </div>
              <p className="text-[var(--color-text)] leading-relaxed mb-6 italic pt-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block font-semibold text-[var(--color-text)]">
                    — {testimonial.author}
                  </span>
                  {testimonial.role && (
                    <span className="text-sm text-[var(--color-muted)]">
                      {testimonial.role}
                    </span>
                  )}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
