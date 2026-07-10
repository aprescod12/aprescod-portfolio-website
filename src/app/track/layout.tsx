import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  TWITTER_IMAGE,
} from "@/lib/site";

const title = `Track & Field | ${SITE_NAME}`;
const description =
  "Villanova sprint career, personal bests, BIG EAST achievements, and the connection between athletics, engineering, and product development.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/track",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/track`,
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

export default function TrackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
