import Section from './Section';

export default function StoryBlock() {
  return (
    <Section id="story" title="Story" subtitle="How I got here." background="brand">
      <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--color-text)]">
        <p>
          I didn&apos;t start building because I wanted to be a founder. I
          started because I was struggling.
        </p>
        <p>
          As an immigrant working in English, I knew what I wanted to say — but
          not how to say it with confidence. So I built ChattingCat to help
          people like me. It grew fast, because the problem was real. Then a
          lawsuit forced me to shut it down.
        </p>
        <blockquote className="my-10 border-l-4 border-[var(--color-brand)] pl-6 text-2xl md:text-3xl font-semibold leading-snug text-[var(--color-text)]">
          I spent three years fighting it. I won — but the experience changed
          me.
        </blockquote>
        <p>
          Now I build slowly and on purpose at Liha: products like Tabbi that
          support people without replacing their voice. Along the way I&apos;m
          raising a trilingual child and running a vibe coding community for
          women — and I share all of it, in public.
        </p>
        <p>
          <a
            href="https://aprkim.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-brand)] underline underline-offset-4 hover:no-underline"
          >
            Read more on Substack →
          </a>
        </p>
      </div>
    </Section>
  );
}
