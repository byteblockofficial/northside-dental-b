import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[var(--color-surface)] py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block bg-[var(--color-secondary-dark)] text-white text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
          GDC Registered · NHS &amp; Private · CQC Inspected
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] leading-tight mb-5">
          Manchester dental care<br />you can trust
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto">
          Gentle, thorough dental care for the whole family. NHS and private appointments available — no long waits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold bg-[var(--color-secondary-dark)] text-white hover:bg-[var(--color-primary)] transition-colors text-sm">
            Book an appointment
          </Link>
          <Link href="/services" className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors text-sm">
            View treatments
          </Link>
        </div>
        <p className="text-sm text-[var(--color-text-muted)]">
          ★★★★★ <span className="font-semibold text-[var(--color-text)]">4.9</span> from 180+ Google reviews
        </p>
      </div>
    </section>
  );
}
