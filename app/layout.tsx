import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: { default: "Northside Dental Practice | NHS & Private Dentist Manchester", template: "%s | Northside Dental" },
  description: "NHS and private dental care in Manchester. Check-ups, whitening, orthodontics and emergency appointments. GDC registered, CQC inspected.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[var(--color-primary)] focus:rounded focus:shadow-lg">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
