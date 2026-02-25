import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "PostgreSQL", "Tailwind CSS", 
    "Framer Motion", "Figma", "Git", "REST APIs"
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
                Hello! I'm a passionate software engineer who loves creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about layout and aesthetics!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                When I'm not at the computer, I'm usually hanging out with my dog, reading, or exploring local coffee shops.
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
