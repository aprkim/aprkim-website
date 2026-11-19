import Section from './Section';

const EMAIL = 'hello@aprkim.com';

export default function OpportunitiesGrid() {
  return (
    <Section id="opportunities" title="Work with me" background="default">
      <div className="-mt-4 max-w-2xl">
        <p className="text-lg leading-relaxed text-[var(--color-muted)] mb-8">
          I work best in early, messy stages — new ideas around learning,
          language, and human connection, or product and UX decisions that need
          a thoughtful outside view. If that&apos;s where you are, I&apos;d love
          to hear about it.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-brand)] text-white font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
          <span className="text-sm text-[var(--color-muted)]">{EMAIL}</span>
        </div>
      </div>
    </Section>
  );
}
