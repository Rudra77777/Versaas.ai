import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import voiceDemoAudio from "@/assets/voice-demo.mp3";

const VoiceDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(voiceDemoAudio);
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="demo" className="relative py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Experience the voice
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A glimpse into how our AI voice system sounds and responds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-12 md:p-16 flex flex-col items-center"
        >
          {/* Orb container */}
          <div className="relative">
            {/* Outer glow rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: 180,
                height: 180,
                left: -30,
                top: -30,
                background: "radial-gradient(circle, hsl(320 80% 60% / 0.15) 0%, transparent 70%)",
              }}
              animate={isPlaying ? {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* The orb */}
            <motion.button
              onClick={togglePlay}
              className={`relative w-[120px] h-[120px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                isPlaying ? 'glow-orb' : ''
              }`}
              style={{
                background: "radial-gradient(circle at 30% 30%, hsl(320 80% 70%), hsl(300 75% 50%), hsl(280 70% 45%))",
              }}
              animate={isPlaying ? {
                scale: [1, 1.05, 1],
              } : {
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: isPlaying ? 0.8 : 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Inner shine */}
              <div 
                className="absolute inset-2 rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle at 30% 30%, white, transparent 60%)",
                }}
              />
              
              {/* Play/Pause icon */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={isPlaying ? "pause" : "play"}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-background" fill="currentColor" />
                  ) : (
                    <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          <p className="text-xs text-muted-foreground mt-12">
            Demo visualization • Real implementation uses advanced AI voice synthesis
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceDemo;
