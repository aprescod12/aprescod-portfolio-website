import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  TWITTER_IMAGE,
} from "@/lib/site";

const title = `Engineering Projects | ${SITE_NAME}`;
const description =
  "Engineering case studies across biomedical devices, embedded systems, computer vision, mobile development, and sensing technology.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/projects`,
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

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
