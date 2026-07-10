"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CarouselPhoto = {
  src: string;
  alt: string;
};

const initialPhotos: CarouselPhoto[] = [
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

export default function HomePhotoCarousel() {
  const [photos, setPhotos] = useState<CarouselPhoto[]>(initialPhotos);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const pendingStepRef = useRef(0);
  const recycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    const completedStep = pendingStepRef.current;

    if (!carousel || completedStep === 0) return;

    // React has moved the first image to the end. Offset the scroll position
    // by the same distance before paint so the visible content does not jump.
    const previousInlineBehavior = carousel.style.scrollBehavior;
    carousel.style.scrollBehavior = "auto";
    carousel.scrollLeft = Math.max(0, carousel.scrollLeft - completedStep);
    carousel.getBoundingClientRect();
    carousel.style.scrollBehavior = previousInlineBehavior;

    pendingStepRef.current = 0;
    isAnimatingRef.current = false;
  }, [photos]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const advanceCarousel = () => {
      if (isPausedRef.current || isAnimatingRef.current) return;

      const slides = Array.from(carousel.children) as HTMLElement[];
      if (slides.length < 2) return;

      const step = slides[1].offsetLeft - slides[0].offsetLeft;
      if (step <= 0) return;

      isAnimatingRef.current = true;
      carousel.scrollBy({ left: step, behavior: "smooth" });

      recycleTimeoutRef.current = setTimeout(() => {
        pendingStepRef.current = step;

        setPhotos((currentPhotos) => {
          if (currentPhotos.length < 2) {
            pendingStepRef.current = 0;
            isAnimatingRef.current = false;
            return currentPhotos;
          }

          const [passedPhoto, ...remainingPhotos] = currentPhotos;
          return [...remainingPhotos, passedPhoto!];
        });

        recycleTimeoutRef.current = null;
      }, 700);
    };

    const interval = setInterval(advanceCarousel, 4000);

    return () => {
      clearInterval(interval);
      if (recycleTimeoutRef.current !== null) {
        clearTimeout(recycleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="mt-14 mb-10" aria-label="Work and athletics photo carousel">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            A glimpse into my work &amp; athletics
          </p>
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
        onPointerDown={() => {
          isPausedRef.current = true;
        }}
        onPointerUp={() => {
          isPausedRef.current = false;
        }}
        className="relative mt-5 flex gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
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
