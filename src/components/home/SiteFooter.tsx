export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-[88px] flex max-w-[760px] flex-wrap justify-between gap-2 border-t border-line pt-5 text-[13px] text-muted">
      <span>© {year} April Kim</span>
      <span>
        <a href="https://github.com/aprkim" target="_blank" rel="noopener noreferrer" className="hover:text-violet">
          GitHub
        </a>
        {' · '}
        <a href="https://lihallc.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet">
          Liha LLC
        </a>
      </span>
    </footer>
  );
}
