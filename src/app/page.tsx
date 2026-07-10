// app/page.tsx
// Purpose: Recruiter-first homepage with a strong headline, credibility blocks, and clear CTAs.

import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <Container>
      {/* HERO: first impression (headline + positioning + CTAs) */}
      <section className="relative overflow-hidden rounded-3xl border border-white