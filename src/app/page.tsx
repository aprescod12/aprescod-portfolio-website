// app/page.tsx
// Purpose: Recruiter-first homepage with a strong headline, credibility blocks, and clear CTAs.

import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import HomePhotoCarousel from "@/components/HomePhotoCarousel";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured);

  return (
    <Container>
      {/* HERO: first impression (headline + positioning + CTAs) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8 md:p-12">
        <div className="pointer-events-none absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <p className="text-sm text-zinc-300">
          B.S. Electrical Engineering • M.S. Biomedical Engineering Candidate • Computer Science Minor • Student-Athlete
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Building <span className="text-blue-400">embedded and biomedical systems</span>{" "}
          that turn <span className="text-blue-400">sensor data</span> into reliable, real-world tools.
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300 leading-relaxed">
          I design embedded and sensing systems for healthcare and real-world applications, with experience spanning hardware integration, signal acquisition, web and mobile development, software, and data analysis.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 transition-colors"
          >
            View Projects
          </a>

          <a
            href="/APrescod_Resume copy.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            View Resume
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            Embedded + Sensors
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            Biomedical Devices
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            Data + ML Foundations
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            Athlete Mindset: Iteration & Discipline
          </span>
        </div>
      </section>

      {/* CREDENTIALS: compact education and background summary */}
      <section aria-label="Education and credentials" className="mt-6">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 lg:border-r lg:border-white/10">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Undergraduate</p>
            <p className="mt-2 font-semibold text-white">B.S. Electrical Engineering</p>
            <p className="mt-1 text-sm text-zinc-300">Villanova University</p>
          </div>
          <div className="border-t border-white/10 p-5 sm:border-l sm:border-t-0 lg:border-l-0 lg:border-r">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Graduate Studies</p>
            <p className="mt-2 font-semibold text-white">M.S. Biomedical Engineering</p>
            <p className="mt-1 text-sm text-zinc-300">Candidate</p>
          </div>
          <div className="border-t border-white/10 p-5 lg:border-t-0 lg:border-r">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Technical Breadth</p>
            <p className="mt-2 font-semibold text-white">Computer Science</p>
            <p className="mt-1 text-sm text-zinc-300">Minor</p>
          </div>
          <div className="border-t border-white/10 p-5 sm:border-l lg:border-l-0 lg:border-t-0">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Athletics</p>
            <p className="mt-2 font-semibold text-white">Villanova Track & Field</p>
            <p className="mt-1 text-sm text-zinc-300">Student-Athlete</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT: concise homepage proof point */}
      {featuredProject ? (
        <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-white/5 p-7 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-300">Featured technical work</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {featuredProject.title}
              </h2>
              <p className="mt-3 max-w-3xl text-zinc-300 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Explore project →
            </Link>
          </div>
        </section>
      ) : null}

      {/* TECHNICAL FOCUS: concise capability overview */}
      <section className="mt-14">
        <SectionHeading
          title="Technical focus areas"
          subtitle="A concise overview of the disciplines that connect my projects and engineering work."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h3 className="font-semibold tracking-tight">Embedded Systems</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              ESP32 development, finite state machines, real-time control, peripheral integration, and hardware-software coordination.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h3 className="font-semibold tracking-tight">Biomedical Sensing</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              fNIRS, heart rate and SpO₂ sensing, IMUs, signal quality, and wearable medical-device prototyping.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h3 className="font-semibold tracking-tight">Software and Data</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Python, React Native, Supabase, computer vision, data processing, and web and mobile application development.
            </p>
          </div>
        </div>
      </section>

      <HomePhotoCarousel />

      {/* CONTACT CTA: clear next step without duplicating the global footer */}
      <section className="mt-14 mb-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/15 via-white/5 to-white/0 p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-blue-300">Let&apos;s connect</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Have an engineering opportunity or project in mind?
          </h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            I&apos;m interested in work involving embedded systems, biomedical sensing, software, and healthcare technology.
          </p>
        </div>
        <a
          href="mailto:ajrprescod@gmail.com"
          className="mt-6 inline-flex flex-shrink-0 items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:mt-0"
        >
          Send an email →
        </a>
      </section>
    </Container>
  );
}
