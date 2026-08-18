import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Selected work
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Production platforms I&apos;ve engineered end-to-end.
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              View all {projects.length} projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
