// components/ProjectCard.tsx

import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
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

      {/* Links */}
      <div className="mt-5 flex items-center gap-4">
        {project.slug ? (
          <>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              View →
            </Link>

            {/* Only show Code when slug exists */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Code ↗
              </a>
            ) : null}
          </>
        ) : project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View →
          </a>
        ) : null}
      </div>
    </div>
  );
}