import Image from "next/image";
import Reveal from "@/components/Reveal";
import RevealWords from "@/components/RevealWords";

export default function Promise() {
  return (
    <section className="relative bg-surface px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:order-2">
          <div
            className="absolute -right-4 -top-4 h-full w-full rounded-sm bg-lime/15 sm:-right-6 sm:-top-6"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-sm">
            <Image
              src="/images/club-closeup.jpg"
              alt="Golf club and ball detail"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:order-1">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            <RevealWords text="Turn More Interest Into Sales." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-xl text-muted">
              Build a better process to attract buyers, follow up, and
              recover missed opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 max-w-sm text-sm text-muted/70">
              Results depend on your pricing, market, and ad budget. We
              focus on improving the process and results over time.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
