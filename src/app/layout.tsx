import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}