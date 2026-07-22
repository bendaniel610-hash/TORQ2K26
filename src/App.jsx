import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Events from './components/Events';
import OfficeBearers from './components/OfficeBearers';
import { Volume2, VolumeX, ShieldAlert, Cpu } from 'lucide-react';
import tvaThemeMusic from './assets/Natalie Holt - TVA (From Loki) - MarvelMusicVEVO.mp3';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

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

  return (
    <div className="relative bg-black overflow-x-hidden text-tva-orange font-mono select-none crt-screen">
      
      {/* HTML5 audio element for TVA background music */}
      <audio ref={audioRef} src={tvaThemeMusic} loop />

      {/* Film Grain & scanlines layers */}
      <div className="film-grain" />
      <div className="crt-vignette" />
      <div className="scanline-overlay" />

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

    </div>
  );
}
