"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { resume } from "@/data/resume";
import { projects } from "@/data/projects";

const stats = [
  { value: resume.yearsExperience, label: "Years of experience" },
  { value: `${projects.length}`, label: "Production platforms shipped" },
  { value: "30–40%", label: "Perf gains delivered" },
  { value: "50%", label: "Faster deployments" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[110px]"
      />
      <div className="noise-overlay" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            {resume.title}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]"
          >
            {resume.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            {resume.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-accent" strokeWidth={1.75} />
            {resume.location}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              View my work
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/profile.png"
                alt={resume.name}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 60vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-black/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl border border-border bg-surface/95 px-5 py-3 text-xs shadow-lg backdrop-blur">
            <span className="flex items-center gap-2 text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to new roles
            </span>
            <span className="text-muted">Karachi, PK</span>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-6xl justify-center pb-10">
        <ArrowDown className="h-4 w-4 animate-bounce text-muted" strokeWidth={1.5} />
      </div>
    </section>
  );
}
