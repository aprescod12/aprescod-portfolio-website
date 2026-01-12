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
              href="https://www.linkedin.com/in/amiri-prescod/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_contact_details%3B0zVeVcROSOaK1367QKVCcQ%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-white transition-colors"
              href="https://github.com/aprescod12"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="hover:text-white transition-colors" href="mailto:ajrprescod@gmail.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  