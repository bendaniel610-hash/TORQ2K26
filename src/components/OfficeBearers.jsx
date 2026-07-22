import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Activity, Award } from 'lucide-react';

export default function OfficeBearers() {
  const bearers = [
    { name: 'AKSHAYA S', role: 'PRESIDENT', code: 'OB-01 // PRES' },
    { name: 'RICHARD SANTHOSH JERRY R', role: 'VICE-PRESIDENT', code: 'OB-02 // V_PRES' },
    { name: 'MAMTHA', role: 'PUBLIC RELATIONS OFFICER', code: 'OB-03 // PRO' },
    { name: 'PRITHIV', role: 'TREASURER', code: 'OB-04 // TREAS' },
    { name: 'NOEL JHON P', role: 'PUBLICITY & COMMUNICATION', code: 'OB-05 // PUB_COMM' },
    { name: 'SWATHI G', role: 'GENERAL SECRETARY', code: 'OB-06 // GEN_SEC' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="bearers" className="relative py-20 px-6 bg-black select-none font-mono">
      <div className="absolute inset-0 tva-grid-bg opacity-15 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Title */}
        <div className="text-center mb-16">
          <div className="text-[10px] text-tva-orange/50 tracking-widest mb-1 uppercase">
            REGISTRY_DIRECTORY // SECURE_LIST
          </div>
          <h2 className="text-3xl font-black text-tva-orange tracking-widest uppercase tva-glow-text">
            OFFICE BEARERS
          </h2>
          <div className="h-[1px] w-16 bg-tva-orange mx-auto mt-4 shadow-[0_0_8px_#F5A524]" />
        </div>

        {/* Directory Layout Panel */}
        <div className="border border-tva-orange/30 p-6 md:p-8 rounded-md bg-tva-nearblack/90 tva-glow-border">
          
          {/* Console Readout Header */}
          <div className="text-[11px] text-tva-orange/60 border-b border-tva-orange/20 pb-2 mb-4 tracking-wider flex items-center justify-between font-bold">
            <span>BOARD_MEMBERS // CURRENT_TIMELINE</span>
            <span className="text-green-500 animate-pulse">[SECURE_VERIFIED]</span>
          </div>

          {/* Two-column names directory grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bearers.map((bearer, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 6, backgroundColor: 'rgba(245, 165, 36, 0.05)' }}
                className="flex items-center justify-between p-3 border border-tva-orange/15 rounded bg-black/40 hover:border-tva-orange/40 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 border border-tva-orange/30 rounded text-tva-orange bg-tva-orange/5 group-hover:bg-tva-orange/20 transition-all">
                    {idx === 0 || idx === 1 ? <ShieldCheck size={14} className="text-tva-amber" /> : <UserCheck size={14} />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black tracking-wider text-tva-orange group-hover:tva-glow-text transition-all">
                      {bearer.name}
                    </span>
                    <span className="text-[9px] text-tva-orange/60 font-sans tracking-wide">
                      {bearer.role}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end text-[9px] text-tva-orange/40 font-mono">
                  <span className="font-bold text-tva-orange/60 group-hover:text-tva-orange transition-colors">{bearer.code}</span>
                  <span className="flex items-center gap-1 mt-0.5 text-[8px] text-green-500/80">
                    <Activity size={8} /> AUTH
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Status Console Footer */}
          <div className="border-t border-tva-orange/20 mt-6 pt-3 flex items-center justify-between text-[8px] text-tva-orange/40 font-bold uppercase tracking-wider">
            <span>AUTHORIZED DIRECTORY RECORD</span>
            <span className="flex items-center gap-1"><Award size={10} className="text-tva-amber animate-pulse" /> A.R.M.E SYSTEM</span>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
