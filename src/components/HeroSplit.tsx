export default function HeroSplit() {
  return (
    <section
      id="hero"
      className="flex items-center pt-28 pb-20 md:pt-40 md:pb-32 bg-[var(--color-background)]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[980px] px-5 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight mb-6"
            >
              I build things<br />
              that help people{' '}
              <span className="text-[#5d5473] font-extrabold">grow</span>.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-muted)] leading-[1.75] mb-10 max-w-lg">
              I&apos;m April — immigrant founder of{' '}
              <a href="https://lihallc.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)] underline decoration-1 underline-offset-4 hover:no-underline">
                Liha
              </a>
              , building products and learning communities for real people.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 md:py-3 bg-[var(--color-brand)] text-white font-medium rounded-[var(--radius)] leading-normal md:whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                See what I'm building
                <ArrowIcon />
              </a>
              <a
                href="#subscribe"
                className="inline-flex items-center justify-center px-6 py-3.5 md:py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-[var(--radius)] leading-normal md:whitespace-nowrap hover:bg-[var(--color-soft-surface)] transition-colors"
              >
                Follow my journey
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src="/april.jpg"
              alt="April Kim smiling"
              width={800}
              height={800}
              className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border border-[var(--color-border)] shadow-sm"
            />
          </div>
        </div>
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
