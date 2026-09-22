import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-medium tracking-wide text-sm uppercase">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Building smarter <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                experiences
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
            >
              I'm a digital marketing professional focused on advertising, data, and technology. I enjoy turning ideas and insights into digital experiences that are both useful and engaging.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/25 h-12 px-8" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 bg-background/50 backdrop-blur-sm" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 mt-16 pt-8 border-t border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Connect with me:</span>
              <div className="flex gap-4">
                <a href="https://github.com/bruce9875?tab=repositories" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/po-yu-chen-2a7521325/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-5 rounded-[2rem] border border-primary/20 rotate-6" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-muted/40 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <img
                src="/profile.jpg"
                alt="Portrait"
                className="relative h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
