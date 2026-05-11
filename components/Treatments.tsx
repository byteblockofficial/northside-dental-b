import Link from "next/link";

const treatments = [
  {
    title: "Check-ups & hygiene",
    desc: "Thorough examinations, scale and polish, and personalised advice to keep your teeth and gums in peak condition. Recommended every six months.",
    highlight: "From £55 private / NHS band 1",
  },
  {
    title: "Teeth whitening",
    desc: "Professional-grade home whitening kits custom-fitted to your teeth. Achieve several shades whiter in just two weeks, safely and comfortably.",
    highlight: "From £295 · Results in 2 weeks",
  },
  {
    title: "Fillings & restorations",
    desc: "Tooth-coloured composite fillings that match your natural tooth shade. Strong, durable, and virtually invisible — no silver amalgam used.",
    highlight: "Same-day treatment available",
  },
  {
    title: "Crowns & bridges",
    desc: "Porcelain crowns and bridges that restore broken or missing teeth to full function and natural appearance. Lab-crafted to the highest standard.",
    highlight: "From £650 · 2-visit treatment",
  },
  {
    title: "Orthodontics",
    desc: "Discreet clear aligner treatment for straighter teeth without metal braces. Suitable for adults and teenagers. Free initial consultation included.",
    highlight: "Free consultation · From £1,995",
  },
  {
    title: "Emergency dentistry",
    desc: "Tooth pain, broken teeth, lost fillings — we keep emergency appointments available every day. Call first thing in the morning for same-day access.",
    highlight: "Same-day emergency slots",
  },
];

export default function Treatments() {
  return (
    <section className="py-20 px-6" aria-labelledby="treatments-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="treatments-heading" className="text-3xl font-bold text-[var(--color-primary)] mb-3">
            Treatments &amp; services
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            From routine check-ups to smile transformations — all under one roof.
          </p>
        </div>

        <div className="space-y-0">
          {treatments.map((t, i) => {
            const even = i % 2 === 0;
            return (
              <div
                key={t.title}
                className={`flex flex-col md:flex-row gap-0 border-t border-[var(--color-border)] ${even ? "" : "md:flex-row-reverse"}`}
              >
                {/* Text side */}
                <div className="flex-1 py-12 px-8">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{t.title}</h3>
                  <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">{t.desc}</p>
                  <p className="text-sm font-semibold text-[var(--color-secondary-dark)]">{t.highlight}</p>
                </div>
                {/* Visual accent side */}
                <div
                  className={`md:w-48 lg:w-64 flex items-center justify-center py-10 px-6 ${even ? "bg-[var(--color-surface)]" : "bg-[var(--color-primary)]"}`}
                  aria-hidden="true"
                >
                  <div className={`text-5xl font-black opacity-20 ${even ? "text-[var(--color-primary)]" : "text-white"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-[var(--color-border)] pt-10 text-center">
          <Link href="/services" className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold bg-[var(--color-secondary-dark)] text-white hover:bg-[var(--color-primary)] transition-colors text-sm">
            View all treatments &amp; pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
