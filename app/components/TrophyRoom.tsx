'use client'

import React from 'react'
import { Rocket, Mic, Gavel, Award } from 'lucide-react'

/**
 * TROPHY ROOM (BENTO GRID)
 */
export default function TrophyRoom() {
  return (
    <section className="py-24 px-4 relative bg-black/30">
      <div className="absolute inset-0 bg-mesh z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#FF0055] p-1 transform rotate-1 shadow-[5px_5px_0px_#00F0FF]">
            <div className="border-2 border-black bg-white px-8 py-2">
              <h2 className="font-comic text-5xl text-black uppercase tracking-wide">Trophy Room!</h2>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tile 1 */}
          <TrophyCard 
            title="ORGANIZER" 
            event="NASA SPACE APPS (2019)" 
            desc="Led 300+ participants, streamlined e-certificates with automation."
            icon={<Rocket className="text-[#00F0FF]" size={32} />} 
          />

          {/* Tile 2 */}
          <TrophyCard 
            title="SPEAKER" 
            event="MLH 305 HACKATHON (2025)" 
            desc="Shared insights on rapid prototyping and AI-powered MVP building to 200+ students."
            icon={<Mic className="text-[#FF0055]" size={32} />} 
          />

          {/* Tile 3 */}
          <TrophyCard 
            title="JUDGE" 
            event="SHELLHACKS (2025)" 
            desc="Evaluated projects across AI, blockchain, and SaaS; mentored student founders."
            icon={<Gavel className="text-[#00F0FF]" size={32} />} 
          />

          {/* Tile 4 */}
          <TrophyCard 
            title="MENTOR" 
            event="GATOR HATCHERY (ONGOING)" 
            desc="Helping non-tech founders at UF's incubator figure out technical ideas."
            icon={<Award className="text-[#FF0055]" size={32} />} 
          />
        </div>
      </div>
    </section>
  )
}

interface TrophyCardProps {
  title: string
  event: string
  desc: string
  icon: React.ReactElement
}

const TrophyCard = ({ title, event, desc, icon }: TrophyCardProps) => {
  return (
    <div className="group relative h-auto md:h-56 bg-[#0D0015]/80 border border-gray-800 overflow-hidden hover:border-[#FF0055] transition-colors duration-300 cursor-pointer backdrop-blur-sm">
      {/* Speed Lines Background */}
      <div className="absolute inset-0 bg-speed-lines opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* Glassmorphism Glow Border Effect (Simulated) */}
      <div className="absolute inset-0 border-2 border-[#FF0055] opacity-0 group-hover:opacity-100 shadow-[inset_0_0_20px_rgba(255,0,85,0.2)] transition-all duration-300 z-10 pointer-events-none"></div>

      <div className="relative z-20 p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-xs font-bold text-[#00F0FF] border border-[#00F0FF] px-2 py-1 rounded bg-[#00F0FF]/10">{title}</span>
          <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 bg-black p-2 rounded-full border border-gray-800">
            {icon}
          </div>
        </div>

        <div>
          <h3 className="font-comic text-2xl md:text-3xl text-white leading-none mb-3 group-hover:translate-x-1 transition-transform duration-300">
            {event}
          </h3>
          <p className="font-mono text-gray-400 text-sm leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#00F0FF] rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>
  )
}

