'use client';

const STORAGE_KEY = 'aprkim-theme';

function isDark() {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'dark') return true;
  if (set === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Small light/dark switch fixed to the bottom-right corner. Until it's
 * clicked the site follows the device setting; after that the choice is
 * saved and applied before first paint by the script in layout.tsx.
 * Which icon shows is decided in CSS from the same state, so the button
 * is correct on first paint.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the switch still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Light / dark"
      className="theme-toggle fixed bottom-[max(20px,env(safe-area-inset-bottom))] right-5 z-50 grid h-10 w-10 place-items-center rounded-full border border-line bg-bg text-muted shadow-[0_2px_8px_rgba(17,24,39,0.08)] transition-colors duration-200 hover:text-ink"
    >
      {/* Moon: shown in light mode (click to go dark) */}
      <svg
        className="theme-icon-moon"
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      {/* Sun: shown in dark mode (click to go light) */}
      <svg
        className="theme-icon-sun"
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
