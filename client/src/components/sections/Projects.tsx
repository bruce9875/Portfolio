import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Nova Dashboard",
      description: "A comprehensive analytics dashboard for SaaS companies. Features real-time data visualization, dark mode, and a highly polished UI component library.",
      tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      /* Unsplash tech abstract */
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      links: { github: "#", live: "#" }
    },
    {
      title: "Aura E-Commerce",
      description: "A headless e-commerce storefront with a custom shopping cart, seamless checkout experience, and animated page transitions.",
      tags: ["Next.js", "Stripe", "Framer Motion", "PostgreSQL"],
      /* Unsplash sleek minimal product */
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      links: { github: "#", live: "#" }
    },
    {
      title: "Flow Task Manager",
      description: "A minimalist project management tool focused on keyboard shortcuts and rapid task entry for power users.",
      tags: ["React", "Zod", "TanStack Query", "Node.js"],
      /* Unsplash clean desk setup */
      image: "https://images.unsplash.com/photo-1481481600465-36a084196144?w=800&q=80",
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of things I've built. From complex dashboards to marketing sites, focusing on the details that make software feel great to use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card hover-elevate transition-all duration-300 group">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <CardContent className="flex-1 p-6">
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-background font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                  <Button variant="ghost" size="sm" className="h-9 px-3 -ml-3 text-muted-foreground hover:text-foreground" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 px-3 text-muted-foreground hover:text-foreground" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
