import { motion } from "framer-motion";
import versaasLogo from "@/assets/versaas-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={versaasLogo} alt="VersaAS Logo" className="w-12 h-12 rounded-lg" />
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">
              versaas<span className="text-primary">.ai</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
