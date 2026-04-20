import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
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
          {/* Degrees */}
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
              <h5 className="text-lg font-bold">MS in Data Science</h5>
              <div className="text-primary font-medium text-sm mb-2">University of New Haven, New Haven, CT, USA</div>
              <div className="text-muted-foreground text-sm font-mono mb-4">Graduated May 2024</div>
              <p className="text-sm text-muted-foreground">Focused on machine learning, statistical modeling, and AI applications. Developed ARIES — an AI-powered interview automation platform — as an academic capstone project.</p>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground/30" />
              <h5 className="text-lg font-bold">B.Tech</h5>
              <div className="text-primary font-medium text-sm mb-2">KL University, Guntur, India</div>
              <div className="text-muted-foreground text-sm font-mono mb-4">Graduated April 2018</div>
              <p className="text-sm text-muted-foreground">Published research in the International Journal of Engineering and Technology (IJET) on Power Electronics as a final year project.</p>
            </div>
          </motion.div>

          {/* Certifications */}
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

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-center">
              <h5 className="text-lg font-bold">Complete Machine Learning Course</h5>
              <div className="text-chart-4 font-medium text-sm mb-2">Udemy</div>
              <div className="text-muted-foreground text-sm font-mono">Issued 2024</div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-center">
              <h5 className="text-lg font-bold">NLP Bootcamp, MLOps & Deployment</h5>
              <div className="text-chart-2 font-medium text-sm mb-2">Udemy</div>
              <div className="text-muted-foreground text-sm font-mono">Issued 2024</div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-center">
              <h5 className="text-lg font-bold">Data Science Using Python Programming</h5>
              <div className="text-chart-1 font-medium text-sm mb-2">360DigiTMG</div>
              <div className="text-muted-foreground text-sm font-mono">Issued 2022</div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-bold">Publication</div>
                <div className="text-sm text-muted-foreground">"Bachelor's Final Project on Power Electronics." <span className="italic">International Journal of Engineering and Technology (IJET)</span>, 2018</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
