import Reveal from "@/components/Reveal";

const problems = [
  { text: "Inquiries that don't convert.", fade: 1 },
  { text: "Quotes that go unanswered.", fade: 0.72 },
  { text: "Old leads that get forgotten.", fade: 0.45 },
];

export default function Problems() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32 md:py-40">
      <p className="text-sm text-muted">The problem</p>

      <div className="mt-10 flex flex-col divide-y divide-hairline">
        {problems.map(({ text, fade }) => (
          <Reveal key={text} className="py-8 sm:py-10">
            <p
              className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
              style={{ opacity: fade }}
            >
              {text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
