import { motion } from "framer-motion";
import { Brain, Cloud, FlaskConical, BarChart3 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Engineering AI that delivers real business impact.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With 6 years of experience in AI/ML engineering, I specialize in developing and deploying production-grade machine learning and generative AI systems for healthcare and financial services. My work spans the full ML lifecycle — from data pipelines and model development to MLOps, observability, and enterprise-scale deployment.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            I thrive at the intersection of research and production: translating state-of-the-art techniques like RAG, multi-agent LLM orchestration, and transformer-based NLP into reliable, scalable systems that drive measurable outcomes — reducing manual effort, improving prediction accuracy, and lowering infrastructure costs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Brain className="h-8 w-8 text-chart-1" />,
              title: "Generative AI & LLMs",
              desc: "Building RAG pipelines, multi-agent LLM workflows, and agentic systems using LangChain, AutoGen, and OpenAI GPT-4o for autonomous reasoning and QA."
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-chart-2" />,
              title: "Machine Learning & NLP",
              desc: "Developing predictive models, NLP pipelines (BERT, SBERT, SpaCy), and ensemble methods with measurable accuracy improvements in production environments."
            },
            {
              icon: <Cloud className="h-8 w-8 text-chart-3" />,
              title: "MLOps & Cloud Infrastructure",
              desc: "Productionizing models with Docker, Airflow, CI/CD, and AWS (SageMaker, S3, EC2, Lambda, Glue) with observability via Prometheus and Grafana."
            },
            {
              icon: <FlaskConical className="h-8 w-8 text-chart-4" />,
              title: "Data Engineering",
              desc: "Building scalable ETL pipelines using PySpark, SQL, and Apache Airflow to process millions of records daily for ML feature engineering and batch inference."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-muted rounded-xl inline-block">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 font-display">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
