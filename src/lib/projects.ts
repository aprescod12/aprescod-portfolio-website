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
      "Continuing Villanova miniature-fNIRS research by restoring an inherited wireless sensor platform, rebuilding its Flutter acquisition stack, and hardening Version 1 around reliable BLE acquisition, four-channel optical visualization, durable SQLite sessions, baseline and engineering-quality monitoring, export, and release validation.",
    category: "Biomedical Engineering Research",
    status: "Active Research",
    context: "Faculty-advised biomedical engineering research",
    year: "2026",
    availabilityNote:
      "The current mobile application repository is private; this case study summarizes verified implementation and the repository-governed release roadmap without presenting the platform as clinically validated.",
    impact:
      "Restored an inherited miniature fNIRS platform to working research use, physically characterized its BLE interface, rebuilt the mobile software foundation, and brought Milestones 0–6 to a merged Version 1 baseline with automated validation and physical iPhone release-mode evidence.",
    tags: [
      "Biomedical Engineering",
      "fNIRS",
      "Flutter",
      "Bluetooth Low Energy",
      "Embedded Systems",
      "Signal Acquisition",
      "SQLite",
      "Research Data Systems",
    ],
    caseStudy: {
      overview:
        "This project continues an existing Villanova miniature-fNIRS research platform rather than claiming ownership of the original hardware. The compact sensor PCB, original CC2650 firmware, and original fNIRS architecture came from prior Villanova research. I inherited the system in a state that required troubleshooting and restoration, then rebuilt the mobile acquisition layer in Flutter around physically verified BLE behavior. The current repository baseline has Milestones 0–6 merged: reliable acquisition, four-channel raw optical visualization, durable SQLite sessions, interrupted-session recovery, structured export, explicit baselines, and configurable engineering-quality indicators. Current work is focused on Version 1 hardening and release readiness rather than unverified physiological interpretation or a speculative hardware redesign.",
      engineeringFocus: [
        "Troubleshot and restored the inherited hardware/software path, then verified the physical BLE behavior instead of treating legacy application assumptions as authoritative.",
        "Rebuilt the mobile software as a shared Flutter codebase for iOS and Android with exact BLE service/characteristic validation, strictly serialized reads targeting approximately 5 Hz, four-trace visualization, pseudonymous sessions, durable SQLite persistence, interrupted-session recovery, and structured CSV/JSON export.",
        "Established research-data integrity and release boundaries that preserve the complete raw packet and raw ADC measurements, record timing and quality evidence, keep engineering warnings separate from physiological claims, and require explicit physical-device evidence for platform validation.",
      ],
      systemDetails: [
        "Inherited Villanova miniature fNIRS sensor restored to working research use before software extension",
        "CC2650MODA-based embedded platform with physically verified BLE behavior",
        "Flutter mobile application targeting iOS and Android",
        "Read-based BLE acquisition with a physically verified 22-byte, eleven-field packet",
        "Four raw optical channels: long/far and short/near detectors at 730 nm and 850 nm",
        "Seven engineering/status fields covering battery, charging, USB, 8.2 V power, low battery, power mode, and duty cycle",
        "Local SQLite sessions with raw-packet preservation, timestamps, latency, baseline evidence, quality flags, connection events, and export metadata",
      ],
      sections: [
        {
          eyebrow: "Attribution + restoration",
          title: "Inherited and Restored Research Platform",
          body:
            "The starting point was a compact miniature fNIRS sensor created through prior Villanova research. I did not design the original PCB, original CC2650 firmware, or original fNIRS architecture. I inherited the legacy hardware and software stack and first had to troubleshoot the existing system to get it back up and running before I could extend it.",
          bullets: [
            "Inherited an existing compact manufactured PCB rather than designing the original board",
            "Troubleshot the legacy hardware/software path to restore communication and usable device operation",
            "Validated behavior on the physical sensor instead of relying solely on legacy source-code assumptions",
            "Used the restored system as the verified foundation for the new mobile acquisition and research-data workflow",
          ],
        },
        {
          eyebrow: "Implemented · Version 1 baseline",
          title: "Flutter Acquisition and Recording Rebuild",
          body:
            "The current main branch contains the merged Milestones 0–6 Version 1 baseline and has passed automated validation plus physical iPhone release-mode validation.",
          bullets: [
            "BLE discovery, connection, exact service/characteristic validation, manual reads, and serialized recording targeting one read every 200 ms",
            "Four live raw-optical traces with bounded visualization buffering that does not alter acquisition or persisted data",
            "Pseudonymous sessions, local SQLite persistence, interrupted-session recovery, saved-session review, cascading deletion, CSV export, and metadata JSON export",
            "Database writes are queued separately from BLE operations, and normal stop verifies the stored sample count before finalizing a session",
          ],
        },
        {
          eyebrow: "Physically verified",
          title: "Physical Device and BLE Protocol Characterization",
          body:
            "Repeated reads on the physical sensor established that the current firmware exposes eleven unsigned 16-bit big-endian values in a 22-byte payload. That verification changed the software model because the device exposes more information than the earlier application assumptions suggested.",
          bullets: [
            "Four optical readings: 730 nm and 850 nm at long/far and short/near detector paths",
            "Seven engineering/status values: battery ADC, charging, USB, 8.2 V power, low-battery, power-mode, and duty-cycle status",
            "Read-completion timestamps are generated by the app because the current firmware does not provide device timestamps, sequence numbers, dropped-sample indicators, or firmware revision fields",
            "The complete raw 22-byte payload is preserved alongside every decoded accepted sample",
          ],
        },
        {
          eyebrow: "Implemented · Research data",
          title: "Baseline and Engineering Quality Monitoring",
          body:
            "Version 1 adds explicit baseline collection and configurable engineering checks so researchers can identify acquisition problems without converting those checks into physiological or clinical claims.",
          bullets: [
            "Exact accepted-sample baseline collection with minimum, maximum, range, arithmetic mean, and population standard deviation for all four raw optical fields",
            "Configurable read-rate, accepted-read-gap, near-floor, near-ceiling, flatline, abrupt-change, and baseline-range checks",
            "Per-sample quality flags and timestamped warning/baseline events retained for reproducibility",
            "Warnings never filter, replace, or silently discard accepted raw measurements",
            "Near-floor and near-ceiling thresholds remain disabled by default until experimentally established for the actual device and protocol",
          ],
        },
        {
          eyebrow: "Next · V1-HARDENING",
          title: "Markers, Controlled Reconnect, and Release-Candidate Hardening",
          body:
            "The repository's next authorized delivery slice is Version 1 hardening, not a new hardware generation. The existing draft hardening PR must be reconciled with current main and independently reviewed before any of its work can be described as merged.",
          bullets: [
            "Add the Version 1 experiment-marker entry workflow on top of the already-reserved durable marker schema",
            "Add bounded automatic reconnection while preserving the rule that a disconnect finalizes the active session before any reconnect",
            "Re-run the full automated gates on the submitted SHA and complete the required physical iPhone regression",
            "Preserve all existing raw-data, BLE protocol, persistence, export, and nonclinical boundaries during hardening",
          ],
        },
        {
          eyebrow: "Deferred / release boundary",
          title: "Version 1 Release and Platform Validation",
          body:
            "A production release is not yet ready. Release ownership, application identifiers and signing, distribution, compatibility, and institutional decisions remain external gates. Physical Android BLE acceptance is explicitly deferred and non-blocking for Version 1 release, but Android behavior must continue to be described as physically unverified until that protocol is run.",
          bullets: [
            "Physical iPhone evidence exists for the merged baseline; complete cross-platform physical validation does not",
            "Android remains a target, with automated/build checks required and physical BLE acceptance deferred until a device and operator are available",
            "Flutter web is outside Version 1 and is not authorized for implementation in the current delivery roadmap",
            "Hb/HbO2 calculations, cloud synchronization, user accounts, background acquisition, multiple devices, and clinical interpretation remain outside the validated Version 1 scope",
          ],
        },
      ],
      note:
        "Research use only. The current application does not provide clinical diagnosis, concussion assessment, brain-activation interpretation, validated hemoglobin concentration measurements, or a clinically validated signal-quality assessment. Milestones 0–6 are merged; the Version 1 hardening slice remains unapproved until its draft work is reconciled, revalidated, physically checked on iPhone, and independently reviewed.",
    },
  },
  {
    title: "Track & Field Training App",
    slug: "track-field-training-app",
    description:
      "Building a cross-platform athlete-and-coach training platform with personal workout logging, team identity, privacy-scoped coach access, reusable training templates, scheduled assignments, athlete submissions, and first-class Running, Jumps, Throws, and Lift workflows.",
    category: "Mobile & Backend Product Engineering",
    status: "Pilot Preparation",
    context: "Personal project",
    year: "2026",
    impact:
      "Expanded a personal training log into a team-ready coaching system while preserving athlete ownership and privacy through explicit coach-athlete relationships, database-enforced authorization, and separate prescription-versus-performance records.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript", "PostgreSQL & RLS"],
    link: "https://github.com/aprescod12/track-training-app",
    linkType: "code",
    caseStudy: {
      overview:
        "The Track & Field Training App has grown from a personal track-and-lift logger into a broader athlete-and-coach training platform. The current repository supports authenticated athlete logging, history, calendar planning, teams, team groups, explicit coach-athlete relationships, coach-authored workout templates, scheduled assignments, athlete submissions, and coach review. The training model now treats Running, Jumps, Throws, and Lift as separate first-class domains so field-event athletes are not forced into a generic running/lifting schema. The project is in pilot preparation with an athlete-focused Phase 4 runbook and staged production boundaries.",
      engineeringFocus: [
        "Extended the Supabase data model from personal workouts into teams, groups, coach-athlete assignments, workout templates, scheduled recipients, submissions, reviews, and field-event attempts while keeping athlete-owned performance separate from coach prescriptions.",
        "Implemented privacy and authorization as database rules rather than UI convention: team membership, team administration, friendship, athlete visibility, and coach training authority are separate concepts enforced through explicit relationships and Row-Level Security.",
        "Introduced domain-specific training workflows for Running, Jumps, Throws, and Lift, including jump/throw attempt models, implement-weight handling, assignment-domain matching, training bests, and calendar semantics that distinguish assigned from logged work.",
      ],
      systemDetails: [
        "React Native and Expo with TypeScript and Expo Router",
        "Supabase authentication, PostgreSQL migrations, Row-Level Security, and database authorization tests",
        "Athlete-owned workouts, entries, sets, field attempts, calendar events, personal records, and training-best surfaces",
        "Teams, groups, invitations, explicit coach-athlete assignments, role titles, and training-domain permissions",
        "Coach-authored templates, scheduled assignments, materialized recipients, athlete submissions, linked performance, and formal review metadata",
        "Local, staging/pilot, and future production environment separation with EAS preview builds and a documented pilot runbook",
      ],
      sections: [
        {
          eyebrow: "Athlete workflow",
          title: "Personal Training Across Four Domains",
          body:
            "Athletes can still use the application independently, but the underlying model now represents track and field more faithfully through four training domains rather than one generic non-lift category.",
          bullets: [
            "Running retains the set/rep/time-oriented model and fastest-time personal-record behavior",
            "Jumps support Long Jump, Triple Jump, High Jump, and Pole Vault with attempt-level marks or height outcomes",
            "Throws support Shot Put, Discus, Hammer, and Javelin with attempt outcomes and implement weight so unlike implements are not treated as equivalent",
            "Lift remains its own strength-training domain, with workout history, profile statistics, calendar integration, and athlete-owned data",
          ],
        },
        {
          eyebrow: "Authorization",
          title: "Teams Without Collapsing Athlete Privacy",
          body:
            "The team layer deliberately separates organizational membership from access to training data. A user does not gain athlete visibility simply by joining a team, becoming an administrator, sharing a group, or becoming verified.",
          bullets: [
            "Explicit active coach-athlete assignments are the coaching-based visibility gate",
            "Training-domain permissions independently control whether a coach may prescribe or formally review Running, Jumps, Throws, or Lift work",
            "Team groups organize rosters but never create friendship, athlete visibility, prescription authority, or review authority",
            "Coaches can view authorized team-context performance but cannot edit athlete-owned workouts or field attempts",
          ],
        },
        {
          eyebrow: "Coach workflow",
          title: "Prescription, Assignment, Submission, and Review",
          body:
            "Coach-created prescriptions are stored separately from what an athlete actually performs. That distinction keeps historical instructions auditable and prevents the coaching workflow from mutating athlete-owned performance.",
          bullets: [
            "Reusable workout templates snapshot into scheduled assignments so later template edits do not rewrite history",
            "Assignments can target a full team, group, selected athletes, or an individual while materializing the exact recipient list at assignment time",
            "Athletes can submit completed, partially completed, modified, skipped, or unavailable outcomes and attach an eligible workout when appropriate",
            "Formal coach review is written to dedicated review metadata and remains subject to current athlete visibility and training-domain authority",
          ],
        },
        {
          eyebrow: "Pilot status",
          title: "Staging and Pilot Readiness",
          body:
            "The repository now has a Phase 4 pilot runbook rather than treating the app as a purely local prototype. Pilot 1 is intentionally athlete-focused and uses EAS preview builds against staging services; production remains a future clean environment.",
          bullets: [
            "Pilot 1 targets an initial cohort of 3–5 athletes and validates onboarding, session persistence, training logs, calendar behavior, notifications, and ordinary recovery states",
            "Each release candidate keeps the coach-assignment workflow under smoke test even before the coach cohort is introduced",
            "The core coach-athlete workflow is production-live, while newer coach-responsibility-scope and field-event migrations are implemented in the repository but still pending hosted Supabase deployment",
            "Pilot completion requires measured reliability evidence; no retention, crash-rate, or usage metric is claimed before it is actually observed",
          ],
        },
      ],
      note:
        "The application is still under active development. Personal athlete workflows and the core coach-athlete assignment system are implemented; newer responsibility-scope and field-event schema changes are present in the repository but remain pending hosted Supabase deployment. Pilot 1 is a documented staging plan, not a completed public production launch.",
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
      "Building a Django-based career intelligence platform that turns résumés, approved employer sources, and job listings into structured evidence, controlled discovery, explainable candidate-to-role analysis, and a human-reviewed application pipeline.",
    category: "Applied AI & Full-Stack Software Engineering",
    status: "Active Development",
    context: "Independent AI engineering project",
    year: "2026",
    impact:
      "Created an auditable job-search pipeline connecting résumé evidence, career preferences, approved ATS sources, deterministic discovery relevance, structured job requirements, matcher versions, and application decisions without relying on unexplained AI recommendations or automatic applications.",
    tags: ["Django", "Python", "OpenAI API", "Information Retrieval", "Human-in-the-Loop"],
    link: "https://github.com/aprescod12/personal-job-finder",
    linkType: "code",
    caseStudy: {
      overview:
        "The Personal Job Intelligence and Application Tracking Platform is a learning-first Django application for discovering, reviewing, evaluating, and tracking job opportunities through controlled evidence boundaries. The implemented system stores and verifies résumé evidence, composes immutable candidate-profile snapshots, processes selected job listings, calculates transparent match results, tracks listing reliability, and now includes a real Job Discovery Agent surface with approved employer sources, deterministic relevance filtering, duplicate controls, and human handoff into Job Processing. AI may propose structured information from unstructured documents, while Python and Django enforce schemas, provenance, review gates, authorization restrictions, scoring rules, and database changes.",
      engineeringFocus: [
        "Built a controlled résumé pipeline for PDF, DOCX, and TXT sources with content fingerprinting, version history, deterministic parsing, optional OpenAI structured extraction, local evidence anchoring, editable claim review, and explicit activation of immutable candidate-profile snapshots.",
        "Designed a deterministic and explainable matcher that separates direct evidence, normalized concepts, controlled semantic evidence, missing qualifications, and hard eligibility blockers while preserving the exact matcher and candidate-profile versions used for every evaluation.",
        "Implemented bounded job discovery around approved ATS sources: live Greenhouse multi-board retrieval, deterministic relevance classification, source-attempt auditing, duplicate/closure handling, ATS detection for Greenhouse/Lever/Ashby, and a Lever adapter plus approval/connection-testing flow that stops before full Lever discovery execution.",
      ],
      systemDetails: [
        "Django application with job tracking, candidate-profile, review, calibration, discovery-inbox, and match-analysis workflows",
        "PDF, DOCX, and TXT résumé ingestion with local parsing, versioned sources, and approved claim provenance",
        "Optional OpenAI strict structured extraction with deterministic fallback and explicit enable controls",
        "Approved Greenhouse employer sources with bounded live discovery, multi-board execution previews, partial-failure accounting, relevance filtering, and human handoff",
        "Deterministic ATS detection for Greenhouse, Lever, and Ashby with bounded public-network validation and persisted source-detection audits",
        "Lever provider adapter and approved-source onboarding/connection testing implemented; full Lever discovery execution remains a later controlled step",
        "Versioned explainable matching, listing reliability checks, duplicate controls, reevaluation history, and application tracking",
      ],
      sections: [
        {
          eyebrow: "Candidate evidence",
          title: "From Résumé Files to Reviewed Profile Snapshots",
          body:
            "Résumé evidence is treated as a versioned source rather than a one-time prompt. Documents are parsed locally first, AI extraction is optional, and claims do not enter the active candidate profile until they have been grounded and explicitly reviewed.",
          bullets: [
            "PDF, DOCX, and TXT sources are fingerprinted and versioned with duplicate-file protection",
            "Deterministic parsing remains available without an API key; optional OpenAI extraction uses strict structured output",
            "Extracted claims are checked against local résumé text and presented for editable approval or rejection",
            "Only approved claims compose immutable candidate-profile snapshots, and a snapshot must be explicitly activated before matching changes",
          ],
        },
        {
          eyebrow: "Matching",
          title: "Explainable Evaluation Instead of a Black-Box Fit Score",
          body:
            "The live matcher is deterministic and versioned. It uses explicit evidence categories and refuses to let semantic similarity satisfy hard requirements such as work authorization, licensure, certifications, security clearance, or experience.",
          bullets: [
            "Required and preferred qualifications are represented separately from career preferences",
            "Match output preserves direct, related, controlled-semantic, missing, and blocker evidence",
            "Human calibration and blind holdout judgments are stored alongside model versions for regression comparison",
            "Immutable evaluation runs preserve candidate snapshot, job inputs, result evidence, gaps, blockers, and score deltas over time",
          ],
        },
        {
          eyebrow: "Discovery",
          title: "Controlled ATS Discovery With Human Handoff",
          body:
            "Stage 6 moved discovery from a future roadmap item into the working application. Discovery is still deliberately bounded: sources must be approved, provider calls are read-only, results are filtered and deduplicated locally, and nothing becomes a processed job until the user deliberately hands it off.",
          bullets: [
            "Greenhouse boards can be approved, connection-tested, selected in controlled multi-board runs, and reconciled without failed refreshes falsely closing prior listings",
            "Opportunities are classified deterministically as Strong, Adjacent, Industry only, Outside, or Insufficient information before entering the default Priority Inbox",
            "ATS detection can recognize Greenhouse, Lever, and Ashby from direct board URLs or company career pages while blocking private/local destinations and bounding redirects, response size, and timeout",
            "Lever now has a normalized provider adapter plus human-approved source onboarding and bounded connection tests; full Lever discovery execution is intentionally still disabled pending the next integration step",
          ],
        },
        {
          eyebrow: "Current boundary",
          title: "What Is Still Roadmap Work",
          body:
            "The application remains a controlled local-development system rather than an autonomous job-application bot. Several major components are intentionally still downstream of the evidence and discovery foundations.",
          bullets: [
            "Project Relevance and Development Agent is not yet implemented",
            "The full Coordinator Agent across stable component interfaces remains roadmap work",
            "Expanded tasks, reminders, interview, and follow-up workflows remain incomplete",
            "Production deployment still requires authentication/authorization hardening, protected résumé storage, production settings, database/backup strategy, observability, security review, and recovery procedures",
            "The system does not automatically apply to jobs, contact employers, or bypass review gates",
          ],
        },
      ],
      note:
        "The repository now contains real controlled job discovery; it is no longer accurate to describe all discovery as future work. Greenhouse execution is implemented. Lever detection, provider normalization, approval, and connection testing are implemented, while full Lever listing execution remains disabled pending the next bounded integration step. Ashby is detectable but not yet approvable. Project-relevance automation, the full coordinator, and production deployment remain roadmap work.",
    },
  },
  {
    title: "Company Snapshot — Evidence-Grounded Company Intelligence",
    slug: "company-snapshot-v2",
    description:
      "Built and deployed a company-intelligence web app that resolves company identity, retrieves recent public-web signals, verifies each claim against its publisher page, and returns an evidence-grounded snapshot or an honest limited-evidence state.",
    category: "Software Engineering & Applied AI",
    status: "Deployed",
    context: "AI-assisted take-home engineering project",
    year: "2026",
    impact:
      "Designed a bounded, inspectable retrieval pipeline with strict identity, recency, source-verification, deduplication, and failure controls, then validated it against real production companies and publisher sources with a 372-test zero-network suite.",
    tags: ["Node.js", "Exa API", "Vercel", "Information Retrieval", "Verification & Testing"],
    link: "https://github.com/aprescod12/company-snapshot-v2",
    linkType: "code",
    caseStudy: {
      overview:
        "Company Snapshot is a deployed web application that turns a company name or domain into a short description and up to three recent, source-linked signals from the public web. I built it around a simple constraint: retrieval quality had to be inspectable and failure had to remain honest. Instead of relying on one opaque model response, the final system resolves company identity, performs bounded Exa discovery, prioritizes candidates deterministically, verifies publisher pages directly, optionally performs one official-domain fallback, generates a homepage-grounded description, and assembles only evidence that passes the pipeline's controls.",
      engineeringFocus: [
        "Designed a bounded retrieval architecture with one broad Exa Search, sequential source verification, at most one official-domain fallback Search, one homepage Contents request, no automatic retries, and no provider waterfall.",
        "Implemented deterministic identity, recency, source classification, support, and duplicate-event checks so search snippets are treated as candidates rather than final evidence and weak cases fail closed instead of being padded.",
        "Used production failures and red-before-green regressions to strengthen same-event deduplication and publisher HTML extraction, while explicitly stopping further complexity when a residual live-web limitation could not be justified as a deterministic defect.",
      ],
      systemDetails: [
        "Native Node.js ES modules with zero npm runtime dependencies",
        "Exa Search for bounded discovery and Exa Contents for the confirmed homepage description",
        "Publisher-page verification with safe URL handling, bounded redirects/body size, publication-date extraction, claim support checks, and recency enforcement",
        "Public states for snapshot, insufficient evidence, clarification needed, and sanitized provider unavailability",
        "Vercel serverless API boundary with a server-only EXA_API_KEY and a plain HTML/CSS/JavaScript frontend",
        "372 zero-network tests plus a local HTTP fixture harness for exercising the real frontend without provider calls",
      ],
      sections: [
        {
          eyebrow: "Architecture",
          title: "From One-Shot Retrieval to a Bounded Evidence Pipeline",
          body:
            "Early provider experiments showed that a single search or synthesized answer could return plausible-looking but weak, stale, or unsupported signals. The final architecture therefore separates discovery from evidence approval and places a hard ceiling on retrieval complexity.",
          bullets: [
            "Resolve the submitted company before searching for signals so ambiguous identity produces clarification instead of a guess",
            "Use one broad Search to discover candidates, then prioritize them deterministically by recency, provenance, and lightweight duplicate detection",
            "Verify publisher pages sequentially and preserve only source-derived evidence that passes company, date, recency, support, and materiality checks",
            "Use at most one official-domain fallback Search when fewer than three verified signals survive, then stop with insufficient evidence rather than fabricate coverage",
          ],
        },
        {
          eyebrow: "Verification",
          title: "Evidence Is Verified Before It Reaches the Snapshot",
          body:
            "Search-provider metadata is never treated as final proof. Each candidate must survive direct publisher-page retrieval and deterministic checks before its title, date, and source URL can appear in the public result.",
          bullets: [
            "Fetch exact publisher URLs with bounded timeouts, redirect limits, response sizes, and public-source URL safeguards",
            "Extract publisher-derived article titles, dates, and substantive body content instead of trusting search snippets alone",
            "Require the page to support the intended company and event, reject stale or trivial results, and classify first-party versus secondary sources",
            "Keep the description path separate: one Exa Contents request summarizes the already-confirmed company's homepage in 2–3 stable, factual sentences",
          ],
        },
        {
          eyebrow: "Production debugging",
          title: "Real Failures Drove the Deduplication Design",
          body:
            "Reviewer-style production testing exposed duplicate-event cases that ordinary title-similarity tests missed. Those failures were reproduced offline before changes were accepted, and the fixes were deliberately generic rather than company-specific.",
          bullets: [
            "A Linear production case revealed two different publisher headlines covering the same tender and valuation event, leading to a second evidence-level duplicate check over verified article content",
            "Adversarial review added protections for repeated corporate metrics, percent parsing, currency-versus-count anchors, nested article markup, script/comment regions, and spelled-out quantities",
            "A later Adobe replay still exposed a residual live publisher-structure edge case; after bounded investigation, that limitation was documented and accepted instead of expanding the system into an unbounded crawler or semantic-research agent",
            "The final runtime intentionally favors precision and honest failure over universal recall",
          ],
        },
        {
          eyebrow: "AI-assisted engineering",
          title: "Plan, Implement, Review the Diff, Then Verify",
          body:
            "The repository also records the development process used to build the system with AI coding agents. Architecture and phase boundaries were defined before implementation, actual diffs were reviewed rather than trusting completion claims, and genuine AI mistakes were logged when testing or inspection proved them wrong.",
          bullets: [
            "Used full-context, bounded implementation briefs instead of one-shot build prompts",
            "Separated local implementation, pre-push review, push authorization, remote confirmation, and formal phase approval",
            "Maintained an AI failure log covering incorrect assumptions, parser bugs, misleading tests, over-broad fixes, and debugging mistakes",
            "Backed the final implementation with 372 zero-network tests and targeted live-production validation against real companies and source pages",
          ],
        },
      ],
      note:
        "The deployed application intentionally does not guarantee a successful three-signal snapshot for every company. Ambiguous identity, sparse evidence, provider variability, or publisher-page structure can produce clarification, limited evidence, or sanitized unavailable states. The documented residual same-event deduplication limitation is accepted rather than hidden or padded with weaker evidence.",
    },
  },
  {
    title: "CaribEcon Intelligence Backend",
    slug: "caribecon-intelligence-backend",
    description:
      "Built and governed CaribEcon's PostgreSQL/Supabase intelligence backend and production-integration control plane, moving macroeconomic and news data toward canonical, versioned storage while preserving the existing website, Excel, and Ask CaribEcon contracts.",
    category: "Backend & Data Engineering",
    status: "Pilot Integration",
    context: "Buildathon team · Backend & Data Engineer",
    year: "2026",
    impact:
      "Advanced the backend from an isolated schema into a governed hosted lineage: canonical macro/news ingestion and parity controls, 2,239 canonical news identities after the approved catch-up, a least-privileged runtime-read foundation, and a dedicated Ask/Deep Dive spend-ledger connection deployed to the Excel pilot.",
    tags: ["TypeScript", "PostgreSQL", "Supabase", "Data Governance", "Production Integration"],
    caseStudy: {
      overview:
        "CaribEcon is a Caribbean economic intelligence platform spanning an Astro website, Excel analyst tools, structured macro/news data, and evidence-grounded AI research. My backend work focuses on the governed PostgreSQL/Supabase intelligence layer and the control plane used to verify, migrate, and safely connect that layer to existing consumers. The backend now has hosted canonical macro/news state, governed ingestion and promotion, reproducible parity evidence, a least-privileged runtime reader, and a dedicated database connection for the Ask/Deep Dive spend ledger. The project intentionally preserves compatibility while integrations are phased: the Excel pilot is the active integration target, while the public website and macro/news content consumers remain JSON-backed until separately authorized migrations.",
      engineeringFocus: [
        "Designed and implemented a Raw → Staging → Validation/Review → Canonical architecture so automated feeds, discovery systems, or model-assisted candidates cannot publish trusted production facts directly.",
        "Built deterministic normalization, stable economic/evidence identifiers, provenance and vintage tracking, idempotent import/promotion behavior, canonical parity checks, and explicit review boundaries for macroeconomic and news data.",
        "Extended the work into production integration and security hardening with a least-privileged runtime reader, transaction-pooler validation, credential separation, database/TLS checks, rollback evidence, and a dedicated spend-ledger path for the Excel Ask/Deep Dive pilot.",
      ],
      systemDetails: [
        "PostgreSQL/Supabase intelligence core with canonical economies, indicators, sources, series, observations, vintages, version history, news, and evidence references",
        "Separate raw, staging, review, and explicit promotion layers with provenance from source payload to trusted canonical record",
        "Deterministic TypeScript normalization, validation, evidence identifiers, import tooling, parity checks, and idempotency verification",
        "Hosted canonical news catch-up with 2,239 identities and governance that keeps needs-review/rejected records out of canonical output",
        "Least-privileged runtime-read foundation proven through the transaction pooler with explicit privilege, TLS, timeout, and rollback controls",
        "Dedicated caribecon_ask_ledger connection deployed for Ask and Deep Dive spend accounting in the Excel pilot",
      ],
      sections: [
        {
          eyebrow: "Data governance",
          title: "Raw Data Does Not Become Trusted Data Automatically",
          body:
            "The backend is built around an explicit promotion boundary. Receiving, normalizing, staging, or even reviewing a record does not make it canonical; trusted output requires a governed promotion step and keeps source/vintage history intact.",
          bullets: [
            "Raw source payloads, staged normalized records, review decisions, and canonical records remain separate layers",
            "Historical macro revisions are preserved as vintages instead of overwriting the prior reported value",
            "Existing evidence-ID contracts are preserved so the backend can sit underneath the current research and consumer surfaces without inventing a second identity scheme",
            "Repeated import and promotion paths are tested for idempotency and parity rather than assuming an upsert is safe",
          ],
        },
        {
          eyebrow: "Canonical catch-up",
          title: "From Local Proof to Hosted Canonical State",
          body:
            "The backend work progressed beyond a local schema. The governed hosted lineage was audited, reconciled, and brought forward through bounded migration slices with explicit evidence and independent review.",
          bullets: [
            "Canonical macro state and source-vintage behavior were verified without silently replacing repository contracts",
            "The approved news catch-up promoted 2,238 governed candidates while retaining one historical canonical extra, for 2,239 canonical news identities",
            "Needs-review and rejected news records remain unpromoted by design",
            "Recovery, replay, manifest, permission, and integrity evidence are retained alongside the migration history",
          ],
        },
        {
          eyebrow: "Production integration",
          title: "Least-Privilege Runtime and Excel Pilot Cutover",
          body:
            "The integration phase added the database boundary needed for server-side runtime use without giving application code unrestricted mutation authority. The Excel product, including Ask and Deep Dive, is the current pilot target.",
          bullets: [
            "A dedicated runtime reader was implemented and verified against the hosted transaction pooler",
            "The Ask spend-ledger path was separated into its own dedicated credential and database functions",
            "The production cutover passed API status checks and a human Excel Desktop smoke for Ask and Deep Dive",
            "Compatibility paths such as the legacy POSTGRES_URL and direct postgres grants remain governed residuals rather than being silently removed",
          ],
        },
        {
          eyebrow: "Current boundary",
          title: "Integration Is Intentionally Incomplete",
          body:
            "The backend is not presented as a completed replacement for every CaribEcon data path. The current architecture keeps consumer migration separate from canonical-data readiness so that rollback and parity remain measurable.",
          bullets: [
            "Macro and news content consumers remain JSON-backed; the database is not yet the universal runtime content source",
            "The public Astro website remains a refreshed JSON-backed consumer",
            "The Excel add-in is the pilot product; current buildathon deployments continue to sync main-owned news data while the API migration is staged",
            "The next content-consumer slice is still separately governed; no case-study claim treats it as complete merely because the database exists",
          ],
        },
      ],
      note:
        "CaribEcon uses multiple active lineages. The repository's current main branch continues the broader Astro/data-feed product, while the backend control plane lives on feature/amiri-backend and the production Excel-pilot integration runs on buildathon. This case study describes that backend/integration lineage specifically rather than implying every backend file is merged into main or that every consumer has migrated off JSON.",
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
      { youtubeId: "tgXctCg14ZQ", caption: "Button presses and LED responses." },
      {
        youtubeId: "rMUoFo9LxEs",
        caption:
          "The Arduino Serial Monitor demonstrated button-press recognition and elevator-state updates.",
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
        "Coordinated Wi-Fi and NTP time synchronization with OLED rendering, button input, and audio output.",
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
        caption: "The system alarm sounding at the specified time.",
      },
      {
        youtubeId: "ksUBhCYbksk",
        caption: "The system entering a one-minute snooze mode after a button press.",
      },
      {
        youtubeId: "-uvissk0dHE",
        caption: "The system entering SILENCED mode after a button press.",
      },
      {
        youtubeId: "iNDnfd_8_3s",
        caption: "Demonstrating the toggle-screen button.",
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