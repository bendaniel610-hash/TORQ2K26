import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import vmTileImg from '../assets/vm_tile.png';

export default function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="vision" className="relative py-20 px-6 bg-black select-none font-mono">
      {/* Background wireframe lines */}
      <div className="absolute inset-0 tva-grid-bg opacity-10 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <div className="text-[10px] text-tva-orange/50 tracking-widest mb-1 uppercase">
            TEMPORAL TARGETS & OPERATIONS
          </div>
          <h2 className="text-3xl font-black text-tva-orange tracking-widest uppercase tva-glow-text">
            VISION & MISSION
          </h2>
          <div className="h-[1px] w-16 bg-tva-orange mx-auto mt-4 shadow-[0_0_8px_#F5A524]" />
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-md overflow-hidden border border-tva-orange/30 group tva-glow-border h-80 flex flex-col justify-end"
          >
            {/* Tile Image Background with Dark Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${vmTileImg})` }}
            />
            {/* Dark gradient mask for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30 group-hover:via-black/85 transition-all duration-300" />

            {/* Card Content */}
            <div className="relative p-8 z-10 flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-tva-orange">
                <div className="p-2 border border-tva-orange/40 rounded bg-tva-orange/10 group-hover:bg-tva-orange/20 transition-all shadow-[0_0_10px_rgba(245,165,36,0.2)]">
                  <Compass size={22} className="animate-spin-slow" />
                </div>
                <h3 className="text-xl font-bold tracking-widest text-tva-orange tva-glow-text uppercase">
                  VISION_LOG
                </h3>
              </div>
              <p className="text-tva-orange/85 text-xs md:text-sm leading-relaxed text-justify group-hover:text-tva-orange transition-colors font-sans">
                To inspire young engineers to innovate, collaborate, and create high-efficiency, sustainable solutions 
                for the future, aligning technical breakthroughs with ethical standards and absolute temporal excellence.
              </p>
              <div className="text-[9px] text-tva-orange/35 tracking-widest font-bold text-right pt-2 font-mono">
                INDEX_REF: VIS.001
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-md overflow-hidden border border-tva-orange/30 group tva-glow-border h-80 flex flex-col justify-end"
          >
            {/* Tile Image Background with Dark Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${vmTileImg})` }}
            />
            {/* Dark gradient mask for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30 group-hover:via-black/85 transition-all duration-300" />

            {/* Card Content */}
            <div className="relative p-8 z-10 flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-tva-orange">
                <div className="p-2 border border-tva-orange/40 rounded bg-tva-orange/10 group-hover:bg-tva-orange/20 transition-all shadow-[0_0_10px_rgba(245,165,36,0.2)]">
                  <Target size={22} className="animate-pulse" />
                </div>
                <h3 className="text-xl font-bold tracking-widest text-tva-orange tva-glow-text uppercase">
                  MISSION_LOG
                </h3>
              </div>
              <p className="text-tva-orange/85 text-xs md:text-sm leading-relaxed text-justify group-hover:text-tva-orange transition-colors font-sans">
                To provide a unified platform for advanced skill development, direct industry collaboration, and engineering 
                innovation, while fostering teamwork, creativity, and practical problem-solving to protect the timeline of advancement.
              </p>
              <div className="text-[9px] text-tva-orange/35 tracking-widest font-bold text-right pt-2 font-mono">
                INDEX_REF: MIS.002
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
