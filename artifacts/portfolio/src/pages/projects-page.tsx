import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";

const projects = [
  {
    title: "FinDash",
    description:
      "A comprehensive financial dashboard for SaaS businesses. Integrates with Stripe and Plaid APIs to provide real-time revenue analytics, churn prediction, and automated reporting.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    category: "Full Stack",
  },
  {
    title: "TaskFlow",
    description:
      "A collaborative project management tool designed for remote engineering teams. Features real-time updates, kanban boards, markdown support, and GitHub integration.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=500",
    category: "Full Stack",
  },
  {
    title: "DevChronicles",
    description:
      "A headless CMS-powered blogging platform optimized for technical writers. Includes syntax highlighting, SEO management, and a high-performance static generation architecture.",
    tech: ["Next.js", "Contentful", "Tailwind CSS", "GraphQL", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800&h=500",
    category: "Frontend",
  },
  {
    title: "ShopSense",
    description:
      "An AI-powered e-commerce recommendation engine that analyzes user behavior to suggest relevant products, improving average order value by 28% in A/B testing.",
    tech: ["Python", "FastAPI", "React", "TensorFlow", "Redis", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=500",
    category: "AI / ML",
  },
  {
    title: "PulseAPI",
    description:
      "A developer-friendly API monitoring and analytics platform. Tracks uptime, latency, error rates, and sends intelligent alerting via Slack and PagerDuty.",
    tech: ["Node.js", "TypeScript", "InfluxDB", "React", "Docker", "Kubernetes"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=500",
    category: "Backend",
  },
  {
    title: "OpenSketch",
    description:
      "A real-time collaborative whiteboard app for distributed design teams. Supports freehand drawing, shapes, sticky notes, and live cursor presence for up to 50 simultaneous users.",
    tech: ["React", "Canvas API", "WebSockets", "Node.js", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&h=500",
    category: "Full Stack",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-8">
                <ArrowLeft className="h-4 w-4" />
                Back to Profile
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Portfolio
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Projects & Work
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              A collection of things I've built — from full-stack web applications to
              AI-powered tools. Each project represents a problem worth solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 z-20 text-xs font-medium px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs font-mono px-2 py-1 bg-muted rounded text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 rounded-full"
                      asChild
                    >
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

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center py-16 rounded-3xl border border-border bg-card"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm always open to new challenges and interesting collaborations. Let's build
              something great together.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="rounded-full h-12 px-8 font-medium">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
