import { CheckCircle2, GraduationCap } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { resume } from "@/data/resume";

export function Credentials() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionReveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Track record
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Key achievements
            </h2>
            <ul className="mt-8 space-y-4">
              {resume.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm leading-relaxed text-muted sm:text-base">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Education
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              {resume.education.map((edu) => (
                <div key={edu.degree} className="mt-5">
                  <p className="font-display text-base font-semibold text-foreground">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted">{edu.school}</p>
                  <p className="mt-1 text-sm text-muted">{edu.location}</p>
                  <p className="mt-3 text-xs text-muted">
                    {edu.start} — {edu.end}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
