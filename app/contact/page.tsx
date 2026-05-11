import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Book an appointment</h1>
        <p className="text-[var(--color-text-muted)] mb-10">For routine appointments, use the form below. For dental emergencies, please call us directly.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-6">
            <div className="bg-[var(--color-secondary-dark)] text-white rounded-lg p-6">
              <p className="font-semibold text-lg mb-1">🚨 Dental emergency?</p>
              <p className="text-sm text-white/80 mb-3">We keep emergency slots available each day. Call us first thing.</p>
              <a href="tel:01610000001" className="font-bold text-xl hover:underline">0161 000 0001</a>
            </div>
            <div className="bg-[var(--color-surface)] rounded-lg p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">Opening hours</p>
              <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
                <li>Monday – Friday: 8:30am – 5:30pm</li>
                <li>Saturday: 9:00am – 1:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="bg-[var(--color-surface)] rounded-lg p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">Location</p>
              <p className="text-sm text-[var(--color-text-muted)]">Didsbury, Manchester M20. Free parking available. Close to Didsbury Village tram stop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
