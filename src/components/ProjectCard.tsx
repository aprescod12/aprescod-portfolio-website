// components/ProjectCard.tsx

import Link from "next/link";
import { getProjectLinkLabel, type Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const resourceLabel = getProjectLinkLabel(project);
  const hasActions = Boolean(project.slug || (project.link && resourceLabel));
  const isJobIntelligenceProject =
    project.slug === "personal-job-intelligence-platform";

  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 p-6",
        "transition-all duration-200",
        "hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.35)]",
      ].join(" ")}
    >
      <h3 className="text-lg font-semibold tracking-tight text-white/95">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
        {project.description}
      </p>

      {isJobIntelligenceProject ? (
        <p className="mt-3 rounded-xl border border-blue-400/15 bg-blue-400/5 px-4 py-3 text-sm leading-relaxed text-zinc-200">
          <span className="font-medium text-blue-300">Learning objective:</span>{" "}
          Use a real product workflow to learn how AI agents can be designed,
          constrained, evaluated, and integrated into dependable software.
        </p>
      ) : null}

      {project.impact ? (
        <p className="mt-3 text-sm text-zinc-200">
          <span className="text-zinc-400">Impact:</span> {project.impact}
        </p>
      ) : null}

      {project.collaborated ? (
        <p className="mt-3 text-sm text-zinc-200">
          <span className="text-zinc-400">Collaborated With:</span>{" "}
          {project.collaborated}
        </p>
      ) : null}

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

      {hasActions ? (
        <div className="mt-5 flex flex-wrap items-center gap-4">
          {project.slug ? (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              View case study →
            </Link>
          ) : null}

          {project.link && resourceLabel ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={[
                "inline-flex text-sm font-medium transition-colors",
                project.slug
                  ? "text-zinc-300 hover:text-white"
                  : "text-blue-400 hover:text-blue-300",
              ].join(" ")}
            >
              {resourceLabel} ↗
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
