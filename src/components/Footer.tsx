const footerLinkClass =
  "rounded-md transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Amiri Prescod</p>

        <div className="flex flex-wrap gap-5">
          <a
            className={footerLinkClass}
            href="https://www.linkedin.com/in/amiri-prescod/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={footerLinkClass}
            href="https://github.com/aprescod12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className={footerLinkClass} href="mailto:ajrprescod@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
