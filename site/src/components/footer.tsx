import { Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { resume } from "@/data/resume";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            {resume.name}
          </p>
          <p className="mt-1 text-sm text-muted">{resume.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${resume.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href={`tel:${resume.phone.replace(/\s+/g, "")}`}
            aria-label="Phone"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>

        <p className="text-xs text-muted">
          © {year} {resume.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
