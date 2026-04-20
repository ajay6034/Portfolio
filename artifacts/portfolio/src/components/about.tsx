import { motion } from "framer-motion";
import { Code, Terminal, Globe, Database } from "lucide-react";

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
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-6">Bridging the gap between design and engineering.</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For the past 6 years, I've been transforming complex problems into elegant, scalable solutions. I believe that the best software is built at the intersection of robust architecture and intuitive design.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            My approach is pragmatic: pick the right tools for the job, write clean, maintainable code, and always keep the end-user in mind. When I'm not coding, you'll find me contributing to open-source, reading about system architecture, or brewing the perfect cup of coffee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Globe className="h-8 w-8 text-chart-1" />,
              title: "Frontend Engineering",
              desc: "Crafting responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS."
            },
            {
              icon: <Terminal className="h-8 w-8 text-chart-2" />,
              title: "Backend Development",
              desc: "Building scalable APIs and microservices using Node.js, Express, and Go."
            },
            {
              icon: <Database className="h-8 w-8 text-chart-3" />,
              title: "Database Design",
              desc: "Architecting efficient data models with PostgreSQL, MongoDB, and Redis."
            },
            {
              icon: <Code className="h-8 w-8 text-chart-4" />,
              title: "DevOps & Cloud",
              desc: "Deploying and scaling applications on AWS, Vercel, and configuring CI/CD pipelines."
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