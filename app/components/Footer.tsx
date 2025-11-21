'use client'

import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * FOOTER
 */
export default function Footer() {
  return (
    <footer className="py-20 relative border-t-4 border-[#FF0055] bg-black">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="font-comic text-6xl md:text-8xl text-white mb-4 glitch-wrapper">
          <span className="relative z-10">WEB-TEAM</span>
          <br />
          <span className="text-[#00F0FF]">ASSEMBLE</span>
        </h2>

        <p className="font-mono text-gray-400 mb-10 text-lg">Time to build something amazing.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <SocialButton icon={<Github />} label="GITHUB" color="#fff" />
          <SocialButton icon={<Linkedin />} label="LINKEDIN" color="#0077B5" />
          <SocialButton icon={<Mail />} label="EMAIL" color="#FF0055" />
        </div>

        <div className="mt-16 text-gray-600 font-mono text-xs">
          © {new Date().getFullYear()} Shashank Jagannatham. All rights reserved.
          <br/>Multiverse variant #42.
        </div>
      </div>
    </footer>
  )
}

interface SocialButtonProps {
  icon: React.ReactElement<{ size?: number }>
  label: string
  color: string
}

const SocialButton = ({ icon, label, color }: SocialButtonProps) => (
  <button className="btn-liquid group relative px-6 py-3 bg-transparent overflow-hidden rounded-full border border-gray-700 hover:border-white transition-colors">
    <div className="relative flex items-center gap-2 font-mono text-sm font-bold z-10">
      {React.cloneElement(icon, { size: 18 })}
      <span>{label}</span>
    </div>
  </button>
)

