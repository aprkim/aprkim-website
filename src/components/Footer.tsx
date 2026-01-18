export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--color-soft-surface)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <p className="text-sm text-[var(--color-muted)] text-center">
          &copy; {currentYear} April Kim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
