const badges = [
  { label: "GDC Registered" },
  { label: "CQC Inspected" },
  { label: "NHS Provider" },
  { label: "4.9★ · 180+ reviews" },
  { label: "Same-day emergency" },
];

export default function TrustBar() {
  return (
    <section aria-label="Trust signals" className="border-y border-[var(--color-border)] bg-white py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <span key={b.label} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-secondary-dark)] bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1.5 rounded-full">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary-dark)] inline-block" />
            {b.label}
          </span>
        ))}
      </div>
    </section>
  );
}
