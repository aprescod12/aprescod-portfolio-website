import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { demoSlugs, getProjectBySlug, getProjectLinkLabel } from "@/lib/projects";

const architectureDiagrams: Record<
  string,
  { src: string; alt: string; disclaimer: string }
> = {
  "track-field-training-app": {
    src: "/projects/track-field-system-flow.svg",
    alt: "System-flow diagram showing the Track and Field Training App's Expo client, application workflows, local session persistence, and Supabase backend.",
    disclaimer:
      "AI-generated system diagram based on the project's verified architecture and implementation.",
  },
  "afa-event-staffing-platform": {
    src: "/projects/afa-staffing-system-flow.svg",
    alt: "Architecture diagram showing student and supervisor workflows passing through Django staffing rules to PostgreSQL, Redis, Celery, notifications, and reporting services.",
    disclaimer:
      "System diagram based on the project's verified repository architecture and implementation.",
  },
  "personal-job-intelligence-platform": {
    src: "/projects/job-intelligence-system-flow.svg",
    alt: "Architecture diagram showing resume and job inputs moving through controlled Django extraction, review, verification, matching, candidate snapshots, and application tracking, with future agent capabilities clearly separated as roadmap work.",
    disclaimer:
      "System diagram based on the project's verified repository implementation and documented seven-agent roadmap.",
  },
  "medical-monitoring-safety-device": {
    src: "/projects/medical-monitoring-system-flow.svg",
    alt: "Architecture diagram showing biomedical sensors and user input flowing through an ESP32 to biometric processing, fall detection, OLED feedback, alert behavior, and low-power control.",
    disclaimer:
      "AI-generated system diagram based on the project's verified architecture and implementation.",
  },
  "baseball-bat-tracking": {
    src: "/projects/baseball-tracking-system-flow.svg",
    alt: "Architecture diagram showing dual-camera and IMU capture, synchronization, NVIDIA Jetson processing, sensor fusion, 3D motion reconstruction, and swing-analysis outputs.",
    disclaimer:
      "AI-generated system diagram adapted from the project report and verified project architecture.",
  },
  "esp32-elevator": {
    src: "/projects/elevator-system-flow.svg",
    alt: "Architecture diagram showing floor-call buttons, ESP32 control, interrupt-driven request handling, finite-state logic, SCAN scheduling, non-blocking timing, LED indicators, and serial monitoring.",
    disclaimer:
      "AI-generated system diagram based on the project's verified architecture and implementation.",
  },
  "esp32-alarm": {
    src: "/projects/alarm-clock-system-flow.svg",
    alt: "Architecture diagram showing Wi-Fi and NTP synchronization, physical alarm controls, ESP32 processing, finite-state alarm logic, OLED feedback, and I2S audio output.",
    disclaimer:
      "AI-generated system diagram based on the project's verified architecture and implementation.",
  },
};

