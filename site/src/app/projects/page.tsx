import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";
import { projects } from "@/data/projects";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: `Projects — ${resume.name}`,
  description:
    "Case studies from production platforms in AI, healthtech, fintech, e-commerce, and enterprise SaaS.",
};

export default function ProjectsPage() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          All projects
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          {projects.length} production platforms across AI, healthtech, fintech, e-commerce,
          and enterprise SaaS — filter by category to see relevant work.
        </p>

        <div className="mt-14">
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
