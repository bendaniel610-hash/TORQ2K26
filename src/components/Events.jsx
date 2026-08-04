import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tempadImg from '../assets/tempad.png';

export default function Events({ onEventSelectChange }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
      if (onEventSelectChange) onEventSelectChange(true);
    } else {
      document.body.style.overflow = '';
      if (onEventSelectChange) onEventSelectChange(false);
    }
    return () => {
      document.body.style.overflow = '';
      if (onEventSelectChange) onEventSelectChange(false);
    };
  }, [selectedEvent, onEventSelectChange]);

  const eventList = [
    {
      id: 1,
      name: 'QUIZ - PRUNE OR PREVAIL',
      subtitle: 'Technical & Logical Quiz',
      date: 'August 8, 2026',
      time: '2:30 PM - 3:50 PM',
      venue: 'F23, F22',
      description: 'A technical and logical quiz testing aptitude, logic, and core mechanical engineering concepts across a written prelim and three main rounds (MCQ, Digital Connections, and Rapid Fire).',
      rules: [
        'Each team shall consist of a maximum of 2 members.',
        'Participants must report 15 minutes before the event commences.',
        'The decision of the Quiz Master shall be final and binding.',
        'Any malpractice or unfair means will result in immediate disqualification.',
      ],
      coordinators: 'Jinu Tryphena Grace (+91 72003 53071) // Quiz Master: Pooja Shree',
      code: 'EV-01 // PRUNE_OR_PREVAIL',
    },
    {
      id: 2,
      name: 'CAD - THE GOD OF STORIES',
      subtitle: '3D CAD Modeling Contest',
      date: 'August 8, 2026',
      time: '11:00 AM - 12:30 PM',
      venue: 'H21',
      description: 'A national-level Computer-Aided Design (CAD) competition where aspiring engineers showcase design skills and creativity through feature-based 3D modeling using SOLIDWORKS.',
      rules: [
        'Individual competition open to all undergraduate engineering students.',
        'Conducted using SOLIDWORKS on the systems provided.',
        'Evaluated on accuracy, design intent, completion time, and overall model quality.',
        'Mobile phones, AI tools, and internet browsing are strictly prohibited.',
      ],
      coordinators: 'Venmani (+91 86376 52554) // Swathi (+91 80156 72114)',
      code: 'EV-02 // THE_GOD_OF_STORIES',
    },
    {
      id: 3,
      name: 'WATER ROCKETRY - BIFROST LAUNCH',
      subtitle: 'Aerodynamic Launch Challenge',
      date: 'August 8, 2026',
      time: '12:00 PM - 1:15 PM',
      venue: 'Licet ground',
      description: 'An aerodynamic launch challenge consisting of an MCQ screening and a water rocket launch. Teams design, construct, and launch rockets to achieve maximum distance, stability, and design points.',
      rules: [
        'Teams of 3–4 members. Base bottle must be 1.5–2L PET (single-bottle design).',
        'Nose cone must be lightweight (no metal or glass). Max dry rocket weight: 250 g.',
        'Propulsion by water and air pressure only (pump pressure 40-45 psi, launch angle 50°-55°).',
        'Distance measured from launch pad to first point of impact (capped at 100 m).',
      ],
      coordinators: 'Karthikeyan K & Jose M (+91 73584 59995)',
      code: 'EV-03 // BIFROST_LAUNCH',
    },
    {
      id: 4,
      name: 'GEAR UP - IRON NEXUS',
      subtitle: 'Lathe Machining Challenge',
      date: 'August 8, 2026',
      time: '11:00 AM - 12:30 PM',
      venue: 'A01-workshop 2',
      description: 'A lathe machining competition where teams machine a prototype workpiece with maximum dimensional accuracy and surface finish based on drawing specifications.',
      rules: [
        'Teams of 2–3 members. The event consists of an MCQ screening and a Lathe Machining round.',
        'Neat formal attire and leather shoes are mandatory in the workshop (no jeans, T-shirts, or sandals).',
        'Exchange of tools or workpieces between teams is strictly prohibited.',
        'Judged on dimensional accuracy (40%), surface finish (30%), completion time (20%), and cleanliness (10%).',
      ],
      coordinators: 'Ishwar Singh, Ali Khan // Contact: +91 70104 04445, +91 87785 50030',
      code: 'EV-04 // IRON_NEXUS',
    },
    {
      id: 5,
      name: 'BEAMS TO BRILLIANCE - SACRED BRIDGE',
      subtitle: 'Structural Bridge Design Contest',
      date: 'August 8, 2026',
      time: '1:30 PM - 2:30 PM',
      venue: 'D02 (SOM Lab)',
      description: 'A hands-on engineering event where participants design and construct a small truss structure using given materials. Structures will be tested for load-bearing capacity and efficiency.',
      rules: [
        'Teams of 3–4 members. Materials will be provided at the venue.',
        'The event consists of an MCQ screening and a final round of structure load-bearing testing.',
        'Judged on structural integrity, load-bearing capacity, innovation, and efficiency ratio.',
      ],
      coordinators: 'Parkavan A (+91 93630 70939) // Sanju K (+91 81220 24120)',
      code: 'EV-05 // SACRED_BRIDGE',
    },
    {
      id: 6,
      name: 'IOT HACKATHON - IRON CODE',
      subtitle: 'IoT System Development Hackathon',
      date: 'August 8, 2026',
      time: '1:30 PM - 3:55 PM',
      venue: 'Daikin COE',
      description: 'An IoT hackathon designed to test technical knowledge, problem-solving, and hands-on programming skills. Teams attempt a technical quiz before designing and coding an IoT solution to a given problem statement.',
      rules: [
        'Teams of 2–4 members. Open to all undergraduate/diploma engineering students.',
        'At least one member must have basic familiarity with microcontroller programming (Arduino/ESP32).',
        'All hardware kits and components will be provided. Teams are encouraged to bring their own laptops.',
        'Judged on problem understanding (20%), hardware implementation (30%), code quality (25%), and pitch (15%).',
      ],
      coordinators: 'Karpaga Arul Pandian (+91 93606 04416)',
      code: 'EV-07 // IRON_CODE',
    },
    {
      id: 7,
      name: 'PAPER PRESENTATION - CHRONICLES OF THE MULTIVERSE',
      subtitle: 'Research & Technical Presentation',
      date: 'August 8, 2026',
      time: '10:00 AM - 11:30 AM',
      venue: 'F11',
      description: 'A platform for students to present research papers, project pitches, or technical poster presentations on emerging technologies and mechanical engineering advancements.',
      rules: [
        'Individual or team of up to 3 members.',
        'Presentation time: 15 minutes pitch followed by 2 minutes Q&A.',
        'Topics: Additive Manufacturing, Material Science, Automation, Industry 4.0, Robotics, etc.',
        'Judged on content relevance, innovation, technical depth, presentation skills, and Q&A response.',
      ],
      coordinators: 'S. Keren Dalia (+91 98841 32927) // Joseph Godwin (+91 76038 71027)',
      code: 'EV-06 // CHRONICLES_OF_THE_MULTIVERSE',
    },
    {
      id: 8,
      name: 'HVAC WORKSHOP - FROSTBITE',
      subtitle: 'Heating, Ventilation & Air Conditioning',
      date: 'August 8, 2026',
      time: '11:00 AM - 1:00 PM',
      venue: 'Daikin COE',
      description: 'A hands-on HVAC workshop covering thermal cooling load estimation, psychrometry, civil drawing reading, and industrial ASHRAE calculations.',
      rules: [
        'Limited to a maximum of 20 participants on a first-come, first-served basis.',
        'Participants are encouraged to carry a notebook and calculator for practice sessions.',
        'Interactive agenda covering heat load, psychrometry, civil drawing reading, and calculation details.',
        'E-certificates will be provided to all registered attendees.',
      ],
      coordinators: 'Erkin Sharon (+91 97862 39815)',
      code: 'WK-01 // FROSTBITE',
    },
  ];

  return (
    <section id="events" className={`relative py-20 px-4 bg-black select-none font-mono ${selectedEvent ? 'z-[100]' : 'z-10'}`}>
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
        <div className="relative w-full max-w-4xl mx-auto border border-tva-orange/30 rounded-lg overflow-hidden shadow-2xl tva-glow-border bg-black">
          
          {/* TemPad Frame Image Background */}
          <img 
            src={tempadImg} 
            alt="TemPad Console" 
            className="w-full h-auto block pointer-events-none"
          />

          {/* Interactive Button Hotspots directly mapped over screen rows */}
          {/* 1. QUIZ - PRUNE OR PREVAIL */}
          <button 
            onClick={() => setSelectedEvent(eventList[0])}
            style={{ left: '27.6%', top: '36.28%', width: '31.0%', height: '3.47%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="Prune or Prevail"
          />
          {/* 2. CAD - THE GOD OF STORIES */}
          <button 
            onClick={() => setSelectedEvent(eventList[1])}
            style={{ left: '27.6%', top: '40.69%', width: '31.0%', height: '4.42%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="The God of Stories"
          />
          {/* 3. WATER ROCKETRY - BIFROST LAUNCH */}
          <button 
            onClick={() => setSelectedEvent(eventList[2])}
            style={{ left: '27.6%', top: '46.06%', width: '31.0%', height: '3.47%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="Bifrost Launch"
          />
          {/* 4. GEAR UP - IRON NEXUS */}
          <button 
            onClick={() => setSelectedEvent(eventList[3])}
            style={{ left: '27.6%', top: '50.47%', width: '31.0%', height: '5.99%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="Iron Nexus"
          />
          {/* 5. BEAMS TO BRILLIANCE - SACRED BRIDGE */}
          <button 
            onClick={() => setSelectedEvent(eventList[4])}
            style={{ left: '27.6%', top: '57.41%', width: '31.0%', height: '3.47%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="Sacred Bridge"
          />
          {/* 6. IOT HACKATHON - IRON CODE */}
          <button 
            onClick={() => setSelectedEvent(eventList[5])}
            style={{ left: '27.6%', top: '62.15%', width: '31.0%', height: '5.68%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="Iron Code"
          />
          {/* 7. PAPER PRESENTATION - CHRONICLES OF THE MULTIVERSE */}
          <button 
            onClick={() => setSelectedEvent(eventList[6])}
            style={{ left: '27.6%', top: '68.45%', width: '31.0%', height: '3.47%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="Chronicles of the Multiverse"
          />
          {/* 8. HVAC WORKSHOP - FROSTBITE */}
          <button 
            onClick={() => setSelectedEvent(eventList[7])}
            style={{ left: '59.2%', top: '36.28%', width: '29.5%', height: '3.47%' }}
            className="absolute cursor-pointer bg-transparent hover:bg-tva-orange/15 border border-transparent hover:border-tva-orange/30 rounded transition-all focus:outline-none z-30"
            title="Frostbite"
          />
 
          {/* CRT Screen Scanline Overlay on device */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-25 z-20" />
        </div>
 
        {/* Modal Pop-up for selected event details */}
        <AnimatePresence>
          {selectedEvent && (
            <div 
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-pointer"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-lg border border-green-500/50 bg-[#060806] rounded-md p-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] font-mono text-green-500 overflow-hidden cursor-default"
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
                <div className="py-4 space-y-3.5">
                  <div>
                    <h3 className="font-bold text-green-400 text-lg sm:text-xl uppercase tracking-wide tva-glow-text">
                      {selectedEvent.name}
                    </h3>
                    <p className="text-[10px] text-green-500/70 italic font-sans mt-0.5">
                      {selectedEvent.subtitle}
                    </p>
                  </div>

                  {selectedEvent.description && (
                    <div className="text-[11px] sm:text-xs text-green-500/80 leading-relaxed font-sans border-l-2 border-green-500/30 pl-3">
                      {selectedEvent.description}
                    </div>
                  )}

                  <div className="text-[10px] sm:text-xs text-green-400 bg-green-950/20 p-2 border border-green-900/30 rounded flex flex-col gap-1 sm:flex-row sm:justify-between font-bold">
                    <span>DATE: {selectedEvent.date}</span>
                    <span>TIME: {selectedEvent.time}</span>
                    <span>VENUE: {selectedEvent.venue}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="font-bold text-[10px] tracking-wider uppercase border-b border-green-950/50 pb-1 text-green-500/50">
                      // RULES SUMMARY
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-green-500/90 font-sans leading-relaxed text-[11px] sm:text-xs">
                      {selectedEvent.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedEvent.coordinators && (
                    <div className="text-[10px] text-green-500/60 font-mono flex flex-col gap-0.5 bg-green-950/10 p-2 border border-green-900/20 rounded">
                      <span className="font-bold">// EVENT COORDINATORS:</span>
                      <span className="text-green-500">{selectedEvent.coordinators}</span>
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="border-t border-green-900/40 pt-4 flex flex-wrap gap-2 justify-between items-center z-30 relative">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-transparent hover:bg-green-500/10 text-green-500 border border-green-500/50 font-black text-xs px-4 py-2 rounded transition-all uppercase tracking-widest cursor-pointer focus:outline-none"
                  >
                    CLOSE_LOG
                  </button>
                  <div className="flex gap-2">
                    <a
                      href="/Event_Rules_and_Guidelines.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-transparent hover:bg-green-500/10 text-green-400 hover:text-green-300 border border-green-500/30 hover:border-green-500/50 font-black text-xs px-3 py-2 rounded transition-all uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                    >
                      GUIDELINES
                    </a>
                    <a
                      href="https://forms.gle/r4vCfcco7F1t38hd7"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-black border border-green-500/50 font-black text-xs px-3 py-2 rounded transition-all uppercase tracking-widest flex items-center gap-1 cursor-pointer shadow-[0_0_5px_rgba(34,197,94,0.2)] hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                    >
                      SECURE_ENTRY ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
