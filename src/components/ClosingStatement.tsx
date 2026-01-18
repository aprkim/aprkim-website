export default function ClosingStatement() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-background)]">
      <div className="mx-auto max-w-[980px] px-5 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] leading-tight mb-4 max-w-2xl mx-auto">
          If something here <span className="italic">stayed with you</span>, I&apos;d love to hear from you.
        </h2>
        <p className="text-lg text-[var(--color-muted)] max-w-xl mx-auto mb-10">
          Just a conversation.
        </p>
        <a
          href="mailto:aprkim@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-[var(--color-brand)] text-white font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity"
        >
          Let's talk
          <ArrowIcon />
        </a>
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
