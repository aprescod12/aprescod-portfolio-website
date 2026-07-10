type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  level?: "h1" | "h2";
};

export default function SectionHeading({
  title,
  subtitle,
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className="mb-6">
      <Heading className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </Heading>

      {subtitle ? (
        <p className="mt-2 max-w-2xl leading-relaxed text-zinc-300">{subtitle}</p>
      ) : null}
    </div>
  );
}
