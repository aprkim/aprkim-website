import HomeSection from './Section';
import { L } from './L';

export const CONTACT_EMAIL = 'hello@aprkim.com';

const offers = [
  {
    en: 'Brand partnerships',
    ko: '브랜드 협업',
    dEn: 'Parenting, bilingual education, kids and AI tools.',
    dKo: '육아, 이중언어 교육, 키즈, AI 툴.',
  },
  {
    en: 'Speaking',
    ko: '강연 · 워크숍',
    dEn: 'Vibecoding, immigrant founders, raising bilingual kids. In English or Korean.',
    dKo: '바이브코딩, 이민자 창업, 이중언어 육아. 한국어와 영어로.',
  },
  {
    en: 'Product advising',
    ko: '제품 · UX 자문',
    dEn: 'An outside eye from a two-time CEO.',
    dKo: '두 번의 CEO 경험으로 보는 외부 시선.',
  },
  {
    en: 'Co-creation',
    ko: '공동 제작',
    dEn: 'Apps, books and video series, made together.',
    dKo: '앱, 책, 영상 시리즈를 함께.',
  },
];

export default function WorkWithMe() {
  return (
    <HomeSection id="work-with-me" en="Work with me" ko="함께 일해요">
      <ul className="m-0 list-none border-t border-line p-0">
        {offers.map((o) => (
          <li key={o.en} className="border-b border-line">
            <div className="grid grid-cols-1 items-baseline gap-x-4 gap-y-0.5 py-4 min-[561px]:grid-cols-[200px_1fr]">
              <b className="font-bold">
                <L en={o.en} ko={o.ko} />
              </b>
              <span className="text-[15.5px] text-muted">
                <L en={o.dEn} ko={o.dKo} />
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <p className="mb-2.5 mt-0 text-muted">
          <L en="Media kit on request." ko="미디어 키트는 요청하시면 보내드려요." />
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="border-b-2 border-violet text-[clamp(24px,4.4vw,32px)] font-extrabold tracking-[-.01em] text-violet no-underline"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </HomeSection>
  );
}
