"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Apple, Mail } from "lucide-react"

export default function WelcomeScreen() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [orbPosition, setOrbPosition] = useState({ x: 50, y: 60 })

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Gentle orb movement - much slower and more natural
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbPosition({
        x: 45 + Math.sin(Date.now() * 0.0003) * 8,
        y: 55 + Math.cos(Date.now() * 0.0002) * 6,
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a89cc8] via-[#b8a8d8] to-[#c4b5e0] relative overflow-hidden">
      {/* Layered Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Organic Shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            {/* Soft cloud-like shapes */}
            <ellipse cx="200" cy="150" rx="120" ry="80" fill="#f1dce8" opacity="0.3" className="animate-float-gentle" />
            <ellipse
              cx="800"
              cy="200"
              rx="100"
              ry="60"
              fill="#a0c4b4"
              opacity="0.25"
              className="animate-float-gentle-delayed"
            />
            <ellipse
              cx="1000"
              cy="400"
              rx="140"
              ry="90"
              fill="#ffe6a7"
              opacity="0.2"
              className="animate-float-gentle"
            />
            <ellipse
              cx="300"
              cy="600"
              rx="110"
              ry="70"
              fill="#d6a4a4"
              opacity="0.3"
              className="animate-float-gentle-delayed"
            />
          </svg>
        </div>

        {/* Layered Foreground Trees */}
        <div className="absolute bottom-0 left-0 w-full h-80 opacity-30">
          <svg viewBox="0 0 1200 320" className="w-full h-full">
            {/* Back layer trees */}
            <path
              d="M0,320 L0,220 Q80,180 160,200 Q240,160 320,180 Q400,140 480,160 Q560,120 640,140 Q720,100 800,120 Q880,80 960,100 Q1040,60 1120,80 L1200,80 L1200,320 Z"
              fill="#a0c4b4"
              opacity="0.4"
            />
            {/* Front layer trees */}
            <path
              d="M0,320 L0,260 Q100,220 200,240 Q300,200 400,220 Q500,180 600,200 Q700,160 800,180 Q900,140 1000,160 Q1100,120 1200,140 L1200,320 Z"
              fill="#2c2f5a"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Atmospheric Mist Particles - Much Slower */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-mist-float opacity-10 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div
              className="bg-white rounded-full"
              style={{
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
              }}
            ></div>
          </div>
        ))}

        {/* Gentle Light Rays */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#ffe6a7]/20 via-transparent to-transparent transform -skew-x-12 animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-[#f1dce8]/15 via-transparent to-transparent transform skew-x-12 animate-pulse-slow"></div>
      </div>

      {/* Floating Orb Mascot - Softer Colors */}
      <div
        className="absolute transition-all duration-2000 ease-out"
        style={{
          left: `${orbPosition.x}%`,
          top: `${orbPosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-[#ffe6a7] to-[#f1dce8] rounded-full shadow-lg animate-pulse-gentle">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
          </div>
          <div className="absolute inset-0 w-10 h-10 bg-[#ffe6a7]/10 rounded-full animate-ping-slow"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-md mx-auto space-y-8">
          {/* App Name */}
          <div
            className={`transition-all duration-1500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-serif text-[#2c2f5a] mb-4 tracking-wide drop-shadow-sm">Haven</h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#a0c4b4]/60 to-transparent mx-auto"></div>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1500 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl text-[#2c2f5a]/80 font-light leading-relaxed">
              Build freedom,
              <br />
              one day at a time
            </p>
          </div>

          {/* Decorative Element */}
          <div
            className={`transition-all duration-1500 ease-out delay-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="flex justify-center items-center gap-2 my-8">
              <div className="w-2 h-2 bg-[#a0c4b4]/50 rounded-full animate-pulse-gentle"></div>
              <div className="w-3 h-3 bg-[#f1dce8]/70 rounded-full animate-pulse-gentle delay-300"></div>
              <div className="w-2 h-2 bg-[#ffe6a7]/60 rounded-full animate-pulse-gentle delay-600"></div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div
            className={`space-y-4 transition-all duration-1500 ease-out delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button className="w-full h-14 bg-[#2c2f5a]/10 backdrop-blur-sm border border-[#2c2f5a]/20 text-[#2c2f5a] hover:bg-[#2c2f5a]/20 transition-all duration-300 rounded-2xl text-lg font-light shadow-lg">
              <Apple className="w-5 h-5 mr-3" />
              Continue with Apple
            </Button>

            <Button className="w-full h-14 bg-gradient-to-r from-[#a0c4b4]/30 to-[#f1dce8]/30 backdrop-blur-sm border border-[#a0c4b4]/30 text-[#2c2f5a] hover:from-[#a0c4b4]/40 hover:to-[#f1dce8]/40 transition-all duration-300 rounded-2xl text-lg font-light shadow-lg">
              <Mail className="w-5 h-5 mr-3" />
              Start with Email
            </Button>
          </div>

          {/* Footer */}
          <div className={`transition-all duration-1500 ease-out delay-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <p className="text-[#2c2f5a]/50 text-sm font-light mt-8">Your journey to digital wellness begins here</p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#a89cc8]/60 to-transparent pointer-events-none"></div>
    </div>
  )
}
