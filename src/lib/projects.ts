// src/lib/projects.ts

export type ProjectLinkType = "code" | "report" | "demo" | "external";

export type ProjectCaseStudy = {
  overview: string;
  engineeringFocus: string[];
  systemDetails: string[];
  note?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];

  // Optional metadata used to give project cards and case studies more context.
  category?: string;
  status?: string;
  context?: string;
  year?: string;
  availabilityNote?: string;

  link?: string; // GitHub repository, report, demo, or external destination
  linkType?: ProjectLinkType;
  impact?: string;
  collaborated?: string;
  featured?: boolean;

  // If present, the project card will link to /projects/[slug].
  slug?: string;

  // Structured content for the internal project case-study page.
  caseStudy?: ProjectCaseStudy;

  // If present, the /projects/[slug] page will render videos.
  videos?: { src?: string; youtubeId?: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    title: "fNIRS Device (Flexible PCB)",
    description:
      "Supporting faculty-led fNIRS research focused on wearable sensing, hardware integration, and signal acquisition.",
    category: "Biomedical Research",
    status: "Ongoing",
    context: "Faculty-led research",
    availabilityNote:
      "Technical details and supporting materials are not publicly shared.",
    tags: ["Biomedical Sensing", "Embedded Hardware", "Signal Acquisition"],
  },
  {
    title: "Track & Field Training App",
    slug: "track-field-training-app",
    description:
      "Built a cross-platform training app for logging track and lift sessions, reviewing workout history, managing calendar events, and storing user-specific data through Supabase.",
    category: "Mobile Development",
    status: "Ongoing",
    context: "Personal project",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    link: "https://github.com/aprescod12/track-training-app",
    linkType: "code",
    caseStudy: {
      overview:
        "This application brings track training, strength work, calendar planning, workout history, and athlete-specific performance workflows into one mobile experience designed around the needs of track and field athletes.",
      engineeringFocus: [
        "Built a file-based Expo Router architecture with tab, stack, modal, authentication, detail, history, calendar, statistics, and profile routes.",
        "Integrated Supabase authentication and user-scoped database queries with persistent sessions across native and web platforms.",
        "Designed separate track and lift logging models for sets, repetitions, times, weights, notes, exercise search, custom exercises, personal records, and achievement processing.",
      ],
      systemDetails: [
        "React Native and Expo with TypeScript",
        "Expo Router navigation across tab, stack, modal, and dynamic routes",
        "Supabase authentication and database-backed athlete data",
        "AsyncStorage on native platforms and localStorage on the web for session persistence",
      ],
    },
  },
  {
    title: "AFA Event Staffing & Shift Management Platform",
    slug: "afa-event-staffing-platform",
    description:
      "Designed and built a full-stack institutional staffing platform for controlled shift releases, conflict-safe student assignments, FIFO waitlists, notifications, attendance, and operational reporting.",
    category: "Full-Stack Software Engineering",
    status: "Institutional Pilot Candidate",
    context: "Independent project for potential university adoption",
    year: "2026",
    impact:
      "Replaced a fragmented spreadsheet- and document-based staffing workflow with a centralized, auditable system for students and supervisors.",
    tags: ["Django", "PostgreSQL", "Celery", "Redis", "Docker"],
    caseStudy: {
      overview:
        "The AFA Event Staffing and Shift Management Platform is a full-stack web application built to manage the complete lifecycle of university event staffing. Students can discover eligible shifts, register under controlled release rules, join or leave waitlists, review their schedules, and manage notification preferences. Supervisors can create release batches, events, and named shifts; monitor staffing; manage assignments; record attendance; review history; and export operational reports.",
      engineeringFocus: [
        "Implemented server-side capacity enforcement, cross-event scheduling-conflict detection, restricted and open signup periods, cancellation controls, and FIFO waitlist promotion while preserving staffing history.",
        "Built separate student and supervisor workflows with server-side role authorization, profile management, calendars, staffing dashboards, attendance records, student directories, reports, and exports.",
        "Designed event-driven and scheduled notifications with user preferences, delivery logging, deduplication, and Celery- and Redis-backed processing for reminders and staffing changes.",
      ],
      systemDetails: [
        "Django server-rendered application with dedicated student and supervisor workflows",
        "PostgreSQL production data model with SQLite-supported local development",
        "Celery, Redis, and Celery Beat for asynchronous and scheduled operations",
        "Controlled release batches, capacity enforcement, conflict prevention, and FIFO waitlists",
        "Attendance history, staffing dashboards, calendars, CSV exports, and print-friendly rosters",
        "Docker preview environment, GitHub Actions validation, and institutional identity groundwork",
      ],
      note:
        "This is a working and tested institutional pilot candidate, not a currently deployed Villanova production system. Production use would require university approval and configuration for SSO and Duo, hosting, email delivery, privacy, accessibility, monitoring, backups, support, and long-term ownership.",
    },
  },
  {
    title: "ESP32 4-Floor Elevator Simulator",
    slug: "esp32-elevator",
    description:
      "Built a four-floor ESP32 elevator simulator using a finite state machine, SCAN scheduling, hardware interrupts, and non-blocking timing to service requests predictably.",
    category: "Embedded Systems",
    status: "Completed",
    year: "2026",
    tags: ["ESP32", "Finite State Machine", "Real-Time Control", "SCAN Scheduling"],
    link: "https://github.com/aprescod12/esp32-elevator-simulator",
    linkType: "code",
    caseStudy: {
      overview:
        "This ESP32 prototype models a four-floor elevator that accepts requests, tracks direction, services queued floors, and represents movement and door state through LEDs and serial output.",
      engineeringFocus: [
        "Implemented SCAN-style scheduling so pending floor requests are serviced in the active direction before the system reverses.",
        "Used a finite state machine and non-blocking timing to keep request handling responsive during travel and door sequences.",
        "Separated button input, scheduling logic, state transitions, and output control to keep the system modular and testable.",
      ],
      systemDetails: [
        "ESP32 WROOM 32 microcontroller",
        "Four floor-call buttons and four floor-indicator LEDs",
        "Dedicated door-status LED",
        "Serial monitoring for calls, direction, floor position, and pending requests",
      ],
    },
    videos: [
      { youtubeId: "tgXctCg14ZQ", caption: "Button Presses and LED Reaction." },
      {
        youtubeId: "rMUoFo9LxEs",
        caption:
          "The Arduino Serial Monitor demonstrated Button Press Recognition and Elevator State Updates.",
      },
    ],
  },
  {
    title: "ESP32 Alarm Clock System",
    slug: "esp32-alarm",
    description:
      "Built a Wi-Fi-enabled ESP32 alarm clock with NTP time synchronization, OLED output, I2S audio, physical controls, and a non-blocking finite state machine.",
    category: "Embedded Systems",
    status: "Completed",
    tags: ["ESP32", "Finite State Machine", "NTP", "I2S Audio"],
    link: "https://github.com/aprescod12/alarm-clock-system",
    linkType: "code",
    caseStudy: {
      overview:
        "This ESP32 alarm clock combines network-synchronized time, an OLED interface, physical controls, and I2S audio within a state-driven embedded architecture.",
      engineeringFocus: [
        "Modeled alarm behavior as explicit OFF, ARMED, RINGING, SNOOZED, and SILENCED states.",
        "Coordinated WiFi and NTP time synchronization with OLED rendering, button input, and audio output.",
        "Used non-blocking control logic so display updates and button interactions remain responsive across alarm states.",
      ],
      systemDetails: [
        "ESP32 WROOM microcontroller",
        "SSD1306 OLED display over I2C",
        "I2S audio output and speaker",
        "Four physical controls for screen toggle, snooze, silence, and alarm off",
      ],
    },
    videos: [
      {
        youtubeId: "kkGcaMSYXD4",
        caption: "The System Alarm going off and the Specified Time.",
      },
      {
        youtubeId: "ksUBhCYbksk",
        caption: "The System Going into a 1 Minute Snooze Mode on Button Press.",
      },
      {
        youtubeId: "-uvissk0dHE",
        caption: "The System going into Silenced Mode on Button Press.",
      },
      {
        youtubeId: "iNDnfd_8_3s",
        caption: "Demonstrating the Toggle Screen Button.",
      },
    ],
  },
  {
    title: "Baseball Bat Tracking System (Jetson + Multi-Camera)",
    slug: "baseball-bat-tracking",
    description:
      "Developed a capstone swing-analysis system combining dual cameras, an IMU, and NVIDIA Jetson edge computing to reconstruct bat motion in 3D and extract training metrics.",
    category: "Computer Vision",
    status: "Completed",
    context: "Capstone project",
    collaborated: "Christopher Powers, Dmitrii Kapranov, Julian Frank, Michael Kokolis",
    tags: ["Computer Vision", "NVIDIA Jetson", "IMU", "3D Motion Tracking"],
    link: "/Baseball Training Final Report.pdf",
    linkType: "report",
    caseStudy: {
      overview:
        "This capstone project explored a multi-sensor approach to baseball swing analysis by combining two camera views with inertial measurements and edge computing.",
      engineeringFocus: [
        "Coordinated dual-camera and IMU data as complementary inputs for motion analysis.",
        "Focused on reconstructing swing movement in three dimensions rather than relying on a single two-dimensional view.",
        "Structured the system around extracting measurable swing information for data-informed athletic training.",
      ],
      systemDetails: [
        "NVIDIA Jetson edge-computing platform",
        "Dual-camera capture system",
        "Inertial measurement unit",
        "Computer-vision, sensor-synchronization, and state-estimation workflow",
      ],
    },
  },
  {
    title: "Medical Monitoring & Safety Device (ESP32 Wearable System Prototype)",
    slug: "medical-monitoring-safety-device",
    featured: true,
    description:
      "Built an ESP32 medical-monitoring prototype that measures heart rate and estimated SpO₂, detects fall events, displays readings on an OLED, and explores deep-sleep power management.",
    category: "Biomedical Systems",
    status: "Completed",
    context: "Course project",
    year: "2025",
    tags: ["ESP32", "Biomedical Sensing", "Fall Detection", "Low-Power Design"],
    link: "https://github.com/aprescod12/medical-monitoring-safety-device",
    linkType: "code",
    caseStudy: {
      overview:
        "Developed as a Medical Device Technology course project, this breadboard prototype models the sensing, safety, interface, and power-management behavior of a wearable or home-care monitoring device.",
      engineeringFocus: [
        "Integrated optical sensing for heart-rate and estimated SpO₂ measurement with real-time OLED feedback.",
        "Added accelerometer-based fall-event detection and on-device alert behavior.",
        "Used deep-sleep cycling and interrupt-driven input to explore responsive, lower-power operation.",
      ],
      systemDetails: [
        "ESP32 microcontroller",
        "MAX3010x optical pulse-oximeter sensor",
        "ADXL345 three-axis accelerometer",
        "SSD1306 OLED display and interrupt-driven push button",
      ],
      note:
        "This is an educational prototype, not a clinical-grade device, and it has not undergone medical calibration, validation, or regulatory review.",
    },
  },
  {
    title: "Engineering Portfolio Website",
    slug: "engineering-portfolio-website",
    description:
      "Built a responsive Next.js portfolio with reusable project data, dynamically generated case-study routes, standardized resource links, and an accessible continuously scrolling photo carousel.",
    category: "Web Development",
    status: "Ongoing",
    context: "Personal project",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    link: "https://github.com/aprescod12/aprescod-portfolio-website",
    linkType: "code",
    caseStudy: {
      overview:
        "This site was designed as a central portfolio for presenting biomedical, embedded, software, and athletics work through a consistent visual system and reusable project architecture.",
      engineeringFocus: [
        "Built a data-driven project model and dynamic Next.js routes so structured project content generates consistent internal case-study pages.",
        "Created reusable navigation, project-card, layout, and resource-link patterns to keep the interface consistent as new work is added.",
        "Implemented a responsive photo carousel with automatic progression, manual scrolling, pause behavior, image recycling, and reduced-motion support.",
      ],
      systemDetails: [
        "Next.js App Router with React and TypeScript",
        "Tailwind CSS for responsive layout and interface styling",
        "Reusable project data, card, navigation, and case-study components",
        "Vercel deployment with public source control on GitHub",
      ],
      note:
        "The live product is the website you are currently viewing.",
    },
  },
  {
    title: "Particle Photon Security System",
    description:
      "Built a Particle Photon security-system prototype using finite-state logic to model arming, disarming, and intrusion detection with reliable event-driven behavior.",
    category: "Embedded Systems",
    status: "Completed",
    context: "Course project",
    year: "2024",
    tags: ["Particle Photon", "Finite State Machine", "Embedded Systems", "Event-Driven Logic"],
    link: "https://github.com/aprescod12/particle-photon-security-system",
    linkType: "code",
  },
];

const projectLinkLabels: Record<ProjectLinkType, string> = {
  code: "View code",
  report: "View report",
  demo: "Watch demo",
  external: "Open project",
};

export function getProjectLinkLabel(project: Project) {
  if (!project.link) return null;
  return project.linkType ? projectLinkLabels[project.linkType] : "Open project";
}

// Helpers
export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const demoSlugs = projects
  .filter((project) => project.slug)
  .map((project) => project.slug!);
