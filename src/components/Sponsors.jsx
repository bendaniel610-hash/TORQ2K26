import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';

// Import sponsor images
import sp1 from '../assets/sp1.jpeg';
import sp2 from '../assets/sp2.PNG';
import sp3 from '../assets/sp3.jpeg';
import sp4 from '../assets/sp4.PNG';
import sp5 from '../assets/sp5.jpeg';

export default function Sponsors() {
  const sponsors = [
    { id: 'sp1', src: sp1, name: 'Sponsor 1' },
    { id: 'sp2', src: sp2, name: 'Sponsor 2' },
    { id: 'sp3', src: sp3, name: 'Sponsor 3' },
    { id: 'sp4', src: sp4, name: 'Sponsor 4' },
    { id: 'sp5', src: sp5, name: 'Sponsor 5' },
  ];

  // Triplicate the sponsors list to ensure seamless looping without gaps on ultra-wide monitors
  const sponsorList = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="relative py-16 px-6 bg-black select-none font-mono z-10 border-t border-tva-orange/10">
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

        {/* Marquee Panel Container */}
        <div className="relative border border-tva-orange/20 rounded-md bg-tva-nearblack/90 p-4 md:p-6 overflow-hidden tva-glow-border">
          {/* Console Header details */}
          <div className="text-[9px] text-tva-orange/40 pb-2 mb-4 tracking-wider flex items-center justify-between border-b border-tva-orange/10 font-bold uppercase">
            <span>[TIMELINE_SUPPORT_NODE // MARQUEE_ACTIVE]</span>
            <span className="flex items-center gap-1">
              <Cpu size={10} className="text-tva-orange animate-spin" />
              STATUS: CONTINUOUS_FLOW
            </span>
          </div>

          {/* Left and Right Gradient Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-tva-nearblack/95 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-tva-nearblack/95 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Marquee Container */}
          <div className="relative flex overflow-hidden w-full py-2">
            {/* The infinite marquee track */}
            <div className="flex w-max animate-marquee">
              {/* First Track Copy */}
              <div className="flex shrink-0 items-center gap-6 md:gap-10 px-3 md:px-5">
                {sponsorList.map((sponsor, idx) => {
                  const isJpeg = sponsor.src.toLowerCase().includes('jpeg') || sponsor.src.toLowerCase().includes('jpg');
                  return (
                    <div
                      key={`track1-${sponsor.id}-${idx}`}
                      className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 group cursor-pointer"
                    >
                      <img
                        src={sponsor.src}
                        alt={sponsor.name}
                        className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                          isJpeg
                            ? 'invert brightness-125 contrast-120 mix-blend-screen'
                            : 'brightness-90 hover:brightness-100'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Second Track Copy */}
              <div className="flex shrink-0 items-center gap-6 md:gap-10 px-3 md:px-5">
                {sponsorList.map((sponsor, idx) => {
                  const isJpeg = sponsor.src.toLowerCase().includes('jpeg') || sponsor.src.toLowerCase().includes('jpg');
                  return (
                    <div
                      key={`track2-${sponsor.id}-${idx}`}
                      className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 group cursor-pointer"
                    >
                      <img
                        src={sponsor.src}
                        alt={sponsor.name}
                        className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                          isJpeg
                            ? 'invert brightness-125 contrast-120 mix-blend-screen'
                            : 'brightness-90 hover:brightness-100'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