export function generateStaticParams() {
  return demoSlugs.map((slug) => ({ slug }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const resourceLabel = getProjectLinkLabel(project);
  const architectureDiagram = project.slug
    ? architectureDiagrams[project.slug]
    : undefined;
  const isJobIntelligenceProject =
    project.slug === "personal-job-intelligence-platform";
  const snapshotItems = [
    { label: "Category", value: project.category },
    { label: "Status", value: project.status },
    { label: "Context", value: project.context },
    { label: "Year", value: project.year },
  ].filter((item) => item.value);

  return (
    <Container>
      <Link
        href="/projects"
        className="inline-flex text-sm font-medium text-zinc-400 transition-colors hover:text-white"
      >
        ← Back to projects
      </Link>

      <section className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-300">Project case study</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-zinc-300 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && resourceLabel ? (
              <div className="mt-7">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                >
                  {resourceLabel} ↗
                </a>
              </div>
            ) : null}
          </div>

          {snapshotItems.length || project.collaborated ? (
            <aside className="rounded-2xl border border-white/10 bg-zinc-950/40 p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-400">Project snapshot</p>
              <dl className="mt-4 space-y-4 text-sm">
                {snapshotItems.map((item) => (
                  <div key={item.label}>
                    <dt className="text-zinc-500">{item.label}</dt>
                    <dd className="mt-1 font-medium text-zinc-100">{item.value}</dd>
                  </div>
                ))}
                {project.collaborated ? (
                  <div>
                    <dt className="text-zinc-500">Collaborators</dt>
                    <dd className="mt-1 leading-relaxed text-zinc-200">{project.collaborated}</dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          ) : null}
        </div>
      </section>

      {isJobIntelligenceProject ? (
        <section className="mt-8 rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/5 to-white/0 p-7 md:p-8">
          <p className="text-xs uppercase tracking-wider text-blue-300">Learning objective</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Learning to implement AI agents inside real software workflows
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-zinc-300">
            I started this project to move beyond isolated AI prompts and learn how agentic systems are actually designed and integrated into dependable applications. The job-search problem provides a practical environment for learning orchestration, structured tool boundaries, stateful workflows, evidence and provenance, deterministic fallback, evaluation, human approval gates, and safe coordination between specialized AI-assisted components.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-zinc-300">
            The seven-agent architecture is being implemented incrementally inside one controlled Django application so that each capability can be tested and understood before broader automation is introduced.
          </p>
        </section>
      ) : null}

      {project.caseStudy ? (
        <>
          <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Overview</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Project scope
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-wider text-zinc-400">System details</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
                {project.caseStudy.systemDetails.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {architectureDiagram ? (
            <section className="mt-14">
              <p className="text-xs uppercase tracking-wider text-zinc-400">System flow</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Architecture and system flow
              </h2>
              <figure className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 md:p-4">
                <Image
                  src={architectureDiagram.src}
                  alt={architectureDiagram.alt}
                  width={1536}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="h-auto w-full rounded-2xl"
                  unoptimized
                />
                <figcaption className="px-2 pb-1 pt-3 text-xs leading-relaxed text-zinc-500">
                  {architectureDiagram.disclaimer}
                </figcaption>
              </figure>
            </section>
          ) : null}

          <section className="mt-14">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Engineering focus</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Key design and implementation work
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.caseStudy.engineeringFocus.map((focus, index) => (
                <article
                  key={focus}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{focus}</p>
                </article>
              ))}
            </div>
          </section>

          {project.caseStudy.sections?.length ? (
            <section className="mt-14">
              <p className="text-xs uppercase tracking-wider text-zinc-400">Case study</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Engineering progression and roadmap
              </h2>
              <div className="mt-6 space-y-5">
                {project.caseStudy.sections.map((section, index) => (
                  <article
                    key={section.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
                  >
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
                          {String(index + 1).padStart(2, "0")}
                          {section.eyebrow ? ` · ${section.eyebrow}` : ""}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                          {section.title}
                        </h3>
                        {section.body ? (
                          <p className="mt-4 leading-relaxed text-zinc-300">
                            {section.body}
                          </p>
                        ) : null}
                      </div>

                      {section.bullets?.length ? (
                        <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {project.caseStudy.note ? (
            <section className="mt-10 rounded-2xl border border-amber-300/15 bg-amber-300/5 p-6">
              <p className="text-sm leading-relaxed text-zinc-300">{project.caseStudy.note}</p>
            </section>
          ) : null}
        </>
      ) : null}

      {project.videos?.length ? (
        <section className="mt-14">
          <p className="text-xs uppercase tracking-wider text-zinc-400">Demonstrations</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Project videos
          </h2>
          <div className="mt-6 space-y-8">
            {project.videos.map((video, index) => (
              <article
                key={`${video.youtubeId ?? video.src}-${index}`}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6"
              >
                <div className="mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg">
                  {video.youtubeId ? (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.caption ?? `${project.title} demo video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : video.src ? (
                    <video controls className="h-full w-full object-contain">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                </div>

                {video.caption ? (
                  <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-zinc-300">
                    {video.caption}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="my-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div>
          <h2 className="font-semibold tracking-tight text-white">Explore more engineering work</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Return to the project portfolio to compare systems, software, and research experience.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          View all projects →
        </Link>
      </section>
    </Container>
  );
}