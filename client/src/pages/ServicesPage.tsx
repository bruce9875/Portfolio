import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const services = [
  {
    number: "01",
    title: "Campaign Performance Analysis",
    description: "Bring campaign metrics into a clearer view, identify what is working, and turn reporting into practical next steps.",
    tags: ["Campaigns", "Reporting", "KPIs"],
  },
  {
    number: "02",
    title: "Marketing Analytics Dashboards",
    description: "Organize channel, audience, and funnel data into dashboards that make performance easier to understand and compare.",
    tags: ["Analytics", "Dashboards", "Funnel Analysis"],
  },
  {
    number: "03",
    title: "Advertising Optimization",
    description: "Use structured analysis and A/B testing to refine ad configurations, improve conversion performance, and support better decisions.",
    tags: ["A/B Testing", "Conversion", "Optimization"],
  },
  {
    number: "04",
    title: "Digital Experience Prototyping",
    description: "Shape ideas into responsive web experiences with thoughtful interface design and a practical understanding of implementation.",
    tags: ["Web", "UI", "Prototyping"],
  },
  {
    number: "05",
    title: "Creative and Media Insights",
    description: "Connect creative experiments and media results to understand how audiences respond across campaign touchpoints.",
    tags: ["Creative Testing", "Media", "Insights"],
  },
];

const toolkit = [
  { label: "Analytics & Reporting", items: ["Power BI", "Excel", "Campaign Analysis", "Funnel Analysis"] },
  { label: "Web & Prototyping", items: ["JavaScript", "Node.js", "Tailwind CSS", "Figma"] },
  { label: "Optimization", items: ["A/B Testing", "Conversion Analysis", "Media Performance"] },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="bg-secondary/30 pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
              <a href="/" className="transition-colors hover:text-foreground">Home</a>
              <span className="mx-2">/</span>
              <span aria-current="page" className="text-foreground">Services</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase text-primary">
                <span className="h-px w-8 bg-primary" />
                Services
              </p>
              <h1 className="mb-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Marketing insight, backed by thoughtful digital work
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I work across campaign performance, analytics, and digital experiences, connecting clear measurement with practical execution.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-border/70 pb-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase text-primary">Areas of work</p>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">What I work on</h2>
              </div>
              <span className="hidden text-sm text-muted-foreground sm:block">Marketing, measurement, and digital craft</span>
            </div>
            <div className="grid gap-x-10 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="border-b border-border/70 py-7 sm:py-8"
                >
                  <p className="mb-4 text-sm font-medium tabular-nums text-primary">{service.number}</p>
                  <h3 className="mb-3 font-display text-xl font-semibold sm:text-2xl">{service.title}</h3>
                  <p className="mb-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background/60 font-normal">{tag}</Badge>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-secondary/20 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-medium uppercase text-primary">Expertise</p>
              <h2 className="mb-4 font-display text-3xl font-semibold sm:text-4xl">The toolkit I build with</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                A practical mix of analytical tools and web technologies for understanding performance and shaping digital experiences.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {toolkit.map((group, index) => (
                <article key={group.label} className="border-t border-border/70 pt-5">
                  <p className="mb-3 text-xs font-medium uppercase text-primary">0{index + 1}</p>
                  <h3 className="mb-5 font-display text-lg font-semibold">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-secondary/60 font-normal">{item}</Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-medium uppercase text-primary">Next step</p>
              <h2 className="mb-4 font-display text-3xl font-semibold sm:text-4xl">Have a project in mind?</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Let’s talk about the goals, the data, and the digital experience you want to create.
              </p>
            </div>
            <Button asChild size="lg" className="w-fit rounded-full px-7">
              <a href="/#contact">
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}