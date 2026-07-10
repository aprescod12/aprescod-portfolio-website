// src/lib/projects.ts

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string; // GitHub repository, report, or external destination
  impact?: string;
  collaborated?: string;
  featured?: boolean;

  // If present, the project card will link to /projects/[slug].
  slug?: string;

  // If present, the /projects/[slug] page will render videos.
  videos?: { src?: string; youtubeId?: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    title: "fNIRS Device (Flexible PCB)",
    featured: true,
    description:
      "Working on a wearable-friendly fNIRS system with a focus on hardware integration, signal fidelity, and real-world usability.",
    impact:
      "Designed for practical measurement workflows and improved repeatability in experimental data collection.",
    tags: ["Biomedical", "Embedded", "Hardware"],
  },
  {
    title: "Track & Field Training App",
    description:
      "React Native (Expo) mobile application designed for athletes to log and manage track workouts and lift sessions. The app features dynamic workout tracking, conditional UI flows (track vs. lift modes), and structured data storage using Supabase. Built with Expo Router for scalable navigation and a modular component architecture for maintenance.",
    tags: ["React Native", "Supabase", "Full-Stack Development"],
    link: "https://github.com/aprescod12/track-training-app",
  },
  {
    title: "ESP32 4-Floor Elevator Simulator",
    slug: "esp32-elevator",
    description:
      "Architected a deterministic, interrupt-driven elevator control system on ESP32 implementing a SCAN scheduling algorithm within an explicit finite state machine framework. Designed non-blocking, event-driven timing using hardware interrupts to ensure predictable state transitions under real-time constraints. Abstracted hardware inputs and LED status outputs from control logic to maintain modularity and scalability while modeling realistic multi-floor servicing behavior.",
    tags: [
      "Embedded Systems",
      "Finite State Machines",
      "Real-Time Systems",
      "Scheduling Algorithms",
    ],
    link: "https://github.com/aprescod12/esp32-elevator-simulator",
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
    tags: ["Embedded Systems", "Finite State Machines", "WiFi", "I2S"],
    link: "https://github.com/aprescod12/alarm-clock-system",
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
    description:
      "Developed a multi-sensor baseball swing analysis system combining dual cameras and an inertial measurement unit (IMU) to capture and reconstruct swings in 3D. The project focused on real-time motion tracking, sensor synchronization, and extracting key swing metrics to support data-driven athletic training.",
    collaborated: "Christopher Powers, Dmitrii Kapranov, Julian Frank, Michael Kokolis",
    tags: ["Computer Vision", "Edge AI", "State Estimation"],
    link: "/Baseball Training Final Report.pdf",
  },
  {
    title: "Medical Monitoring & Safety Device (ESP32 Wearable System Prototype)",
    description:
      "A breadboard-based prototype that simulates a wearable medical device, measuring heart rate and SpO₂, detecting fall events via an accelerometer, and using deep-sleep power management to model battery-efficient wearable operation.",
    tags: ["ESP32", "Low Power", "Sensors"],
    link: "https://github.com/aprescod12/medical-monitoring-safety-device",
  },
  {
    title: "Particle Photon Security System",
    description:
      "Designed a finite state machine–based security system using the Particle Photon microcontroller, simulating real-world alarm behavior such as arming, disarming, and intrusion detection. The project highlights embedded systems fundamentals, state-driven logic, and reliable event handling in a resource-constrained environment.",
    tags: ["Embedded Systems", "Finite State Machines", "IoT Fundamentals"],
    link: "https://github.com/aprescod12/particle-photon-security-system",
  },
];

// Helpers
export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const demoSlugs = projects
  .filter((project) => project.slug)
  .map((project) => project.slug!);
