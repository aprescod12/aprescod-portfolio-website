// app/projects/page.tsx
// Purpose: Recruiter-friendly projects page with a featured project and strong scanning layout.

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard, { Project } from "@/components/ProjectCard";

const featured: Project = {
  title: "fNIRS Device (Flexible PCB)",
  description:
    "Working on a wearable-friendly fNIRS system with a focus on hardware integration, signal fidelity, and real-world usability.",
  impact:
    "Designed for practical measurement workflows and improved repeatability in experimental data collection.",
  tags: ["Biomedical", "Embedded", "Hardware"],
  link: "#",
};

const projects: Project[] = [
  {
    title: "Bat Tracking System (Jetson + Multi-Camera)",
    description:
      "Building a multi-camera pipeline with synchronization and state estimation to infer motion/orientation.",
    impact:
      "Improves measurement accuracy and supports performance feedback using consistent tracking.",
    tags: ["Computer Vision", "Edge AI", "State Estimation"],
    link: "#",
  },
  {
    title: "Wearable Safety Device (ESP32)",
    description:
      "Exploring low-power sensing with heart-rate monitoring and fall detection for longer battery life.",
    impact:
      "Designed to be reliable and power-efficient for continuous real-world monitoring.",
    tags: ["ESP32", "Low Power", "Sensors"],
    link: "#",
  },
  {
    title: "Signal Processing Exploration",
    description:
      "Prototyping approaches to clean and interpret noisy physiological signals for downstream analysis.",
    impact:
      "Creates more usable inputs for analytics/ML and reduces false readings in challenging environments.",
    tags: ["Signal Processing", "Data", "Prototyping"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <Container>
      {/* Page header */}
      <SectionHeading
        title="Projects"
        subtitle="A selection of technical work across biomedical devices, embedded systems, and AI-enabled sensing."
      />

      {/* Featured project callout (recruiters love a “top story”) */}
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

        <p className="mt-3 text-zinc-200">
          <span className="text-zinc-400">Impact:</span> {featured.impact}
        </p>

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
          <a
            href={featured.link}
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 transition-colors"
          >
            View details →
          </a>
        </div>
      </section>

      {/* Projects grid (clean scanning) */}
      <section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Recruiter-friendly note: directs them to code */}
      <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold tracking-tight">Want to see code?</h3>
        <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
          Add your GitHub link in the footer and replace each project “View →” link with a repo or demo.
        </p>
      </section>
    </Container>
  );
}
