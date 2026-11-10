"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Reveal from "@/components/Reveal";
import RevealWords from "@/components/RevealWords";

const phases = [
  { n: "01", title: "FOUNDATION", body: "Understand the business and its sales process." },
  { n: "02", title: "IMPLEMENTATION", body: "Build the agreed lead generation and follow-up processes." },
  { n: "03", title: "OPTIMIZATION", body: "Review results and improve what works." },
];

export default function Partnership() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !trackRef.current || !fillRef.current) return;
    gsap.fromTo(
      fillRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32 md:py-40">
      <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        <RevealWords text="90 Days. Three Phases." />
      </h2>

      <div ref={trackRef} className="relative mt-20">
        <div className="absolute left-0 right-0 top-0 h-px origin-left bg-hairline" />
        <div
          ref={fillRef}
          className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-lime"
        />

        <div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-3">
          {phases.map((phase, i) => (
            <Reveal key={phase.n} delay={i * 0.1}>
              <p className="text-sm font-medium text-lime">{phase.n}</p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ivory">
                {phase.title}
              </h3>
              <p className="mt-2 text-base text-muted">{phase.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
