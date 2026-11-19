'use client';

import { applyLang, Lang, useLang } from './lang';

const options: { lang: Lang; label: string; aria: string }[] = [
  { lang: 'en', label: 'EN', aria: 'English' },
  { lang: 'ko', label: 'KO', aria: '한국어' },
];

/**
 * Segmented EN | KO switch. Which side is active comes from CSS on
 * html[data-lang] (see globals.css), not React state, so the indicator is
 * already in place on first paint and only animates when you switch.
 */
function LangSwitch() {
  const lang = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className="lang-switch relative grid grid-cols-2 rounded-full border border-line p-[3px] text-[12px] font-semibold tracking-[.04em]"
    >
      <span aria-hidden="true" className="lang-switch-thumb absolute inset-y-[3px] left-[3px] w-[calc(50%-3px)] rounded-full bg-ink" />
      {options.map((o) => (
        <button
          key={o.lang}
          type="button"
          lang={o.lang}
          aria-label={o.aria}
          aria-pressed={lang === o.lang}
          onClick={() => applyLang(o.lang)}
          data-lang-option={o.lang}
          className="relative z-10 h-7 w-10 rounded-full"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-line pb-5 pt-7">
      {/* Plain <a> (not next/link) so clicking reloads the page */}
      <a href="/" className="text-[16px] font-semibold tracking-[-.01em] text-ink no-underline">
        April Kim
      </a>
      <LangSwitch />
    </header>
  );
}
