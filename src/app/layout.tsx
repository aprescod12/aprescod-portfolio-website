import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DEFAULT_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  TWITTER_IMAGE,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: `${SITE_NAME} Engineering Portfolio`,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "Amiri Prescod",
    "electrical engineering",
    "biomedical engineering",
    "embedded systems",
    "biomedical sensing",
    "medical devices",
    "ESP32",
    "computer vision",
    "React Native",
    "engineering portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [TWITTER_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  email: "mailto:ajrprescod@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/amiri-prescod/",
    "https://github.com/aprescod12",
  ],
  jobTitle: "Electrical Engineer and Biomedical Engineering M.S. Candidate",
  description: SITE_DESCRIPTION,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Villanova University",
  },
  knowsAbout: [
    "Embedded systems",
    "Biomedical sensing",
    "Medical-device prototyping",
    "Signal acquisition",
    "Computer vision",
    "Mobile application development",
  ],
};

const themeInitializationScript = `
(function () {
  var theme = "dark";

  try {
    var storedTheme = window.localStorage.getItem("aprescod-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      theme = storedTheme;
    } else if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "light";
    }
  } catch (error) {
    if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "light";
    }
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          Skip to main content
        </a>

        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />

        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
