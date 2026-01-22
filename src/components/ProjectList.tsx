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
    title: 'TinyWins',
    status: 'growing',
    description: [
      'TinyWins started with a simple question: Why does growth feel so heavy?',
      'It\'s a collection of small tools designed to help people move forward — quietly, consistently, and without pressure.',
      'Start small. Stay human. Let things grow — in public.',
    ],
    tags: [],
    link: 'https://tinywins.space/',
    ctaLabel: 'Explore TinyWins',
    secondaryLink: '/aprkim-website/projects/tinywins',
    secondaryCtaLabel: 'Why I built this',
  },
  {
    title: 'Tabbi AI',
    status: 'live',
    description: [
      'Tabbi started from my experience as a non-native English speaker — where confidence mattered more than grammar.',
      'It supports learners without replacing their voice, helping them understand and grow through real use.',
      'Now, Tabbi is evolving into TabbiMate, focused on connecting learners with real people — because in the AI era, language is learned through human connection.',
    ],
    tags: [],
    link: 'https://tabbi.ai/',
    ctaLabel: 'View Tabbi AI',
  },
  {
    title: 'Fox & Fork',
    status: 'past',
    description: [
      'Fox & Fork is a social network designed around food — how we cook, eat, and connect.',
      'It gives everyone their own food channel to share recipes, meals, and inspiration, and to build community through food.',
      'Over time, it evolves into a place where people can plan meals, document their food life, and eventually buy and sell food within trusted networks.',
    ],
    tags: [],
    link: '/aprkim-website/projects/foxnfork',
    ctaLabel: 'View case study',
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
      subtitle="Selected work from my journey building products for learning, growth, and human connection."
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
    </Section>
  );
}
