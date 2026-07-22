import React from 'react';
import { motion } from 'framer-motion';
import { Archive, Terminal, FileText, Cpu } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="about" className="relative py-20 px-6 bg-black/95 border-y border-tva-orange/20 overflow-hidden font-mono">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 tva-radar-grid opacity-15 pointer-events-none" />

      {/* TVA scan line overlay */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-tva-orange/40 animate-scanline-anim shadow-[0_0_10px_#F5A524] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative max-w-6xl mx-auto z-10"
      >
        {/* Dossier Header */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between border border-tva-orange/40 bg-tva-nearblack p-4 rounded-t-md border-b-0 tva-glow-border">
          <div className="flex items-center space-x-3 mb-2 md:mb-0">
            <Archive size={20} className="text-tva-orange animate-pulse" />
            <span className="text-tva-orange font-bold text-sm tracking-wider uppercase">
              TVA CLASSIFIED DOSSIER // REQ_2K26_MECH
            </span>
          </div>
          <div className="flex items-center space-x-4 text-[10px] text-tva-orange/60">
            <span>TIMELINE: BRANCH_LOYOLA_616</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span className="text-green-500">MONITORING_ACTIVE</span>
          </div>
        </motion.div>

        {/* Dossier Body Wrapper */}
        <div className="border border-tva-orange/40 bg-black/85 p-6 md:p-10 rounded-b-md tva-glow-border flex flex-col space-y-8">
          
          {/* Top Metadata Console Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-tva-orange/20 pb-6 text-xs text-tva-orange/70">
            <div className="flex flex-col space-y-1">
              <span className="text-tva-orange/40 text-[10px]">DOCUMENT TYPE</span>
              <span className="font-bold flex items-center gap-1"><FileText size={12} /> HISTORICAL LOGS</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-tva-orange/40 text-[10px]">ORIGIN UNIT</span>
              <span className="font-bold flex items-center gap-1"><Cpu size={12} /> DEPT_OF_MECH_ENG</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-tva-orange/40 text-[10px]">SECURITY LEVEL</span>
              <span className="font-bold text-tva-amber font-mono">LEVEL-04: GLORIOUS PURPOSE</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-tva-orange/40 text-[10px]">SYMPOSIUM STATUS</span>
              <span className="font-bold text-green-500 animate-pulse">[READY_TO_LAUNCH]</span>
            </div>
          </motion.div>

          {/* Main Content: Two Columns (About and History) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-4">
            
            {/* Column 1: About the Symposium */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 border-b border-tva-orange/20 pb-2">
                <Terminal size={16} className="text-tva-orange" />
                <h3 className="text-lg font-bold text-tva-orange tracking-widest uppercase">
                  SUB_LOG_01: ABOUT_TORQ
                </h3>
              </div>
              <p className="text-tva-orange/80 leading-relaxed text-sm text-justify">
                TORQ is the flagship annual national-level technical symposium of the Department of Mechanical Engineering 
                at Loyola-ICAM College of Engineering and Technology (LICET), organized in association with A.R.M.E 
                (Association of Royal Mechanical Engineers). It brings together students, innovators, and industry professionals 
                through competitive challenges, design showcases, workshops, and discussions. It serves as a creative crucible 
                where future-focused engineering paradigms are forged, providing students a launchpad to demonstrate technical 
                acumen and address modern challenges.
              </p>
            </motion.div>

            {/* Column 2: History and Growth */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 border-b border-tva-orange/20 pb-2">
                <Terminal size={16} className="text-tva-orange" />
                <h3 className="text-lg font-bold text-tva-orange tracking-widest uppercase">
                  SUB_LOG_02: CHRONOLOGY
                </h3>
              </div>
              <p className="text-tva-orange/80 leading-relaxed text-sm text-justify">
                TORQ commenced as a local student-led initiative within the mechanical department to inspire hands-on fabrication 
                and engineering. Across subsequent temporal loops, it evolved into a highly anticipated national symposium. Each 
                iteration introduces advanced tools, specialized workshops (such as UAV rocketry and aerospace dynamics), and 
                valuable industrial integrations. Today, it operates as a vital node in our department's history—connecting academics, 
                professional ethics, and high-performance design to build a community of collaborative problem-solvers.
              </p>
            </motion.div>

          </div>

          {/* Bureaucratic Archive Stamp/Footer */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center pt-8 border-t border-tva-orange/20">
            <div className="border-2 border-dashed border-tva-orange/40 px-6 py-3 rounded text-center max-w-sm bg-tva-orange/5">
              <div className="text-xs font-bold text-tva-orange tracking-widest uppercase">
                APPROVED BY ORDER OF THE TVA
              </div>
              <div className="text-[9px] text-tva-orange/60 mt-1 font-mono tracking-widest uppercase">
                TIMELINE INDEX: LICET.TORQ.2K26.SECURE
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
