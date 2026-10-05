import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const summary = [
  {
    number: "01",
    title: "Marketing meets technology",
    description: "I’m interested in the intersection of marketing, data, technology, and design.",
  },
  {
    number: "02",
    title: "Turning performance into insight",
    description: "My digital advertising work has covered campaign operations, media performance, and making data useful for better decisions.",
  },
  {
    number: "03",
    title: "Testing and optimization",
    description: "I’ve worked across creative testing and optimization, exploring how thoughtful experiments can improve campaign results.",
  },
  {
    number: "04",
    title: "Learning by building",
    description: "I keep exploring web development, AI, analytics, and tools that connect creativity with technology.",
  },
];

const snapshot = [
  { label: "Background", value: "Digital advertising" },
  { label: "Education", value: "Fu Jen Catholic University" },
  { label: "Focus", value: "Marketing + technology" },
  { label: "Currently", value: "Learning and building" },
];

const focusAreas = [
  "Digital Advertising",
  "Campaign Analysis",
  "Media Performance",
  "Creative Testing",
  "Web Development",
  "AI & Analytics",
];

const skills = ["JavaScript", "Python", "Node.js", "Tailwind CSS", "Figma"];

type AboutProps = {
  standalone?: boolean;
};

export function About({ standalone = false }: AboutProps) {
  return (
    <section id="about" className={`relative scroll-mt-24 ${standalone ? "pb-20 pt-28 sm:pb-28 sm:pt-36" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {standalone && (
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
              <a href="/" className="transition-colors hover:text-foreground">Home</a>
              <span className="mx-2">/</span>
              <span aria-current="page" className="text-foreground">About</span>
            </nav>
          )}
          <div className="mb-14 max-w-3xl md:mb-16">
            <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase text-primary">
              <span className="h-px w-8 bg-primary" />
              About me
            </p>
            {standalone ? (
              <h1 className="mb-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Connecting marketing, data, and technology
              </h1>
            ) : (
              <h2 className="mb-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Connecting marketing, data, and technology
              </h2>
            )}
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I’m Bruce, a digital marketing professional with a background in Library and Information Science and a minor in Applied Arts from Fu Jen Catholic University. I’m interested in the ways data, technology, and design can make marketing more effective.
            </p>
          </div>

          <div className="mb-14 md:mb-16">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-border/70 pb-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase text-primary">Professional summary</p>
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">About Bruce</h3>
              </div>
              <span className="hidden text-sm text-muted-foreground sm:block">A little about my path</span>
            </div>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {summary.map((item) => (
                <article key={item.number} className="border-b border-border/70 py-6 sm:py-7">
                  <p className="mb-4 text-sm font-medium tabular-nums text-primary">{item.number}</p>
                  <h4 className="mb-2 font-display text-xl font-semibold">{item.title}</h4>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mb-14 md:mb-16">
            <p className="mb-5 text-xs font-medium uppercase text-primary">Snapshot</p>
            <div className="grid gap-6 border-y border-border/70 py-6 sm:grid-cols-2 lg:grid-cols-4">
              {snapshot.map((item) => (
                <div key={item.label}>
                  <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">{item.label}</p>
                  <p className="font-display text-lg font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <p className="mb-5 text-xs font-medium uppercase text-primary">Focus areas</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} variant="outline" className="bg-background/60 px-3 py-1.5 font-normal">
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-10 border-t border-border/70 pt-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-medium uppercase text-primary">Experience</p>
              <h3 className="mb-8 font-display text-3xl font-bold sm:text-4xl">Where I’ve been learning</h3>
              <div className="space-y-8">
                <article className="grid gap-2 border-l border-primary/50 pl-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <p className="text-sm font-medium text-muted-foreground">Digital advertising</p>
                  <div>
                    <h4 className="mb-2 font-display text-lg font-semibold">Campaigns, media, and performance</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      My career began in digital advertising and media performance, spanning campaign operations, performance analysis, creative testing, and optimization.
                    </p>
                  </div>
                </article>
                <article className="grid gap-2 border-l border-primary/50 pl-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <p className="text-sm font-medium text-muted-foreground">Education</p>
                  <div>
                    <h4 className="mb-2 font-display text-lg font-semibold">Fu Jen Catholic University</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Library and Information Science, with a minor in Applied Arts.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="border-t border-border/70 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="mb-4 text-xs font-medium uppercase text-primary">Tools I’m exploring</p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                A growing toolkit for building, analyzing, and shaping digital experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/60 px-3 py-1.5 font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}