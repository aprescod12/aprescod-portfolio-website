import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/projects";
import {
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  TWITTER_IMAGE,
} from "@/lib/site";

type ProjectLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>;

export async function generateMetadata({
  params,
}: Pick<ProjectLayoutProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: `Project Not Found | ${SITE_NAME}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title} Case Study | ${SITE_NAME}`;
  const description = project.description;
  const url = `${SITE_URL}/projects/${slug}`;
  const keywords = [project.category, ...project.tags].filter(
    (keyword): keyword is string => Boolean(keyword)
  );

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [TWITTER_IMAGE],
    },
  };
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return children;
}
