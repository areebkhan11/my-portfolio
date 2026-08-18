import { SectionReveal } from "@/components/section-reveal";
import { resume } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Career
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
        </SectionReveal>

        <div className="mt-14 space-y-10">
          {resume.experience.map((role, i) => (
            <SectionReveal key={`${role.company}-${role.start}`} delay={i * 0.08}>
              <div className="relative grid gap-2 border-l border-border pl-8 sm:grid-cols-[1fr_2.5fr] sm:gap-8">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />

                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {role.company}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {role.start} — {role.current ? "Present" : role.end}
                  </p>
                  {role.current && (
                    <span className="mt-3 inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {role.role}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
