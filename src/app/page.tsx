// app/page.tsx
// Purpose: Recruiter-first homepage with a strong headline, credibility blocks, and clear CTAs.

import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import HomePhotoCarousel from "@/components/HomePhotoCarousel";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured);

  return (
    <Container>
      {/* HERO: first impression (headline + positioning + CTAs) */}
      <section className="relative overflow-hidden rounded-3xl border border-white