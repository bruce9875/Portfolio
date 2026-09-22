import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function About() {
  const skills = [
    "JavaScript", "Python", "Node.js", "Tailwind CSS", "Figma"
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Bio Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hey, Its Bruce. I’m interested in coding and digital marketing with a background in Library and Information Science and a minor in Applied Arts from Fu Jen Catholic University. I’m interested in the intersection of marketing, data, technology, and design.
              </p>
              <p>
                I started my career working with digital advertising and media performance, where I learned how to turn campaign data into insights and better decisions. Since then, I’ve explored different sides of digital advertising, from campaign operations and performance analysis to creative testing and optimization.
              </p>
              <p>
                Outside of work, I enjoy building things and learning new tools. I’ve been exploring web development, AI, analytics, and different ways technology can make marketing more effective. I’m still figuring out exactly where this journey will take me, but I want to keep learning, keep building, and work on things that connect creativity with technology.
              </p>
            </div>
          </div>

          {/* Skills Side */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-foreground">Technical Arsenal</h3>
            <p className="text-muted-foreground mb-8">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
