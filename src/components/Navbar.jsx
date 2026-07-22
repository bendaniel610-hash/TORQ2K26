import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, LogIn } from 'lucide-react';
import navBarImg from '../assets/loki header.jpg';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { name: 'SEC-01: HERO', href: '#hero' },
    { name: 'SEC-02: LOGS', href: '#about' },
    { name: 'SEC-03: MISSION', href: '#vision' },
    { name: 'SEC-04: EVENTS', href: '#events' },
    { name: 'SEC-05: REGISTRY', href: '#bearers' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          width: isHovered ? '90vw' : '150px',
          maxWidth: isHovered ? '620px' : '150px',
          opacity: isHovered ? 1.0 : 0.25,
          borderColor: isHovered ? '#F5A524' : 'rgba(245,165,36,0.3)',
          boxShadow: isHovered 
            ? '0 0 20px rgba(245, 165, 36, 0.4)' 
            : '0 0 5px rgba(245, 165, 36, 0.1)',
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 17 }}
        className="relative h-12 bg-black/95 border rounded-md flex items-center justify-between px-4 overflow-hidden select-none cursor-pointer tva-glow-border font-mono"
      >
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-color-dodge bg-cover bg-center"
          style={{ backgroundImage: `url(${navBarImg})` }}
        />

        {/* Branding (Always visible) */}
        <div className="flex items-center space-x-1.5 z-10 shrink-0">
          <ShieldAlert size={14} className="text-tva-orange animate-pulse" />
          <span className="text-[11px] tracking-widest text-tva-orange font-bold">
            TVA.TORQ
          </span>
        </div>

        {/* Stretched Content: Menu and Navigation Links (shown only on hover) */}
        <div className="flex items-center justify-end w-full overflow-hidden">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 md:space-x-5 z-10 pl-4 w-full justify-end"
              >
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    whileHover={{ scale: 1.05, color: '#FF8C00' }}
                    className="text-[10px] md:text-xs text-tva-orange/80 tracking-wider hover:text-tva-orange transition-colors uppercase whitespace-nowrap"
                  >
                    {link.name.split(': ')[1]}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small lock detail to the right when collapsed */}
        {!isHovered && (
          <div className="text-[8px] text-tva-orange/45 font-bold tracking-widest pl-1 shrink-0 z-10 border-l border-tva-orange/20 ml-2">
            [LOC]
          </div>
        )}
      </motion.div>
    </div>
  );
}
