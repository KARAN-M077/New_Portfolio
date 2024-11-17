import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CircularWaves = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border-2"
        style={{
          width: `${(i + 1) * 200}px`,
          height: `${(i + 1) * 200}px`,
          borderColor: `rgba(255, 255, 255, ${0.15 - i * 0.02})`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: 360
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "linear",
          delay: i * 0.5
        }}
      />
    ))}
  </div>
);

const ProfessionalText = ({ text }: { text: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative z-20 font-[Poppins] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          className={`inline-block text-7xl font-bold tracking-wider ${
            isGlitching ? 'translate-x-[0.5px] translate-y-[-0.5px]' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: idx * 0.1,
            ease: 'easeOut'
          }}
        >
          <span className="relative">
            <span className="relative z-10">{char}</span>
            <span className="absolute inset-0 text-slate-300/30 blur-[1px] transform translate-x-[1px] translate-y-[1px]">
              {char}
            </span>
          </span>
        </motion.span>
      ))}
    </motion.div>
  );
};

const RadialGlow = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-radial from-slate-800/50 via-slate-900/80 to-slate-950"
    animate={{
      opacity: [0.7, 0.9, 0.7]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <RadialGlow />

      {/* Enhanced Circular Waves */}
      <CircularWaves />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Professional Text */}
      <div className="relative z-10">
        <ProfessionalText text="KARAN M" />
      </div>

      {/* Bottom Accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scaleX: [0.95, 1, 0.95]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};
