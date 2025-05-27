"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ArrowLeft, Heart, Zap } from "lucide-react"

export function BlockedScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3a0ca3] via-[#7209b7] to-[#3a0ca3] relative overflow-hidden flex items-center justify-center p-6">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border border-white/20 max-w-md w-full relative z-10">
        <CardContent className="p-8 text-center">
          {/* Shield Icon with Glow */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mx-auto animate-ping opacity-20"></div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">Content Blocked</h1>
          <p className="text-white/70 mb-6">This website has been blocked to support your digital wellness journey.</p>

          {/* Motivational Message */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-4 mb-6 border border-green-400/30">
            <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <p className="text-white/90 text-sm">Great choice! You're building stronger digital habits. 💪</p>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-xl h-12">
              <Heart className="w-4 h-4 mr-2" />
              Take a Wellness Break
            </Button>
            <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 rounded-xl h-12">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          <p className="text-white/50 text-xs mt-6">Protected by Digital Wellness Shield</p>
        </CardContent>
      </Card>
    </div>
  )
}
