import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Events from './components/Events';
import OfficeBearers from './components/OfficeBearers';
import { Volume2, VolumeX, ShieldAlert, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import tvaThemeMusic from './assets/piq_site_music.mp3';
import introVideo from './assets/inro.mp4';

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  // Toggle TVA Music
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio playback failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Start Intro Video (with sound)
  const startBoot = () => {
    setIsBooted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video playback failed:", err));
    }
  };

  // Handle Intro End or Skip
  const handleIntroEnd = () => {
    setShowIntro(false);
    // Start background music automatically after user interaction
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log("Auto-audio playback failed:", err));
      }
    }, 300);
  };

  return (
    <div className="relative bg-black overflow-x-hidden text-tva-orange font-mono select-none crt-screen">
      {/* HTML5 audio element for TVA background music */}
      <audio ref={audioRef} src={tvaThemeMusic} loop />

      {/* Film Grain & scanlines layers */}
      <div className="film-grain" />
      <div className="crt-vignette" />
      <div className="scanline-overlay" />

      <AnimatePresence mode="wait">
        {/* Step 1: Secure System Boot Prompt */}
        {!isBooted && (
          <motion.div
            key="boot-prompt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="max-w-md w-full border border-tva-orange/40 bg-tva-nearblack/90 p-8 rounded-lg shadow-[0_0_30px_rgba(245,165,36,0.2)] flex flex-col items-center space-y-6">
              <ShieldAlert size={48} className="text-tva-orange animate-pulse" />
              
              <div className="space-y-2">
                <h2 className="text-sm font-black tracking-widest text-tva-orange uppercase">
                  TVA MAIN TERMINAL CLIENT
                </h2>
                <div className="text-[9px] text-tva-orange/60 tracking-wider">
                  BRANCH_LOYOLA_616 // VER: 2.2.6
                </div>
              </div>

              <div className="h-[1px] w-24 bg-tva-orange/30" />

              <p className="text-[10px] md:text-xs text-tva-orange/80 leading-relaxed uppercase">
                SECURITY CLEARED. ACCESS GRANTED. INITIALIZE LOGICAL TIMELINE SEQUENCE.
              </p>

              <button
                onClick={startBoot}
                className="px-6 py-3 border border-tva-orange bg-tva-orange/10 hover:bg-tva-orange text-tva-orange hover:text-black font-black text-xs tracking-[0.2em] uppercase rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(245,165,36,0.25)] hover:shadow-[0_0_25px_rgba(245,165,36,0.5)] focus:outline-none"
              >
                [ RUN_SYSTEM_BOOT ]
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Full-screen Intro Video Player */}
        {isBooted && showIntro && (
          <motion.div
            key="intro-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <video
              ref={videoRef}
              src={introVideo}
              className="w-full h-full object-cover"
              onEnded={handleIntroEnd}
              playsInline
            />
            {/* Skip video control details */}
            <button
              onClick={handleIntroEnd}
              className="fixed bottom-8 right-8 z-50 border border-tva-orange bg-black/80 text-tva-orange hover:bg-tva-orange hover:text-black px-4 py-2 font-black text-xs tracking-widest rounded transition-all uppercase cursor-pointer backdrop-blur shadow-[0_0_15px_rgba(245,165,36,0.2)] focus:outline-none"
            >
              [ SKIP_BOOT ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3: Main Website Content (loads only after intro finishes/skipped) */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Core Website Components */}
          <Navbar />
          
          {/* Hero takes full scroll space first */}
          <Hero />
          
          {/* Other sections appear after Hero scroll completes */}
          <div className="relative z-10 bg-black">
            <About />
            <VisionMission />
            <Events />
            <OfficeBearers />
          </div>

          {/* Footer */}
          <footer className="relative py-12 px-6 bg-black border-t border-tva-orange/20 text-center font-mono text-[10px] text-tva-orange/45 tracking-wider select-none z-10">
            <div className="absolute inset-0 tva-radar-grid opacity-5 pointer-events-none" />
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2 border border-tva-orange/20 px-3 py-1 bg-tva-nearblack rounded shadow-[0_0_8px_rgba(245,165,36,0.1)]">
                <Cpu size={12} className="text-tva-orange animate-pulse" />
                <span className="text-tva-orange/70 uppercase">TORQ MAIN TERMINAL CLIENT: V2.2.6</span>
              </div>
              <p className="uppercase">
                © 2026 LOYOLA-ICAM COLLEGE OF ENGINEERING & TECHNOLOGY (LICET) | DEPT OF MECHANICAL ENGINEERING
              </p>
              <p className="text-[8px] text-tva-orange/30">
                PROTECTING THE TIMELINE OF INNOVATION. POWERED IN ASSOCIATION WITH A.R.M.E.
              </p>
            </div>
          </footer>

          {/* Floating Retro TVA Audio Deck */}
          <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-black/90 border border-tva-orange/40 p-2.5 rounded shadow-[0_0_15px_rgba(245,165,36,0.25)] hover:border-tva-orange transition-colors">
            <div className="flex flex-col text-[8px] text-tva-orange/70 font-bold uppercase tracking-wider pr-2 border-r border-tva-orange/20">
              <span className="text-tva-orange flex items-center gap-1 font-black">
                <ShieldAlert size={10} className="text-tva-amber animate-pulse" /> TVA_AUDIO
              </span>
              <span className="text-[7px] text-tva-orange/40 mt-0.5">THEME_MONITOR</span>
            </div>
            
            {/* Waveform indicator */}
            <div className="flex items-end space-x-0.5 h-4 px-2 w-10 justify-center">
              <span className={`w-0.5 bg-tva-orange transition-all duration-150 ${isPlaying ? 'animate-[bounce_0.8s_infinite_0.1s]' : 'h-1'}`} style={{ height: isPlaying ? '100%' : '3px' }} />
              <span className={`w-0.5 bg-tva-orange transition-all duration-150 ${isPlaying ? 'animate-[bounce_0.6s_infinite_0.2s]' : 'h-2'}`} style={{ height: isPlaying ? '70%' : '6px' }} />
              <span className={`w-0.5 bg-tva-orange transition-all duration-150 ${isPlaying ? 'animate-[bounce_0.9s_infinite_0.3s]' : 'h-1'}`} style={{ height: isPlaying ? '90%' : '4px' }} />
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="p-1.5 rounded bg-tva-orange/10 border border-tva-orange/30 text-tva-orange hover:bg-tva-orange/20 hover:border-tva-orange transition-colors shadow-inner"
              title={isPlaying ? "Mute TVA Terminal Audio" : "Play TVA Terminal Audio"}
            >
              {isPlaying ? <Volume2 size={14} className="animate-pulse" /> : <VolumeX size={14} />}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
