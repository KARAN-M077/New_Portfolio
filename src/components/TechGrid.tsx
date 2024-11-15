import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { TechIcon } from './TechIcon';
import { techStack } from '../data/techStack';

export const TechGrid: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = techStack.map(() => useAnimation());

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const animate = async () => {
      if (!isHovered && containerDimensions.width > 0) {
        controls.forEach((control) => {
          const maxX = (containerDimensions.width * 0.4) - 48;
          const maxY = (containerDimensions.height * 0.4) - 48;
          
          control.start({
            x: Math.random() * maxX * 4 - maxX,
            y: Math.random() * maxY * 4 - maxY,
            transition: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }
          });
        });
      } else {
        controls.forEach((control) => {
          control.start({
            x: 0,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20
            }
          });
        });
      }
    };
    animate();
  }, [isHovered, containerDimensions, controls]);

  return (
<div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
<div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
  <div
    className="relative overflow-hidden rounded-3xl transform -skew-y-3"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    ref={containerRef}
  >
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl transform -skew-y-10" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] rounded-3xl" />

    <div className="relative p-4 sm:p-6 md:p-8">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-[#02E5FA] mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Tech Stack and Tools
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-4 sm:mb-6 md:mb-8 text-center text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Crafting digital experiences with modern technologies
      </motion.p>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative min-h-[280px] sm:min-h-[320px] md:min-h-[280px]">
        {techStack.map((tech, index) => (
          <TechIcon
            key={tech.name}
            name={tech.name}
            image={tech.image}
            animate={controls[index]}
            isGridOrganized={isHovered}
          />
        ))}
      </div>
    </div>
  </div>
</div>

</div>

  );
};