import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to talk about an opportunity? Reach out on LinkedIn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Button asChild size="lg">
            <a
              href="https://www.linkedin.com/in/po-yu-chen-2a7521325/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
