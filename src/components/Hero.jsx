import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/1.png';
import torqTextImg from '../assets/Untitled design.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div 
      id="hero" 
      className="relative min-h-screen w-full bg-black select-none font-mono flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Image - static layout with dark filter */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${heroImg})`,
          filter: 'brightness(0.35)',
        }}
      />

      {/* Grid and Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none z-10" />
      <div className="absolute inset-0 tva-grid-bg opacity-20 pointer-events-none z-10" />

      {/* Hero Content Wrapper */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-5xl mx-auto px-6 w-full flex flex-col items-center justify-between text-center space-y-12"
      >
        {/* Top: Logo & System status info */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
          <img 
            src={torqTextImg} 
            alt="TORQ" 
            className="w-[280px] md:w-[420px] h-auto object-contain filter drop-shadow-[0_0_20px_rgba(245,165,36,0.5)] mix-blend-screen animate-pulse-glow"
          />
          <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-tva-orange/80 border border-tva-orange/30 px-3 py-1 bg-black/40 rounded uppercase">
            VER: 2K26 // DEPT: MECHANICAL // STATUS: ACTIVE
          </div>
        </motion.div>

        {/* Center: Symposium Title Card */}
        <motion.div variants={itemVariants} className="flex flex-col items-center max-w-4xl">
          <div className="border border-tva-orange/40 bg-black/80 px-4 py-1.5 mb-6 rounded text-[10px] md:text-xs text-tva-orange/80 font-bold tracking-widest uppercase tva-glow-border inline-block">
            [ TIME VARIANCE AUTHORITY - SECURE CLIENT ]
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-tva-orange tracking-[0.15em] leading-tight uppercase tva-glow-text mb-6">
            A NATIONAL LEVEL<br/>TECHNICAL SYMPOSIUM
          </h2>
          
          <div className="h-[2px] w-24 bg-tva-orange mx-auto mb-6 shadow-[0_0_8px_#F5A524]" />
          
          <p className="text-base md:text-xl lg:text-2xl text-tva-orange/90 tracking-[0.1em] uppercase">
            In association with <span className="font-black text-tva-amber animate-pulse">A.R.M.E</span>
          </p>
        </motion.div>

        {/* Bottom: Scroll Prompt */}
        <motion.div 
          variants={itemVariants}
          className="text-[10px] font-bold text-tva-orange/40 tracking-[0.2em] uppercase animate-pulse flex flex-col items-center gap-2 pt-8"
        >
          <span>[ ACCESSING ARCHIVES - SCROLL DOWN ]</span>
          <svg className="w-4 h-4 text-tva-orange/40 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
