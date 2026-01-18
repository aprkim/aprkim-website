import Section from './Section';

export default function StoryBlock() {
  return (
    <Section
      id="story"
      title="Story"
      subtitle="How I got here."
      background="brand"
    >
      <div className="max-w-3xl">
        <div className="space-y-6">
          <p className="text-lg text-[var(--color-text)] leading-snug">
            I didn&apos;t start building products because I wanted to be a founder.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            I started because I was struggling.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            As an immigrant working in English, I often knew what I wanted to
            say—but not how to say it with confidence. Writing took too long.
            Meetings drained me. I felt smaller than I actually was.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug font-medium">
            So I built something for myself.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            That became ChattingCat, a service that helped non-native English
            speakers express themselves more clearly at work. It grew
            quickly—because the problem was real.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug font-medium">
            Then it all stopped.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            ChattingCat was hit with a lawsuit that forced me to shut the
            company down. I spent three years fighting it. I won—but the
            experience changed me.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            I stopped chasing speed and scale.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            I started caring more about trust, clarity, and the people on the
            other side of the product.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            That shift led to Tabbi, built to support language learners without
            replacing their voice.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            And to TinyWins, a system of small tools focused on steady, human
            progress.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            Today, I build carefully.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            I build with empathy.
          </p>
          <p className="text-lg text-[var(--color-text)] leading-snug">
            And I build in public—so the work stays honest, and human.
          </p>
        </div>
      </div>
    </Section>
  );
}
