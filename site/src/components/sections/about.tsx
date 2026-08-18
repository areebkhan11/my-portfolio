import { Cloud, Cpu, Layers, Users } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { resume } from "@/data/resume";

const focusAreas = [
  {
    icon: Layers,
    title: "Full-stack architecture",
    description:
      "Designing React/Next.js frontends and Node.js/NestJS backends that hold up under real production load.",
  },
  {
    icon: Cpu,
    title: "AI-driven systems",
    description:
      "Shipping OCR pipelines, RAG-based recommendation engines, and LLM-powered agents into live products.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Running containerized workloads on AWS with CI/CD pipelines that cut deployment time in half.",
  },
  {
    icon: Users,
    title: "Team leadership",
    description:
      "Leading and mentoring engineering teams while staying hands-on with architecture and code.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                About
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Five years of shipping systems that don&apos;t fall over.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                {resume.summary}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
                >
                  <area.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
