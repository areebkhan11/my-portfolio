import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, UserRound } from "lucide-react";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects";
import { resume } from "@/data/resume";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${resume.name}`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const secondaryGallery = project.gallery.slice(1);

  return (
    <article className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
            >
              {category}
            </span>
          ))}
        </div>

        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {project.tagline}
        </p>

        <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-surface-2 to-surface">
              <span className="font-display text-5xl font-semibold tracking-tight text-accent/80">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {project.overview}
              </p>
            </div>

            {project.challenge && (
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  The challenge
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  What I built
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.solution}
                </p>
              </div>
            )}

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {secondaryGallery.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Gallery
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {secondaryGallery.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface-2"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 640px) 420px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit space-y-6 rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-start gap-3">
              <UserRound className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.75} />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Role</p>
                <p className="mt-1 text-sm text-foreground">{project.role}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.75} />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Year</p>
                <p className="mt-1 text-sm text-foreground">{project.year}</p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Visit live site
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </aside>
        </div>

        <div className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-1 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <span className="inline-flex items-center gap-2 text-xs text-muted">
                <ArrowLeft className="h-3.5 w-3.5" />
                Previous
              </span>
              <span className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col gap-1 rounded-2xl border border-border bg-surface p-6 text-right transition-colors hover:border-accent/50 sm:items-end"
            >
              <span className="inline-flex items-center gap-2 text-xs text-muted">
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
