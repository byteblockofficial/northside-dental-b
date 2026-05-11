import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
        <p className="font-semibold text-[var(--color-primary)]">Northside Dental Practice</p>
        <nav aria-label="Footer navigation" className="flex gap-6">
          <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
          <Link href="/services" className="hover:text-[var(--color-primary)]">Treatments</Link>
          <Link href="/about" className="hover:text-[var(--color-primary)]">About</Link>
          <Link href="/contact" className="hover:text-[var(--color-primary)]">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:01610000001" className="font-semibold text-[var(--color-primary)] hover:underline">0161 000 0001</a>
          <span aria-hidden="true">·</span>
          <p>© 2026 Northside Dental. Demo site.</p>
        </div>
      </div>
    </footer>
  );
}
