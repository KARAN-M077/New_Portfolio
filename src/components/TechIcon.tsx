import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  image: string;
  animate: any;
  isGridOrganized: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, image, animate, isGridOrganized }) => {
  return (
    <motion.div
      className="relative group cursor-pointer px-10"
      animate={animate}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2, zIndex: 50 }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-[#1A2333] flex items-center justify-center backdrop-blur-sm 
                    hover:bg-[#1E293B] transition-all duration-300 p-1.5 sm:p-2 md:p-2.5">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      
      <div
        className="absolute -top-8 left-36 transform -translate-x-1/2 bg-[#1A2333]/90 text-cyan-400 px-3 py-1.5 
                   rounded shadow-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity 
                   duration-200 pointer-events-none whitespace-nowrap border border-cyan-400/20 "
      >
        {name}
      </div>
    </motion.div>
  );
};