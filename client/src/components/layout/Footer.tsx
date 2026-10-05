import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-border/70 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <a href="/" className="font-display text-xl font-semibold tracking-tight">
              Portfolio<span className="text-primary">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Work across marketing analytics, campaign performance, and digital advertising, focused on useful insights and clear user experiences.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://github.com/bruce9875?tab=repositories"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/po-yu-chen-2a7521325/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Navigate</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a className="transition-colors hover:text-foreground" href="/">Home</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/about">About</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/services">Services</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/projects">Projects</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Focus</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a className="transition-colors hover:text-foreground" href="/projects">Marketing analytics</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/projects">Campaign performance</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/projects">Frontend craftsmanship</a></li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 border-b border-border/70 py-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Role</p>
            <p className="text-foreground">Marketing &amp; analytics</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Work</p>
            <p className="text-foreground">Personal portfolio</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Availability</p>
            <p className="text-foreground">Open to opportunities</p>
          </div>
        </div>

        <div className="pt-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
