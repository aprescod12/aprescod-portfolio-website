// src/lib/projects.ts

export type Project = {
    title: string;
    description: string;
    tags: string[];
    link?: string;          // GitHub or external
    impact?: string;
    collaborated?: string;
    featured?: boolean;
  
    // If present, the Projects card will link to /projects/[slug]
    slug?: string;
  
    // If present, the /projects/[slug] page will render videos
    videos?: { src?: string; youtubeId?: string; caption?: string }[];
  };

  export const featuredSlug = "fnirs-flex-pcb";
  
  export const projects: Project[] = [
    {
      title: "fNIRS Device (Flexible PCB)",
      featured: true,
      description:
        "Working on a wearable-friendly fNIRS system with a focus on hardware integration, signal fidelity, and real-world usability.",
      impact:
        "Designed for practical measurement workflows and improved repeatability in experimental data collection.",
      collaborated: "",
      tags: ["Biomedical", "Embedded", "Hardware"],
      link: "#",
      videos: [
        // add when you have them
        // { src: "/videos/fnirs-1.mp4", caption: "Prototype bring-up" },
      ],
    },
    {
        title: "ESP32 4-Floor Elevator Simulator",
        slug: "esp32-elevator",
        description:
          "Architected a deterministic, interrupt-driven elevator control system on ESP32 implementing a SCAN scheduling algorithm within an explicit finite state machine framework. Designed non-blocking, event-driven timing using hardware interrupts to ensure predictable state transitions under real-time constraints. Abstracted hardware inputs and LED status outputs from control logic to maintain modularity and scalability while modeling realistic multi-floor servicing behavior.",
        tags: ["Embedded Systems", "Finite State Machines", "Real-Time Systems", "Scheduling Algorithms"],
        link: "https://github.com/aprescod12/esp32-elevator-simulator",
        videos: [
          { youtubeId: "tgXctCg14ZQ", caption: "Button Presses and LED Reaction." },
          { youtubeId: "rMUoFo9LxEs", caption: "The Arduino Serial Monitor demonstrated Button Press Recognition and Elevator State Updates." },
        ],
      },
    {
      title: "Bat Tracking System (Jetson + Multi-Camera)",
      description:
        "Developed a multi-sensor baseball swing analysis system combining dual cameras and an inertial measurement unit (IMU) to capture and reconstruct swings in 3D. The project focused on real-time motion tracking, sensor synchronization, and extracting key swing metrics to support data-driven athletic training.",
      collaborated: "Christopher Powers, Dmitrii Kapranov, Julian Frank, Michael Kokolis",
      tags: ["Computer Vision", "Edge AI", "State Estimation"],
      link: "#",
    },
    {
      title: "Medical Monitoring & Safety Device (ESP32 Wearable System Prototype)",
      description:
        "A breadboard-based prototype that simulates a wearable medical device, measuring heart rate and SpO₂, detecting fall events via an accelerometer, and using deep-sleep power management to model battery-efficient wearable operation.",
      tags: ["ESP32", "Low Power", "Sensors"],
      link: "https://github.com/aprescod12/medical-monitoring-safety-device",
    },
    {
      title: "Particle Photon Security System Project",
      description:
        "Designed a finite state machine–based security system using the Particle Photon microcontroller, simulating real-world alarm behavior such as arming, disarming, and intrusion detection. The project highlights embedded systems fundamentals, state-driven logic, and reliable event handling in a resource-constrained environment.",
      tags: ["Embedded Systems", "Finite State Machines", "IoT Fundamentals"],
      link: "https://github.com/aprescod12/particle-photon-security-system/tree/main",
    },
  ];
  
  // Helpers
  export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
  }
  
  export const demoSlugs = projects.filter((p) => p.slug).map((p) => p.slug!);