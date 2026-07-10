// app/page.tsx
// Purpose: Recruiter-first homepage with a strong headline, credibility blocks, and clear CTAs.

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured);

  return (
