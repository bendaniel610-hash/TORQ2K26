import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import navbarImg from '../assets/navbar.png';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <AnimatePresence>
      {showNavbar && (
        <motion.div 
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-2 left-1/2 z-50 flex items-center justify-center pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              width: isHovered ? '620px' : '150px',
              height: isHovered ? '95px' : '85px',
              boxShadow: isHovered 
                ? '0 0 25px rgba(245, 165, 36, 0.45)' 
                : '0 0 10px rgba(245, 165, 36, 0.15)',
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="relative border border-tva-orange/15 rounded-lg overflow-hidden select-none cursor-pointer font-mono"
            style={{
              backgroundImage: `url(${navbarImg})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Dark tint overlay over screen to blend navigation */}
            <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors pointer-events-none" />

            {/* Inner screen content area */}
            <div className="absolute left-[12%] right-[12%] top-[12%] bottom-[20%] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!isHovered ? (
                  /* Collapsed state: Small branding pulsing */
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-1 text-tva-orange font-bold text-[10px] tracking-widest animate-pulse"
                  >
                    <ShieldAlert size={12} className="text-tva-amber" />
                    <span>TVA_SYS</span>
                  </motion.div>
                ) : (
                  /* Expanded state: Menu Links */
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-around w-full px-2"
                  >
                    {navLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="text-[9px] md:text-[11px] text-tva-orange font-bold tracking-wider hover:text-tva-orange transition-colors uppercase whitespace-nowrap px-1.5 py-0.5 border border-transparent hover:border-tva-orange/30 hover:bg-tva-orange/5 rounded"
                      >
                        {link.name.split(': ')[1]}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* SCANLINES OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-30" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
