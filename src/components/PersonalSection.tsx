export default function PersonalSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-background)]">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <h3 className="text-lg font-medium text-[var(--color-muted)] mb-6">
          Personal
        </h3>
        <div className="max-w-2xl space-y-5">
          <p className="text-[var(--color-text)] leading-relaxed">
            Outside of my main work, I spend a lot of time thinking about
            learning, language, and how people grow over time.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            I&apos;m an immigrant founder building between cultures, raising a
            bilingual child, and learning — very publicly — as I go. Lately,
            I&apos;ve been especially curious about what it means to grow
            without burning out.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Some of these thoughts turn into writing, some into small side
            projects, and some into conversations that continue elsewhere.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            I share more of this thinking through writing and video.
          </p>
        </div>
      </div>
    </section>
  );
}
