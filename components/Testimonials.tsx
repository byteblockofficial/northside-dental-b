export default function Testimonials() {
  return (
    <section className="bg-[var(--color-surface)] py-20 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="testimonials-heading" className="text-3xl font-bold text-[var(--color-primary)] text-center mb-12">
          What patients say
        </h2>

        {/* Featured large quote */}
        <figure className="bg-white border border-[var(--color-border)] rounded-2xl p-10 mb-8 text-center">
          <div className="text-4xl text-[var(--color-secondary)] font-serif leading-none mb-4" aria-hidden="true">&ldquo;</div>
          <blockquote className="text-xl text-[var(--color-text)] font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
            I&apos;ve been coming to Northside for over a decade. The team are always gentle, thorough, and genuinely caring. I&apos;ve recommended them to every friend who&apos;s moved to Manchester.
          </blockquote>
          <figcaption className="text-sm text-[var(--color-text-muted)]">
            <span className="font-semibold text-[var(--color-text)]">P.W.</span> · Chorlton · NHS patient, 12 years
          </figcaption>
        </figure>

        {/* Two smaller quotes */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { quote: "Had my first hygiene appointment after years of dental anxiety. The hygienist was so patient and explained everything. Completely changed my relationship with the dentist.", attr: "M.T. · Didsbury" },
            { quote: "Went in with a cracked tooth on a Tuesday morning, had a crown fitted by Thursday. Brilliant service, no fuss, and no pain. Couldn't recommend more highly.", attr: "R.K. · Sale" },
          ].map((t) => (
            <figure key={t.attr} className="bg-white border border-[var(--color-border)] rounded-xl p-7">
              <blockquote className="text-[var(--color-text)] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="text-sm text-[var(--color-text-muted)] font-semibold">{t.attr}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
