import { L } from './L';

const SUBSTACK_URL = 'https://aprkim.substack.com';

/**
 * Sits right after "Why I build", where readers are most engaged. A styled
 * card with a link rather than Substack's embed, which clashed with the
 * site's colors.
 */
export default function Subscribe() {
  return (
    <section aria-labelledby="subscribe-heading" className="pt-10">
      <div className="flex flex-col gap-5 rounded-[18px] bg-soft p-6 min-[561px]:flex-row min-[561px]:items-center min-[561px]:justify-between min-[561px]:p-7">
        <div>
          <h2 id="subscribe-heading" className="m-0 text-lg font-bold">
            <L en="Get the next chapter by email" ko="다음 이야기를 메일로 받아보세요" />
          </h2>
          <p className="mb-0 mt-1.5 text-[15.5px] text-muted">
            <L
              en="What I'm building, raising a bilingual kid, and what I learn along the way. Free on Substack."
              ko="만들며 배운 것, 이중언어 육아, 요즘의 고민을 나눠요. Substack에서 무료로."
            />
          </p>
        </div>
        <a
          href={`${SUBSTACK_URL}/subscribe`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex flex-none items-center gap-2 self-start whitespace-nowrap rounded-[14px] bg-violet px-5 py-3 text-[15px] font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 min-[561px]:self-auto"
        >
          <L en="Subscribe" ko="구독하기" /> <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
