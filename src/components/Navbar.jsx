import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import navbarImg from '../assets/navbar.png';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        if (isMobile) setIsOpen(false); // Auto-close menu when scrolled back to top
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

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
          onMouseEnter={() => { if (!isMobile) setIsHovered(true); }}
          onMouseLeave={() => { if (!isMobile) setIsHovered(false); }}
          onClick={() => { if (isMobile && !isOpen) setIsOpen(true); }}
        >
          <motion.div
            animate={{
              width: isMobile 
                ? (isOpen ? '290px' : '130px') 
                : (isHovered ? '620px' : '150px'),
              height: isMobile 
                ? (isOpen ? '270px' : '60px') 
                : (isHovered ? '95px' : '85px'),
              boxShadow: (isMobile ? isOpen : isHovered)
                ? '0 0 25px rgba(245, 165, 36, 0.45)' 
                : '0 0 10px rgba(245, 165, 36, 0.15)',
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className={`relative border ${isMobile && isOpen ? 'border-tva-orange/40 bg-tva-nearblack/95 shadow-[0_0_20px_rgba(245,165,36,0.25)]' : 'border-tva-orange/15'} rounded-lg overflow-hidden select-none cursor-pointer font-mono`}
            style={{
              backgroundImage: (!isMobile || !isOpen) ? `url(${navbarImg})` : 'none',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Dark tint overlay over screen to blend navigation */}
            <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors pointer-events-none" />

            {/* Inner screen content area */}
            <div className={(!isMobile || !isOpen) 
              ? "absolute left-[12%] right-[12%] top-[12%] bottom-[20%] flex items-center justify-center" 
              : "absolute inset-0 p-4 flex flex-col justify-start z-30"
            }>
              <AnimatePresence mode="wait">
                {(!isMobile && !isHovered) || (isMobile && !isOpen) ? (
                  /* Collapsed state: Small branding pulsing */
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-1.5 text-tva-orange font-bold text-[10px] tracking-widest animate-pulse"
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
                    className={isMobile 
                      ? "flex flex-col w-full h-full space-y-2 pt-1" 
                      : "flex items-center justify-around w-full px-2"
                    }
                  >
                    {isMobile && (
                      <div className="flex items-center justify-between w-full border-b border-tva-orange/20 pb-1.5 mb-1">
                        <span className="text-[9px] font-bold text-tva-orange/60 tracking-wider flex items-center gap-1">
                          <ShieldAlert size={10} className="text-tva-amber animate-pulse" /> TVA_SYS_MENU
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                          }}
                          className="text-tva-orange/70 hover:text-tva-orange text-[8px] font-bold border border-tva-orange/30 px-1.5 py-0.5 rounded bg-tva-orange/10 uppercase tracking-widest"
                        >
                          [ CLOSE ]
                        </button>
                      </div>
                    )}
                    {navLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleScroll(e, link.href);
                          if (isMobile) setIsOpen(false);
                        }}
                        className={isMobile
                          ? "text-[10px] text-tva-orange font-bold tracking-wider hover:text-tva-orange transition-colors uppercase px-3 py-1.5 border border-tva-orange/20 bg-tva-orange/5 rounded text-left flex items-center justify-between"
                          : "text-[9px] md:text-[11px] text-tva-orange font-bold tracking-wider hover:text-tva-orange transition-colors uppercase whitespace-nowrap px-1.5 py-0.5 border border-transparent hover:border-tva-orange/30 hover:bg-tva-orange/5 rounded"
                        }
                      >
                        {isMobile ? (
                          <>
                            <span>{link.name}</span>
                            <span className="text-[8px] text-tva-orange/45 font-sans">GO ➔</span>
                          </>
                        ) : (
                          link.name.split(': ')[1]
                        )}
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
