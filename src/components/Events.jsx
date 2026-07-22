import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tempadImg from '../assets/tempad.png';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventList = [
    {
      id: 1,
      name: 'GEAR UP',
      subtitle: 'Lathe machine shaping challenge',
      date: 'August 23, 2026',
      time: '10:00 AM - 12:00 PM',
      rules: [
        'Teams of 2–3 members.',
        'Tools provided (only 1 tool & workpiece per team).',
        'Top 5 teams qualify for final round.',
      ],
      rounds: ['Round 1: Preliminary blueprint test', 'Round 2: Final lathe machining challenge'],
      criteria: 'Time taken, Accuracy, and Finishing quality.',
      code: 'EV-01 // LATHE_SHAPING',
    },
    {
      id: 2,
      name: 'CAD ACE',
      subtitle: 'SolidWorks modeling challenge',
      date: 'August 23, 2026',
      time: '1:00 PM - 3:00 PM',
      rules: [
        'Individual participation only.',
        'Unlimited entries per college allowed.',
        'No mobile gadgets allowed during the contest.',
        'Formal attire required.',
      ],
      rounds: ['Round 1: Preliminary basics test', 'Round 2: SOLIDWORKS 3D modeling challenge'],
      criteria: 'Design methodology, Model detailing, Accuracy and completeness.',
      code: 'EV-02 // SOLIDWORKS_MODELING',
    },
    {
      id: 3,
      name: 'BEAMS TO BRILLIANCE',
      subtitle: 'Build stable truss structure',
      date: 'August 23, 2026',
      time: '12:00 PM - 2:00 PM',
      rules: [
        'Team size: 3–4 members.',
        'College ID card & Event card mandatory.',
        'Register at venue upon arrival.',
      ],
      rounds: [
        'Round 1 (30 min): Withstand 700g dead weight',
        'Round 2 (30 min): Withstand 1200g dead weight',
        'Round 3 (45 min): Withstand 1700g dead weight',
      ],
      criteria: 'Structural integrity, Innovation & novelty, Accuracy & aesthetics.',
      code: 'EV-03 // TRUSS_LOAD_TEST',
    },
    {
      id: 5,
      name: 'RESEARCH DRIFT',
      subtitle: 'Present research to judges',
      date: 'August 23, 2026',
      time: '10:30 AM - 12:00 PM',
      rules: [
        'Teams of 2 members.',
        'Paper in IEEE format preferred.',
        '15 minutes presentation + 5 minutes Q&A.',
        'Plagiarism of any form leads to instant disqualification.',
      ],
      rounds: ['Round 1: Document review by jury', 'Round 2: On-stage presentation'],
      criteria: 'Scientific relevance, presentation style, and Q&A depth.',
      code: 'EV-05 // PAPER_PRESENTATION',
    },
    {
      id: 12,
      name: 'ROCKETRY WORKSHOP',
      subtitle: 'Learn to design and build rockets',
      date: 'August 23, 2026',
      time: '2:00 PM - 4:00 PM',
      rules: [
        'Rules & regulations will be announced at the venue.',
        'Conducted by industry experts.',
        'Certificates provided for all attendees.',
      ],
      rounds: ['Session 1: Aerodynamics theory', 'Session 2: Hands-on model assembly and telemetry test'],
      criteria: 'Workshop participation certification.',
      code: 'WK-01 // TELEMETRY_WORKSHOP',
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

        {/* Large Single TemPad Device Frame */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[629/317] border border-tva-orange/30 rounded-lg overflow-hidden shadow-2xl tva-glow-border bg-black">
          
          {/* TemPad Frame Image Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${tempadImg})` }}
          />

          {/* Invisible Hotspot Selection Overlay over printed labels on the left orange panel */}
          <div className="absolute left-[8.5%] top-[10%] w-[24%] bottom-[10.5%] flex flex-col z-30">
            {/* 1. EVENTS (Resets to Welcome screen) */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="w-full flex-grow cursor-pointer bg-transparent hover:bg-tva-orange/5 border border-transparent hover:border-tva-orange/20 rounded transition-all focus:outline-none"
              title="Overview Menu"
            />
            {/* 2. GEAR UP */}
            <button 
              onClick={() => setSelectedEvent(eventList.find(e => e.name === 'GEAR UP'))}
              className="w-full flex-grow cursor-pointer bg-transparent hover:bg-tva-orange/5 border border-transparent hover:border-tva-orange/20 rounded transition-all focus:outline-none"
              title="Gear Up"
            />
            {/* 3. PAPER PRESENTATION */}
            <button 
              onClick={() => setSelectedEvent(eventList.find(e => e.name === 'RESEARCH DRIFT'))}
              className="w-full flex-grow cursor-pointer bg-transparent hover:bg-tva-orange/5 border border-transparent hover:border-tva-orange/20 rounded transition-all focus:outline-none"
              title="Paper Presentation"
            />
            {/* 4. BEAMS TO BRILLIANCE */}
            <button 
              onClick={() => setSelectedEvent(eventList.find(e => e.name === 'BEAMS TO BRILLIANCE'))}
              className="w-full flex-grow cursor-pointer bg-transparent hover:bg-tva-orange/5 border border-transparent hover:border-tva-orange/20 rounded transition-all focus:outline-none"
              title="Beams to Brilliance"
            />
            {/* 5. WORKSHOPS */}
            <button 
              onClick={() => setSelectedEvent(eventList.find(e => e.name === 'ROCKETRY WORKSHOP'))}
              className="w-full flex-grow cursor-pointer bg-transparent hover:bg-tva-orange/5 border border-transparent hover:border-tva-orange/20 rounded transition-all focus:outline-none"
              title="Workshops"
            />
            {/* 6. CAD ACE */}
            <button 
              onClick={() => setSelectedEvent(eventList.find(e => e.name === 'CAD ACE'))}
              className="w-full flex-grow cursor-pointer bg-transparent hover:bg-tva-orange/5 border border-transparent hover:border-tva-orange/20 rounded transition-all focus:outline-none"
              title="CAD Ace"
            />
          </div>

          {/* Interactive TemPad Screen Area (Green CRT on the right) */}
          <div className="absolute left-[33.5%] top-[10%] right-[4.5%] bottom-[10.5%] bg-[#060806]/95 border border-[#1b3d1b] rounded p-2 md:p-3 shadow-inner overflow-hidden flex flex-col justify-between">
            
            {/* CRT Screen Scanline Overlay on device */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-20" />

            <AnimatePresence mode="wait">
              {!selectedEvent ? (
                /* Welcome Screen when no event is selected */
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full flex flex-col justify-between z-10 text-green-500 font-mono"
                >
                  <div className="flex justify-between items-center border-b border-green-900/40 pb-1.5 text-[8px] md:text-[10px] text-green-500/60 font-bold uppercase tracking-widest">
                    <span>TVA_TEMPAD_V2.2.6</span>
                    <span className="animate-pulse">STATUS: ACTIVE</span>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center justify-center text-center p-2 space-y-3">
                    <div className="text-[10px] md:text-xs text-green-400 font-bold tracking-wider uppercase border border-green-800/40 px-3 py-1 bg-green-950/15 rounded animate-pulse">
                      [ SELECT LOGS ON LEFT PANEL ]
                    </div>
                    <p className="text-[8px] md:text-[10px] text-green-500/70 max-w-[280px] md:max-w-sm leading-relaxed">
                      Click directly on the printed event names (GEAR UP, PAPER PRESENTATION, BEAMS, etc.) on the left orange panel of the TemPad to retrieve the event rules.
                    </p>
                  </div>

                  <div className="border-t border-green-900/40 pt-1 text-[7px] md:text-[8px] text-green-600/60 text-center tracking-widest uppercase">
                    MONITOR ENFORCED BY TIME VARIANCE AUTHORITY
                  </div>
                </motion.div>
              ) : (
                /* Specific Event Rules Readout View */
                <motion.div
                  key={selectedEvent.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full flex flex-col justify-between z-10 text-green-500 font-mono"
                >
                  {/* Header row */}
                  <div className="flex justify-between items-center border-b border-green-900/40 pb-1 text-[8px] md:text-[10px]">
                    <span className="text-green-400 uppercase tracking-wider font-bold">
                      {selectedEvent.code}
                    </span>
                    <span className="text-[7px] md:text-[8px] text-green-500/50 uppercase">
                      RETRIEVED_OK
                    </span>
                  </div>

                  {/* Body area */}
                  <div className="flex-grow overflow-y-auto py-2 pr-1 space-y-2 text-[9px] md:text-xs h-0 scrollbar-none">
                    <div>
                      <h3 className="font-bold text-green-400 text-xs md:text-sm uppercase tracking-wide tva-glow-text">
                        {selectedEvent.name}
                      </h3>
                      <p className="text-[8px] md:text-[9px] text-green-500/70 italic font-sans">
                        {selectedEvent.subtitle}
                      </p>
                    </div>

                    <div className="text-[8px] md:text-[9px] text-green-400 bg-green-950/20 p-1 border border-green-900/30 rounded flex justify-between font-bold">
                      <span>DATE: {selectedEvent.date}</span>
                      <span>TIME: {selectedEvent.time}</span>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-[8px] md:text-[9px] tracking-wider uppercase border-b border-green-950/50 pb-0.5 text-green-500/60">
                        // RULES & GUIDELINES
                      </div>
                      <ul className="list-disc pl-3.5 space-y-1 text-green-500/90 font-sans leading-relaxed text-[8px] md:text-[10px]">
                        {selectedEvent.rules.map((rule, idx) => (
                          <li key={idx}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer action bar */}
                  <div className="border-t border-green-900/40 pt-1.5 flex justify-between items-center">
                    <span className="text-[6px] md:text-[8px] text-green-600/70">
                      SECURE ENTRY REQ
                    </span>
                    <a
                      href="https://docs.google.com/forms/d/11YTYvjiK3GT47C1fOvYRLfnHW3xWjDIoF7_dUlH3POk/viewform"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-black border border-green-500/50 font-black text-[8px] md:text-[10px] px-3 py-1 rounded transition-all uppercase tracking-widest flex items-center gap-1 cursor-pointer shadow-[0_0_5px_rgba(34,197,94,0.2)] hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                    >
                      SECURE_ENTRY ↗
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
