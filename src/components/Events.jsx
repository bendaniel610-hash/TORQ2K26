import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tempadImg from '../assets/tempad.png';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const eventList = [
    {
      id: 1,
      name: 'GEAR UP',
      subtitle: 'Lathe Machining Challenge',
      date: 'August 23, 2026',
      time: '10:00 AM - 12:00 PM',
      rules: [
        'Teams of 2–3 members.',
        'All raw materials and lathe tools will be provided at the venue.',
        'Participants must wear workshop safety gear (shoes mandatory).',
        'Judging criteria: Dimensional accuracy, surface finish, and time taken.',
      ],
      code: 'EV-01 // GEAR_UP',
    },
    {
      id: 2,
      name: 'PAPER PRESENTATION',
      subtitle: 'Research & Technical Presentation',
      date: 'August 23, 2026',
      time: '10:30 AM - 12:30 PM',
      rules: [
        'Maximum 2 members per team.',
        'Topic must be related to mechanical engineering or allied fields.',
        'Presentation time: 8 minutes + 2 minutes Q&A.',
        'IEEE format preferred for paper submission.',
      ],
      code: 'EV-02 // PAPER_PRESENTATION',
    },
    {
      id: 3,
      name: 'BEAMS $ BRILLIANCE',
      subtitle: 'Structural load bearing challenge',
      date: 'August 23, 2026',
      time: '12:00 PM - 2:00 PM',
      rules: [
        'Teams of 3–4 members.',
        'Building materials will be provided on the spot.',
        'Structures must adhere to specified clear span and width dimensions.',
        'Winning design is based on the highest load-to-weight ratio.',
      ],
      code: 'EV-03 // BEAMS_AND_BRILLIANCE',
    },
    {
      id: 4,
      name: 'WATER ROCKETRY',
      subtitle: 'Aerodynamic Launch Challenge',
      date: 'August 23, 2026',
      time: '1:30 PM - 3:30 PM',
      rules: [
        'Teams of up to 3 members.',
        'Rockets must use water and air pressure only.',
        'Launch pad will be provided by organizers.',
        'No pre-fabricated metal parts or ready-made launchers allowed.',
      ],
      code: 'EV-04 // WATER_ROCKETRY',
    },
    {
      id: 5,
      name: 'CAD',
      subtitle: '3D CAD Modeling Contest',
      date: 'August 23, 2026',
      time: '2:00 PM - 4:00 PM',
      rules: [
        'Individual participation event.',
        'Modeling software (SolidWorks/AutoCAD) will be provided.',
        'The drawing sheet will be given at the start of the event.',
        'Scoring is based on accuracy, speed, and clean design tree methodology.',
      ],
      code: 'EV-05 // CAD_DESIGN',
    },
    {
      id: 6,
      name: '3D PRINTING',
      subtitle: 'Additive Manufacturing Workshop',
      date: 'August 23, 2026',
      time: '10:00 AM - 12:30 PM',
      rules: [
        'Hands-on training session on FDM 3D printing technology.',
        'Learn slicing parameters optimization, G-code generation, and design rules.',
        'Conducted by industry experts.',
        'E-certificates will be provided to all registered attendees.',
      ],
      code: 'WK-01 // 3D_PRINTING',
    },
    {
      id: 7,
      name: 'HVAC DESIGN',
      subtitle: 'Heating, Ventilation & Air Conditioning',
      date: 'August 23, 2026',
      time: '1:30 PM - 4:00 PM',
      rules: [
        'Comprehensive session covering duct sizing and thermal cooling load estimation.',
        'Introduction to ASHRAE standards and industry HVAC calculation methods.',
        'Conducted by senior HVAC design engineers.',
        'E-certificates will be provided to all registered attendees.',
      ],
      code: 'WK-02 // HVAC_DESIGN',
    },
  ];

  return (
    <section id="events" className="relative py-20 px-4 bg-black select-none font-mono">
      <div className="absolute inset-0 tva-radar-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-[10px] text-tva-orange/50 tracking-widest mb-1 uppercase">
            TEMPAD_INTERFACE // DIRECTORY_BROWSER
          </div>
          <h2 className="text-3xl font-black text-tva-orange tracking-widest uppercase tva-glow-text">
            SEC-04: EVENT CONSOLE
          </h2>
          <div className="h-[1px] w-16 bg-tva-orange mx-auto mt-4 shadow-[0_0_8px_#F5A524]" />
        </div>

        {!isMobile ? (
          /* Desktop View: Large Single TemPad Device Frame */
          <div className="relative w-full max-w-4xl mx-auto aspect-[629/317] border border-tva-orange/30 rounded-lg overflow-hidden shadow-2xl tva-glow-border bg-black">
            
            {/* TemPad Frame Image Background */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ 
                backgroundImage: `url(${tempadImg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />

            {/* Interactive Button Hotspots directly mapped over screen rows */}
            {/* 1. GEAR UP */}
            <button 
              onClick={() => setSelectedEvent(eventList[0])}
              className="absolute left-[28.3%] top-[30%] w-[30.5%] h-[8.5%] cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
              title="Gear Up"
            />
            {/* 2. PAPER PRESENTATION */}
            <button 
              onClick={() => setSelectedEvent(eventList[1])}
              className="absolute left-[28.3%] top-[38.5%] w-[30.5%] h-[8.5%] cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
              title="Paper Presentation"
            />
            {/* 3. BEAMS $ BRILLIANCE */}
            <button 
              onClick={() => setSelectedEvent(eventList[2])}
              className="absolute left-[28.3%] top-[47%] w-[30.5%] h-[8.5%] cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
              title="Beams $ Brilliance"
            />
            {/* 4. WATER ROCKETRY */}
            <button 
              onClick={() => setSelectedEvent(eventList[3])}
              className="absolute left-[28.3%] top-[55.5%] w-[30.5%] h-[8.5%] cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
              title="Water Rocketry"
            />
            {/* 5. CAD */}
            <button 
              onClick={() => setSelectedEvent(eventList[4])}
              className="absolute left-[28.3%] top-[64%] w-[30.5%] h-[8.5%] cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
              title="CAD"
            />
            {/* 6. 3D PRINTING */}
            <button 
              onClick={() => setSelectedEvent(eventList[5])}
              className="absolute left-[59.2%] top-[30%] w-[29.5%] h-[8.5%] cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
              title="3D Printing Workshop"
            />
            {/* 7. HVAC DESIGN */}
            <button 
              onClick={() => setSelectedEvent(eventList[6])}
              className="absolute left-[59.2%] top-[38.5%] w-[29.5%] h-[8.5%] cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
              title="HVAC Design Workshop"
            />

            {/* CRT Screen Scanline Overlay on device */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-25 z-20" />
          </div>
        ) : (
          /* Mobile View: Beautiful List of Event Cards simulating a TemPad screen */
          <div className="w-full max-w-md mx-auto flex flex-col space-y-4 px-2">
            <div className="border border-tva-orange/30 rounded-lg p-4 md:p-6 bg-tva-nearblack/90 tva-glow-border relative overflow-hidden">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-20" />
              
              <div className="text-[10px] text-tva-orange/60 border-b border-tva-orange/20 pb-2 mb-4 tracking-wider flex items-center justify-between font-bold">
                <span>TEMPAD_V1 // LOCAL_DIRECTORY</span>
                <span className="text-green-500 animate-pulse">[ONLINE]</span>
              </div>
              
              <div className="flex flex-col space-y-3">
                {eventList.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="w-full flex flex-col p-4 border border-tva-orange/15 rounded bg-black/60 hover:border-tva-orange/40 text-left transition-all duration-200 group active:bg-tva-orange/5"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[11px] font-black tracking-wider text-tva-orange group-hover:tva-glow-text transition-all uppercase">
                        {event.name}
                      </span>
                      <span className="text-[8px] text-tva-orange/40 font-mono">
                        {event.code.split(' // ')[0]}
                      </span>
                    </div>
                    <div className="text-[9px] text-tva-orange/65 font-sans tracking-wide mt-1.5 leading-relaxed">
                      {event.subtitle}
                    </div>
                    <div className="flex items-center justify-between w-full mt-4 pt-2.5 border-t border-tva-orange/10 text-[8px] text-tva-orange/40 font-mono">
                      <span>{event.time}</span>
                      <span className="text-tva-orange flex items-center gap-1 font-bold">
                        ACCESS_LOG ➔
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Pop-up for selected event details */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-lg border border-green-500/50 bg-[#060806] rounded-md p-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] font-mono text-green-500 overflow-hidden"
              >
                {/* CRT screen scanline details */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-20" />

                {/* Header row */}
                <div className="flex justify-between items-center border-b border-green-900/40 pb-2 text-xs">
                  <span className="text-green-400 uppercase tracking-wider font-bold">
                    {selectedEvent.code}
                  </span>
                  <span className="text-[9px] text-green-500/50 uppercase">
                    RETRIEVED_OK
                  </span>
                </div>

                {/* Body Content */}
                <div className="py-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-green-400 text-xl uppercase tracking-wide tva-glow-text">
                      {selectedEvent.name}
                    </h3>
                    <p className="text-[10px] text-green-500/70 italic font-sans mt-0.5">
                      {selectedEvent.subtitle}
                    </p>
                  </div>

                  <div className="text-xs text-green-400 bg-green-950/20 p-2 border border-green-900/30 rounded flex justify-between font-bold">
                    <span>DATE: {selectedEvent.date}</span>
                    <span>TIME: {selectedEvent.time}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="font-bold text-xs tracking-wider uppercase border-b border-green-950/50 pb-1 text-green-500/60">
                      // RULES & GUIDELINES
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-green-500/90 font-sans leading-relaxed text-xs md:text-sm">
                      {selectedEvent.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="border-t border-green-900/40 pt-4 flex justify-between items-center z-30 relative">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-transparent hover:bg-green-500/10 text-green-500 border border-green-500/50 font-black text-xs px-4 py-2 rounded transition-all uppercase tracking-widest cursor-pointer focus:outline-none"
                  >
                    CLOSE_LOG
                  </button>
                  <a
                    href="https://docs.google.com/forms/d/11YTYvjiK3GT47C1fOvYRLfnHW3xWjDIoF7_dUlH3POk/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-black border border-green-500/50 font-black text-xs px-4 py-2 rounded transition-all uppercase tracking-widest flex items-center gap-1 cursor-pointer shadow-[0_0_5px_rgba(34,197,94,0.2)] hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                  >
                    SECURE_ENTRY ↗
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
