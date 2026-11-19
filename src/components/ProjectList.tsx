import Section from './Section';

interface Project {
  title: string;
  status: string;
  description: string | string[];
  tags: string[];
  link: string;
  ctaLabel?: string;
  secondaryLink?: string;
  secondaryCtaLabel?: string;
}

const projects: Project[] = [
  {
    title: 'Tabbi AI',
    status: 'live',
    description: [
      'Tabbi started from my experience as a non-native English speaker — where confidence mattered more than grammar.',
      'It\'s communication help for non-native English speakers. Every correction teaches, so you\'re not fixing the same thing next month.',
      'Now, Tabbi is evolving into TabbiMate, focused on connecting learners with real people — because in the AI era, language is learned through human connection.',
    ],
    tags: [],
    link: 'https://tabbi.ai/',
    ctaLabel: 'tabbi.ai',
  },
  {
    title: 'Liha Books',
    status: 'live',
    description:
      'Children\'s picture books, starting with bilingual Korean–English titles written so each language stands on its own — beginning with Two Languages in My Heart.',
    tags: [],
    link: 'https://books.lihallc.com/',
    ctaLabel: 'books.lihallc.com',
  },
  {
    title: 'Kept Cards',
    status: 'live',
    description:
      'Snap a photo of every greeting card you want to keep. Kept Cards saves the card, who sent it, and the occasion — so handwritten notes from the people you love never get lost.',
    tags: [],
    link: 'https://kept.cards/',
    ctaLabel: 'kept.cards',
  },
  {
    title: 'Puddle',
    status: 'live',
    description:
      'A hand-checked home for small apps parents actually use, each with a note on why it was made.',
    tags: [],
    link: 'https://onpuddle.com',
    ctaLabel: 'onpuddle.com',
  },
  {
    title: 'MentorBench',
    status: 'live',
    description:
      '1:1 video mentorship for scientists. Early-career scientists get real time with mentors who\'ve been there, and mentors give back on their own terms, without the busywork.',
    tags: [],
    link: 'https://mentorbench.site/',
    ctaLabel: 'mentorbench.site',
  },
];

const otherProjects = [
  {
    title: 'TinyWins',
    label: 'Personal project',
    description: 'A collection of small tools for moving forward — quietly, consistently, without pressure.',
    link: '/projects/tinywins',
  },
  {
    title: 'Fox & Fork',
    label: 'Past project',
    description: 'A social network built around food — how we cook, eat, and connect.',
    link: '/projects/foxnfork',
  },
];

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

function ArrowRightIcon() {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    active: 'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-[var(--color-success-border)]',
    growing: 'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-[var(--color-success-border)]',
    live: 'bg-[var(--color-brand-soft)] text-[var(--color-brand)] border-[var(--color-brand)]',
    shipped: 'bg-[var(--color-brand-soft)] text-[var(--color-brand)] border-[var(--color-brand)]',
    past: 'bg-[var(--color-soft-surface)] text-[var(--color-muted)] border-[var(--color-border)]',
    archived: 'bg-[var(--color-soft-surface)] text-[var(--color-muted)] border-[var(--color-border)]',
  };

  const labels = {
    active: 'Active',
    growing: 'Growing',
    live: 'In the wild',
    shipped: 'Shipped',
    past: 'Past exploration',
    archived: 'Archived',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${
        styles[status as keyof typeof styles]
      }`}
    >
      {labels[status as keyof typeof labels]}
    </span>
  );
}

export default function ProjectList() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="What I build and run at Liha, my independent studio — a few good products, each with its own home."
      background="soft"
    >
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="card-hover group p-6 md:p-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius)]"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {project.title}
                </h3>
                <StatusBadge status={project.status} />
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-brand)] transition-colors"
                  aria-label={`View ${project.title} project`}
                >
                  {project.ctaLabel || 'View project'}
                  {project.link.startsWith('http') && <ExternalLinkIcon />}
                  {!project.link.startsWith('http') && <ArrowRightIcon />}
                </a>
                {project.secondaryLink && (
                  <a
                    href={project.secondaryLink}
                    target={project.secondaryLink.startsWith('http') ? '_blank' : undefined}
                    rel={project.secondaryLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    {project.secondaryCtaLabel || 'Learn more'}
                    {project.secondaryLink.startsWith('http') && <ExternalLinkIcon />}
                    {!project.secondaryLink.startsWith('http') && <ArrowRightIcon />}
                  </a>
                )}
              </div>
            </div>
            <div className="space-y-3 mb-4 max-w-2xl">
              {Array.isArray(project.description) ? (
                project.description.map((paragraph, index) => (
                  <p key={index} className="text-[var(--color-muted)] leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-[var(--color-soft-surface)] text-[var(--color-text)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-[var(--color-muted)]">
        All of these live under{' '}
        <a
          href="https://lihallc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-brand)] underline underline-offset-4 hover:no-underline"
        >
          Liha LLC
        </a>
        .
      </p>
      <div className="mt-14">
        <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-muted)] mb-4">
          Also
        </h3>
        <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {otherProjects.map((p) => (
            <li key={p.title}>
              <a
                href={p.link}
                className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-4"
              >
                <span className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors sm:w-32 flex-shrink-0">
                  {p.title}
                </span>
                <span className="text-xs text-[var(--color-muted)] sm:w-32 flex-shrink-0">
                  {p.label}
                </span>
                <span className="text-[var(--color-muted)] flex-grow">
                  {p.description}
                </span>
                <span className="hidden sm:block text-[var(--color-muted)] group-hover:text-[var(--color-brand)] transition-colors">
                  <ArrowRightIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
