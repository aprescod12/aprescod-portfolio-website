// components/SectionHeading.tsx
// Purpose: Consistent section titles + optional subtitle for a clean, recruiter-friendly hierarchy.

export default function SectionHeading({
    title,
    subtitle,
  }: {
    title: string;
    subtitle?: string;
  }) {
    return (
      <div className="mb-6">
        {/* Section title (bigger + bold for structure) */}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
  
        {/* Section subtitle (muted supporting text) */}
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-zinc-300 leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    );
  }
  