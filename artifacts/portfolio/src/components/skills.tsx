import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "SQL", "FastAPI", "Flask", "Streamlit", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    title: "ML, AI & NLP",
    skills: ["scikit-learn", "XGBoost", "TensorFlow", "Keras", "BERT", "SBERT", "SpaCy", "NLTK", "LangChain", "AutoGen", "OpenAI GPT-4o", "Transformers", "Fine-Tuning", "Prompt Engineering", "RAG"]
  },
  {
    title: "MLOps & Cloud",
    skills: ["AWS SageMaker", "AWS S3 / EC2 / Lambda", "AWS Glue", "Docker", "Apache Airflow", "MLflow", "CI/CD", "Jenkins", "Prometheus", "Grafana", "Azure", "Kubernetes"]
  },
  {
    title: "Data Engineering & Databases",
    skills: ["PySpark", "Apache Spark", "Kafka", "ARIMA", "Prophet", "LSTM", "Vector Databases", "Pinecone", "PostgreSQL", "Feature Engineering", "ETL Pipelines"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display"
          >
            Technical Arsenal
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-bold font-display border-b border-border pb-2">{category.title}</h4>
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, j) => (
                  <Badge
                    key={j}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
