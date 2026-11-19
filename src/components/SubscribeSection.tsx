const SUBSTACK_URL = 'https://aprkim.substack.com';

export default function SubscribeSection() {
  return (
    <section
      id="subscribe"
      className="py-20 md:py-32 bg-[var(--color-background)]"
      aria-labelledby="subscribe-heading"
    >
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <div className="text-center mb-10">
          <h2
            id="subscribe-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] leading-tight mb-4 max-w-2xl mx-auto"
          >
            If something here <span className="italic">stayed with you</span>,
            follow along.
          </h2>
          <p className="text-lg text-[var(--color-muted)] max-w-xl mx-auto">
            What I&apos;m building, what&apos;s working, what isn&apos;t —
            straight to your inbox. Free, no spam.
          </p>
        </div>

        <div className="max-w-[480px] mx-auto">
          <iframe
            src={`${SUBSTACK_URL}/embed`}
            title="Subscribe to April Kim on Substack"
            width="480"
            height="320"
            loading="lazy"
            className="w-full h-[320px] rounded-[var(--radius)] border border-[var(--color-border)] bg-white"
          />
          <p className="mt-4 text-center text-sm text-[var(--color-muted)]">
            Or{' '}
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-brand)] underline hover:no-underline"
            >
              read past posts on Substack
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
