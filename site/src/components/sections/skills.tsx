import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  MonitorSmartphone,
  Server,
  Wrench,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { resume } from "@/data/resume";

const icons: Record<string, typeof Code2> = {
  Languages: Code2,
  Frontend: MonitorSmartphone,
  Backend: Server,
  Databases: Database,
  DevOps: Cloud,
  Tools: Wrench,
  Concepts: BrainCircuit,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Toolkit
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The stack behind every project on this page.
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((group, i) => {
            const Icon = icons[group.category] ?? Code2;
            return (
              <SectionReveal key={group.category} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
