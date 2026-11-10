import Image from "next/image";
import Reveal from "@/components/Reveal";
import RevealWords from "@/components/RevealWords";

const stages = [
  { n: "01", name: "ATTRACT", body: "Bring in the right buyers." },
  { n: "02", name: "CONVERT", body: "Follow up and move serious inquiries forward." },
  { n: "03", name: "RECOVER", body: "Reconnect with missed opportunities." },
  { n: "04", name: "RETAIN", body: "Keep customers informed." },
];

export default function Strategy() {
  return (
    <section className="relative">
      <div className="relative flex h-[46vh] items-end overflow-hidden sm:h-[52vh]">
        <Image
          src="/images/flatlay-overhead.jpg"
          alt="Golf equipment detail"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/20" />
        <h2 className="relative z-10 px-6 pb-10 font-display text-4xl font-bold leading-tight tracking-tight sm:px-10 sm:text-5xl md:text-6xl">
          <RevealWords text="One Connected System." />
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-hairline sm:left-10" aria-hidden="true" />
        {stages.map((stage) => (
          <Reveal key={stage.n} y={24} className="relative py-7 pl-14 sm:pl-20">
            <span className="absolute left-0 top-6 text-sm font-medium text-lime sm:left-4">
              {stage.n}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {stage.name}
            </h3>
            <p className="mt-1 text-lg text-muted">{stage.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
