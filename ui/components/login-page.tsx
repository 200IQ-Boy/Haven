"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, Sparkles, Star, Heart, ArrowRight, Shield } from "lucide-react"

export default function LoginPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a89cc8] via-[#b8a8d8] to-[#c4b5e0] relative overflow-hidden">
      {/* Dynamic Celestial Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Interactive Constellation */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 800" className="w-full h-full opacity-40">
            {/* Main Constellation */}
            <g className="animate-constellation-pulse">
              <path
                d="M200,150 L350,200 L500,120 L650,180 L800,100"
                stroke="#ffe6a7"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
                className="animate-constellation-draw"
              />
              <path
                d="M350,200 L450,300 L600,250 L750,320"
                stroke="#f1dce8"
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                className="animate-constellation-draw-delayed"
              />
              <path
                d="M500,120 L550,250 L700,200 L850,280"
                stroke="#a0c4b4"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
                className="animate-constellation-draw-slow"
              />
            </g>


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

        {/* Floating Cosmic Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-cosmic-float opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
            }}
          >
            <Sparkles
              className="text-[#ffe6a7]"
              style={{
                width: `${12 + Math.random() * 12}px`,
                height: `${12 + Math.random() * 12}px`,
              }}
            />
          </div>
        ))}

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-shooting-star opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 8 + Math.random() * 5}s`,
              animationDuration: "3s",
            }}
          >
            <div className="w-1 h-1 bg-[#ffe6a7] rounded-full shadow-lg">
              <div className="absolute inset-0 w-8 h-0.5 bg-gradient-to-r from-[#ffe6a7] to-transparent transform -rotate-45 origin-left"></div>
            </div>
          </div>
        ))}

        {/* Interactive Mouse Trail */}
        <div
          className="absolute w-4 h-4 pointer-events-none transition-all duration-300 ease-out opacity-30"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: isHovering ? "scale(2)" : "scale(1)",
          }}
        >
          <div className="w-full h-full bg-[#ffe6a7] rounded-full animate-pulse-gentle"></div>
          <div className="absolute inset-0 w-full h-full bg-[#ffe6a7] rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Atmospheric Nebula */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#f1dce8] to-transparent rounded-full animate-nebula-drift"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-[#a0c4b4] to-transparent rounded-full animate-nebula-drift-delayed"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Welcome Header */}
          <div
            className={`text-center mb-8 transition-all duration-1500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex justify-center items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-[#ffe6a7] animate-spin-slow" />
              <Shield className="w-10 h-10 text-[#a0c4b4] animate-pulse-gentle" />
              <Star className="w-8 h-8 text-[#ffe6a7] animate-spin-slow-reverse" />
            </div>

            <h1 className="text-4xl font-light text-[#2c2f5a] mb-2 tracking-wide">Welcome Back</h1>
            <p className="text-lg text-[#2c2f5a]/70 font-light">Continue your journey to freedom</p>

            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#ffe6a7] to-transparent mx-auto mt-4"></div>
          </div>

          {/* Login Card */}
          <Card
            className={`bg-white/20 backdrop-blur-lg border border-[#2c2f5a]/10 shadow-2xl rounded-3xl transition-all duration-1500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#2c2f5a] font-light flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#a0c4b4]" />
                    Email
                  </Label>
                  <div className="relative group">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="h-12 rounded-2xl border-[#2c2f5a]/20 focus:border-[#a0c4b4] bg-white/70 text-[#2c2f5a] placeholder:text-[#2c2f5a]/50 transition-all duration-300 group-hover:bg-white/80"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#a0c4b4]/10 to-[#ffe6a7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#2c2f5a] font-light flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#f1dce8]" />
                    Password
                  </Label>
                  <div className="relative group">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-12 rounded-2xl border-[#2c2f5a]/20 focus:border-[#a0c4b4] bg-white/70 text-[#2c2f5a] placeholder:text-[#2c2f5a]/50 pr-12 transition-all duration-300 group-hover:bg-white/80"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2c2f5a]/50 hover:text-[#2c2f5a] transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f1dce8]/10 to-[#ffe6a7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-[#2c2f5a]/60 hover:text-[#a0c4b4] transition-colors duration-200 font-light"
                  >
                    Forgot your password?
                  </button>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-[#a0c4b4] to-[#a89cc8] hover:from-[#90b4a4] hover:to-[#988cb8] text-white text-lg font-light rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                >
                  <span className="flex items-center justify-center gap-3">
                    Continue Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#2c2f5a]/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white/20 text-[#2c2f5a]/60 font-light rounded-full">or</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 border-[#2c2f5a]/20 text-[#2c2f5a] hover:bg-white/30 rounded-2xl transition-all duration-300 font-light"
                  >
                    Continue with Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 border-[#2c2f5a]/20 text-[#2c2f5a] hover:bg-white/30 rounded-2xl transition-all duration-300 font-light"
                  >
                    Continue with Apple
                  </Button>
                </div>
              </form>

              {/* Motivational Message */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-[#ffe6a7]/20 to-[#f1dce8]/20 rounded-2xl p-4 border border-[#ffe6a7]/30">
                  <Heart className="w-5 h-5 text-[#f1dce8] mx-auto mb-2 animate-pulse-gentle" />
                  <p className="text-[#2c2f5a]/80 text-sm font-light italic">
                    "Every login is a step forward in your journey of transformation."
                  </p>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-6">
                <p className="text-[#2c2f5a]/60 text-sm font-light">
                  New to your journey?{" "}
                  <button className="text-[#a0c4b4] hover:text-[#90b4a4] transition-colors duration-200 font-medium">
                    Start here
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Message */}
          <div
            className={`text-center mt-8 transition-all duration-2000 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-[#2c2f5a]/50 text-sm font-light">Protected by digital wellness technology</p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#a89cc8]/40 to-transparent pointer-events-none"></div>
    </div>
  )
}
