import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinDash",
    description: "A comprehensive financial dashboard for SaaS businesses. Integrates with Stripe and Plaid APIs to provide real-time revenue analytics, churn prediction, and automated reporting.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "TaskFlow",
    description: "A collaborative project management tool designed for remote engineering teams. Features real-time updates, kanban boards, markdown support, and GitHub integration.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "DevChronicles",
    description: "A headless CMS-powered blogging platform optimized for technical writers. Includes syntax highlighting, SEO management, and a high-performance static generation architecture.",
    tech: ["Next.js", "Contentful", "Tailwind CSS", "GraphQL", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display">Featured Projects</h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs font-mono px-2 py-1 bg-muted rounded text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-full" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2 rounded-full" asChild>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live App
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}