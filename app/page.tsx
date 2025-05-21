"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { Book, FileText, Eye } from "lucide-react"
import { translations, type Language } from './translations'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  const t = translations[language]

  return (
    <div className={'min-h-screen flex flex-col bg-background relative overflow-hidden ' + (language === 'ar' ? 'rtl' : 'ltr')}>
      {/* Stylish background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0806] via-[#15100c] to-[#1e1411] z-0"></div>
      <div className="absolute inset-0 green-overlay opacity-10"></div>
      <div className="absolute inset-0 noise-texture opacity-25"></div>
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      
      {/* Gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full max-w-[80vw] max-h-[80vh] bg-gradient-to-br from-[#27BA61]/25 via-[#8FC540]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-full max-w-[80vw] max-h-[80vh] bg-gradient-to-tl from-[#27BA61]/20 via-[#8FC540]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-full h-full max-w-[40vw] max-h-[40vh] bg-gradient-to-r from-[#8FC540]/20 via-[#27BA61]/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <header className="bg-card/30 backdrop-blur-sm border-b border-[#1a1a1d]/50 relative z-10">
        <div className="flex items-center justify-between max-lg:px-4 py-4 max-w-4xl w-full mx-auto">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 relative">
              <Image 
                src="/logo.png"
                alt="DalilMind Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-bold">DalilMind</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={() => setLanguage('en')} 
                className={'px-2 py-1 rounded ' + (language === 'en' ? 'bg-[#27BA61] text-white' : '')}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('fr')} 
                className={'px-2 py-1 rounded ' + (language === 'fr' ? 'bg-[#27BA61] text-white' : '')}
              >
                FR
              </button>
              <button 
                onClick={() => setLanguage('ar')} 
                className={'px-2 py-1 rounded ' + (language === 'ar' ? 'bg-[#27BA61] text-white' : '')}
              >
                عربي
              </button>
            </div>
            
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.privacyPolicy}
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.termsOfUse}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-left order-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">{t.title}</span>
              <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27BA61] to-[#8FC540]">{t.subtitle}</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              {t.description}
            </p>
            
            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 flex items-center justify-center">
                  <Book size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t.features.documentation.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.features.documentation.description}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t.features.evidence.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.features.evidence.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 flex items-center justify-center">
                  <Eye size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t.features.reference.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.features.reference.description}</p>
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
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground">{t.comingSoon}</div>
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
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground">{t.comingSoon}</div>
                  <div className="text-xs sm:text-sm font-medium text-foreground">Google Play</div>
                </div>
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground text-center sm:text-left w-full">
              <span>{t.onStore}</span>
              <a href="https://x.com/DeenTechNet" className="ml-2 text-primary hover:underline">{t.followUs}</a>
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
                      {/* Add a harmonious background gradient behind the app screenshot */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0806] via-[#15100c] to-[#211510] z-0">
                        {/* Add subtle gradient spots */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#27BA61]/30 via-[#8FC540]/15 to-transparent blur-xl"></div>
                        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-[#27BA61]/20 to-transparent blur-xl"></div>
                        <div className="absolute top-1/3 right-1/3 w-1/2 h-1/2 bg-gradient-to-tr from-[#8FC540]/15 to-transparent blur-xl"></div>
                      </div>
                      <Image
                        src="/screen-mockup.png"
                        alt="DalilMind App Screenshot"
                        fill
                        className="object-cover relative z-10"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#27BA61]/30 via-[#8FC540]/20 to-[#27BA61]/20 rounded-full blur-3xl opacity-40 -z-10"></div>
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
