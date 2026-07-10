"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import type { TrackPhoto } from "@/lib/track";

const AUTOPLAY_INTERVAL = 6500;
const SWIPE_THRESHOLD = 45;

export default function TrackPhotoCarousel({ photos }: { photos: TrackPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + photos.length) % photos.length);
    },
    [photos.length]
  );

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (
      photos.length < 2 ||
      userPaused ||
      interactionPaused ||
      reduceMotion
    ) {
      return;
    }

    const interval = window.setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [goNext, interactionPaused, photos.length, reduceMotion, userPaused]);

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

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    setInteractionPaused(true);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;

    touchStartX.current = null;
    setInteractionPaused(false);

    if (startX === null || endX === undefined) return;

    const distance = endX - startX;
    if (Math.abs(distance) < SWIPE_THRESHOLD) return;

    if (distance > 0) {
      goPrevious();
    } else {
      goNext();
    }
  };

  if (!photos.length) return null;

  const activePhoto = photos[activeIndex];

  return (
    <section
      aria-label="Competition photography"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={handleBlur}
      className="rounded-3xl border border-white/10 bg-white/5 p-3 outline-none transition-colors focus-visible:border-blue-400/50 md:p-4"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-950 sm:aspect-[16/11] lg:aspect-[4/5]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={activePhoto.src}
          src={activePhoto.src}
          alt={activePhoto.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/20" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
          <span className="rounded-full border border-white/15 bg-zinc-950/65 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur">
            Competition photography
          </span>

          <button
            type="button"
            disabled={reduceMotion}
            onClick={() => setUserPaused((paused) => !paused)}
            className="rounded-full border border-white/15 bg-zinc-950/65 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur transition-colors hover:bg-zinc-900 disabled:cursor-default disabled:text-zinc-400"
            aria-label={
              reduceMotion
                ? "Autoplay disabled by reduced-motion preference"
                : userPaused
                  ? "Resume photo slideshow"
                  : "Pause photo slideshow"
            }
          >
            {reduceMotion ? "Reduced motion" : userPaused ? "Play" : "Pause"}
          </button>
        </div>

        {photos.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous competition photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-zinc-950/65 px-3 py-2 text-sm text-white backdrop-blur transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next competition photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-zinc-950/65 px-3 py-2 text-sm text-white backdrop-blur transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              →
            </button>
          </>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
          <p className="text-xs text-zinc-200" aria-live="polite">
            Photo {activeIndex + 1} of {photos.length}
          </p>

          <div className="flex items-center gap-2" aria-label="Choose a competition photo">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show competition photo ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={[
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                  index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/35 hover:bg-white/60",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
