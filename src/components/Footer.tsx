// components/Footer.tsx
// Purpose: Simple footer with polished spacing + link area for recruiter contact routes.

export default function Footer() {
    return (
      <footer className="border-t border-white/10">
        {/* Footer content aligned with site width */}
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          {/* Copyright line */}
          <p>© {new Date().getFullYear()} Amiri Prescod</p>
  
          {/* Replace # with your real links */}
          <div className="flex gap-5">
            <a
              className="hover:text-white transition-colors"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="hover:text-white transition-colors" href="mailto:your@email.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  