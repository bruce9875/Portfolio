import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectsProps = {
  standalone?: boolean;
};

export function Projects({ standalone = false }: ProjectsProps) {
  const projects = [
    {
      title: "PulseBuild",
      category: "CI/CD Monitoring",
      description: "A fictional CI/CD monitoring dashboard that helps engineering teams detect, diagnose, and recover from failed builds and deployments. Track build health, inspect pipeline steps, logs, and test results, then retry or assign incidents and follow releases across Production, Staging, and Dev.",
      caseStudy: "PulseBuild brings the diagnostic workflow into one place: find a failed run, inspect its pipeline, logs, and tests, retry the build, and review deployment history. Conceptual integrations include GitHub, Slack, Docker Hub, and Sentry, with incident actions for ownership, copied errors, and ticket creation.",
      tags: ["Figma", "CI/CD", "Build Diagnostics", "Deployment Monitoring"],
      image: "CI_CD.png",
      links: { github: "#", live: "https://www.figma.com/community/file/1688820382356435583/pulsebuild?fuid=1400340212890280033" }
    },
    {
      title: "Meta Ad Performance Dashboard",
      category: "Paid Media Analytics",
      description: "This is a Meta Ad Performance Dashboard that tracks the effectiveness of ad campaigns across key KPIs such as impressions, clicks, engagements, conversions, and budget. It provides a complete funnel view—from awareness to engagement to purchases—along with demographic, geographic, and time-based insights.",
      caseStudy: "The dashboard organizes campaign results into funnel, audience, location, and time-based views so performance changes are easier to investigate.",
      tags: ["Data Analysis", "PowerBi", "Funnel Analysis"],
      image: "Meta ad.png",
      links: { github: "#", live: "#" }
    },
    {
      title: "FORME",
      category: "Frontend Portfolio Project",
      description: "A fictional premium lifestyle e-commerce experience built to showcase visual design and frontend craftsmanship. It features responsive product browsing, filtering, sorting, variants, cart, and checkout, with polished motion, accessible states, and validated forms.",
      caseStudy: "A design-led e-commerce experience built to demonstrate frontend craftsmanship, responsive UI, and thoughtful interaction design.",
      tags: ["Next.js", "React", "TypeScript", "Responsive UI", "E-commerce"],
      image: "forme.png",
      links: { github: "#", live: "https://e-commerce-store-mock.vercel.app/" }
    }
  ];

  return (
    <section id="projects" className={`bg-secondary/30 ${standalone ? "pb-20 pt-28 sm:pb-28 sm:pt-36" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl md:mb-20"
        >
          {standalone && (
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
              <a href="/" className="transition-colors hover:text-foreground">Home</a>
              <span className="mx-2">/</span>
              <span aria-current="page" className="text-foreground">Projects</span>
            </nav>
          )}
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase text-primary">
            <span className="h-px w-8 bg-primary" />
            Portfolio showcase
          </p>
          {standalone ? (
            <h1 className="mb-5 text-4xl font-bold leading-tight font-display sm:text-5xl md:text-6xl">
              Projects that turn ideas into useful experiences
            </h1>
          ) : (
            <h2 className="mb-5 text-4xl font-bold leading-tight font-display sm:text-5xl md:text-6xl">
              Projects that turn ideas into useful experiences
            </h2>
          )}
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A collection of work across product analytics, developer tools, and frontend experiences, built around clear insights and thoughtful execution.
          </p>
        </motion.div>

        <div className="mb-7 flex items-center justify-between border-b border-border/70 pb-4">
          <h3 className="font-display text-xl font-semibold sm:text-2xl">Selected work</h3>
          <span className="text-sm text-muted-foreground">{String(projects.length).padStart(2, "0")} projects</span>
        </div>

        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="grid items-center gap-8 border-b border-border/70 py-10 first:pt-4 last:border-b-0 sm:gap-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
            >
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="group relative block aspect-[16/10] overflow-hidden rounded-lg border border-border/70 bg-muted"
              >
                <img
                  src={`/${project.image}`}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 left-4 rounded-sm bg-background/90 px-3 py-1.5 text-xs font-medium uppercase text-foreground backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>

              <div>
                <h3 className="mb-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-xl leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-background/60 font-normal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <details className="group mb-5 border-t border-border/70 pt-4">
                  <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    Case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {project.caseStudy}
                  </p>
                </details>
                <div className="flex flex-wrap items-center gap-2">
                  {project.links.live !== "#" && (
                    <Button variant="outline" size="sm" className="h-9" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.links.live.includes("figma.com") ? "View Figma File" : "Live Demo"}
                      </a>
                    </Button>
                  )}
                  {project.links.github !== "#" && (
                    <Button variant="ghost" size="sm" className="h-9 text-muted-foreground" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
