'use client'

import { useRef } from 'react'
import { Zap } from 'lucide-react'

interface HeroSectionProps {
  mousePosition: { x: number; y: number }
}

/**
 * HERO SECTION
 */
export default function HeroSection({ mousePosition }: HeroSectionProps) {
  const titleRef = useRef<HTMLDivElement>(null)

  // Calculate parallax offsets based on mouse position
  const titleX = mousePosition.x * 20 // Movement intensity
  const titleY = mousePosition.y * 20

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20 pb-10 overflow-hidden">
      {/* Tech Spec Marker: Canvas Container for Three.js */}
      <div 
        id="canvas-container" 
        className="absolute inset-0 z-[-1] opacity-50 pointer-events-none border-2 border-dashed border-gray-800 m-10 hidden md:block"
      >
        {/* This div represents where the 3D WebGL canvas would live */}
      </div>

      {/* Spider-Web SVG Decor Top Left */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#00F0FF" strokeWidth="0.5">
          <path d="M0 0 Q 50 50 100 0 M0 0 Q 50 50 0 100 M20 0 Q 50 30 20 60 M0 20 Q 30 50 60 20" />
        </svg>
      </div>

      {/* Speech Bubble */}
      <div className="animate-bounce mb-8 relative group cursor-default">
        <div className="bg-white text-black font-comic text-xl md:text-2xl px-6 py-3 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_#FF0055] transform -rotate-2 transition-transform group-hover:rotate-0">
          Your friendly neighborhood web developer!
        </div>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-black border-r-[10px] border-r-transparent"></div>
      </div>

      {/* Main Heading with Glitch & Parallax */}
      <div 
        ref={titleRef}
        className="relative z-20 text-center mb-4"
        style={{ transform: `translate(${titleX}px, ${titleY}px)` }}
      >
        <h1 className="font-comic text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter relative inline-block skew-x-[-2deg]">
          <span className="block text-white relative z-10 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Shashank
          </span>
          <span className="block text-[#00F0FF] absolute top-0 left-0 -z-10 opacity-70 transform translate-x-1 translate-y-1">
            Shashank
          </span>
          <span className="block text-[#FF0055] absolute top-0 left-0 -z-20 opacity-70 transform -translate-x-1 -translate-y-1">
            Shashank
          </span>
        </h1>

        <h1 className="font-comic text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter mt-2 relative inline-block skew-x-[-2deg]">
          <div className="glitch-wrapper">
            <span className="relative z-10" data-text="JAGANNATHAM">JAGANNATHAM</span>
            <span className="glitch-layer" aria-hidden="true">JAGANNATHAM</span>
            <span className="glitch-layer" aria-hidden="true">JAGANNATHAM</span>
          </div>
        </h1>
      </div>

      {/* Subheading */}
      <div className="mt-6 bg-[#FF0055] text-black font-comic text-2xl md:text-3xl px-4 py-1 skew-x-[-10deg] shadow-[5px_5px_0px_0px_#00F0FF] mb-10">
        <span className="block skew-x-[10deg]">WEB-SLINGER DEVELOPER</span>
      </div>

      {/* Description Box - Glassmorphism */}
      <div className="max-w-2xl w-full backdrop-blur-sm bg-[#0D0015]/60 border border-[#00F0FF]/30 rounded-lg p-6 md:p-8 relative group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF0055] to-[#00F0FF]"></div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#FF0055] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

        <p className="font-mono text-gray-300 text-lg md:text-xl leading-relaxed relative z-10">
          <span className="text-[#00F0FF]">&gt;</span> I'm <span className="text-white font-bold">Shashank Jagannatham</span>, 
          an AIML engineer & product builder. From hackathons to startups, I've been building 
          products that really mean something.
          <span className="animate-pulse inline-block ml-1 w-3 h-5 bg-[#FF0055] align-middle"></span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-12 relative group">
        <button className="btn-liquid relative z-10 font-comic text-2xl bg-[#00F0FF] text-black px-8 py-4 border-4 border-black flex items-center gap-3">
          <Zap className="w-6 h-6" />
          COLLABORATE & CREATE
        </button>
        <div className="absolute inset-0 bg-[#FF0055] border-4 border-black translate-x-2 translate-y-2 z-0"></div>
      </div>
    </section>
  )
}

