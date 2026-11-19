import HomeSection from './Section';
import { L } from './L';

export default function Latest() {
  return (
    <HomeSection en="Latest" ko="최신 영상">
      <a
        href="https://www.youtube.com/watch?v=l-iI_qadV8I"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-[14px] bg-soft px-5 py-[18px] no-underline"
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
      </a>
    </HomeSection>
  );
}
