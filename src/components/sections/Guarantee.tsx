import Reveal from "@/components/Reveal";
import RevealWords from "@/components/RevealWords";

export default function Guarantee() {
  return (
    <section className="bg-surface px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          <RevealWords text="Our Commitment." className="block" />
          <RevealWords text="Backed by $500." className="block text-lime" start="top 95%" />
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-xl text-ivory">
            If we fail to deliver the agreed sales follow-up and lead
            recovery work within 90 days, we&rsquo;ll pay you $500 and
            provide one additional month of service free.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-base text-muted">
            No extra service fee for the additional month.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-10 text-sm text-muted/70">
            A delivery-based guarantee — not a sales or revenue guarantee.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
