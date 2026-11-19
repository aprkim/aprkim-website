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
    <div className="relative grid grid-cols-1 items-center gap-8 pb-4 pt-10 min-[821px]:grid-cols-[1fr_300px] min-[821px]:gap-14 min-[821px]:pt-[72px]">
      <div className="relative z-10">
        {/*
          Both languages share one grid cell, so the block is always as tall
          as the longer one and nothing below it moves when the language
          changes. The shorter one sits at the bottom, next to the buttons.
        */}
        <div className="lang-stack grid">
          <div className="en self-end [grid-area:1/1]">
            <h1 className="m-0 text-[clamp(38px,7vw,60px)] font-extrabold leading-[1.08] tracking-[-.02em] [text-wrap:balance]">
              I build things that help families <span className="text-violet">grow</span>.
            </h1>
            <p className="mb-0 mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-muted">
              I&apos;m April, a Korean immigrant mom in the Bay Area raising a trilingual daughter. I
              make apps with AI, write bilingual picture books, and share the journey along the way.
            </p>
          </div>
          <div className="ko self-end [grid-area:1/1]">
            <h1 className="m-0 text-[clamp(32px,5.6vw,46px)] font-extrabold leading-[1.3] tracking-[-.01em] [text-wrap:balance]">
              아이와 함께 <span className="text-violet">자라며</span>, 필요한 걸 직접 만드는 엄마.
            </h1>
            <p className="mb-0 mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-muted">
              베이 지역에서 세 언어로 딸을 키우는 한국인 이민자 엄마, 에이프릴이에요. AI로 앱을
              만들고, 이중언어 그림책을 쓰고, 그 과정을 나눕니다.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work-with-me" className={`${btn} border-violet bg-violet text-white`}>
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
        Light: a wide landscape crop used as a backdrop. On desktop it bleeds
        to the right edge of the window and fades out behind the text; on
        mobile it's a full-width banner that fades at the bottom. Dark: the
        bright sky would glow against the dark page, so a crisp circular
        crop shows in the photo column instead. Which one shows is decided in
        globals.css from the device setting or the theme switch.
      */}
      <div className="order-first w-full min-[821px]:order-none">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
        <img
          src="/april-landscape.jpg"
          alt="April Kim smiling on the salt flats"
          width={1600}
          height={1200}
          className="hero-photo-light -mx-6 block aspect-[4/3] w-[calc(100%+48px)] max-w-none object-cover object-[60%_40%] min-[821px]:absolute min-[821px]:inset-y-0 min-[821px]:right-[calc((812px-100vw)/2)] min-[821px]:mx-0 min-[821px]:aspect-auto min-[821px]:h-full min-[821px]:w-[calc(50vw+40px)] min-[821px]:object-[70%_40%]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
        <img
          src="/april.jpg"
          alt="April Kim smiling on the salt flats"
          width={800}
          height={800}
          loading="lazy"
          className="hero-photo-dark aspect-square h-auto w-full max-w-[220px] object-cover min-[821px]:max-w-none"
        />
      </div>
    </div>
  );
}
