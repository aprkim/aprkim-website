import { ReactNode } from 'react';

/**
 * Renders both languages; CSS in globals.css hides the inactive one based on
 * <html data-lang>. Rendering both keeps the static export correct before
 * hydration and avoids a flash of the wrong language.
 */
export function L({ en, ko }: { en: ReactNode; ko: ReactNode }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ko">{ko}</span>
    </>
  );
}
