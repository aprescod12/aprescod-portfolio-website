"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type CarouselPhoto = {
  src: string;
  alt: string;
};

const photos: CarouselPhoto[] = [
  {
    src: "/home/websitegradpic.JPG",
    alt: "Amiri Prescod at Villanova University",
  },
  {
    src: "/home/webformal1.JPG",
    alt: "Amiri Prescod in a professional setting",
  },
  {
    src: "/home/websitetrack2.jpg",
    alt: "Amiri Prescod competing in track and field",
  },
  {
    src: "/home/webformalpic2.JPG",
    alt: "Amiri Prescod at a formal event",
  },
  {
    src: "/home/websitetrack.JPG",
    alt: "Amiri Prescod during a track competition",
  },
  {
    src: "/home/websitetrack3.jpg",
    alt: "Amiri Prescod representing Villanova Track and Field",
  },
];

const firstPhoto = photos[0]!;
const carouselPhotos: CarouselPhoto[] = [
  ...photos,
  { ...firstPhoto, alt: `${firstPhoto.alt} — repeated slide` },
];

export default function HomePhotoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let resetTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      if (isPausedRef.current) return;

      const slides = Array.from(carousel.children) as HTMLElement[];
      const nextIndex = activeIndexRef.current + 1;
      const nextSlide = slides[nextIndex];

      if (!nextSlide) return;

      activeIndexRef.current = nextIndex;
      carousel.scrollTo({ left: nextSlide.offsetLeft, behavior: "smooth" });

      if (nextIndex === photos.length) {
        resetTimeout = setTimeout(() => {
          carousel.scrollTo({ left: 0, behavior: "auto" });
          activeIndexRef.current = 0;
        }, 700);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (resetTimeout !== undefined) clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <section className="mt-14 mb-10" aria-label="Work and athletics photo carousel">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            A glimpse into my work &amp; athletics
          </p>
          <p className="mt-2 text-sm text-zinc-400">Auto-scrolling • drag to explore</p>
        </div>
        <Link
          href="/track"
          className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
        >
          Explore Track &amp; Field →
        </Link>
      </div>

      <div
        ref={carouselRef}
        onMouseEnter={() => {
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
        }}
        onFocusCapture={() => {
          isPausedRef.current = true;
        }}
        onBlurCapture={() => {
          isPausedRef.current = false;
        }}
        className="relative mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {carouselPhotos.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            className="relative h-56 w-80 flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            aria-hidden={index === photos.length}
          >
            <Image
              src={photo.src}
              alt={index === photos.length ? "" : photo.alt}
              fill
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      <p className="mt-3 text-sm text-zinc-400">
        Engineering + athletics — disciplined execution in both.
      </p>
    </section>
  );
}
