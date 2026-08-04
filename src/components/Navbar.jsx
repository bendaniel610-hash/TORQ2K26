import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import navbarImg from '../assets/navbar.png';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Target event date: August 8, 2026
  const targetDate = new Date('2026-08-08T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setIsHovered(false); // Auto-close menu when scrolled back to top
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkMobile);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      clearInterval(timer);
    };
  }, []);

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
          onClick={() => { if (isMobile) setIsHovered(!isHovered); }}
        >
          <motion.div
            animate={{
              width: isMobile 
                ? (isHovered ? '92vw' : '130px') 
                : (isHovered ? '620px' : '150px'),
              height: isMobile 
                ? (isHovered ? '65px' : '55px') 
                : (isHovered ? '95px' : '85px'),
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
              backgroundColor: 'transparent',
            }}
          >
            {/* Dark tint overlay over screen to blend navigation */}
            <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors pointer-events-none" />

            {/* Inner screen content area */}
            <div className="absolute left-[8%] right-[8%] top-[8%] bottom-[10%] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!isHovered ? (
                  /* Collapsed state: Pulsing compact countdown indicator */
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-1.5 text-tva-orange font-bold text-[11px] md:text-[13px] tracking-widest animate-pulse"
                  >
                    <ShieldAlert size={12} className="text-tva-amber" />
                    <span>
                      {timeLeft.total > 0 ? `T-MINUS: ${timeLeft.days}D` : 'TVA_LIVE'}
                    </span>
                  </motion.div>
                ) : (
                  /* Expanded state: Detailed digital timer count */
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-center gap-2 md:gap-4 w-full px-1 text-tva-orange font-bold font-mono uppercase"
                  >
                    <div className="text-[8px] xs:text-[10px] sm:text-[12px] md:text-[13px] text-tva-orange/60 tracking-wider">
                      {timeLeft.total > 0 ? 'TEMPORAL MELTDOWN IN:' : 'THE TIME LINE IS STABILIZED //'}
                    </div>
                    {timeLeft.total > 0 ? (
                      <div className="flex items-center gap-1 md:gap-1.5">
                        <div className="flex flex-col items-center">
                          <span className="bg-tva-orange/10 border border-tva-orange/30 px-1 py-0.5 sm:px-1.5 rounded text-[10px] xs:text-[11px] sm:text-[13px] md:text-[15px] min-w-[22px] sm:min-w-[28px] md:min-w-[32px] text-center font-black">
                            {String(timeLeft.days).padStart(2, '0')}
                          </span>
                          <span className="text-[5px] md:text-[7px] text-tva-orange/50 mt-0.5 tracking-tighter">DAYS</span>
                        </div>
                        <span className="text-[9px] md:text-[12px] text-tva-orange/50 mb-3">:</span>
                        <div className="flex flex-col items-center">
                          <span className="bg-tva-orange/10 border border-tva-orange/30 px-1 py-0.5 sm:px-1.5 rounded text-[10px] xs:text-[11px] sm:text-[13px] md:text-[15px] min-w-[22px] sm:min-w-[28px] md:min-w-[32px] text-center font-black">
                            {String(timeLeft.hours).padStart(2, '0')}
                          </span>
                          <span className="text-[5px] md:text-[7px] text-tva-orange/50 mt-0.5 tracking-tighter">HOURS</span>
                        </div>
                        <span className="text-[9px] md:text-[12px] text-tva-orange/50 mb-3">:</span>
                        <div className="flex flex-col items-center">
                          <span className="bg-tva-orange/10 border border-tva-orange/30 px-1 py-0.5 sm:px-1.5 rounded text-[10px] xs:text-[11px] sm:text-[13px] md:text-[15px] min-w-[22px] sm:min-w-[28px] md:min-w-[32px] text-center font-black">
                            {String(timeLeft.minutes).padStart(2, '0')}
                          </span>
                          <span className="text-[5px] md:text-[7px] text-tva-orange/50 mt-0.5 tracking-tighter">MINS</span>
                        </div>
                        <span className="text-[9px] md:text-[12px] text-tva-orange/50 mb-3">:</span>
                        <div className="flex flex-col items-center">
                          <span className="bg-tva-orange/10 border border-tva-orange/30 px-1 py-0.5 sm:px-1.5 rounded text-[10px] xs:text-[11px] sm:text-[13px] md:text-[15px] min-w-[22px] sm:min-w-[28px] md:min-w-[32px] text-center font-black">
                            {String(timeLeft.seconds).padStart(2, '0')}
                          </span>
                          <span className="text-[5px] md:text-[7px] text-tva-orange/50 mt-0.5 tracking-tighter">SECS</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-[10px] sm:text-[12px] md:text-[14px] bg-tva-orange/15 px-2 py-0.5 border border-tva-orange/30 rounded text-center animate-pulse font-black tracking-widest">
                        EVENT IS LIVE
                      </div>
                    )}
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
