import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { LinkedinIcon } from "@/components/icons";
import { resume } from "@/data/resume";

const channels = [
  {
    label: "Email",
    value: resume.email,
    href: `mailto:${resume.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: resume.phone,
    href: `tel:${resume.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "areeb-khan",
    href: resume.linkedin,
    icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionReveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
          />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Have a system to build or a team that needs a lead engineer?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m open to senior full-stack and technical leadership roles. Reach out directly
            and I&apos;ll get back to you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.label === "LinkedIn" ? "_blank" : undefined}
                rel={channel.label === "LinkedIn" ? "noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground transition-colors hover:border-accent/60"
              >
                <channel.icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                {channel.value}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
