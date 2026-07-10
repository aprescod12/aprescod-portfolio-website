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
      "Contributing to faculty-led fNIRS research involving wearable sensing, hardware integration, and signal acquisition.",
    category: "Biomedical Research",
    status: "Ongoing",
    context: "Faculty-led research",
    availabilityNote:
      "Technical details and supporting materials are not publicly shared.",
    tags: ["Biomedical", "Embedded", "Hardware"],
  },
  {
    title: "Track & Field Training App",
    slug: "track-field-training-app",
    description:
      "Cross-platform React Native application for planning and logging track and lift sessions, reviewing workout history, managing calendar events, and organizing athlete-specific performance data with Supabase-backed user accounts.",
    category: "Mobile Development",
    tags: ["React Native", "Supabase", "Full-Stack Development"],
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
    title: "ESP32 4-Floor Elevator Simulator",
    slug: "esp32-elevator",
    description:
      "Architected a deterministic, interrupt-driven elevator control system on ESP32 implementing a SCAN scheduling algorithm within an explicit finite state machine framework. Designed non-blocking, event-driven timing using hardware interrupts to ensure predictable state transitions under real-time constraints. Abstracted hardware inputs and LED status outputs from control logic to maintain modularity and scalability while modeling realistic multi-floor servicing behavior.",
    category: "Embedded Systems",
    status: "Completed",
    year: "2026",
    tags: [
      "Embedded Systems",
      "Finite State Machines",
      "Real-Time Systems",
      "Scheduling Algorithms",
    ],
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
      "Engineered a WiFi-enabled alarm clock on the ESP32 featuring NTP time synchronization, I2S audio output, and OLED display rendering. Designed a deterministic finite state machine (OFF, ARMED, RINGING, SNOOZED, SILENCED) to manage alarm behavior with non-blocking button handling and coordinated peripheral control (I2C, I2S, GPIO).",
    category: "Embedded Systems",
    status: "Completed",
    tags: ["Embedded Systems", "Finite State Machines", "WiFi", "I2S"],
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
      "Developed a multi-sensor baseball swing analysis system combining dual cameras and an inertial measurement unit (IMU) to capture and reconstruct swings in 3D. The project focused on real-time motion tracking, sensor synchronization, and extracting key swing metrics to support data-driven athletic training.",
    category: "Computer Vision",
    status: "Completed",
    context: "Capstone project",
    collaborated: "Christopher Powers, Dmitrii Kapranov, Julian Frank, Michael Kokolis",
    tags: ["Computer Vision", "Edge AI", "State Estimation"],
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
      "A breadboard-based prototype that simulates a wearable medical device, measuring heart rate and SpO₂, detecting fall events via an accelerometer, and using deep-sleep power management to model battery-efficient wearable operation.",
    category: "Biomedical Systems",
    status: "Completed",
    context: "Course project",
    year: "2025",
    tags: ["ESP32", "Low Power", "Sensors"],
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
    title: "Particle Photon Security System",
    description:
      "Designed a finite state machine–based security system using the Particle Photon microcontroller, simulating real-world alarm behavior such as arming, disarming, and intrusion detection. The project highlights embedded systems fundamentals, state-driven logic, and reliable event handling in a resource-constrained environment.",
    category: "Embedded Systems",
    status: "Completed",
    context: "Course project",
    year: "2024",
    tags: ["Embedded Systems", "Finite State Machines", "IoT Fundamentals"],
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
