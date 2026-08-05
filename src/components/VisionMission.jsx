import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Zap, Award } from 'lucide-react';
import vmTileImg from '../assets/vm_tile.png';

export default function VisionMission() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate card stack every 5000ms
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const cardsData = [
    {
      id: 0,
      title: 'VISION_LOG',
      metric: 'METRIC: FUTURE_INNOVATION',
      icon: <Compass size={16} className="animate-spin-slow" />,
      content: (
        <p className="text-tva-orange/85 text-[7px] xs:text-[9.5px] sm:text-[11px] lg:text-xs leading-relaxed text-justify font-sans flex-grow flex items-center pt-1.5 sm:pt-2">
          To inspire young engineers to innovate, collaborate, and create high-efficiency, sustainable solutions 
          for the future, aligning technical breakthroughs with ethical standards and absolute temporal excellence.
        </p>
      )
    },
    {
      id: 1,
      title: 'MISSION_LOG',
      metric: 'METRIC: SKILL_ADVANCEMENT',
      icon: <Target size={16} className="animate-pulse" />,
      content: (
        <p className="text-tva-orange/85 text-[7px] xs:text-[9.5px] sm:text-[11px] lg:text-xs leading-relaxed text-justify font-sans flex-grow flex items-center pt-1.5 sm:pt-2">
          To provide a unified platform for advanced skill development, direct industry collaboration, and engineering 
          innovation, while fostering teamwork, creativity, and practical problem-solving to protect the timeline of advancement.
        </p>
      )
    },
    {
      id: 2,
      title: 'THEME_LOG',
      metric: 'METRIC: NET_ZERO_MOMENTUM',
      icon: <Zap size={16} className="animate-pulse" />,
      content: (
        <div className="flex-grow flex flex-col justify-center pt-1.5 sm:pt-2 px-2 text-center">
          <span className="text-[6px] xs:text-[8px] sm:text-[9px] uppercase tracking-wider text-tva-orange/50 mb-1">
            // OFFICIAL_THEME
          </span>
          <span className="font-extrabold text-tva-orange tracking-wide uppercase text-[9px] xs:text-[11px] sm:text-[14px] lg:text-base leading-tight tva-glow-text">
            "Accelerating the Momentum to Net Zero"
          </span>
        </div>
      )
    },
    {
      id: 3,
      title: 'OBJECTIVES_LOG',
      metric: 'METRIC: COLLABORATIVE_GOALS',
      icon: <Award size={16} />,
      content: (
        <div className="flex-grow flex flex-col justify-center pt-1 sm:pt-1.5">
          <ul className="text-tva-orange/85 text-[6px] xs:text-[7.5px] sm:text-[9.5px] lg:text-[10px] leading-snug font-sans space-y-1 sm:space-y-1.5 text-justify">
            <li className="flex items-start">
              <span className="text-tva-orange mr-1 select-none font-bold">•</span>
              <span>To provide a national platform that drives innovation, applies theory to practice, and connects students with industry experts.</span>
            </li>
            <li className="flex items-start">
              <span className="text-tva-orange mr-1 select-none font-bold">•</span>
              <span>To develop essential professional skills like teamwork, project management, technical communication, and leadership.</span>
            </li>
            <li className="flex items-start">
              <span className="text-tva-orange mr-1 select-none font-bold">•</span>
              <span>To create a network for students from different colleges to collaborate and share technical ideas.</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="vision" className="relative py-20 px-4 bg-black select-none font-mono">
      {/* Decorative radar grid */}
      <div className="absolute inset-0 tva-radar-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[10px] text-tva-orange/50 tracking-widest mb-1 uppercase">
            TVA_ARCHIVES // FOUNDATIONAL_LOGS
          </div>
          <h2 className="text-3xl font-black text-tva-orange tracking-widest uppercase tva-glow-text">
            SEC-03: VISION & MISSION
          </h2>
          <div className="h-[1px] w-16 bg-tva-orange mx-auto mt-4 shadow-[0_0_8px_#F5A524]" />
        </div>

        {/* Centered Premium Card Stack */}
        <div className="relative w-[90%] max-w-[600px] mx-auto my-12">
          {/* Invisible spacer to maintain layout height and correct aspect ratio */}
          <div className="aspect-[667/374] w-full invisible pointer-events-none" />

          {/* Cards Stack */}
          {cardsData.map((card, idx) => {
            // Determine relative position from active card (0 = active/front, 3 = back)
            const position = (idx - activeIndex + 4) % 4;

            // Apply different styles based on visual position in stack
            const stackStyles = [
              // Position 0 (Active/Front)
              {
                y: 0,
                scale: 1,
                opacity: 1,
                zIndex: 4,
                boxShadow: '0 10px 25px rgba(245, 165, 36, 0.25), 0 0 15px rgba(245, 165, 36, 0.15)',
              },
              // Position 1 (Second)
              {
                y: -10,
                scale: 0.98,
                opacity: 0.8,
                zIndex: 3,
                boxShadow: '0 4px 15px rgba(245, 165, 36, 0.15), 0 0 8px rgba(245, 165, 36, 0.08)',
              },
              // Position 2 (Third)
              {
                y: -20,
                scale: 0.96,
                opacity: 0.65,
                zIndex: 2,
                boxShadow: '0 2px 10px rgba(245, 165, 36, 0.1), 0 0 5px rgba(245, 165, 36, 0.05)',
              },
              // Position 3 (Fourth/Back)
              {
                y: -30,
                scale: 0.94,
                opacity: 0.5,
                zIndex: 1,
                boxShadow: '0 0 0px rgba(0,0,0,0)',
              }
            ];

            const currentStyle = stackStyles[position];

            return (
              <motion.div
                key={card.id}
                animate={currentStyle}
                whileHover={
                  position === 0 
                    ? { 
                        y: -6, 
                        scale: 1.01,
                        boxShadow: '0 15px 30px rgba(245, 165, 36, 0.4), 0 0 20px rgba(245, 165, 36, 0.25)' 
                      } 
                    : {}
                }
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => {
                  if (position === 0) {
                    setActiveIndex((prev) => (prev + 1) % 4);
                  }
                }}
                className={`absolute inset-0 w-full h-full overflow-hidden rounded-lg backdrop-blur-md bg-black/45 border border-tva-orange/15 shadow-2xl transition-all duration-300 ${
                  position === 0 ? 'cursor-pointer' : 'pointer-events-none'
                }`}
                style={{
                  backgroundImage: `url(${vmTileImg})`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Card Content - positioned inside the tile's grid area */}
                <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[12%] p-2 sm:p-5 z-10 flex flex-col justify-between">
                  <div className="flex items-center space-x-3 text-tva-orange">
                    <div className="p-1 sm:p-1.5 border border-tva-orange/40 rounded bg-tva-orange/10 transition-all shadow-[0_0_8px_rgba(245,165,36,0.15)]">
                      {card.icon}
                    </div>
                    <h3 className="text-xs sm:text-base lg:text-lg font-black tracking-widest text-tva-orange tva-glow-text uppercase">
                      {card.title}
                    </h3>
                  </div>
                  
                  {card.content}

                  <div className="border-t border-tva-orange/20 pt-1.5 sm:pt-2 flex justify-between items-center text-[6px] xs:text-[8px] lg:text-[9px] text-tva-orange/40">
                    <span>{card.metric}</span>
                    <span>SECURE_DATA</span>
                  </div>
                </div>

                {/* CRT Screen Scanline Overlay on device */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Subtle dot indicators for active card control */}
        <div className="flex space-x-3 mt-4 z-20">
          {cardsData.map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(card.id)}
              className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === card.id
                  ? 'bg-tva-orange shadow-[0_0_8px_rgba(245,165,36,0.8)] w-12'
                  : 'bg-tva-orange/20 hover:bg-tva-orange/55'
              }`}
              title={`Switch to ${card.title}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
