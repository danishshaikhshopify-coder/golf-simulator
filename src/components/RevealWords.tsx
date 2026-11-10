"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/** Splits text on spaces and reveals each word with a stagger on scroll-into-view. */
export default function RevealWords({
  text,
  className,
  wordClassName,
  start = "top 85%",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  start?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".reveal-word");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y: "100%" });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () =>
        gsap.to(targets, {
          opacity: 1,
          y: "0%",
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
        }),
    });

    return () => trigger.kill();
  }, [start]);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span className="reveal-line" key={i}>
          <span className={`reveal-word ${wordClassName ?? ""}`}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
