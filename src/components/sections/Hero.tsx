"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import RevealWords from "@/components/RevealWords";

export default function Hero() {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.to(indicatorRef.current, {
      y: 8,
      opacity: 0.4,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(imgRef.current, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: imgRef.current, start: "top top", end: "bottom top", scrub: true },
    });
  }, []);

  return (
    <section className="relative flex h-[100svh] flex-col justify-end overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 -top-[10%] h-[120%] w-full">
        <Image
          src="/images/hero-bay.jpg"
          alt="Premium indoor golf simulator bay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-deep/10" />
      </div>

      <div className="relative z-10 px-6 pb-20 sm:px-10 md:pb-28">
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ivory sm:text-6xl md:text-7xl">
          <RevealWords text="You're Getting Inquiries." className="block" />
          <RevealWords
            text="But How Many Are Turning Into Sales?"
            className="block"
            start="top 95%"
          />
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted">
          A 90-day Sales Growth Partnership for Golf Simulator Dealers.
        </p>
      </div>

      <div
        ref={indicatorRef}
        className="absolute bottom-8 right-6 z-10 text-muted sm:right-10"
      >
        <ChevronDown size={20} strokeWidth={1.5} />
      </div>
    </section>
  );
}
