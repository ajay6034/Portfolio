import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-display mb-6">Let's build something intelligent together.</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to new opportunities in AI/ML engineering. Whether you have a role, a project, or just want to connect — reach out anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 bg-card border border-border p-8 md:p-12 rounded-3xl shadow-lg relative z-10">
            <div className="space-y-8">
              <h4 className="text-2xl font-bold font-display">Contact Information</h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1">Email</div>
                    <a href="mailto:ajaykumarjagu155@gmail.com" className="text-lg font-medium hover:text-primary transition-colors break-all">
                      ajaykumarjagu155@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1">Phone</div>
                    <a href="tel:+12033936494" className="text-lg font-medium hover:text-primary transition-colors">
                      +1 (203) 393-6494
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1">Location</div>
                    <span className="text-lg font-medium">
                      Dallas, Texas, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold font-display mb-6">Connect Online</h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://linkedin.com/in/ajay-kumar-jagu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">linkedin.com/in/ajay-kumar-jagu</span>
                  </a>
                  <a
                    href="https://github.com/ajay6034"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">github.com/ajay6034</span>
                  </a>
                </div>
              </div>

              <Button size="lg" className="w-full mt-8 rounded-xl h-14 text-base font-bold shadow-lg shadow-primary/20" asChild>
                <a href="mailto:ajaykumarjagu155@gmail.com">
                  Send a Message <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
