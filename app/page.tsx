"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { Book, Calendar, Clock } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Stylish background layers */}
      <div className="absolute inset-0 stylish-gradient"></div>
      <div className="absolute inset-0 orange-overlay"></div>
      <div className="absolute inset-0 noise-texture"></div>
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-spot-1"></div>
        <div className="gradient-spot-2"></div>
        <div className="gradient-spot-3"></div>
      </div>
      
      {/* Header */}
      <header className="bg-card/30 backdrop-blur-sm border-b border-[#1a1a1d]/50 relative z-10">
        <div className="flex items-center justify-between px-4 py-4 max-w-4xl w-full mx-auto">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 relative">
              <Image 
                src="/logo.png"
                alt="IlmNote Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-bold">IlmNote</h1>
          </div>
          
        </div>
      </header>

      <main className="flex-grow relative z-10 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-left order-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Take Notes</span>
              <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] to-[#FFC857]">With Purpose</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              The islamic note taking app built for the Muslim ummah. 
              Organize your notes, add pages, import verses and hadeeths.
            </p>
            
            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Book size={14} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Advanced Organization</h3>
                  <p className="text-sm text-muted-foreground">Organize your notes into categories, add pages, and structure your Islamic knowledge effectively</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Calendar size={14} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Quran and Hadeeth Import</h3>
                  <p className="text-sm text-muted-foreground">Easily import Quranic verses and hadeeth into your notes to enrich your Islamic studies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock size={14} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Quick Islamic Symbols</h3>
                  <p className="text-sm text-muted-foreground">Rapidly insert Islamic symbols and special characters into your notes for authentic and elegant presentation</p>
                </div>
              </div>
            </div>
            
            {/* Download buttons */}
            <div id="download" className="flex flex-row gap-3 mb-4 justify-center sm:justify-start">
              <Link href="#" className="flex items-center gap-1 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 hover:bg-card transition-colors">
                <div className="h-6 w-6 sm:h-8 sm:w-8 relative flex items-center justify-center">
                  <Image
                    src="/apple.png"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground">Coming soon on</div>
                  <div className="text-xs sm:text-sm font-medium text-foreground">App Store</div>
                </div>
              </Link>
              
              <Link href="#" className="flex items-center gap-1 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 hover:bg-card transition-colors">
                <div className="h-6 w-6 sm:h-8 sm:w-8 relative flex items-center justify-center">
                  <Image
                    src="/google-play.png"
                    alt="Google Play"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground">Coming soon on</div>
                  <div className="text-xs sm:text-sm font-medium text-foreground">Google Play</div>
                </div>
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground text-center sm:text-left w-full">
              <span>Get updates on X</span>
              <a href="https://x.com/DeenTechNet" className="ml-2 text-primary hover:underline">@DeenTechNet</a>
            </div>
          </div>
          
          {/* Right side - Phone mockup */}
          <div className="flex-1 order-2 flex md:justify-end">
            <div className="relative w-64 mx-auto md:mx-0">
              <div className="relative z-10">
                {/* Phone mockup image */}
                <div className="relative aspect-[375/812] w-full rounded-[3rem] overflow-hidden border-8 border-[#1a1a1d] bg-[#080809] shadow-2xl">
                  {/* Phone screen container with status bar and content */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status bar */}
                    <div className="h-6 bg-black/80 flex items-center justify-between px-5">
                      <div className="text-white text-[10px] font-medium">10:10 AM</div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 relative">
                          <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                          </svg>
                        </div>
                        <div className="w-4 h-3 relative">
                          <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="flex-1 relative">
                      <Image
                        src="/screen-mockup.png"
                        alt="IlmNote App Screenshot"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-full blur-3xl opacity-40 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-card/30 backdrop-blur-sm border-t border-[#1a1a1d]/50 mt-auto relative z-10">
        <div className="max-w-4xl w-full mx-auto px-4">
          <div className="flex flex-col py-3">
            <div className="flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">
                © 2025
              </span>
              <Image 
                src="/deentech_logo.png" 
                alt="DeenTech Logo" 
                width={12} 
                height={12}
                className="mx-1"
              />
              <span className="text-sm text-muted-foreground">
                DeenTech. All rights reserved.
              </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
