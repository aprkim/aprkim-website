import { L } from './L';

const social = [
  { label: 'Threads', href: 'https://www.threads.net/@aprkim' },
  { label: 'Instagram', href: 'https://www.instagram.com/aprkim' },
  { label: 'Substack', href: 'https://aprkim.substack.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aprkim' },
];

const btn =
  'inline-flex items-center gap-2 rounded-[14px] border-[1.5px] px-6 py-[14px] text-base font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0';

export default function Intro() {
  return (
    <section
      aria-label="Introduction"
      className="mt-8 grid grid-cols-1 min-[769px]:min-h-[clamp(540px,72vh,760px)] min-[769px]:grid-cols-[55%_45%]"
    >
      <div className="px-gutter py-10 min-[769px]:flex min-[769px]:flex-col min-[769px]:justify-center min-[769px]:py-16 min-[769px]:pr-12">
        {/*
          Both languages share one grid cell, so the block is always as tall
          as the longer one and nothing below it moves when the language
          changes. The shorter one sits at the bottom, next to the buttons.
        */}
        <div className="lang-stack grid">
          <div className="en self-end [grid-area:1/1]">
            <h1 className="m-0 text-[clamp(36px,4.2vw,60px)] font-extrabold leading-[1.08] tracking-[-.02em] [text-wrap:balance]">
              I build things that help families <span className="text-violet">grow</span>.
            </h1>
            <p className="mb-0 mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-muted">
              I&apos;m April, a Korean immigrant mom in the Bay Area raising a trilingual daughter. I
              make apps with AI, write bilingual picture books, and share the journey along the way.
            </p>
          </div>
          <div className="ko self-end [grid-area:1/1]">
            <h1 className="m-0 text-[clamp(30px,3.2vw,46px)] font-extrabold leading-[1.3] tracking-[-.01em] [text-wrap:balance]">
              아이와 함께 <span className="text-violet">자라며</span>, 필요한 걸 직접 만드는 엄마.
            </h1>
            <p className="mb-0 mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-muted">
              베이 지역에서 세 언어로 딸을 키우는 한국인 이민자 엄마, 에이프릴이에요. AI로 앱을
              만들고, 이중언어 그림책을 쓰고, 그 과정을 나눕니다.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work-with-me" className={`${btn} btn-primary border-violet bg-violet`}>
            <L en="Work with me" ko="함께 일하기" /> <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://www.youtube.com/@aprkim"
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} border-line text-ink`}
          >
            <L en="Watch on YouTube" ko="유튜브 보기" />
          </a>
        </div>

        <ul className="mt-7 flex list-none flex-wrap gap-x-5 gap-y-1.5 p-0 text-[15px] font-semibold">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-line pb-px no-underline hover:border-violet hover:text-violet"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/*
        Fills the right 45% top to bottom (object-fit: cover), positioned so
        the face stays in frame; only the left edge fades (.hero-photo).
        On phones it sits above the text at full width.
      */}
      <div className="relative order-first aspect-[4/3] min-[769px]:order-none min-[769px]:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
        <img
          src="/april-landscape.jpg"
          alt="April Kim smiling on the salt flats"
          width={1600}
          height={1200}
          className="hero-photo absolute inset-0 h-full w-full object-cover object-[58%_30%]"
        />
      </div>
    </section>
  );
}
