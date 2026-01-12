// app/track/page.tsx
// Purpose: Presents athletics professionally with clear metrics + achievements (recruiters like structure).

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function TrackPage() {
  return (
    <Container>
      {/* Page header */}
      <SectionHeading
        title="Track & Field"
        subtitle="Athletics has shaped how I work: consistency, feedback loops, and performance under pressure."
      />

      {/* Metrics row (quick scanning) */}
      <section className="grid gap-4 md:grid-cols-3">
        {/* Metric 1 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
          <p className="text-sm text-zinc-300">Primary Events</p>
          <p className="mt-2 text-xl font-semibold">Add your events</p>
          <p className="mt-2 text-sm text-zinc-300">
            Example: 200m / 400m / 4x400m
          </p>
        </div>

        {/* Metric 2 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
          <p className="text-sm text-zinc-300">Personal Best / Season Best</p>
          <p className="mt-2 text-xl font-semibold">Add your times</p>
          <p className="mt-2 text-sm text-zinc-300">
            Example: 45.XX (SB), 46.XX (PB)
          </p>
        </div>

        {/* Metric 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
          <p className="text-sm text-zinc-300">Leadership</p>
          <p className="mt-2 text-xl font-semibold">Add your role</p>
          <p className="mt-2 text-sm text-zinc-300">
            Example: mentoring, relay leadership, team contributions
          </p>
        </div>
      </section>

      {/* Achievements section (cards read well) */}
      <section className="mt-12">
        <SectionHeading
          title="Achievements"
          subtitle="Swap these placeholders with specific highlights (meet results, honors, championships, leadership)."
        />

        <div className="space-y-3">
          {/* Achievement card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="font-medium">Achievement title</p>
            <p className="mt-2 text-sm text-zinc-300">
              Short description (meet, placement, conference, relay, etc.).
            </p>
          </div>

          {/* Achievement card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="font-medium">Achievement title</p>
            <p className="mt-2 text-sm text-zinc-300">
              Short description (award, leadership, academic-athletic honor, etc.).
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
