import { ReactNode } from 'react';
import HomeSection from './Section';
import { L } from './L';

/* Shared grid for every row: name | description | link or status */
const row =
  'grid grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-0.5 py-4 no-underline min-[561px]:grid-cols-[150px_1fr_auto] min-[561px]:gap-4';
const desc = 'order-3 col-span-full text-[15.5px] text-muted min-[561px]:order-none min-[561px]:col-span-1';
const side = 'whitespace-nowrap text-[12.5px] font-semibold text-muted';

interface Item {
  name: string;
  en: ReactNode;
  ko: ReactNode;
  /** Whole row links here */
  href?: string;
  /** Right-hand label: a domain (linked when href is set) or a status */
  side: ReactNode;
}

const items: Item[] = [
  {
    name: 'Liha Books',
    href: 'https://books.lihallc.com',
    en: (
      <>
        Bilingual Korean-English picture books, written so each language stands on its own. First
        title: <i>Two Languages in My Heart</i>. A new one every year.
      </>
    ),
    ko: '두 언어가 각각 홀로 설 수 있게 쓴 한영 이중언어 그림책. 첫 책은 『Two Languages in My Heart』, 매년 한 권씩 나와요.',
    side: 'books.lihallc.com ↗',
  },
  {
    name: 'Tabbi',
    href: 'https://tabbi.ai',
    en: 'AI communication help for non-native English speakers.',
    ko: '비원어민을 위한 AI 영어 커뮤니케이션 도우미.',
    side: 'tabbi.ai ↗',
  },
  {
    name: 'Kept Cards',
    href: 'https://kept.cards',
    en: 'Save every greeting card worth keeping, with who sent it and why.',
    ko: '간직하고 싶은 카드를, 누가 왜 보냈는지까지 저장해요.',
    side: 'kept.cards ↗',
  },
  {
    name: 'Puddle',
    href: 'https://onpuddle.com',
    en: 'Hand-picked apps for families, each with a note from me.',
    ko: '가족을 위한 앱을 골라 제 한 줄 노트와 함께 소개해요.',
    side: 'onpuddle.com ↗',
  },
];


export default function Made() {
  return (
    <HomeSection en="Things I've made" ko="만든 것들">
      <ul className="m-0 list-none border-t border-line p-0">
        {items.map((item) => (
          <li key={item.name} className="border-b border-line">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${row}`}
            >
              <b className="font-bold group-hover:text-violet">{item.name}</b>
              <span className={desc}>
                <L en={item.en} ko={item.ko} />
              </span>
              <span className={side}>{item.side}</span>
            </a>
          </li>
        ))}


        <li className="border-b border-line">
          <a
            href="https://soriblocks.lihallc.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${row}`}
          >
            <b className="font-bold group-hover:text-violet">Sori Blocks</b>
            <span className={desc}>
              <L
                en="A Korean alphabet app for ages 3 to 6 that teaches letters by their sounds, so kids can read the syllables they build."
                ko="3~6세 아이를 위한 한글 앱. 글자를 이름이 아닌 소리로 가르쳐서, 아이가 직접 만든 글자를 읽을 수 있어요."
              />
            </span>
            <span className={side}>soriblocks.lihallc.com ↗</span>
          </a>
        </li>

      </ul>
    </HomeSection>
  );
}
