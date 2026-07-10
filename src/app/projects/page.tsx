// src/app/projects/page.tsx

import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Container>
      <SectionHeading
        title="Projects"
        subtitle="A selection of technical work across biomedical devices, embedded systems, computer vision, and software development."
      />

      {featured ? (
        <section className="mb-14 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/0 p-7 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-300">
                Featured biomedical system
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-3xl text-zinc-300 leading-relaxed">
                {featured.description}
              </p>

              {featured.impact ? (
                <p className="mt-4 max-w-3xl text-zinc-200 leading-relaxed">
                  <span className="text-zinc-400">Impact:</span> {featured.impact}
                </p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                {featured.slug ? (
                  <Link
                    href={`/projects/${featured.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                  >
                    View case study →
                  </Link>
                ) : featured.link ? (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                  >
                    View project ↗
                  </a>
                ) : null}
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-zinc-950/40 p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-400">
                Project snapshot
              </p>
              <dl className="mt-4 space-y-4 text-sm">
                {featured.category ? (
                  <div>
                    <dt className="text-zinc-500">Category</dt>
                    <dd className="mt-1 font-medium text-zinc-100">{featured.category}</dd>
                  </div>
                ) : null}
                {featured.status ? (
                  <div>
                    <dt className="text-zinc-500">Status</dt>
                    <dd className="mt-1 font-medium text-zinc-100">{featured.status}</dd>
                  </div>
                ) : null}
                {featured.context ? (
                  <div>
                    <dt className="text-zinc-500">Context</dt>
                    <dd className="mt-1 font-medium text-zinc-100">{featured.context}</dd>
                  </div>
                ) : null}
                {featured.year ? (
                  <div>
                    <dt className="text-zinc-500">Year</dt>
                    <dd className="mt-1 font-medium text-zinc-100">{featured.year}</dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          </div>
        </section>
      ) : null}

      <section>
        <div className="mb-6 max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-zinc-400">Project portfolio</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Selected engineering work
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Additional projects spanning embedded control, biomedical research, mobile development,
            computer vision, and connected systems.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
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
