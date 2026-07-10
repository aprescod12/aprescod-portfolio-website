export type TrackPhoto = {
  src: string;
  alt: string;
};

export type PerformanceMetric = {
  value: string;
  label: string;
  detail: string;
};

export type PersonalBest = {
  event: string;
  time: string;
  season: "Indoor" | "Outdoor";
  meet: string;
  date: string;
};

export type CareerHighlight = {
  season: string;
  title: string;
  description: string;
};

export type CoverageLink = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
};

export const trackPhotos: TrackPhoto[] = [
  {
    src: "/track/1.jpg",
    alt: "Villanova sprinter competing on the track.",
  },
  {
    src: "/track/2.jpg",
    alt: "Villanova sprinter during a collegiate competition.",
  },
  {
    src: "/track/3.jpg",
    alt: "Villanova sprint competition photographed from track level.",
  },
  {
    src: "/track/4.2.JPG",
    alt: "Villanova sprinter competing in a championship environment.",
  },
];

export const performanceMetrics: PerformanceMetric[] = [
  {
    value: "2×",
    label: "BIG EAST champion",
    detail: "60m indoor and 100m outdoor titles in 2024",
  },
  {
    value: "6×",
    label: "All-BIG EAST",
    detail: "Across the 60m, 100m, 200m, and 4×100m relay",
  },
  {
    value: "9×",
    label: "Conference scorer",
    detail: "Nine scoring performances across indoor and outdoor championships",
  },
  {
    value: "No. 2",
    label: "Villanova 100m history",
    detail: "Lifetime best of 10.43 seconds",
  },
];

export const personalBests: PersonalBest[] = [
  {
    event: "60m",
    time: "6.75",
    season: "Indoor",
    meet: "BIG EAST Championships",
    date: "Feb. 24, 2024",
  },
  {
    event: "100m",
    time: "10.43",
    season: "Outdoor",
    meet: "BIG EAST Championships",
    date: "May 15, 2026",
  },
  {
    event: "200m",
    time: "21.39",
    season: "Outdoor",
    meet: "BIG EAST Championships",
    date: "May 12, 2023",
  },
];

export const careerHighlights: CareerHighlight[] = [
  {
    season: "2026 outdoor",
    title: "Career-best 100m and two bronze medals",
    description:
      "Ran a lifetime-best 10.43 in the 100m preliminaries before earning bronze in the final and on Villanova's 4×100m relay.",
  },
  {
    season: "2025 indoor",
    title: "BIG EAST silver in the 60m",
    description:
      "Finished second in the conference final with a 6.80 performance, adding another All-BIG EAST honor.",
  },
  {
    season: "2024 outdoor",
    title: "BIG EAST 100m champion",
    description:
      "Won the conference title at Villanova Stadium and added bronze in the 200m, becoming one of three Wildcats to win career titles in both the 60m and 100m.",
  },
  {
    season: "2024 indoor",
    title: "BIG EAST 60m champion",
    description:
      "Won the conference final in a personal-best 6.75, the second-fastest mark in Villanova program history.",
  },
  {
    season: "2022–23",
    title: "Academic recognition",
    description:
      "Named to the BIG EAST All-Academic Team and the Villanova Athletic Director's Honor Roll.",
  },
];

export const coverageLinks: CoverageLink[] = [
  {
    eyebrow: "Official profile",
    title: "Villanova Athletics athlete profile",
    description:
      "Career biography, personal bests, conference results, honors, and historical roster information.",
    href: "https://villanova.com/sports/mens-track-and-field/roster/amiri-prescod/15878",
    action: "View athlete profile",
  },
  {
    eyebrow: "Championship recap",
    title: "2024 BIG EAST outdoor 100m title",
    description:
      "Villanova's recap of the home championship meet and the 100m victory at Villanova Stadium.",
    href: "https://villanova.com/news/2024/5/11/mens-track-field-bolinsky-dolan-murphy-and-prescod-make-history-lead-wildcats-to-second-place-team-finish-at-big-east-championships-on-saturday-afternoon.aspx",
    action: "Read championship recap",
  },
  {
    eyebrow: "Championship recap",
    title: "2024 BIG EAST indoor 60m title",
    description:
      "Villanova's recap of the conference indoor championship and the personal-best 6.75 victory.",
    href: "https://villanova.com/news/2024/2/24/mens-track-field-mens-track-field-wins-four-gold-medals-tallies-seven-podium-performances-at-big-east-championships.aspx",
    action: "Read championship recap",
  },
  {
    eyebrow: "Program records",
    title: "Villanova sprint performance lists",
    description:
      "Official all-time performance lists for the 60m and 100m sprint events.",
    href: "https://villanova.com/sports/2019/10/21/mens-track-field-records",
    action: "View program records",
  },
];
