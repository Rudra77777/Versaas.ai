import { motion } from "framer-motion";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            Infrastructure for
            <br />
            <span className="text-gradient">intelligent businesses</span>
          </h1>
        </motion.div>
        
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          We build the systems that let your business run smarter. 
          Voice, automation, and AI—woven seamlessly into your operations.
        </motion.p>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="glass-panel-subtle px-8 py-3 text-sm font-medium text-foreground hover:bg-glass/60 transition-all">
            Explore Services
          </a>
          <a href="#contact" className="px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>;
};
export default Hero;