import HomeSection from './Section';
import { L } from './L';

export default function Latest() {
  return (
    <HomeSection en="Latest video" ko="최신 영상">
      <a
        href="https://www.youtube.com/watch?v=l-iI_qadV8I"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-[14px] bg-soft px-5 py-[18px] no-underline"
        aria-label="Watch on YouTube: 엄마라고 불러줘"
      >
        <span
          aria-hidden="true"
          className="grid h-10 w-10 flex-none place-items-center rounded-full bg-violet"
        >
          <span className="ml-[3px] h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
        </span>
        <span>
          <b className="block text-[17px] group-hover:text-violet">엄마라고 불러줘</b>
          <span className="text-sm text-muted">
            <L
              en="When my daughter switched from 엄마 to Mommy"
              ko="딸이 엄마 대신 Mommy라고 부르던 날"
            />
          </span>
        </span>
        <span className="ml-auto flex flex-none items-center gap-1.5 self-center whitespace-nowrap text-[12.5px] font-semibold text-muted group-hover:text-violet">
          <svg aria-hidden="true" viewBox="0 0 24 17" className="h-[13px] w-[18px] flex-none max-[560px]:h-[17px] max-[560px]:w-6">
            <rect width="24" height="17" rx="4" fill="#FF0000" />
            <path d="M9.6 4.8v7.4l6.4-3.7z" fill="#fff" />
          </svg>
          {/* phones: the icon alone, so the subtitle keeps its width */}
          <span className="max-[560px]:hidden">YouTube ↗</span>
        </span>
      </a>
    </HomeSection>
  );
}
