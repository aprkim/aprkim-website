import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TinyWins — Living System | April Kim',
  description:
    'A living system of small tools, ideas, and rituals for steady growth. Built in public by April Kim.',
};

function ArrowLeftIcon() {
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
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function StatusPill({ status }: { status: 'active' | 'exploring' }) {
  const styles = {
    active:
      'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-[var(--color-success-border)]',
    exploring:
      'bg-[var(--color-brand-soft)] text-[var(--color-brand)] border-[var(--color-brand)]',
  };

  const labels = {
    active: 'Active',
    exploring: 'Exploring',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

const principles = [
  'Start small, stay consistent',
  'Reduce friction before adding features',
  'Respect human rhythms (energy, attention, seasons)',
  'Clarity beats intensity',
  'Build with people, not for metrics',
];

const nowItems = [
  {
    label: 'Weekly shipping: one small improvement at a time',
    status: 'active' as const,
  },
  {
    label: 'Design system: calm UI, consistent tokens',
    status: 'active' as const,
  },
  {
    label: 'Experiments: tiny tools that solve one pain clearly',
    status: 'exploring' as const,
  },
];

const tools = [
  {
    name: 'Tiny Room',
    description: 'Simple video rooms for up to 8 people. No time limit, no pressure.',
    href: '#',
  },
  {
    name: 'Tiny Money',
    description: 'A gentle way to see cash flow and recurring fees without shame.',
    href: '#',
  },
  {
    name: 'Tiny Body',
    description: 'Small daily health wins, tracked calmly.',
    href: '#',
  },
  {
    name: 'Tiny Study',
    description: 'Save what you learn and make it yours.',
    href: '#',
  },
];

const followLinks = [
  { label: 'Follow on YouTube', href: '#' },
  { label: 'Read my writing', href: '#' },
  { label: 'Say hello by email', href: 'mailto:hello@aprkim.com' },
];

export default function TinyWinsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] py-16 md:py-24">
      <article className="mx-auto max-w-[980px] px-5 md:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-brand)] transition-colors mb-12"
        >
          <ArrowLeftIcon />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
              TinyWins
            </h1>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-[var(--color-success-border)]">
              Living system · Evolving in public
            </span>
          </div>
          <p className="text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            A living system of small tools, ideas, and rituals for steady growth.
          </p>
        </header>

        {/* Why TinyWins exists */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            Why TinyWins exists
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-muted)] leading-relaxed max-w-3xl">
            <p>
              TinyWins started as a personal need: I wanted progress to feel lighter.
            </p>
            <p>Not louder. Not faster. Just more sustainable.</p>
            <p>
              I believe most growth happens in small moments — the ones we repeat
              when no one is watching.
            </p>
          </div>
        </section>

        {/* What it is */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            What it is
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-3xl">
            TinyWins is not one app. It&apos;s a collection of small tools and
            experiments designed to reduce friction and increase follow-through —
            especially for people who are building, learning, or starting again.
          </p>
        </section>

        {/* Principles */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            Principles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="p-5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius)]"
              >
                <p className="text-[var(--color-text)] leading-relaxed">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's "in public" here */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            What&apos;s &quot;in public&quot; here
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-3xl">
            When I say &quot;in public,&quot; I mean I share the process — the
            experiments, the tradeoffs, and the lessons — while it&apos;s still in
            motion. Not as a performance, but as a way to stay honest and connected
            to real people.
          </p>
        </section>

        {/* Now */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            Now
          </h2>
          <div className="p-6 md:p-8 bg-[var(--color-soft-surface)] border border-[var(--color-border)] rounded-[var(--radius)]">
            <ul className="space-y-4">
              {nowItems.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-wrap items-center gap-3 text-[var(--color-text)]"
                >
                  <span className="leading-relaxed">{item.label}</span>
                  <StatusPill status={item.status} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Small tools - hidden for now
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            Small tools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius)] flex flex-col"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {tool.name}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4 flex-grow">
                  {tool.description}
                </p>
                <a
                  href={tool.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand)] hover:opacity-80 transition-opacity"
                >
                  Open
                  <ExternalLinkIcon />
                </a>
              </div>
            ))}
          </div>
        </section>
        */}

        {/* How to follow along - hidden for now
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            How to follow along
          </h2>
          <div className="flex flex-wrap gap-4">
            {followLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[var(--color-text)] bg-[var(--color-soft-surface)] border border-[var(--color-border)] rounded-[var(--radius)] hover:bg-[var(--color-card)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
        */}

        {/* Footnote */}
        <section className="mb-16 pb-16 border-b border-[var(--color-border)]">
          <p className="text-[var(--color-muted)] italic">
            TinyWins is a long game. I&apos;m building it slowly, carefully, and
            with real people in mind.
          </p>
        </section>

        {/* Back link (bottom) */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-brand)] transition-colors"
        >
          <ArrowLeftIcon />
          Back to Projects
        </Link>
      </article>
    </main>
  );
}
