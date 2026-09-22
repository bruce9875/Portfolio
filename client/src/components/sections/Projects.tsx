import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Campaign Performance Website",
      description: "full-stack marketing analytics SaaS using Next.js and Supabase with claude code, with authentication, PostgreSQL data management, campaign tracking, A/B testing.",
      tags: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      /* Unsplash tech abstract */
      image: "Campaign.png",
      links: { github: "#", live: "#" }
    },
    {
      title: "Meta Ad Performance Dashboard",
      description: "This is a Meta Ad Performance Dashboard that tracks the effectiveness of ad campaigns across key KPIs such as impressions, clicks, engagements, conversions, and budget. It provides a complete funnel view—from awareness to engagement to purchases—along with demographic, geographic, and time-based insights.",
      tags: ["Data Analysis", "PowerBi", "Funnel Analysis"],
      /* Unsplash sleek minimal product */
      image: "Meta ad.png",
      links: { github: "#", live: "#" }
    },
    {
      title: "Advertising optimization",
      description: "I served as the primary point of contact for major news media clients. I regularly reported on ad unit revenues and conversion rates, and conducted A/B testing to optimize ad configurations—helping publishers maximize monetization while maintaining a seamless user experience.",
      tags: ["Data Analysis", "Excel","A/B Testing", "Advertising Optimization"],
      /* Unsplash clean desk setup */
      image: "Work.png",
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
