"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ArrowLeft, Heart } from "lucide-react"

export function BlockedOverlay() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#3a0ca3] via-[#7209b7] to-[#3a0ca3] z-50 flex items-center justify-center p-6">
      {/* Gentle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        ))}
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border border-white/20 max-w-sm w-full shadow-2xl">
        <CardContent className="p-8 text-center">
          {/* Shield Icon */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-white/20">
              <Shield className="w-10 h-10 text-white/90" />
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-white/5 rounded-full mx-auto animate-pulse"></div>
          </div>

          <h1 className="text-2xl font-light text-white mb-3">Content Protected</h1>
          <p className="text-white/70 mb-8 leading-relaxed font-light">
            This content has been gently filtered to support your digital wellness journey.
          </p>

          {/* Encouraging Message */}
          <div className="bg-gradient-to-r from-pink-500/20 to-gold-500/20 rounded-2xl p-4 mb-8 border border-pink-400/20">
            <Heart className="w-6 h-6 text-pink-300 mx-auto mb-2" />
            <p className="text-white/80 text-sm font-light">
              You're making a mindful choice. Take a moment to appreciate your commitment to wellness.
            </p>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-xl h-12 font-light">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Safe Browsing
            </Button>
            <Button className="w-full bg-gradient-to-r from-pink-500/30 to-gold-500/30 backdrop-blur-sm border border-pink-400/30 text-white hover:from-pink-500/40 hover:to-gold-500/40 transition-all duration-300 rounded-xl h-12 font-light">
              <Heart className="w-4 h-4 mr-2" />
              Take a Wellness Break
            </Button>
          </div>

          <p className="text-white/40 text-xs mt-6 font-light">Mindfully protected</p>
        </CardContent>
      </Card>
    </div>
  )
}
