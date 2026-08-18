import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const GRADIENTS: Record<string, string> = {
  "studiox-ai": "from-[#3a2f0f] via-[#1c1710] to-[#08090c]",
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            priority={index < 2}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
              GRADIENTS[project.slug] ?? "from-accent-soft via-surface-2 to-surface"
            }`}
          >
            <span className="font-display text-3xl font-semibold tracking-tight text-accent/80">
              {project.title}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.categories.slice(0, 2).map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
