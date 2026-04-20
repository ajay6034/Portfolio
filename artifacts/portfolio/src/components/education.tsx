import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Academic</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display">Education & Certifications</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h4 className="text-2xl font-bold font-display">Degrees</h4>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <h5 className="text-lg font-bold">M.S. Computer Science</h5>
              <div className="text-primary font-medium text-sm mb-2">University of Washington</div>
              <div className="text-muted-foreground text-sm font-mono mb-4">2014 - 2016</div>
              <p className="text-sm text-muted-foreground">Focus on Distributed Systems and Machine Learning. Thesis on optimizing eventual consistency in distributed databases.</p>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground/30" />
              <h5 className="text-lg font-bold">B.S. Software Engineering</h5>
              <div className="text-primary font-medium text-sm mb-2">State University</div>
              <div className="text-muted-foreground text-sm font-mono mb-4">2010 - 2014</div>
              <p className="text-sm text-muted-foreground">Graduated Magna Cum Laude. Minor in Mathematics.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-chart-4" />
              <h4 className="text-2xl font-bold font-display">Certifications</h4>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-center h-[164px]">
              <h5 className="text-lg font-bold">AWS Certified Solutions Architect</h5>
              <div className="text-chart-4 font-medium text-sm mb-2">Amazon Web Services</div>
              <div className="text-muted-foreground text-sm font-mono">Issued 2022 • Valid through 2025</div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-center h-[164px]">
              <h5 className="text-lg font-bold">MongoDB Certified Developer</h5>
              <div className="text-chart-2 font-medium text-sm mb-2">MongoDB University</div>
              <div className="text-muted-foreground text-sm font-mono">Issued 2020</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}