import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronLeft, ChevronRight } from 'lucide-react';

// Import processed PNG sponsor images (with transparent backgrounds)
import sp1 from '../assets/sp1.png';
import sp2 from '../assets/sp2.png';
import sp3 from '../assets/sp3.png';
import sp4 from '../assets/sp4.png';
import sp5 from '../assets/sp5.png';
import sp6 from '../assets/sp6.png';

export default function Sponsors() {
  const sponsors = [
    { id: 'sp1', src: sp1, name: 'NOARCH' },
    { id: 'sp2', src: sp2, name: 'Sakthi Metals' },
    { id: 'sp3', src: sp3, name: 'Liberty Leather Stores' },
    { id: 'sp4', src: sp4, name: 'Sharon Enterprises' },
    { id: 'sp5', src: sp5, name: 'MSI' },
    { id: 'sp6', src: sp6, name: 'Trumen & Threads' },
  ];

  // We loop the sponsors array three times to enable seamless endless scrolling
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors];

  // State to track current centered item index
  // We start in the middle copy (at index = sponsors.length)
  const [currentIndex, setCurrentIndex] = useState(sponsors.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Track viewport container dimensions for centering calculations
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive sizes: logo item width + spacing
  const itemWidth = isMobile ? 120 : 180;
  const gap = isMobile ? 24 : 48;

  // Slide left-to-right (active index decreases, moving track to the right)
  const slideLeftToRight = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Slide right-to-left (active index increases, moving track to the left)
  const slideRightToLeft = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Auto-slide setup
  useEffect(() => {
    timerRef.current = setInterval(slideLeftToRight, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleInteractiveSlide = (dir) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (dir === 'right') {
      slideRightToLeft();
    } else {
      slideLeftToRight();
    }
    // Resume auto-slide
    timerRef.current = setInterval(slideLeftToRight, 3000);
  };

  // Infinite looping wrap-around effect
  useEffect(() => {
    if (currentIndex < sponsors.length) {
      // Jump forward to the same element in the middle set
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + sponsors.length);
      }, 500); // matches spring transition
      return () => clearTimeout(timer);
    } else if (currentIndex >= sponsors.length * 2) {
      // Jump backward to the same element in the middle set
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - sponsors.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, sponsors.length]);

  // Center position offset calculation
  const xOffset = containerWidth / 2 - currentIndex * (itemWidth + gap) - itemWidth / 2;

  return (
    <section id="sponsors" className="relative py-16 px-6 bg-black select-none font-mono z-10 border-t border-tva-orange/10 overflow-hidden">
      <div className="absolute inset-0 tva-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-10">
          <div className="text-[10px] text-tva-orange/50 tracking-widest mb-1 uppercase flex items-center justify-center gap-1.5 font-bold">
            <Terminal size={10} className="text-tva-orange animate-pulse" />
            TIMELINE_RESOURCES // REGISTERED_PARTNERS
          </div>
          <h2 className="text-3xl font-black text-tva-orange tracking-widest uppercase tva-glow-text">
            OUR SPONSORS
          </h2>
          <div className="h-[1px] w-16 bg-tva-orange mx-auto mt-4 shadow-[0_0_8px_#F5A524]" />
        </div>

        {/* Carousel Component (Tile removed, direct black transparent flow) */}
        <div ref={containerRef} className="relative w-full flex items-center justify-center py-12">
          {/* Navigation Controls */}
          <button
            onClick={() => handleInteractiveSlide('left')}
            className="absolute left-0 md:left-4 z-30 p-2 rounded-full border border-tva-orange/30 bg-black/70 text-tva-orange hover:bg-tva-orange hover:text-black hover:border-tva-orange transition-all duration-300 shadow-[0_0_10px_rgba(245,165,36,0.15)] focus:outline-none"
            aria-label="Previous Sponsor"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={() => handleInteractiveSlide('right')}
            className="absolute right-0 md:right-4 z-30 p-2 rounded-full border border-tva-orange/30 bg-black/70 text-tva-orange hover:bg-tva-orange hover:text-black hover:border-tva-orange transition-all duration-300 shadow-[0_0_10px_rgba(245,165,36,0.15)] focus:outline-none"
            aria-label="Next Sponsor"
          >
            <ChevronRight size={20} />
          </button>

          {/* Left and Right Blur/Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* Slider Viewport */}
          <div className="w-full overflow-hidden flex items-center h-48 md:h-56">
            <motion.div
              className="flex items-center"
              style={{
                gap: `${gap}px`,
                width: `${extendedSponsors.length * (itemWidth + gap)}px`,
              }}
              animate={{ x: xOffset }}
              transition={
                isTransitioning
                  ? { type: 'spring', stiffness: 120, damping: 20 }
                  : { duration: 0 }
              }
            >
              {extendedSponsors.map((sponsor, idx) => {
                const isActive = idx === currentIndex;
                
                return (
                  <div
                    key={`carousel-${sponsor.id}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center p-3"
                    style={{
                      width: `${itemWidth}px`,
                      height: isMobile ? '100px' : '140px',
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.35 : 0.85,
                        opacity: isActive ? 1 : 0.35,
                        filter: isActive 
                          ? 'drop-shadow(0 0 15px rgba(245, 165, 36, 0.4)) brightness(1.15)'
                          : 'drop-shadow(0 0 0px rgba(0,0,0,0)) brightness(0.95)',
                      }}
                      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={sponsor.src}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain filter contrast-105"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
