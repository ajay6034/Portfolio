import { motion } from "framer-motion";

const experiences = [
  {
    company: "Cardinal Health",
    role: "AI / ML Engineer",
    period: "Jul 2024 – Present",
    description: "Developed and delivered an end-to-end ML and GenAI platform for healthcare data. Led delivery of a $1M+ annualized platform investment supporting enterprise AI initiatives across national healthcare operations.",
    achievements: [
      "Reduced manual effort by 40% per analyst per dataset through automated ML pipelines.",
      "Improved prediction accuracy to 92% using ensemble models — a 20% gain and +0.20 F1-score over baseline.",
      "Designed RAG with Pinecone and transformer embeddings for a clinical QA chatbot, increasing response accuracy by 30%.",
      "Reduced average inference latency from 2.4s to 1.3s via Prometheus and Grafana observability.",
      "Optimized AWS infrastructure (S3, EC2, Lambda, Glue), achieving 18% cost reduction.",
      "Built agentic LLM workflows using LangChain for multi-step reasoning, tool calling, memory management, and agent coordination.",
      "Developed scalable REST APIs (FastAPI) exposing inference services to enterprise applications and dashboards.",
      "Productionized models using Docker, Airflow, and CI/CD for automated training, validation, and deployment."
    ]
  },
  {
    company: "APCPDCL",
    role: "Data Scientist / ML Engineer",
    period: "Jul 2018 – Jun 2022",
    description: "Built ML systems for the Andhra Pradesh electricity distribution company, processing millions of smart-meter and SCADA records daily to detect anomalies, forecast demand, and improve grid reliability.",
    achievements: [
      "Developed anomaly detection pipelines using K-Means and DBSCAN to identify meter tampering and transformer overload risks.",
      "Engineered scalable data pipelines using PySpark and SQL to process millions of smart-meter records daily.",
      "Deployed models on AWS SageMaker with automated training jobs, model versioning, and real-time endpoint inference.",
      "Automated end-to-end pipelines with Apache Airflow — enabling unattended daily and weekly model runs.",
      "Built RESTful APIs with FastAPI to expose forecasts and anomaly scores to internal dashboards.",
      "Containerized services using Docker and CI/CD pipelines with Jenkins for repeatable deployments.",
      "Integrated NLP pipelines to summarize operational reports and outage logs, improving engineer triage efficiency."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Career</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display">Work Experience</h3>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary shadow flex items-center justify-center -translate-x-1/2 group-hover:scale-110 transition-transform z-10" />

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] pl-4 md:pl-0">
                <div className="bg-background p-6 rounded-2xl border border-border shadow-sm group-hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold font-display">{exp.role}</h4>
                      <div className="text-primary font-medium">{exp.company}</div>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
