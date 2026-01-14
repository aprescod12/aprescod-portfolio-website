// app/page.tsx
// Purpose: Recruiter-first homepage with a strong headline, credibility blocks, and clear CTAs.

import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <Container>
      {/* PHOTO STRIP: horizontal, scrollable image row */}
<section className="mb-10">
  {/* Optional label so it feels intentional */}
  <p className="mb-3 text-xs uppercase tracking-wider text-zinc-400">
    A glimpse into my work & athletics
  </p>

  {/* Subtle hint for desktop users */}
  <p className="mt-2 text-xs text-zinc-400">
    Scroll →
  </p>

  {/* Horizontal scroll container */}
  <div
    className="
      flex gap-4 overflow-x-auto pb-2
      scroll-smooth
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
  >
    {/* Image 1 */}
    <div className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src="/home/websitegradpic.JPG"
        alt="Amiri Prescod — project or lab photo"
        fill
        priority
        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>

    {/* Image 2 */}
    <div className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src="/home/webformal1.JPG"
        alt="Amiri Prescod — track and field"
        fill
        priority
        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>

    {/* Image 3 */}
    <div className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src="/home/websitetrack2.jpg"
        alt="Amiri Prescod — another highlight"
        fill
        priority
        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>

    {/* Image 4 */}
    <div className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src="/home/webformalpic2.JPG"
        alt="Amiri Prescod — another highlight"
        fill
        priority
        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>

    {/* Image 5 */}
    <div className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src="/home/websitetrack.JPG"
        alt="Amiri Prescod — another highlight"
        fill
        priority
        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>

    {/* Image 6 */}
    <div className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src="/home/websitetrack3.jpg"
        alt="Amiri Prescod — another highlight"
        fill
        priority
        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>
  </div>

  {/* Optional: subtle caption line (remove if you want it cleaner) */}
    <p className="mt-3 text-sm text-zinc-400">
      Engineering + athletics — disciplined execution in both.
    </p>
</section>

      {/* HERO: first impression (headline + positioning + CTAs) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8 md:p-12">
        {/* Decorative glow (purely visual) */}
        <div className="pointer-events-none absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Your positioning line */}
        <p className="text-sm text-zinc-300">
          Amiri Prescod • International Student-Athlete • Med-tech + AI
        </p>

        {/* Strong recruiter headline */}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Engineering <span className="text-blue-400">medical devices</span>{" "}
          with <span className="text-blue-400">AI-ready</span> data in mind.
        </h1>

        {/* One-paragraph summary (keep it skimmable) */}
        <p className="mt-4 max-w-2xl text-zinc-300 leading-relaxed">
          I build and learn across embedded systems, sensing, and data-driven methods—
          aiming to ship reliable, real-world technology that improves health outcomes.
        </p>

        {/* Primary actions (recruiters want fast navigation) */}
        <div className="mt-6 flex flex-wrap gap-3">
          {/* Primary CTA */}
          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 transition-colors"
          >
            View Projects
          </a>

          {/* Secondary CTA */}
          <a
            href="/track"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            Track & Field
          </a>
        </div>

        {/* Credibility chips (quick proof without a wall of text) */}
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

      {/* VALUE SECTION: highlights recruiters care about (what, how, why) */}
      <section className="mt-14">
        <SectionHeading
          title="What I bring"
          subtitle="A quick snapshot of the technical + execution strengths I’m building."
        />

        {/* Three pillar cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Pillar 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h3 className="font-semibold tracking-tight">Systems thinking</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              I focus on end-to-end reliability—from sensor signals to usable outputs.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h3 className="font-semibold tracking-tight">Technical execution</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Building with practical constraints: power, latency, and real-world noise.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h3 className="font-semibold tracking-tight">Performance mindset</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Athlete habits translate: consistency, feedback loops, and performing under pressure.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
