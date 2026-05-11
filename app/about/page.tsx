import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-6">About Northside Dental Practice</h1>
        <div className="prose prose-slate max-w-none space-y-4 text-[var(--color-text)]">
          <p>Northside Dental Practice has been caring for families in Didsbury and the wider south Manchester area for over 15 years. Our team of three GDC-registered dentists is committed to providing high-quality dental care in a calm, modern environment.</p>
          <p>We welcome both NHS and private patients and understand that visiting the dentist can feel daunting. Our approach is gentle, unhurried, and fully transparent — we explain every procedure before we start and answer every question you have.</p>
          <p>We are inspected and rated by the Care Quality Commission (CQC) and most recently received a &lsquo;Good&rsquo; rating across all domains. All our dentists are registered with the General Dental Council (GDC) and committed to ongoing professional development.</p>
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mt-6">Our commitment to you</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>GDC registered dentists and hygienists</li>
            <li>CQC inspected and rated Good</li>
            <li>NHS and private patients welcome</li>
            <li>Same-day emergency appointments when available</li>
            <li>Modern digital X-rays and equipment</li>
            <li>Child-friendly appointments available</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-md transition-colors">Book an appointment</a>
        </div>
      </div>
    </section>
  );
}
