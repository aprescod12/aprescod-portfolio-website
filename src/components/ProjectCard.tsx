// components/ProjectCard.tsx
// Purpose: Consistent, polished project card used on the Projects page.
// Includes: subtle hover lift + tags + optional link.

export type Project = {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    impact?: string; // Optional: adds a recruiter-friendly “why it matters” line
  };
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div
        className={[
          "rounded-2xl border border-white/10 bg-white/5 p-6",
          "transition-all duration-200",
          "hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.35)]",
        ].join(" ")}
      >
        {/* Project title */}
        <h3 className="text-lg font-semibold tracking-tight text-white/95">
          {project.title}
        </h3>
  
        {/* What you did (short + clear) */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
  
        {/* Why it matters (recruiter-friendly impact line) */}
        {project.impact ? (
          <p className="mt-3 text-sm text-zinc-200">
            <span className="text-zinc-400">Impact:</span> {project.impact}
          </p>
        ) : null}
  
        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
  
        {/* Optional external link (repo/demo) */}
        {project.link ? (
          <a
            className="mt-5 inline-flex text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View →
          </a>
        ) : null}
      </div>
    );
  }
  