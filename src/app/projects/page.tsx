// src/app/projects/page.tsx

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Container>
      <SectionHeading
        title="Projects"
        subtitle="A selection of technical work across biomedical devices, embedded systems, and AI-enabled sensing."
      />

      {/* ✅ Featured project callout (back again) */}
      {featured ? (
        <section className="mb-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8">
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            Featured project
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            {featured.title}
          </h3>

          <p className="mt-3 max-w-3xl text-zinc-300 leading-relaxed">
            {featured.description}
          </p>

          {featured.impact ? (
            <p className="mt-3 text-zinc-200">
              <span className="text-zinc-400">Impact:</span> {featured.impact}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            {/* If it has a slug, go internal. Otherwise go external. */}
            {featured.slug ? (
              <Link
                href={`/projects/${featured.slug}`}
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 transition-colors"
              >
                View details →
              </Link>
            ) : featured.link ? (
              <a
                href={featured.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 transition-colors"
              >
                View details →
              </a>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Projects grid */}
      <section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold tracking-tight">Want to see code?</h3>
        <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
          Projects with demos have a “Code ↗” link on the card. Otherwise, click “View →” to open the repo.
        </p>
      </section>
    </Container>
  );
}