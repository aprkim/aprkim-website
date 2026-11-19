'use client';

import { useEffect, useState } from 'react';

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
