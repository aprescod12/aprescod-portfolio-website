import { notFound } from "next/navigation";
import { getProjectBySlug, demoSlugs } from "@/lib/projects";

export function generateStaticParams() {
  return demoSlugs.map((slug) => ({ slug }));
}

export default async function ProjectDemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

      <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
        {project.description}
      </p>

      {/* GitHub button */}
      {project.link ? (
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            View code on GitHub ↗
          </a>
        </div>
      ) : null}

      {/* Videos */}
      {project.videos?.length ? (
        <div className="mt-14 space-y-16">
          {project.videos.map((v, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex justify-center">
                <div className="w-full max-w-2xl aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg">
                  {v.youtubeId ? (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.caption ?? `${project.title} demo video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : v.src ? (
                    <video controls className="h-full w-full object-contain">
                      <source src={v.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                </div>
              </div>

              {v.caption ? (
                <p className="mt-4 text-sm text-zinc-300 text-center">
                  {v.caption}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-14 text-sm text-zinc-400">Demo videos coming soon.</p>
      )}
    </div>
  );
}