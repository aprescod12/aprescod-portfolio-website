// components/Navbar.tsx
// Purpose: Sticky navigation bar across all pages.
// Includes: links to each page + a prominent Resume button for recruiters.

import Link from "next/link";

const navLink = "text-sm text-zinc-300 hover:text-white transition-colors";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      {/* Keeps navbar content aligned with the same width as the rest of the site */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand / Name - clicking returns to homepage */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
        >
          Amiri Prescod
        </Link>

        {/* Right side: page links + resume CTA */}
        <nav className="flex items-center gap-3">
          {/* Main pages */}
          <Link className={navLink} href="/">
            Home
          </Link>
          <Link className={navLink} href="/projects">
            Projects
          </Link>
          <Link className={navLink} href="/track">
            Track
          </Link>

          {/* Small divider to separate the Resume button visually */}
          <div className="mx-1 hidden sm:block h-4 w-px bg-white/10" />

          {/* Resume button: opens PDF in new tab (recruiter-friendly) */}
          <a
            href="/Amiri-Prescod-Resume.pdf" // File must exist in /public
            target="_blank" // Opens in a new tab so they stay on your site
            rel="noreferrer" // Security best practice with target=_blank
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
