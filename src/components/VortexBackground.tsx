import { motion } from "framer-motion";

const VortexBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Rotating vortex container */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(320 80% 50% / 0.3) 0%, hsl(280 70% 40% / 0.2) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Middle ring */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, hsl(320 80% 55% / 0.15), hsl(300 75% 45% / 0.1), hsl(280 70% 50% / 0.15), hsl(320 80% 55% / 0.15))",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner swirl */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "conic-gradient(from 180deg, hsl(300 75% 50% / 0.2), transparent, hsl(320 80% 60% / 0.15), transparent, hsl(280 70% 55% / 0.2))",
          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Core glow */}
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(320 80% 60% / 0.25) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default VortexBackground;
