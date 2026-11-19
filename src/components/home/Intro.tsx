import { L } from './L';
import Header from './Header';

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
      className="relative min-[769px]:flex min-[769px]:min-h-[min(100vh,900px)] min-[769px]:flex-col"
    >
      {/*
        Photo layer. Desktop: starts at the very top of the page and fills
        the right ~60% down to the bottom of the hero, wider than the 45%
        column so the outstretched arm fits; its left side fades under the
        text and its bottom fades out (.hero-photo, two masks). Phones: a
        full-width 4:3 photo at the top, under the header.
      */}
      <div className="hero-backdrop relative aspect-[4/3] w-full min-[769px]:absolute min-[769px]:inset-y-0 min-[769px]:right-0 min-[769px]:aspect-auto min-[769px]:w-[60vw]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
        <img
          src="/april-landscape.jpg"
          alt="April Kim smiling on the salt flats"
          width={1600}
          height={1200}
          className="hero-photo absolute inset-0 h-full w-full object-cover object-[0%_30%] max-[768px]:object-[50%_30%]"
        />
      </div>

      {/* Header over the photo: transparent, no divider here */}
      <div className="px-gutter absolute inset-x-0 top-0 z-20">
        <Header divider={false} />
      </div>

      <div className="relative z-10 grid flex-1 grid-cols-1 min-[769px]:grid-cols-[55%_45%] min-[769px]:pt-[83px]">
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
        Dark mode only: the bright backdrop would glow on a dark page, so a
        crisp circle sits in the right column instead (see .hero-circle).
        On phones it comes first, below the header.
      */}
      <div className="hero-circle order-first items-center px-gutter pt-[88px] min-[769px]:order-none min-[769px]:pl-0 min-[769px]:justify-end min-[769px]:pt-0">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
        <img
          src="/april.jpg"
          alt="April Kim smiling on the salt flats"
          width={800}
          height={800}
          loading="lazy"
          className="block aspect-square h-auto w-full max-w-[220px] rounded-full object-cover shadow-[0_0_0_1px_var(--line)] min-[769px]:max-w-[300px]"
        />
      </div>
      </div>
    </section>
  );
}
