import { motion } from "framer-motion";
import { Globe, Phone, MessageCircle, Calendar, HelpCircle, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Clean, fast, conversion-focused websites that represent your brand with precision.",
  },
  {
    icon: Phone,
    title: "AI Voice Receptionist",
    description: "24/7 intelligent call handling that understands context and routes inquiries seamlessly.",
  },
  {
    icon: Zap,
    title: "Inquiry Follow-up Automation",
    description: "Never lose a lead. Automated responses that feel personal and drive action.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Bot",
    description: "Meet customers where they are. Intelligent conversations on the world's most used messenger.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Frictionless scheduling integrated directly into your workflow.",
  },
  {
    icon: HelpCircle,
    title: "FAQ & Customer Service",
    description: "Instant, accurate answers. Reduced support load. Happier customers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            What we build
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Systems designed for reliability and scale. Each solution integrates with your existing tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 group hover:border-glass-border/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
