"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Chrome, Mail, Sparkles, Star, Heart, Shield, ArrowRight, Sunrise, Moon, Compass, Zap } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()
  
  const slides = [
    {
      title: "Build freedom,",
      subtitle: "one day at a time",
      icon: Sunrise,
      color: "#ffe6a7",
      description: "Your journey to digital wellness begins here",
    },
    {
      title: "Reclaim your focus,",
      subtitle: "rediscover yourself",
      icon: Compass,
      color: "#a0c4b4",
      description: "Break free from digital distractions",
    },
    {
      title: "Transform your life,",
      subtitle: "one choice at a time",
      icon: Star,
      color: "#f1dce8",
      description: "Every moment is a new beginning",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlideData = slides[currentSlide]
  const IconComponent = currentSlideData.icon

  // Génération des étoiles et éléments flottants une seule fois
  const stars = useMemo(
    () =>
      [...Array(60)].map((_, i) => {
        return {
          key: i,
          cx: 50 + i * 19 + Math.random() * 100, // densité doublée
          cy: 50 + Math.random() * 700,
          r: 1 + Math.random() * 2.5,
          fill: i % 3 === 0 ? "#ffe6a7" : i % 3 === 1 ? "#f1dce8" : "#a0c4b4",
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 3,
        }
      }),
    [],
  )

  const floatingElements = useMemo(
    () =>
      [...Array(25)].map((_, i) => {
        return {
          key: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 20,
          duration: 12 + Math.random() * 8,
          size: 10 + Math.random() * 15,
        }
      }),
    [],
  )

  const shootingStars = useMemo(
    () =>
      [...Array(6)].map((_, i) => {
        return {
          key: i,
          left: Math.random() * 100,
          top: Math.random() * 40,
          delay: i * 7 + Math.random() * 8,
        }
      }),
    [],
  )

   const handleLoginClick = () => {
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a89cc8] via-[#b8a8d8] to-[#c4b5e0] relative overflow-hidden">
      {/* Independent Celestial Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Constellation Network - No dependency on currentSlide */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 800" className="w-full h-full opacity-30">
            {/* Main Constellation - Fixed colors */}
            <g className="animate-constellation-pulse">
              <path
                d="M100,200 L300,150 L500,220 L700,180 L900,240 L1100,200"
                stroke="#ffe6a7"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
                className="animate-constellation-draw"
              />
              <path
                d="M200,400 L400,350 L600,420 L800,380 L1000,450"
                stroke="#f1dce8"
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                className="animate-constellation-draw-delayed"
              />
              <path
                d="M150,600 L350,550 L550,620 L750,580 L950,650"
                stroke="#a0c4b4"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
                className="animate-constellation-draw-slow"
              />
            </g>

            {/* Independent Stars - Fixed colors and animations */}
            {stars.map((star) => (
              <circle
                key={star.key}
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                fill={star.fill}
                opacity="0.8"
                className="animate-twinkle-random"
                style={{
                  animationDelay: `${star.delay}s`,
                  animationDuration: `${star.duration}s`,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Independent Floating Elements */}
        {floatingElements.map((el) => (
          <div
            key={el.key}
            className="absolute animate-cosmic-float opacity-20"
            style={{
              left: `${el.left}%`,
              top: `${el.top}%`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
            }}
          >
            <Sparkles
              className="text-[#ffe6a7]"
              style={{
                width: `${el.size}px`,
                height: `${el.size}px`,
              }}
            />
          </div>
        ))}

        {/* Independent Shooting Stars */}
        {shootingStars.map((star) => (
          <div
            key={star.key}
            className="absolute animate-shooting-star opacity-70"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: "4s",
            }}
          >
            <div className="w-1.5 h-1.5 bg-[#ffe6a7] rounded-full shadow-lg">
              <div className="absolute inset-0 w-12 h-0.5 bg-gradient-to-r from-[#ffe6a7] to-transparent transform -rotate-45 origin-left"></div>
            </div>
          </div>
        ))}

        {/* Independent Atmospheric Nebulae */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-1/6 left-1/5 w-96 h-96 bg-gradient-radial from-[#f1dce8] to-transparent rounded-full animate-nebula-drift"></div>
          <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-radial from-[#a0c4b4] to-transparent rounded-full animate-nebula-drift-delayed"></div>
          <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-gradient-radial from-[#ffe6a7] to-transparent rounded-full animate-nebula-drift"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg mx-auto text-center">
          {/* Brand Header */}
          <div
            className={`transition-all duration-2000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* Logo Area */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="relative">
                <Shield className="w-12 h-12 text-[#2c2f5a] animate-pulse-gentle" />
                <div className="absolute inset-0 w-12 h-12">
                  <Shield className="w-12 h-12 text-[#ffe6a7]/30 animate-ping-slow" />
                </div>
              </div>
              <h1 className="text-6xl font-light text-[#2c2f5a] tracking-wider">Haven</h1>
              <div className="relative">
                <Heart className="w-10 h-10 text-[#f1dce8] animate-pulse-gentle" />
              </div>
            </div>

            {/* Tagline with Icon */}
            <div className="mb-12">
              <div className="flex justify-center items-center gap-3 mb-4">
                <IconComponent
                  className="w-8 h-8 animate-pulse-gentle transition-colors duration-1000"
                  style={{ color: currentSlideData.color }}
                />
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"></div>
                <Zap className="w-6 h-6 text-[#ffe6a7] animate-twinkle" />
              </div>

              <div className="transition-all duration-1000 ease-in-out">
                <h2 className="text-3xl md:text-4xl font-light text-[#2c2f5a] mb-2 leading-tight">
                  {currentSlideData.title}
                </h2>
                <h3 className="text-2xl md:text-3xl font-light text-[#2c2f5a]/80 mb-6">{currentSlideData.subtitle}</h3>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div
            className={`flex justify-center gap-3 mb-12 transition-all duration-1500 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-3 bg-[#ffe6a7] shadow-lg"
                    : "w-3 h-3 bg-[#2c2f5a]/30 hover:bg-[#2c2f5a]/50"
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div
            className={`space-y-4 mb-8 transition-all duration-1500 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button onClick={handleLoginClick} className="w-full h-14 bg-white/20 backdrop-blur-sm border border-[#2c2f5a]/20 text-[#2c2f5a] hover:bg-white/30 hover:border-[#2c2f5a]/30 rounded-2xl transition-all duration-300 transform hover:scale-105 group">
              <Chrome className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg font-light">Start with Google Account</span>
            </Button>

            <Button onClick={() => console.log("Email")} className="w-full h-14 bg-gradient-to-r from-[#a0c4b4] to-[#a89cc8] hover:from-[#90b4a4] hover:to-[#988cb8] text-white rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg font-light">Start with Email</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-2000 ease-out delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Card className="bg-gradient-to-r from-[#ffe6a7]/20 to-[#f1dce8]/20 backdrop-blur-sm border border-[#ffe6a7]/30 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-[#ffe6a7] animate-twinkle" />
                  <Moon className="w-4 h-4 text-[#f1dce8] animate-pulse-gentle" />
                  <Star className="w-5 h-5 text-[#ffe6a7] animate-twinkle" />
                </div>
                <p className="text-[#2c2f5a]/80 font-light leading-relaxed transition-all duration-1000">
                  {currentSlideData.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-8 transition-all duration-2000 ease-out delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex justify-center items-center gap-6 text-[#2c2f5a]/50 text-sm font-light">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Privacy First</span>
              </div>
              <div className="w-1 h-1 bg-[#2c2f5a]/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Science-Based</span>
              </div>
              <div className="w-1 h-1 bg-[#2c2f5a]/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#a89cc8]/60 to-transparent pointer-events-none"></div>
    </div>
  )
}