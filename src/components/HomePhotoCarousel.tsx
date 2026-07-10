"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";

type CarouselPhoto = {
  src: string;
  alt: string;
};

const AUTOPLAY_INTERVAL = 5500;

const photos: CarouselPhoto[] = [
  {
    src: "/home/websitegradpic.JPG",
    alt: "Amiri Prescod at Villanova University.",
  },
  {
    src: "/home/webformal1.JPG",
    alt: "Amiri Prescod in a professional setting.",
  },
  {
    src: "/home/websitetrack2.jpg",
    alt: "Amiri Prescod competing in track and field.",
  },
  {
    src: "/home/webformalpic2.JPG",
    alt: "Amiri Prescod at a formal event.",
  },
  {
    src: "/home/websitetrack.JPG",
    alt: "Amiri Prescod during a track competition.",
  },
  {
    src: "/home/websitetrack3.jpg",
    alt: "Amiri Prescod representing Villanova Track and Field.",
  },
];

export default function HomePhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const normalizedIndex = (index + photos.length) % photos.length;
      const carousel = carouselRef.current;
      const slide = slideRefs.current[normalizedIndex];

      if (!carousel || !slide) return;

      carousel.scrollTo({
        left: slide.offsetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(normalizedIndex);
    },
    [reduceMotion]
  );

  const goPrevious = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (userPaused || interactionPaused || reduceMotion) return;

    const interval = window.setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [goNext, interactionPaused, reduceMotion, userPaused]);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const closestIndex = slideRefs.current.reduce(
        (closest, slide, index) => {
          if (!slide) return closest;

          const currentDistance = Math.abs(slide.offsetLeft - carousel.scrollLeft);
          return currentDistance < closest.distance
            ? { index, distance: currentDistance }
            : closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY }
      ).index;

      setActiveIndex(closestIndex);
      scrollFrameRef.current = null;
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setInteractionPaused(false);
    }
  };

  return (
    <section
      className="mt-14 mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-4 outline-none transition-colors focus-visible:border-blue-400/50 md:p-5"
      aria-label="Work and athletics photography"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={handleBlur}
      onPointerDown={() => setInteractionPaused(true)}
      onPointerUp={(event) => setInteractionPaused(event.pointerType === "mouse")}
      onPointerCancel={() => setInteractionPaused(false)}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            A glimpse into my work &amp; athletics
          </p>
          <p className="mt-2 text-sm text-zinc-300">
            Engineering and athletics—disciplined execution in both.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous photo"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            →
          </button>
          <button
            type="button"
            disabled={reduceMotion}
            onClick={() => setUserPaused((paused) => !paused)}
            aria-label={
              reduceMotion
                ? "Autoplay disabled by reduced-motion preference"
                : userPaused
                  ? "Resume photo carousel"
                  : "Pause photo carousel"
            }
            className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-medium text-zinc-200 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-default disabled:text-zinc-500"
          >
            {reduceMotion ? "Reduced motion" : userPaused ? "Play" : "Pause"}
          </button>
          <Link
            href="/track"
            className="ml-1 rounded-lg text-sm font-medium text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Explore Track &amp; Field →
          </Link>
        </div>
      </div>

      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className={[
          "mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          reduceMotion ? "scroll-auto" : "scroll-smooth",
        ].join(" ")}
      >
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${photos.length}`}
            className="relative h-56 w-[82vw] max-w-80 flex-none snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:w-80"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 82vw, 320px"
              className="object-cover transition-transform duration-300 motion-reduce:transition-none md:hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p
          className="text-xs text-zinc-500"
          aria-live={userPaused || interactionPaused ? "polite" : "off"}
        >
          Photo {activeIndex + 1} of {photos.length}
        </p>

        <div className="flex items-center gap-2" aria-label="Choose a photo">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={[
                "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                index === activeIndex
                  ? "w-6 bg-blue-300"
                  : "w-2 bg-white/25 hover:bg-white/50",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
