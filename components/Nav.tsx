"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Northside Dental — home" className="text-xl font-bold text-[var(--color-primary)]">
          Northside Dental
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex gap-8 text-sm font-medium text-[var(--color-text)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
          <Link href="/services" className="hover:text-[var(--color-primary)]">Treatments</Link>
          <Link href="/about" className="hover:text-[var(--color-primary)]">About</Link>
          <Link href="/contact" className="hover:text-[var(--color-primary)]">Contact</Link>
        </nav>
        <Link href="/contact" className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-[var(--color-secondary-dark)] text-white hover:bg-[var(--color-primary)] transition-colors">
          Book appointment
        </Link>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden p-2 text-[var(--color-text)]">
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Treatments</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold bg-[var(--color-secondary-dark)] text-white">Book appointment</Link>
        </div>
      )}
    </header>
  );
}
