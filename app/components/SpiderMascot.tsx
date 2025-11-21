'use client'

interface SpiderMascotProps {
  scrollY: number
  windowHeight: number
}

/**
 * SPIDER MASCOT COMPONENT
 * Animates based on scroll position through different sections
 */
export default function SpiderMascot({ scrollY, windowHeight }: SpiderMascotProps) {
  // Calculate position based on scroll sections
  // 0 - 100vh: Hero (Top Left Hanging)
  // 100vh - 250vh: Timeline (Center Line Crawl)
  // 250vh - 350vh: Trophy Room (Top Right Hanging)
  // 350vh+: Footer (Center Bottom Drop)
  let x = 10 // vw
  let y = 20 // vh
  let rot = 180 // degrees
  let scale = 1
  let threadHeight = 0 // px (length of web thread)

  if (windowHeight > 0) {
    const vh = windowHeight

    // Phase 1: Hero Section (0 to 1vh)
    if (scrollY < vh) {
      x = 10
      y = 20 + (scrollY * 0.05) // Slight parallax down
      rot = 180 // Upside down hanging
      threadHeight = y // Thread goes to top of screen
    } 
    // Phase 2: Transition to Timeline (1vh to 1.5vh)
    else if (scrollY >= vh && scrollY < vh * 1.2) {
      // Lerp from Left(10) to Center(50)
      const progress = (scrollY - vh) / (vh * 0.2)
      x = 10 + (40 * progress)
      y = 20 + (30 * progress) // Move down slightly
      rot = 180 - (180 * progress) // Rotate to face down (0 deg)
    }
    // Phase 3: Timeline Crawl (1.2vh to 3vh)
    else if (scrollY >= vh * 1.2 && scrollY < vh * 3) {
      x = 50
      // Crawl down relative to viewport, simulating drawing the line
      y = 50
      rot = 0 // Head down
    }
    // Phase 4: Transition to Trophy Room (3vh to 3.5vh)
    else if (scrollY >= vh * 3 && scrollY < vh * 3.5) {
      const progress = (scrollY - (vh * 3)) / (vh * 0.5)
      x = 50 + (40 * progress) // Move to right (90)
      y = 50 - (30 * progress) // Move Up
      rot = 0 + (135 * progress) // Rotate to angle
    }
    // Phase 5: Trophy Room (3.5vh to 4vh)
    else if (scrollY >= vh * 3.5 && scrollY < vh * 4.2) {
      x = 90
      y = 20
      rot = 135 // Angled on corner
      threadHeight = 0 // No thread or thread to corner
    }
    // Phase 6: Footer (4.2vh+)
    else {
      x = 50
      y = 80
      rot = 0
    }
  }

  return (
    <div 
      className="fixed z-50 pointer-events-none transition-all duration-700 ease-out will-change-transform"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        transform: `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})` 
      }}
    >
      {/* Web Thread (Only visible in Hero/Hanging modes) */}
      {scrollY < windowHeight && (
        <div 
          className="absolute left-1/2 w-0.5 bg-white/30 origin-top"
          style={{ 
            top: '50%',
            height: '100vh',
            transform: 'translateX(-50%)'
          }} 
        />
      )}

      {/* THE SPIDER ILLUSTRATION */}
      <div className="relative w-24 h-24 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="animate-[float-spider_3s_ease-in-out_infinite]"
        >
          {/* Legs - Left */}
          <path d="M45 50 L30 30 L10 40" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M45 55 L25 50 L5 60" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M45 60 L25 70 L10 85" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M45 45 L30 20 L15 10" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Legs - Right */}
          <path d="M55 50 L70 30 L90 40" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M55 55 L75 50 L95 60" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M55 60 L75 70 L90 85" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M55 45 L70 20 L85 10" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Body - Abdomen */}
          <path d="M50 35 L65 50 L50 80 L35 50 Z" fill="#0D0015" stroke="#FF0055" strokeWidth="2" />

          {/* Body - Thorax/Head */}
          <path d="M50 50 L60 40 L50 30 L40 40 Z" fill="#00F0FF" />

          {/* Eyes */}
          <circle cx="45" cy="38" r="2" fill="#FF0055" className="animate-pulse" />
          <circle cx="55" cy="38" r="2" fill="#FF0055" className="animate-pulse" />

          {/* Tech Lines on Body */}
          <path d="M50 55 L50 70" stroke="#FF0055" strokeWidth="1" />
          <path d="M40 50 L60 50" stroke="#FF0055" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
    </div>
  )
}

