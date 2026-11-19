'use client';

import { useEffect, useState } from 'react';
import { L } from './L';

export type Lang = 'en' | 'ko';

const STORAGE_KEY = 'aprkim-lang';

function readLang(): Lang {
  return document.documentElement.getAttribute('data-lang') === 'ko' ? 'ko' : 'en';
}

export function applyLang(lang: Lang) {
  const root = document.documentElement;
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage can be blocked (private mode); the toggle still works for this visit.
  }
}

/** Current page language, kept in sync with <html data-lang>. */
export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    setLang(readLang());
    const observer = new MutationObserver(() => setLang(readLang()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang'],
    });
    return () => observer.disconnect();
  }, []);

  return lang;
}

export function LangToggle() {
  const lang = useLang();
  const next: Lang = lang === 'en' ? 'ko' : 'en';

  return (
    <button
      type="button"
      onClick={() => applyLang(next)}
      aria-label={lang === 'en' ? 'Switch to Korean' : '영어로 보기'}
      className="rounded-full border border-line px-[14px] py-[6px] text-[13px] font-semibold text-ink hover:border-ink"
    >
      <L en="한국어" ko="English" />
    </button>
  );
}
