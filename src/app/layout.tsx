// app/layout.tsx
// This wraps every page in your app (navbar/footer + global styles)

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Amiri Prescod | Portfolio",
  description: "Portfolio Website for Amiri Prescod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The body contains the whole app */}
      <body className="min-h-screen">
        {/* Top navigation appears on every page */}
        <Navbar />

        {/* Main content area; children is the current page */}
        <main className="min-h-[calc(100vh-160px)]">{children}</main>

        {/* Footer appears on every page */}
        <Footer />
      </body>
    </html>
  );
}
