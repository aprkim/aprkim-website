import Section from './Section';

const opportunities = [
  {
    icon: 'rocket',
    title: 'Building something new',
    description:
      'I\'m drawn to small, ambitious ideas — especially around learning, productivity, and human connection. If you\'re exploring something early and care deeply about how it\'s built, I\'d love to hear about it.',
    cta: 'Let\'s talk',
    ctaLink: 'mailto:hello@aprkim.com',
    primary: true,
    order: 'order-first md:order-2',
  },
  {
    icon: 'briefcase',
    title: 'Thinking together',
    description:
      'I work best in early, messy stages — when things aren\'t clear yet. If you\'re navigating product direction, language, or UX decisions and want a thoughtful outside perspective, I\'m happy to talk.',
    cta: 'Start a conversation',
    ctaLink: 'mailto:hello@aprkim.com',
    primary: false,
    order: 'md:order-1',
  },
  {
    icon: 'coffee',
    title: 'Open conversations',
    description:
      'Sometimes the best ideas start without a clear agenda. I enjoy thoughtful conversations with people who are building, learning, or rethinking how things are done.',
    cta: 'Say hello',
    ctaLink: 'mailto:hello@aprkim.com',
    primary: false,
    order: 'md:order-3',
  },
];

function BriefcaseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

const iconMap: Record<string, () => JSX.Element> = {
  briefcase: BriefcaseIcon,
  rocket: RocketIcon,
  coffee: CoffeeIcon,
};

export default function OpportunitiesGrid() {
  return (
    <Section
      id="opportunities"
      title="Work with me"
      subtitle="Ways we might work together."
      background="soft"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {opportunities.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <article
              key={item.title}
              className={`card-hover flex flex-col p-6 rounded-[var(--radius)] border ${item.order} ${
                item.primary
                  ? 'bg-[var(--color-brand)] border-[var(--color-brand)]'
                  : 'bg-[var(--color-card)] border-[var(--color-border)]'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-[5px] flex items-center justify-center mb-4 ${
                  item.primary
                    ? 'bg-white/20 text-white'
                    : 'bg-[var(--color-brand-soft)] text-[var(--color-brand)]'
                }`}
              >
                <IconComponent />
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  item.primary ? 'text-white' : 'text-[var(--color-text)]'
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`leading-relaxed mb-6 flex-grow ${
                  item.primary ? 'text-white/80' : 'text-[var(--color-muted)]'
                }`}
              >
                {item.description}
              </p>
              <a
                href={item.ctaLink}
                className={`inline-flex items-center justify-center px-5 py-2.5 font-medium rounded-[8px] transition-colors ${
                  item.primary
                    ? 'bg-white text-[var(--color-brand)] hover:bg-white/90 shadow-sm'
                    : 'border border-[var(--color-border)] text-[var(--color-muted)] bg-transparent hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]'
                }`}
              >
                {item.cta}
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
