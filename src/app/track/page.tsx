import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import TrackPhotoCarousel from "@/components/TrackPhotoCarousel";
import {
  careerHighlights,
  coverageLinks,
  performanceMetrics,
  personalBests,
  trackPhotos,
} from "@/lib/track";

export const metadata: Metadata = {
  title: "Track & Field | Amiri Prescod",
  description:
    "Villanova sprint career, personal bests, BIG EAST achievements, and the connection between athletics and engineering.",
};

const athletePrinciples = [
  {
    number: "01",
    title: "Measure and adjust",
    description:
      "Sprint performance improves through timing, video, feedback, and small technical changes—the same iterative cycle I use when testing engineering systems.",
  },
  {
    number: "02",
    title: "Execute under pressure",
    description:
      "Championship racing taught me to trust preparation, make clear decisions, and perform when the margin for error is extremely small.",
  },
  {
    number: "03",
    title: "Raise the standard",
    description:
      "Team leadership is built through consistent habits, accountability, and contributing to an environment where everyone can perform at a higher level.",
  },
];

export default function TrackPage() {
  return (
    <Container>
      <section className="overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/0 p-6 md:p-9">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Villanova Track & Field · Sprints
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Sprinting shaped how I prepare, iterate, and perform as an engineer.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Balancing Villanova sprinting with electrical engineering required disciplined preparation,
              fast feedback, and consistent execution. Across four collegiate seasons, that approach led
              to conference titles, program-record performances, and a mindset I now bring to technical
              work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://villanova.com/sports/mens-track-and-field/roster/amiri-prescod/15878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-400"
              >
                View athlete profile ↗
              </a>
              <Link
                href="/projects/track-field-training-app"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                View training app case study →
              </Link>
            </div>
          </div>

          <TrackPhotoCarousel photos={trackPhotos} />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {performanceMetrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-zinc-950/35 p-5"
            >
              <p className="text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
              <h2 className="mt-2 text-sm font-medium text-zinc-100">{metric.label}</h2>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Performance
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Personal bests
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Verified championship marks across the primary sprint events, separated by indoor and
            outdoor competition.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {personalBests.map((result) => (
            <article
              key={result.event}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                  {result.season}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-500">Personal best</span>
              </div>

              <div className="mt-7 flex items-baseline gap-2">
                <p className="text-5xl font-semibold tracking-tight text-white">{result.time}</p>
                <span className="text-sm text-zinc-400">seconds</span>
              </div>
              <h3 className="mt-3 text-xl font-medium text-zinc-100">{result.event}</h3>
              <p className="mt-5 text-sm font-medium text-zinc-300">{result.meet}</p>
              <p className="mt-1 text-sm text-zinc-500">{result.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[minmax(260px,0.55fr)_minmax(0,1.45fr)]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Career timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Championship progression
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-300">
            The strongest results were built across multiple seasons—from early conference scoring to
            championship wins, record-list performances, and a career-best final year.
          </p>
        </div>

        <div className="relative space-y-4 before:absolute before:bottom-7 before:left-[1.15rem] before:top-7 before:w-px before:bg-white/10">
          {careerHighlights.map((highlight) => (
            <article
              key={`${highlight.season}-${highlight.title}`}
              className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 pl-16 sm:grid-cols-[140px_minmax(0,1fr)] sm:pl-16"
            >
              <span className="absolute left-4 top-7 h-3 w-3 rounded-full border-2 border-blue-300 bg-zinc-950 ring-4 ring-zinc-950" />
              <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
                {highlight.season}
              </p>
              <div>
                <h3 className="font-semibold tracking-tight text-white">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {highlight.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Student-athlete mindset
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The connection between sprinting and engineering
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Both disciplines reward deliberate preparation, measurable feedback, and reliable execution.
            The track made those principles tangible long before I began applying them to embedded,
            biomedical, and software systems.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {athletePrinciples.map((principle) => (
            <article
              key={principle.number}
              className="rounded-2xl border border-white/10 bg-zinc-950/30 p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
                {principle.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/15 via-blue-500/5 to-transparent p-7 md:p-9">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Built from firsthand experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Track & Field Training App
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
              My experience planning sprint sessions, strength work, and competition preparation informed
              a cross-platform app for logging track and lift workouts, managing training calendars, and
              reviewing athlete-specific performance data.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/projects/track-field-training-app"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-400"
            >
              View case study →
            </Link>
            <a
              href="https://github.com/aprescod12/track-training-app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              View code ↗
            </a>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Official sources
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Profile, records, and championship coverage
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Official Villanova Athletics sources documenting results, honors, program rankings, and
            conference championship performances.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {coverageLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>
              <p className="mt-5 text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300">
                {item.action} ↗
              </p>
            </a>
          ))}
        </div>
      </section>
    </Container>
  );
}
