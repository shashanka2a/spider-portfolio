'use client'

import { useState, useEffect } from 'react'
import SpiderMascot from './components/SpiderMascot'
import HeroSection from './components/HeroSection'
import TimelineSection from './components/TimelineSection'
import TrophyRoom from './components/TrophyRoom'
import Footer from './components/Footer'

/**
 * SPIDER-VERSE PORTFOLIO - SHASHANK JAGANNATHAM
 * 
 * A cinematic, comic-book style portfolio.
 * Uses native IntersectionObserver for scroll animations and 
 * CSS variables for performant mouse-tracking glitch effects.
 */
export default function SpiderPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  // Track mouse for kinetic typography
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0D0015] text-white overflow-x-hidden font-sans selection:bg-[#00F0FF] selection:text-black relative">
      {/* Fixed Background Layers */}
      <div className="fixed inset-0 bg-halftone pointer-events-none z-0" />
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')"
        }}
      />

      {/* --- THE SPIDER MASCOT --- */}
      <SpiderMascot scrollY={scrollY} windowHeight={windowHeight} />

      <div className="relative z-10">
        <HeroSection mousePosition={mousePosition} />
        <TimelineSection scrollY={scrollY} />
        <TrophyRoom />
        <Footer />
      </div>
    </div>
  )
}

