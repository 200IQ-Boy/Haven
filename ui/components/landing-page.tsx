"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight, ChevronLeft, Heart, Sunrise } from "lucide-react"
import { useRouter } from 'next/navigation'

type Screen = "inspiration" | "setup"

export default function LandingPage() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("inspiration")
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    motivation: "",
    goals: "",
    support: "",
  })
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleStartJourney = () => {
    router.push('/first-login');
  }

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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

  if (currentScreen === "inspiration") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#a89cc8] via-[#b8a8d8] to-[#c4b5e0] relative overflow-hidden">
        {/* Peaceful Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft Organic Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <ellipse cx="200" cy="150" rx="100" ry="60" fill="#f1dce8" className="animate-slide-left-right" />
              <ellipse cx="800" cy="200" rx="80" ry="50" fill="#a0c4b4" className="animate-slide-left-right-delayed" />
              <ellipse cx="1000" cy="400" rx="120" ry="70" fill="#ffe6a7" className="animate-slide-left-right" />
              <ellipse cx="300" cy="600" rx="90" ry="55" fill="#f1dce8" className="animate-slide-left-right-delayed" />
            </svg>
          </div>

          {/* Peaceful Particles - Much Slower */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-drift opacity-15 blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 30}s`,
                animationDuration: `${25 + Math.random() * 15}s`,
              }}
            >
              <div
                className="bg-white rounded-full"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                }}
              ></div>
            </div>
          ))}

          {/* Sunrise Illustration */}
          <div className="absolute bottom-0 left-0 w-full h-96 opacity-30">
            <svg viewBox="0 0 1200 400" className="w-full h-full">
              {/* Sun */}
              <circle cx="900" cy="100" r="60" fill="#ffe6a7" opacity="0.8" className="animate-pulse-gentle" />
              <circle cx="900" cy="100" r="80" fill="#ffe6a7" opacity="0.3" className="animate-pulse-gentle" />

              {/* Walking Figure Silhouette */}
              <g transform="translate(600, 320)" className="animate-slide-left-right-delayed">
                <ellipse cx="0" cy="25" rx="15" ry="8" fill="#2c2f5a" opacity="0.7" />
                <path
                  d="M0,0 L-3,15 L-1,25 M0,0 L3,15 L1,25 M0,0 L0,10 M-2,5 L2,5"
                  stroke="#2c2f5a"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Main Message */}
            <div
              className={`transition-all duration-2000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-light text-[#2c2f5a] mb-6 leading-tight drop-shadow-sm">
                Don't just quit porn —<br />
                <span className="text-[#a0c4b4] font-medium">reclaim your focus,</span>
                <br />
                <span className="text-[#f1dce8] font-medium">your energy,</span>
                <br />
                <span className="text-[#ffe6a7] font-medium">your life.</span>
              </h1>
            </div>

            {/* Inspiring Subtitle */}
            <div
              className={`transition-all duration-2000 ease-out delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl text-[#2c2f5a]/80 font-light leading-relaxed max-w-lg mx-auto">
                Every sunrise is a new beginning. Your journey to freedom starts with a single step forward.
              </p>
            </div>

            {/* Decorative Element */}
            <div
              className={`transition-all duration-2000 ease-out delay-700 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <div className="flex justify-center items-center gap-3 my-8">
                <Sunrise className="w-6 h-6 text-[#ffe6a7] animate-pulse-gentle" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#a0c4b4] via-[#ffe6a7] to-[#f1dce8]"></div>
                <Heart className="w-6 h-6 text-[#f1dce8] animate-pulse-gentle" />
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`transition-all duration-2000 ease-out delay-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                onClick={handleStartJourney}
                className="h-16 px-12 bg-gradient-to-r from-[#a0c4b4] to-[#a89cc8] hover:from-[#90b4a4] hover:to-[#988cb8] text-white text-lg font-light rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Footer Message */}
            <div
              className={`transition-all duration-2000 ease-out delay-1200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <p className="text-[#2c2f5a]/60 text-sm font-light mt-8">You're not alone in this journey</p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#a89cc8]/60 to-transparent pointer-events-none"></div>
      </div>
    )
  }

  // Setup Form Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a89cc8] via-[#b8a8d8] to-[#c4b5e0] relative overflow-hidden">
      {/* Gentle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Organic Shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <ellipse cx="300" cy="200" rx="80" ry="50" fill="#f1dce8" className="animate-float-peaceful" />
            <ellipse cx="900" cy="300" rx="100" ry="60" fill="#a0c4b4" className="animate-float-peaceful-delayed" />
            <ellipse cx="150" cy="500" rx="70" ry="45" fill="#ffe6a7" className="animate-float-peaceful" />
            <ellipse cx="1050" cy="600" rx="90" ry="55" fill="#f1dce8" className="animate-float-peaceful-delayed" />
          </svg>
        </div>

        {/* Peaceful Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-drift opacity-10 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 40}s`,
              animationDuration: `${30 + Math.random() * 20}s`,
            }}
          >
            <div
              className="bg-white rounded-full"
              style={{
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8 text-center">
            <p className="text-[#2c2f5a]/70 text-sm font-light mb-4">Step {currentStep} of 5</p>
            <div className="w-full bg-[#2c2f5a]/10 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#a0c4b4] to-[#ffe6a7] h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-white/80 backdrop-blur-sm border border-[#2c2f5a]/10 shadow-xl rounded-3xl">
            <CardContent className="p-8">
              <div
                className={`transition-all duration-500 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {/* Step Content */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-light text-[#2c2f5a] mb-2">Welcome to your journey</h2>
                      <p className="text-[#2c2f5a]/70 font-light">Let's start with something simple</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#2c2f5a] font-light">
                        What should we call you?
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        placeholder="Your first name"
                        className="h-12 rounded-2xl border-[#2c2f5a]/20 focus:border-[#a0c4b4] bg-white/70 text-[#2c2f5a] placeholder:text-[#2c2f5a]/50"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[#a0c4b4] text-sm font-light italic">You're taking the first step 🌱</p>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-light text-[#2c2f5a] mb-2">Tell us about yourself</h2>
                      <p className="text-[#2c2f5a]/70 font-light">This helps us personalize your experience</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-[#2c2f5a] font-light">
                        Your age range
                      </Label>
                      <select
                        value={formData.age}
                        onChange={(e) => updateFormData("age", e.target.value)}
                        className="w-full h-12 rounded-2xl border border-[#2c2f5a]/20 focus:border-[#a0c4b4] bg-white/70 px-4 text-[#2c2f5a]"
                      >
                        <option value="">Select your age range</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45+">45+</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <p className="text-[#f1dce8] text-sm font-light italic">You're doing great 💫</p>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-light text-[#2c2f5a] mb-2">What drives you?</h2>
                      <p className="text-[#2c2f5a]/70 font-light">
                        Understanding your motivation helps us support you better
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motivation" className="text-[#2c2f5a] font-light">
                        What's your main motivation for this journey?
                      </Label>
                      <textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => updateFormData("motivation", e.target.value)}
                        placeholder="Share what inspired you to start..."
                        rows={4}
                        className="w-full rounded-2xl border border-[#2c2f5a]/20 focus:border-[#a0c4b4] bg-white/70 p-4 text-[#2c2f5a] placeholder:text-[#2c2f5a]/50 resize-none"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[#ffe6a7] text-sm font-light italic">Your why is powerful ✨</p>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-light text-[#2c2f5a] mb-2">Set your intentions</h2>
                      <p className="text-[#2c2f5a]/70 font-light">What do you hope to achieve?</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-[#2c2f5a] font-light">
                        Your goals for the next 30 days
                      </Label>
                      <textarea
                        id="goals"
                        value={formData.goals}
                        onChange={(e) => updateFormData("goals", e.target.value)}
                        placeholder="What would success look like for you?"
                        rows={4}
                        className="w-full rounded-2xl border border-[#2c2f5a]/20 focus:border-[#a0c4b4] bg-white/70 p-4 text-[#2c2f5a] placeholder:text-[#2c2f5a]/50 resize-none"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[#a89cc8] text-sm font-light italic">One step closer to freedom 🕊️</p>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-light text-[#2c2f5a] mb-2">You're almost ready!</h2>
                      <p className="text-[#2c2f5a]/70 font-light">How can we best support you?</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support" className="text-[#2c2f5a] font-light">
                        What kind of support would help you most?
                      </Label>
                      <select
                        value={formData.support}
                        onChange={(e) => updateFormData("support", e.target.value)}
                        className="w-full h-12 rounded-2xl border border-[#2c2f5a]/20 focus:border-[#a0c4b4] bg-white/70 px-4 text-[#2c2f5a]"
                      >
                        <option value="">Choose your preference</option>
                        <option value="daily-reminders">Daily gentle reminders</option>
                        <option value="weekly-checkins">Weekly check-ins</option>
                        <option value="community">Community support</option>
                        <option value="resources">Educational resources</option>
                        <option value="minimal">Minimal notifications</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <p className="text-[#a0c4b4] text-sm font-light italic">Welcome to your new beginning 🌅</p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-[#2c2f5a]/10">
                  <Button
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    variant="ghost"
                    className="text-[#2c2f5a]/60 hover:text-[#2c2f5a] hover:bg-[#f1dce8]/20 disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>

                  <Button
                    onClick={handleNextStep}
                    disabled={currentStep === 5}
                    className="bg-gradient-to-r from-[#a0c4b4] to-[#a89cc8] hover:from-[#90b4a4] hover:to-[#988cb8] text-white rounded-full px-6"
                  >
                    {currentStep === 5 ? "Complete" : "Continue"}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#a89cc8]/40 to-transparent pointer-events-none"></div>
    </div>
  )
}
