import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Zap, Award } from 'lucide-react';
import vmTileImg from '../assets/vm_tile.png';

export default function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="vision" className="relative py-20 px-4 bg-black select-none font-mono">
      {/* Decorative radar grid */}
      <div className="absolute inset-0 tva-radar-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[10px] text-tva-orange/50 tracking-widest mb-1 uppercase">
            TVA_ARCHIVES // FOUNDATIONAL_LOGS
          </div>
          <h2 className="text-3xl font-black text-tva-orange tracking-widest uppercase tva-glow-text">
            SEC-03: VISION & MISSION
          </h2>
          <div className="h-[1px] w-16 bg-tva-orange mx-auto mt-4 shadow-[0_0_8px_#F5A524]" />
        </div>

        {/* Content Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          
          {/* Card 1: VISION */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-[667/374] overflow-hidden"
            style={{
              backgroundImage: `url(${vmTileImg})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Card Content - positioned inside the tile's grid area */}
            <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[12%] p-2 sm:p-5 z-10 flex flex-col justify-between">
              <div className="flex items-center space-x-3 text-tva-orange">
                <div className="p-1 sm:p-1.5 border border-tva-orange/40 rounded bg-tva-orange/10 transition-all shadow-[0_0_8px_rgba(245,165,36,0.15)]">
                  <Compass size={16} className="animate-spin-slow" />
                </div>
                <h3 className="text-xs sm:text-base lg:text-lg font-black tracking-widest text-tva-orange tva-glow-text uppercase">
                  VISION_LOG
                </h3>
              </div>
              <p className="text-tva-orange/85 text-[7px] xs:text-[9.5px] sm:text-[11px] lg:text-xs leading-relaxed text-justify font-sans flex-grow flex items-center pt-1.5 sm:pt-2">
                To inspire young engineers to innovate, collaborate, and create high-efficiency, sustainable solutions 
                for the future, aligning technical breakthroughs with ethical standards and absolute temporal excellence.
              </p>
              <div className="border-t border-tva-orange/20 pt-1.5 sm:pt-2 flex justify-between items-center text-[6px] xs:text-[8px] lg:text-[9px] text-tva-orange/40">
                <span>METRIC: FUTURE_INNOVATION</span>
                <span>SECURE_DATA</span>
              </div>
            </div>

            {/* CRT Screen Scanline Overlay on device */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20" />
          </motion.div>

          {/* Card 2: MISSION */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-[667/374] overflow-hidden"
            style={{
              backgroundImage: `url(${vmTileImg})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Card Content - positioned inside the tile's grid area */}
            <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[12%] p-2 sm:p-5 z-10 flex flex-col justify-between">
              <div className="flex items-center space-x-3 text-tva-orange">
                <div className="p-1 sm:p-1.5 border border-tva-orange/40 rounded bg-tva-orange/10 transition-all shadow-[0_0_8px_rgba(245,165,36,0.15)]">
                  <Target size={16} className="animate-pulse" />
                </div>
                <h3 className="text-xs sm:text-base lg:text-lg font-black tracking-widest text-tva-orange tva-glow-text uppercase">
                  MISSION_LOG
                </h3>
              </div>
              <p className="text-tva-orange/85 text-[7px] xs:text-[9.5px] sm:text-[11px] lg:text-xs leading-relaxed text-justify font-sans flex-grow flex items-center pt-1.5 sm:pt-2">
                To provide a unified platform for advanced skill development, direct industry collaboration, and engineering 
                innovation, while fostering teamwork, creativity, and practical problem-solving to protect the timeline of advancement.
              </p>
              <div className="border-t border-tva-orange/20 pt-1.5 sm:pt-2 flex justify-between items-center text-[6px] xs:text-[8px] lg:text-[9px] text-tva-orange/40">
                <span>METRIC: SKILL_ADVANCEMENT</span>
                <span>SECURE_DATA</span>
              </div>
            </div>

            {/* CRT Screen Scanline Overlay on device */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20" />
          </motion.div>

          {/* Card 3: THEME */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-[667/374] overflow-hidden"
            style={{
              backgroundImage: `url(${vmTileImg})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Card Content - positioned inside the tile's grid area */}
            <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[12%] p-2 sm:p-5 z-10 flex flex-col justify-between">
              <div className="flex items-center space-x-3 text-tva-orange">
                <div className="p-1 sm:p-1.5 border border-tva-orange/40 rounded bg-tva-orange/10 transition-all shadow-[0_0_8px_rgba(245,165,36,0.15)]">
                  <Zap size={16} className="animate-pulse" />
                </div>
                <h3 className="text-xs sm:text-base lg:text-lg font-black tracking-widest text-tva-orange tva-glow-text uppercase">
                  THEME_LOG
                </h3>
              </div>
              
              <div className="flex-grow flex flex-col justify-center pt-1.5 sm:pt-2 px-2 text-center">
                <span className="text-[6px] xs:text-[8px] sm:text-[9px] uppercase tracking-wider text-tva-orange/50 mb-1">
                  // OFFICIAL_THEME
                </span>
                <span className="font-extrabold text-tva-orange tracking-wide uppercase text-[9px] xs:text-[11px] sm:text-[14px] lg:text-base leading-tight tva-glow-text">
                  "Accelerating the Momentum to Net Zero"
                </span>
              </div>

              <div className="border-t border-tva-orange/20 pt-1.5 sm:pt-2 flex justify-between items-center text-[6px] xs:text-[8px] lg:text-[9px] text-tva-orange/40 font-mono">
                <span>METRIC: NET_ZERO_MOMENTUM</span>
                <span>SECURE_DATA</span>
              </div>
            </div>

            {/* CRT Screen Scanline Overlay on device */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20" />
          </motion.div>

          {/* Card 4: OBJECTIVES */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-[667/374] overflow-hidden"
            style={{
              backgroundImage: `url(${vmTileImg})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Card Content - positioned inside the tile's grid area */}
            <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[12%] p-2 sm:p-5 z-10 flex flex-col justify-between">
              <div className="flex items-center space-x-3 text-tva-orange">
                <div className="p-1 sm:p-1.5 border border-tva-orange/40 rounded bg-tva-orange/10 transition-all shadow-[0_0_8px_rgba(245,165,36,0.15)]">
                  <Award size={16} />
                </div>
                <h3 className="text-xs sm:text-base lg:text-lg font-black tracking-widest text-tva-orange tva-glow-text uppercase">
                  OBJECTIVES_LOG
                </h3>
              </div>

              <div className="flex-grow flex flex-col justify-center pt-1 sm:pt-1.5">
                <ul className="text-tva-orange/85 text-[6px] xs:text-[7.5px] sm:text-[9.5px] lg:text-[10px] leading-snug font-sans space-y-1 sm:space-y-1.5 text-justify">
                  <li className="flex items-start">
                    <span className="text-tva-orange mr-1 select-none font-bold">•</span>
                    <span>To provide a national platform that drives innovation, applies theory to practice, and connects students with industry experts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tva-orange mr-1 select-none font-bold">•</span>
                    <span>To develop essential professional skills like teamwork, project management, technical communication, and leadership.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tva-orange mr-1 select-none font-bold">•</span>
                    <span>To create a network for students from different colleges to collaborate and share technical ideas.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-tva-orange/20 pt-1.5 sm:pt-2 flex justify-between items-center text-[6px] xs:text-[8px] lg:text-[9px] text-tva-orange/40 font-mono">
                <span>METRIC: COLLABORATIVE_GOALS</span>
                <span>SECURE_DATA</span>
              </div>
            </div>

            {/* CRT Screen Scanline Overlay on device */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20" />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
