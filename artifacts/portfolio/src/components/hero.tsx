import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import avatarImg from "@assets/image_7070b8fe_1776709382143.png";

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-4/20 rounded-full blur-[128px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight">
            Building intelligent <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-4">AI systems</span> that scale.
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            I'm <span className="text-foreground font-semibold">Ajay Kumar</span>, an AI/ML Engineer with 6 years of experience building production-grade machine learning and generative AI systems for healthcare and financial services.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link href="/projects">
              <Button size="lg" className="h-12 px-8 rounded-full font-medium">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full font-medium gap-2" asChild>
              <a href="mailto:ajaykumarjagu155@gmail.com">
                <Download className="h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://github.com/ajay6034"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-github"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ajay-kumar-jagu"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto md:ml-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 to-chart-4/30 transform rotate-3" />
          <div className="absolute inset-0 rounded-3xl bg-background border border-border shadow-xl transform -rotate-3 overflow-hidden">
            <img
              src={avatarImg}
              alt="Ajay Kumar - AI/ML Engineer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
