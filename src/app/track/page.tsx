"use client";

// app/track/page.tsx
// Purpose: Presents athletics professionally with clear metrics + achievements.
// Update: Split metrics + a cycling photo slot (carousel) for a more visual, recruiter-friendly layout.

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function TrackPage() {
  // List of photos to cycle through (store these in /public/track)
  const photos = useMemo(
    () => [
      { src: "/track/1.jpg", alt: "Amiri Prescod competing — track photo 1" },
      { src: "/track/2.jpg", alt: "Amiri Prescod competing — track photo 2" },
      { src: "/track/3.jpg", alt: "Amiri Prescod competing — track photo 3" },
      { src: "/track/4.2.jpg", alt: "Amiri Prescod competing — track photo 4" },
    ],
    []
  );

  // Tracks which photo is currently shown
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically cycle photos every 7.5 seconds
  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 7500);

    // Cleanup timer when component unmounts
    return () => window.clearInterval(id);
  }, [photos.length]);

  // Helper functions to move back/forward manually
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % photos.length);

  return (
    <Container>
      {/* Page header */}
      <SectionHeading
        title="Track & Field"
        subtitle="Athletics has shaped how I work: consistency, determination, and performance under pressure."
      />

      {/* SPLIT LAYOUT: Metrics (left) + Cycling Photo Slot (right) */}
      <section className="grid gap-4 md:grid-cols-6">
        {/* LEFT: Metrics stack */}
        <div className="md:col-span-3 grid gap-4">
          {/* Metric 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="text-sm text-zinc-300">Primary Events</p>
            <p className="mt-2 text-xl font-semibold">60m / 100m / 200m</p>
            <p className="mt-2 text-sm text-zinc-300">Short Sprinter.</p>
          </div>

          {/* Metric 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="text-sm text-zinc-300">Personal Best / Season Best</p>
            <p className="mt-2 text-xl font-semibold">
              PBs: 6.75s, 10.48s, 21.39s
            </p>
            <p className="mt-2 text-sm text-zinc-300">SBs: N/A, N/A, N/A</p>
          </div>

          {/* Metric 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="text-sm text-zinc-300">Leadership</p>
            <p className="mt-2 text-xl font-semibold">Leadership Team Member</p>
            <p className="mt-2 text-sm text-zinc-300">
              Setting a Culture of Success.
            </p>
          </div>
        </div>

        {/* RIGHT: Cycling photo slot */}
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            {/* Header row: title + small controls */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-200">
                Competition Highlights
              </p>

              {/* Manual controls (optional but nice) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200 hover:bg-white/10 transition-colors"
                  aria-label="Previous photo"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200 hover:bg-white/10 transition-colors"
                  aria-label="Next photo"
                >
                  →
                </button>
              </div>
            </div>

            {/* Image frame */}
            <div className="mt-3 relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
              {/* The current photo */}
              <Image
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                priority
              />

              {/* Subtle bottom fade for readability */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent" />

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                {photos.map((_, i) => (
                  <span
                    key={i}
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      i === activeIndex ? "bg-white" : "bg-white/30",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            {/* Small caption line */}
            <p className="mt-3 text-xs text-zinc-400">
              Swipe/scroll on mobile, or use arrows to cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements section (cards read well) */}
      <section className="mt-12">
        <SectionHeading
          title="Achievements"
        />

        <div className="space-y-3">
          {/* Achievement card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="font-medium">Big East Conference Champion: 60m</p>
            <p className="mt-2 text-sm text-zinc-300">
              Won 60m title in 2024 running a PB time of 6.75.
            </p>
          </div>

          {/* Achievement card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="font-medium">Big East Conference Champion: 100m</p>
            <p className="mt-2 text-sm text-zinc-300">
              Won 100m title in 2024 at the Villanova Stadium, running a PB time of 10.48. Proctecting Home Ground \\//
            </p>
          </div>

          {/* Achievement card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="font-medium">6x Big East Medalist</p>
            <p className="mt-2 text-sm text-zinc-300">
              Holder of 6 Big East Conference medals across primary events: 2 Gold, 1 Silver, 3 Bronzes.
            </p>
          </div>

          {/* Achievement card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="font-medium">Consistent Point Scorer</p>
            <p className="mt-2 text-sm text-zinc-300">
              Earned points for the Wildcats at Conference meets in 7 races.
            </p>
          </div>
        </div>
      </section>

            {/* LINKS & COVERAGE SECTION */}
            <section className="mt-12">
        <SectionHeading
          title="Links & Coverage"
          subtitle="External articles and coverage highlighting competitive performances and milestones."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {/* Link card 1 */}
          <a
            href="https://villanova.com/sports/mens-track-and-field/roster/amiri-prescod/15878"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
          >
            <p className="font-medium">
              Athlete Profile
            </p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              My Villanova Athletics Athlete Profile showing results, achievements and related articles.
            </p>
            <p className="mt-3 text-sm font-medium text-blue-400">
              Go to Profile →
            </p>
          </a>

          {/* Link card 2 */}
          <a
            href="https://villanova.com/news/2024/5/11/mens-track-field-bolinsky-dolan-murphy-and-prescod-make-history-lead-wildcats-to-second-place-team-finish-at-big-east-championships-on-saturday-afternoon.aspx"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
          >
            <p className="font-medium">
              Big East Outdoor Championships 2024 — 100m
            </p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Meet recap covering the 100m conference title at Villanova Stadium.
            </p>
            <p className="mt-3 text-sm font-medium text-blue-400">
              Read article →
            </p>
          </a>

          {/* Link card 3 */}
          <a
            href="https://villanova.com/news/2024/2/24/mens-track-field-mens-track-field-wins-four-gold-medals-tallies-seven-podium-performances-at-big-east-championships.aspx"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
          >
            <p className="font-medium">
            Big East Outdoor Championships 2024 — 60m
            </p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
            Meet recap covering the 60m conference title and indoor season dominance.
            </p>
            <p className="mt-3 text-sm font-medium text-blue-400">
              Read Article →
            </p>
          </a>

          {/* Link card 4 */}
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
  {/* Card title */}
  <p className="font-medium">
    All Time Performer
  </p>

  {/* Card description */}
  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
    Rewriting the Villanova Athletics History Book in the 60m and 100m.
  </p>

  {/* Action links */}
  <div className="mt-4 flex flex-wrap gap-4">
    {/* Link 1 */}
    <a
      href="https://s3.us-east-2.amazonaws.com/sidearm.nextgen.sites/villanova.com/documents/2019/10/28/60_meters.pdf"
      target="_blank"
      rel="noreferrer"
      className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
    >
      60m All Time Performance List →
    </a>

    {/* Link 2 */}
    <a
      href="https://s3.us-east-2.amazonaws.com/sidearm.nextgen.sites/villanova.com/documents/2019/10/28/100_meters.pdf"
      target="_blank"
      rel="noreferrer"
      className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
    >
      100m All Time Performance List →
    </a>
  </div>
</div>
        </div>
      </section>
    </Container>
  );
}
