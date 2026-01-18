import Section from './Section';

const credentials = [
  {
    icon: 'building',
    title: 'Founded 2 Companies',
    description: 'Built products from zero to scale, navigating the full journey from idea to growth.',
  },
  {
    icon: 'code',
    title: 'Full-Stack Engineer',
    description: 'Deep expertise in TypeScript, React, Node.js, and modern infrastructure.',
  },
  {
    icon: 'palette',
    title: 'Design-Minded',
    description: 'Trained eye for user experience, accessibility, and thoughtful visual design.',
  },
  {
    icon: 'users',
    title: 'Team Builder',
    description: 'Hired and led engineering teams, fostering cultures of craft and collaboration.',
  },
];

function BuildingIcon() {
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
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CodeIcon() {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PaletteIcon() {
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
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function UsersIcon() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const iconMap: Record<string, () => JSX.Element> = {
  building: BuildingIcon,
  code: CodeIcon,
  palette: PaletteIcon,
  users: UsersIcon,
};

export default function CredibilityGrid() {
  return (
    <Section id="about" title="About" subtitle="What I bring to the table.">
      <div className="grid sm:grid-cols-2 gap-6">
        {credentials.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <article
              key={item.title}
              className="card-hover p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius)]"
            >
              <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--color-brand-soft)] flex items-center justify-center text-[var(--color-brand)] mb-4">
                <IconComponent />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
