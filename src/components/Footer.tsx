export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--color-soft-surface)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <p className="text-sm text-[var(--color-muted)] text-center">
          &copy; {currentYear} April Kim ·{' '}
          <a href="https://lihallc.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand)] underline underline-offset-4">
            Liha LLC
          </a>
        </p>
      </div>
    </footer>
  );
}
