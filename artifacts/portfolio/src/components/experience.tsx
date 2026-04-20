import { motion } from "framer-motion";

const experiences = [
  {
    company: "Nexus Technologies",
    role: "Senior Full Stack Engineer",
    period: "2021 - Present",
    description: "Lead architect for the core SaaS platform. Spearheaded the migration from a monolithic Express application to a microservices architecture using Node.js and Next.js, resulting in a 40% improvement in load times and higher developer velocity. Mentored a team of 4 junior developers.",
    achievements: [
      "Reduced API response time by 60% by implementing Redis caching.",
      "Introduced strict TypeScript typing across the entire codebase.",
      "Designed and implemented a real-time notification system using WebSockets."
    ]
  },
  {
    company: "Elevate Digital",
    role: "Frontend Developer",
    period: "2018 - 2021",
    description: "Key contributor to several high-profile client projects including e-commerce platforms and fintech dashboards. Championed the adoption of React and modern state management tools.",
    achievements: [
      "Built a component library used across 5 different client projects.",
      "Implemented complex data visualizations using D3.js and Recharts.",
      "Improved accessibility score from 75 to 98 across main product lines."
    ]
  },
  {
    company: "Launchpad Startup",
    role: "Software Engineer",
    period: "2016 - 2018",
    description: "Full-stack role in a fast-paced early-stage startup environment. Built MVPs from scratch and iterated rapidly based on user feedback.",
    achievements: [
      "Developed the initial MVP that helped secure $2M in Seed funding.",
      "Integrated Stripe for seamless payment processing.",
      "Set up initial CI/CD pipelines using GitHub Actions."
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
              {/* Timeline dot */}
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
                        <span className="text-primary mt-1">•</span>
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