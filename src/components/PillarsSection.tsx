import Section from './Section';

const pillars = [
  {
    number: '01',
    title: 'Clarity over cleverness',
    description:
      'The best solutions are simple to understand. I optimize for readability, maintainability, and reducing cognitive load—not for impressing other engineers.',
  },
  {
    number: '02',
    title: 'Build with empathy',
    description:
      'Every line of code eventually touches a human. I think deeply about the people who will use what I build, and the engineers who will maintain it.',
  },
  {
    number: '03',
    title: 'Earn trust through craft',
    description:
      'Trust is built through consistent quality. I care about the details—accessibility, performance, edge cases—because they matter to the people who depend on my work.',
  },
  {
    number: '04',
    title: 'Stay curious, stay humble',
    description:
      'The best builders are always learning. I approach problems with genuine curiosity and the humility to know I don\'t have all the answers.',
  },
];

export default function PillarsSection() {
  return (
    <Section
      id="pillars"
      title="Pillars"
      subtitle="Principles that guide how I think and work."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <article key={pillar.number} className="group">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-[var(--color-brand)] opacity-30 group-hover:opacity-100 transition-opacity">
                {pillar.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
