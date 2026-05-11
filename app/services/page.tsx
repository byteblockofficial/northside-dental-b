import type { Metadata } from "next";
import Treatments from "@/components/Treatments";
export const metadata: Metadata = { title: "Dental treatments" };

export default function ServicesPage() {
  return (
    <div className="py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Our dental treatments</h1>
        <p className="text-[var(--color-text-muted)]">NHS and private options available. Please call 0161 000 0001 to discuss which is right for you.</p>
      </div>
      <Treatments />
    </div>
  );
}
