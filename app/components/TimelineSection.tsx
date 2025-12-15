'use client'

import { useEffect, useRef } from 'react'
import React from 'react'
import { ArrowRight, Layers, ShoppingBag, GraduationCap } from 'lucide-react'

interface TimelineSectionProps {
  scrollY: number
}

/**
 * TIMELINE SECTION
 */
export default function TimelineSection({ scrollY }: TimelineSectionProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll('.timeline-card')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 px-4 text-center">
        <div className="relative mb-6">
          {/* Jagged Badge Background */}
          <div 
            className="absolute inset-0 bg-[#FF0055] transform rotate-3 scale-110" 
            style={{ clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)' }}
          ></div>
          <h2 className="relative z-10 font-comic text-5xl md:text-6xl bg-black text-white px-6 py-2 border-2 border-[#00F0FF] shadow-[8px_8px_0px_0px_#0D0015] transform -rotate-2">
            ORIGIN STORY!
          </h2>
        </div>
        <p className="max-w-2xl font-mono text-gray-400 text-sm md:text-base bg-black/50 p-4 border-l-4 border-[#00F0FF]">
          From getting bit by the coding spider in 2021 to architecting complex scalable applications - here's how each phase unlocked new technical superpowers!
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative px-4">
        {/* The Web Line (Central Neon Path) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-2 bg-[#333] transform md:-translate-x-1/2 overflow-hidden">
          {/* Neon Core */}
          <div 
            className="w-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] transition-all duration-100"
            style={{ height: `${Math.min((scrollY / 2.5), 100)}%`, maxHeight: '100%' }}
          ></div>
        </div>

        {/* Timeline Events */}
        <div className="space-y-24">
          {/* Level 1: Student Era */}
          <TimelineEvent 
            side="left" 
            year="2023-2024" 
            level="LEVEL 1"
            title="KAMPUS" 
            icon={<GraduationCap />}
            desc="Started by solving campus problems with integrated student-focused solutions." 
            list={["GatorEx (Marketplace)", "Rydify (Transportation)", "Vybr (Roommate Matching)"]}
            buttonText="EXPLORE KAMPUS"
            color="#00F0FF"
            url="https://kampus.fun/"
          />

          {/* Level 2: Startup Builder */}
          <TimelineEvent 
            side="right" 
            year="2024-2025" 
            level="LEVEL 2"
            title="MARKIT" 
            icon={<ShoppingBag />}
            desc="Evolved into building scalable tools that help startups grow and thrive." 
            list={["FormEase (Forms)", "QRBee (Analytics)", "HackHire (Assessments)"]}
            buttonText="EXPLORE MARKIT"
            color="#FF0055"
            url="https://markit.one/"
          />

          {/* Level 3: PaaS Architect */}
          <TimelineEvent 
            side="left" 
            year="2025-CURRENT" 
            level="LEVEL 3"
            title="LAYR" 
            icon={<Layers />}
            desc="Now building platform infrastructure — enabling others to build on top of my tools." 
            list={["Logora (Branding)", "Deckr (Presentation)", "Buidl (Prototyping)"]}
            buttonText="EXPLORE LAYR"
            color="#00F0FF"
            url="http://layr.plus/"
          />
        </div>
      </div>
    </section>
  )
}

interface TimelineEventProps {
  side: 'left' | 'right'
  year: string
  level: string
  title: string
  desc: string
  list: string[]
  buttonText: string
  color: string
  icon: React.ReactElement<{ size?: number }>
  url: string
}

const TimelineEvent = ({ side, year, level, title, desc, list, buttonText, color, icon, url }: TimelineEventProps) => {
  const isLeft = side === 'left'

  return (
    <div className={`timeline-card opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content Box */}
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16 pl-12' : 'md:pl-16 pl-12'} relative mb-8 md:mb-0`}>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative bg-[#1A1A1A] border-2 border-white p-6 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
        >
          {/* Neon Border Effect */}
          <div 
            className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            style={{ borderColor: color, boxShadow: `0 0 15px ${color}` }}
          ></div>

          {/* Floating Badge */}
          <div className="absolute -top-4 right-4 flex gap-2 z-10">
            <div className="bg-[#FF0055] text-white font-comic px-2 py-1 border-2 border-black transform rotate-3">
              {level}
            </div>
            <div className="bg-white text-black font-mono text-sm font-bold px-2 py-1 border-2 border-black transform -rotate-2">
              {year}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-black border border-gray-700 rounded-full text-white group-hover:text-[#00F0FF] transition-colors">
              {React.cloneElement(icon, { size: 20 })}
            </div>
            <h3 className="font-comic text-4xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
              {title}
            </h3>
          </div>

          <p className="font-mono text-gray-300 text-sm mb-4">
            {desc}
          </p>

          {/* Project List */}
          <div className="bg-black/50 p-3 mb-4 border-l-2" style={{ borderColor: color }}>
            <ul className="space-y-1">
              {list.map((item, i) => (
                <li key={i} className="font-mono text-xs text-gray-400 flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full py-2 font-bold font-mono text-sm bg-transparent border-2 border-white group-hover:bg-white group-hover:text-black transition-colors flex justify-center items-center gap-2 group/btn">
            {buttonText} <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>

      {/* Node on the Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-black border-2 border-white rounded-full z-10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        <div className="w-2 h-2 bg-[#FF0055] rounded-full animate-ping"></div>
      </div>

      {/* Empty space for the other side */}
      <div className="w-full md:w-1/2"></div>
    </div>
  )
}

