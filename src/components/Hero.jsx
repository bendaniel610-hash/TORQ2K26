import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/1.png';
import heroLogoImg from '../assets/hero_logo.png';

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
        {/* Top: Hanging Logo & System status info */}
        <motion.div 
          variants={itemVariants} 
          className="relative flex flex-col items-center pt-24 w-full"
        >
          {/* Glowing support cables hanging from the top */}
          <div className="absolute top-0 left-[calc(50%-75px)] sm:left-[calc(50%-95px)] md:left-[calc(50%-145px)] w-[1.5px] h-24 bg-gradient-to-b from-transparent via-tva-orange/70 to-tva-orange shadow-[0_0_8px_#F5A524]" />
          <div className="absolute top-0 left-[calc(50%+75px)] sm:left-[calc(50%+95px)] md:left-[calc(50%+145px)] w-[1.5px] h-24 bg-gradient-to-b from-transparent via-tva-orange/70 to-tva-orange shadow-[0_0_8px_#F5A524]" />

          <img 
            src={heroLogoImg} 
            alt="TORQ 2K26" 
            className="w-[260px] sm:w-[320px] md:w-[480px] h-auto object-contain filter drop-shadow-[0_0_25px_rgba(245,165,36,0.35)] transition-transform duration-300 hover:scale-[1.02]"
          />
          <div className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-tva-orange/80 border border-tva-orange/30 px-3 py-1 bg-black/40 rounded uppercase mt-6 z-10">
            VER: 2K26 // DEPT: MECHANICAL // STATUS: ACTIVE
          </div>
        </motion.div>

        {/* Center: Symposium Title Card */}
        <motion.div variants={itemVariants} className="flex flex-col items-center max-w-4xl px-2">
          <div className="border border-tva-orange/40 bg-black/80 px-4 py-1.5 mb-6 rounded text-[9px] md:text-xs text-tva-orange/80 font-bold tracking-widest uppercase tva-glow-border inline-block">
            [ TIME VARIANCE AUTHORITY - SECURE CLIENT ]
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tva-orange tracking-[0.1em] sm:tracking-[0.15em] leading-tight uppercase tva-glow-text mb-6">
            A NATIONAL LEVEL<br/>TECHNICAL SYMPOSIUM
          </h2>
          
          <div className="h-[2px] w-24 bg-tva-orange mx-auto mb-6 shadow-[0_0_8px_#F5A524]" />
          
          <div className="text-[10px] sm:text-sm lg:text-base text-tva-orange/90 tracking-[0.1em] sm:tracking-[0.15em] uppercase flex flex-col items-center space-y-1">
            <span className="font-bold">Mechanical Engineering Department</span>
            <span className="text-[8px] sm:text-xs text-tva-orange/50 lowercase italic font-sans">and</span>
            <span className="font-black text-tva-amber animate-pulse text-xs sm:text-base lg:text-lg tracking-[0.2em]">A.R.M.E</span>
            <span className="text-[9px] sm:text-[11px] text-tva-orange/60 tracking-[0.15em] mt-2 border-t border-tva-orange/20 pt-2 px-4 font-bold">[ JOINTLY PRESENTS ]</span>
          </div>

          {/* Theme display */}
          <div className="text-[10px] sm:text-[11px] md:text-xs font-bold text-tva-amber tracking-[0.15em] uppercase mt-6 mb-2 max-w-lg mx-auto border border-tva-orange/25 px-4 py-2 bg-tva-orange/5 rounded shadow-[0_0_10px_rgba(245,165,36,0.1)]">
            "Accelerating the momentum to net zero"
          </div>

          {/* Click Here to Register button */}
          <a
            href="https://forms.gle/r4vCfcco7F1t38hd7"
            target="_blank"
            rel="noreferrer"
            className="mt-8 px-6 py-2 border border-tva-orange bg-tva-orange/10 hover:bg-tva-orange text-tva-orange hover:text-black font-black text-[10px] sm:text-xs tracking-[0.25em] uppercase rounded transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(245,165,36,0.15)] hover:shadow-[0_0_20px_rgba(245,165,36,0.4)] text-center focus:outline-none z-30"
          >
            [ CLICK HERE TO REGISTER ]
          </a>
        </motion.div>

        {/* Bottom: Scroll Prompt */}
        <motion.div 
          variants={itemVariants}
          className="text-[9px] font-bold text-tva-orange/40 tracking-[0.2em] uppercase animate-pulse flex flex-col items-center gap-2 pt-8"
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
