import Image from "next/image";
import Reveal from "@/components/Reveal";
import RevealWords from "@/components/RevealWords";

export default function WhoWeHelp() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-[50vh] md:h-[80vh]">
        <Image
          src="/images/swing-action.jpg"
          alt="Customer practicing a swing indoors"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-16">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          <RevealWords text="Built for Golf Simulator Businesses." />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-5 text-xl text-lime">Dealers. Retailers. Resellers.</p>
        </Reveal>
      </div>
    </section>
  );
}
