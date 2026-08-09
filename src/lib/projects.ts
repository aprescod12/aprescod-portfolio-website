// src/lib/projects.ts

export type ProjectLinkType = "code" | "report" | "demo" | "external";

export type ProjectCaseStudySection = {
  title: string;
  body?: string;
  bullets?: string[];
  eyebrow?: string;
};

export type ProjectCaseStudy = {
  overview: string;
  engineeringFocus: string[];
  systemDetails: string[];
  sections?: ProjectCaseStudySection[];
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
    title: "Miniature fNIRS Research Platform",
    slug: "miniature-fnirs-research-platform",
    description:
      "Continuing Villanova miniature-fNIRS research by rebuilding the mobile acquisition stack in Flutter and extending an existing wireless sensor into a reliable research platform for BLE acquisition, four-channel optical visualization, durable session storage, engineering-quality monitoring, and future app-controlled embedded hardware.",
    category: "Biomedical Engineering Research",
    status: "Active Research",
    context: "Faculty-advised biomedical engineering research",
    year: "2026",
    availabilityNote:
      "The current mobile application repository is private; this case study summarizes verified implementation and planned research work without presenting the platform as clinically validated.",
    impact:
      "Rebuilt the software foundation around an inherited miniature fNIRS sensor, physically characterized its BLE data interface, and established a versioned research roadmap spanning mobile acquisition, embedded control, PCB revision, signal optimization, and future validated physiological processing.",
    tags: [
      "Biomedical Engineering",
      "fNIRS",
      "Flutter",
      "Bluetooth Low Energy",
      "Embedded Systems",
      "Signal Acquisition",
      "SQLite",
      "PCB Design",
    ],
    caseStudy: {
      overview:
        "This project continues an existing Villanova miniature-fNIRS research platform rather than claiming ownership of the original hardware. The compact sensor PCB, original CC2650 firmware, and original fNIRS architecture were created through prior Villanova research. My work is focused on restoring and characterizing the inherited system, rebuilding the mobile acquisition layer from scratch in Flutter, preserving research data reliably, and extending the platform toward future embedded control, hardware revision, and validated signal processing.",
      engineeringFocus: [
        "Rebuilt the mobile software as a shared Flutter codebase for iOS and Android, with exact BLE service and characteristic validation, strictly serialized reads targeting approximately 5 Hz, four-trace live visualization, pseudonymous sessions, durable SQLite persistence, interrupted-session recovery, and structured CSV/JSON export.",
        "Physically characterized the inherited device and verified that its current firmware returns an 11-field, 22-byte BLE packet containing four raw optical measurements and seven engineering/status values, then designed the acquisition layer around the measured hardware behavior rather than legacy assumptions.",
        "Established research-data integrity rules that preserve the complete raw packet and raw ADC measurements, track UTC completion time, monotonic elapsed time and read latency, store baseline and engineering-quality evidence, and avoid presenting Hb/HbO2, brain activation, concussion diagnosis, or other clinical interpretation as validated output.",
      ],
      systemDetails: [
        "Existing Villanova miniature fNIRS sensor with CC2650MODA-based embedded platform",
        "Flutter mobile application targeting iOS and Android",
        "Read-based BLE acquisition with a physically verified 22-byte, eleven-field packet",
        "Four raw optical channels: long/far and short/near detectors at 730 nm and 850 nm",
        "Seven engineering/status fields covering battery, charging, USB, 8.2 V power, low battery, power mode, and duty cycle",
        "Local SQLite sessions with raw-packet preservation, timestamps, latency, baseline evidence, quality flags, connection events, and export metadata",
      ],
      sections: [
        {
          eyebrow: "Attribution",
          title: "Inherited Research Platform",
          body:
            "The starting point is a compact miniature fNIRS sensor created through prior Villanova research. I did not design the original PCB, original CC2650 firmware, or original fNIRS architecture. My contribution begins with restoring, testing, characterizing, and extending that inherited platform.",
          bullets: [
            "Existing compact manufactured PCB rather than a flexible-PCB design",
            "CC2650MODA-based embedded system with BLE connectivity and JTAG reprogramming capability",
            "Research continuation centered on software reliability, protocol understanding, embedded control, and future hardware iteration",
          ],
        },
        {
          eyebrow: "Problem",
          title: "Problem With the Legacy Application and Workflow",
          body:
            "The previous mobile workflow was not a reliable foundation for current cross-platform research. Legacy application assumptions also did not fully match the behavior of the physical device, so recreating the old interface would have preserved uncertainty instead of resolving it.",
          bullets: [
            "Replaced legacy Android/Xamarin application paths with a new shared Flutter codebase",
            "Designed the new app as a research data-acquisition system rather than a Bluetooth demonstration",
            "Documented a source-level packet-length discrepancy and followed physically verified device behavior",
          ],
        },
        {
          eyebrow: "Implemented · Version 1",
          title: "My Version 1 Application Rebuild",
          body:
            "Version 1 is a cross-platform research application for reliable BLE acquisition, visualization, preservation, and export of raw measurements from the existing miniature fNIRS sensor. The current main branch contains the Milestone 6 baseline and engineering-quality workflow and has undergone substantial physical iPhone testing.",
          bullets: [
            "BLE discovery, connection, exact service/characteristic validation, manual reads, and serialized recording targeting one read every 200 ms",
            "Four live raw-optical traces with bounded visualization buffering that does not alter acquisition or persisted data",
            "Pseudonymous sessions, local SQLite persistence, interrupted-session recovery, saved-session review, cascading deletion, CSV export, and metadata JSON export",
            "Android release compilation and automated validation are implemented; complete physical Android BLE validation remains outstanding",
            "Experiment-marker storage exists in the schema, while marker-entry UI and automatic reconnection remain release-candidate work rather than completed Milestone 6 functionality",
          ],
        },
        {
          eyebrow: "Physically verified",
          title: "Physical Device and BLE Protocol Characterization",
          body:
            "Repeated reads on the physical sensor established that the current firmware exposes eleven unsigned 16-bit big-endian values in a 22-byte payload. That verification substantially changed the software model because the device exposes more information than the earlier application assumptions suggested.",
          bullets: [
            "Four optical readings: 730 nm and 850 nm at long/far and short/near detector paths",
            "Seven engineering/status values: battery ADC, charging, USB, 8.2 V power, low-battery, power-mode, and duty-cycle status",
            "Read-completion timestamps are generated by the app because the current firmware does not provide device timestamps, sequence numbers, dropped-sample indicators, or firmware revision fields",
            "The complete raw 22-byte payload is preserved alongside every decoded accepted sample",
          ],
        },
        {
          eyebrow: "Implemented · Data integrity",
          title: "Research Data Architecture",
          body:
            "The software is structured around preserving research evidence rather than only drawing a live chart. BLE operations are serialized, database writes are queued separately, and session completion verifies that accepted samples were durably stored before a normal stop is finalized.",
          bullets: [
            "UTC read-completion timestamps, monotonic elapsed timing, read latency, and app-assigned acceptance indices",
            "Sessions as the aggregate root with samples, connection events, and marker records linked through SQLite foreign keys",
            "Complete raw payload plus decoded optical and engineering fields retained for every accepted sample",
            "Unexpectedly active sessions are preserved and relabeled as interrupted after app restart instead of being presented as normally completed",
            "Raw samples remain available and are not replaced by filtered or calculated values",
          ],
        },
        {
          eyebrow: "Implemented · Research workflow",
          title: "Baseline and Engineering Quality Monitoring",
          body:
            "Version 1 adds explicit baseline collection and configurable engineering checks to help researchers identify acquisition problems without converting those checks into physiological or clinical claims.",
          bullets: [
            "Exact accepted-sample baseline collection with minimum, maximum, range, arithmetic mean, and population standard deviation for all four raw optical fields",
            "Configurable read-rate, accepted-read-gap, near-floor, near-ceiling, flatline, abrupt-change, and baseline-range checks",
            "Per-sample quality flags and timestamped warning/baseline events retained for reproducibility",
            "Warnings never filter, replace, or silently discard accepted raw measurements",
            "Near-floor and near-ceiling thresholds remain disabled by default until experimentally established for the actual device and protocol",
          ],
        },
        {
          eyebrow: "Planned · Version 2.0A",
          title: "Version 2 Firmware and Device-Control Work",
          body:
            "The first Version 2 goal is bidirectional control while retaining the existing manufactured PCB. Firmware changes do not automatically require a board redesign because the existing CC2650MODA can be reprogrammed through JTAG.",
          bullets: [
            "Reproduce the legacy CC2650 firmware build and flashing environment",
            "Add app-to-device configuration commands with explicit acknowledgement/readback",
            "Support app-commanded acquisition start/stop, optical-source sequencing, wavelength-sequencing experiments, and safe timing controls",
            "Report runtime configuration to the app and store configuration plus timestamped changes with each research session",
          ],
        },
        {
          eyebrow: "Planned · Version 2.0B",
          title: "Adjustable Optical-Source Prototype",
          body:
            "The current compact PCB uses fixed LED-current paths. Before revising the manufactured board, controllable optical-source approaches will be prototyped externally so the research can identify the simplest circuit that provides safe, repeatable, scientifically useful control.",
          bullets: [
            "Candidate approaches include synchronized PWM experiments, selectable-current or selectable-resistance circuitry, and programmable constant-current LED drivers",
            "Evaluation will measure LED current, repeatability, detector response, saturation, power consumption, thermal behavior, and introduced optical/electrical noise",
            "External prototyping reduces the risk of committing an unvalidated control method directly into a PCB revision",
          ],
        },
        {
          eyebrow: "Planned · Version 2.0C",
          title: "Planned PCB Revision B",
          body:
            "After an adjustable optical-source circuit is validated externally, I plan to create a controlled revision of the existing compact PCB in Altium/CircuitMaker. This is intentionally framed as a revision of a proven research board, not a ground-up redesign.",
          bullets: [
            "Read and trace the inherited schematic across LED, detector, MCU, power, and JTAG nets",
            "Perform schematic capture, component selection, symbol/footprint work, four-layer placement and routing, power/ground planning, and analog-versus-switching separation",
            "Run ERC/DRC and design-for-manufacture review, produce fabrication documentation, and complete board bring-up",
            "Validate JTAG programming, BLE behavior, optical response, and electrical characteristics on the revised hardware",
          ],
        },
        {
          eyebrow: "Roadmap · Versions 2.1–4.0",
          title: "Long-Term Signal Processing and Multi-Device Roadmap",
          body:
            "The locked roadmap separates device optimization, wearability, validated physiological processing, and multi-device research so each claim is introduced only after the underlying engineering is ready.",
          bullets: [
            "Version 2.1: optimize real physical controls for source intensity, duty cycle, timing, baseline/drift handling, averaging, artifact detection, and visualization filtering while preserving raw samples unchanged",
            "Version 2.2: investigate headband and wrist/forearm mounting, record anatomical site and mount metadata, improve guided setup, baseline prompts, experiment templates, and marker workflows; wrist/forearm use will not be described as cerebral fNIRS",
            "Version 3.0: validate Hb/HbO2 processing only after equations, extinction coefficients, geometry/pathlength assumptions, short-separation correction, filtering, artifact handling, test datasets, and a trusted comparison workflow are documented",
            "Version 4.0: explore multiple simultaneous BLE sensors, persistent device IDs, anatomical mapping, per-device quality, synchronized markers, multi-sensor storage/export, spatial visualization, and eventual firmware timing support for rigorous synchronization claims",
          ],
        },
      ],
      note:
        "Research use only. The current application does not provide clinical diagnosis, concussion assessment, brain-activation interpretation, validated hemoglobin concentration measurements, or a clinically validated signal-quality assessment. Version 1 preserves raw optical and engineering data so future processing can be validated without losing the underlying measurements.",
    },
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
      "Developed a working pilot candidate designed to replace a fragmented spreadsheet- and document-based staffing process with a centralized, auditable workflow.",
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
    title: "Personal Job Intelligence & Application Tracking Platform",
    slug: "personal-job-intelligence-platform",
    description:
      "Building a Django-based career intelligence platform that converts résumés and job listings into structured, source-backed data, produces explainable candidate-to-role analysis, and tracks opportunities through a controlled human-review workflow.",
    category: "Applied AI & Full-Stack Software Engineering",
    status: "Active Development",
    context: "Independent AI engineering project",
    year: "2026",
    impact:
      "Created an auditable job-search pipeline connecting résumé evidence, career preferences, job requirements, listing reliability, matcher versions, and application decisions without relying on unexplained AI recommendations.",
    tags: ["Django", "Python", "OpenAI API", "Explainable AI", "Human-in-the-Loop"],
    link: "https://github.com/aprescod12/personal-job-finder",
    linkType: "code",
    caseStudy: {
      overview:
        "The Personal Job Intelligence and Application Tracking Platform is a learning-first Django application designed to make job searching more structured, explainable, and evidence-based. The implemented system stores and verifies résumé evidence, structures job requirements, checks listing reliability, calculates transparent candidate-to-role match results, and tracks opportunities through the application pipeline. AI providers may propose structured information from unstructured documents, while Python and Django enforce schemas, evidence grounding, duplicate controls, review gates, scoring rules, and database changes.",
      engineeringFocus: [
        "Built a controlled résumé pipeline for PDF, DOCX, and TXT sources with SHA-256 fingerprinting, version history, deterministic extraction, optional OpenAI structured output, claim-level evidence anchoring, editable review, and explicit activation of immutable candidate-profile snapshots.",
        "Designed a deterministic and explainable matching system that separates direct evidence, normalized concepts, rule-related evidence, controlled semantic evidence, missing qualifications, and eligibility blockers while recording the matcher and candidate-profile versions used.",
        "Implemented human approval boundaries, duplicate detection, extraction provenance, listing verification, blind holdout validation, matcher calibration, and application tracking so consequential AI-assisted decisions remain visible, reviewable, and user-controlled.",
      ],
      systemDetails: [
        "Django application with job tracking, candidate-profile, review, calibration, and match-analysis workflows",
        "PDF, DOCX, and TXT résumé ingestion with local document parsing and versioned source control",
        "Optional OpenAI structured extraction with strict schemas, grounding validation, and deterministic fallback",
        "Approved claim evidence composed into immutable candidate-profile snapshots with explicit activation",
        "Explainable weighted matching, listing reliability checks, duplicate controls, and provenance history",
        "Seven-agent product architecture implemented incrementally inside one controlled Django workflow",
      ],
      note:
        "The application is under active development. Résumé ingestion, candidate-evidence review, profile versioning, job processing, listing verification, explainable matching, calibration, and application tracking are implemented. Automated job discovery, project-specific portfolio recommendations, the full coordinator workflow, expanded reminders, and production deployment remain roadmap work. The system does not automatically submit applications or contact employers.",
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