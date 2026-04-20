import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";

const projects = [
  {
    title: "ARIES — Automated Candidate Interview & Evaluation System",
    description:
      "AI-powered interview automation platform using multi-agent LLM orchestration to conduct technical interviews and generate real-time candidate evaluations. Architected Interviewer, Candidate, and Evaluation agents using AutoGen AgentChat with coordinated prompt flows, termination rules, and sequential orchestration.",
    tech: ["Python", "AutoGen", "OpenAI GPT-4o", "FastAPI", "Flask", "WebSocket", "Docker", "Gunicorn", "Uvicorn"],
    github: "https://github.com/ajay6034",
    live: "",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500",
    category: "GenAI / Multi-Agent",
  },
  {
    title: "Healthcare GenAI Platform — Cardinal Health",
    description:
      "End-to-end ML and GenAI platform for healthcare data, supporting enterprise AI initiatives across national healthcare operations. Built agentic LLM workflows for autonomous multi-step reasoning (ingestion, retrieval, summarization, validation agents). Delivered $1M+ annualized platform investment.",
    tech: ["Python", "LangChain", "RAG", "Pinecone", "FastAPI", "AWS", "Docker", "Airflow", "Prometheus", "Grafana"],
    github: "https://github.com/ajay6034",
    live: "",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500",
    category: "MLOps / GenAI",
  },
  {
    title: "Clinical QA Chatbot with RAG",
    description:
      "Retrieval-Augmented Generation chatbot for clinical question answering using Pinecone vector database and transformer embeddings. Increased response accuracy by 30% over baseline. Integrated advanced NLP pipelines using BERT, SBERT, and SpaCy for entity extraction and semantic similarity.",
    tech: ["Python", "BERT", "SBERT", "Pinecone", "LangChain", "FastAPI", "AWS Lambda", "Streamlit"],
    github: "https://github.com/ajay6034",
    live: "",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800&h=500",
    category: "NLP / RAG",
  },
  {
    title: "Smart Grid Anomaly Detection — APCPDCL",
    description:
      "Anomaly detection pipelines for Andhra Pradesh's electricity distribution network, processing millions of smart-meter and SCADA records daily. Identified meter tampering, abnormal consumption patterns, and transformer overload risks using K-Means and DBSCAN clustering algorithms.",
    tech: ["Python", "PySpark", "K-Means", "DBSCAN", "AWS SageMaker", "FastAPI", "Airflow", "Docker", "Jenkins"],
    github: "https://github.com/ajay6034",
    live: "",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=500",
    category: "ML / Data Engineering",
  },
  {
    title: "Demand Forecasting & Grid Planning",
    description:
      "Time-series demand forecasting system for power grid capacity planning using LSTM, ARIMA, and Prophet models. Enabled planners to reduce peak-load surprises and improve long-term grid reliability. Deployed on AWS SageMaker with automated model versioning and real-time endpoint inference.",
    tech: ["Python", "LSTM", "ARIMA", "Prophet", "TensorFlow", "XGBoost", "AWS SageMaker", "PySpark", "SQL"],
    github: "https://github.com/ajay6034",
    live: "",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    category: "ML / Time Series",
  },
  {
    title: "GenAI Dashboards & Streamlit Tools",
    description:
      "Interactive GenAI dashboards and internal tools built with Streamlit for real-time model inference, prompt experimentation, and RAG evaluation workflows. Enabled cross-functional teams to conduct prompt engineering experiments and evaluate LLM outputs without engineering overhead.",
    tech: ["Python", "Streamlit", "FastAPI", "OpenAI", "LangChain", "Pandas", "Matplotlib", "AWS"],
    github: "https://github.com/ajay6034",
    live: "",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=500",
    category: "GenAI / Tools",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
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
              A selection of ML, GenAI, and data engineering projects spanning healthcare, energy, and enterprise AI — from production platforms to academic research.
            </p>
          </motion.div>

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
                  <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors leading-snug">
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
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    {project.live ? (
                      <Button size="sm" className="flex-1 gap-2 rounded-full" asChild>
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" /> Live App
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="secondary" className="flex-1 gap-2 rounded-full" disabled>
                        Enterprise / Internal
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center py-16 rounded-3xl border border-border bg-card"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Have an AI/ML challenge?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm open to new opportunities and interesting problems in AI, ML, and GenAI. Let's talk.
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
