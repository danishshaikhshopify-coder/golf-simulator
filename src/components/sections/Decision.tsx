import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Decision() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-hairline">
        <Reveal className="px-6 py-4">
          <p className="font-display text-3xl font-bold tracking-tight text-muted/50 sm:text-4xl">
            Keep missing opportunities.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="px-6 py-4">
          <p className="font-display text-3xl font-bold tracking-tight text-lime sm:text-4xl">
            Build a better sales process.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <p className="mt-10 max-w-lg text-xl text-ivory">
          Let&rsquo;s build a better way to win business.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <button
          type="button"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-medium text-deep transition-transform hover:scale-[1.02]"
        >
          Let&rsquo;s Talk About Your Growth
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </Reveal>

      <Reveal delay={0.5}>
        <p className="mx-auto mt-10 max-w-md text-sm text-muted/70">
          We don&rsquo;t promise sales we cannot control. We build the
          system and improve it using real results.
        </p>
      </Reveal>
    </section>
  );
}
