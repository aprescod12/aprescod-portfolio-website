// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Amiri Prescod | Portfolio",
  description:
    "Amiri Prescod is an Engineering Student at Villanova University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-dvh flex flex-col">
        
        {/* ✅ Structured Data for Google */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amiri Prescod",
              url: "https://amiriprescod.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/amiri-prescod/",
                "https://github.com/aprescod12"
              ],
              jobTitle: "Engineering Student",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Villanova University"
              }
            }),
          }}
        />

        <Navbar />

        <main className="flex-1 w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}