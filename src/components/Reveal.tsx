"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  start = "top 85%",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.9, delay, ease: "power3.out" }),
    });

    return () => trigger.kill();
  }, [y, delay, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
