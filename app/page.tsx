"use client"

import { ArrowDown, Sun } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "./components/ui/button"

export default function Home() {
   const [scrollY, setScrollY] = useState(0)
   const heroRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   // Calculate opacity based on scroll position
   const calculateOpacity = () => {
      if (!heroRef.current) return 1
      const heroHeight = heroRef.current.offsetHeight
      // Start fading when scroll position is 20% of hero height
      const fadeStart = heroHeight * 0.2
      // Complete fade when scroll position is 80% of hero height
      const fadeEnd = heroHeight * 0.8
      const range = fadeEnd - fadeStart

      if (scrollY <= fadeStart) return 1
      if (scrollY >= fadeEnd) return 0

      return 1 - (scrollY - fadeStart) / range
   }

   return (
      <main className="flex flex-col items-center">
         {/* Hero Section with Fade Effect */}
         <div ref={heroRef} className="relative w-full h-screen">
            {/* Background Image with Fade Effect */}
            <div className="absolute inset-0 z-0 transition-opacity duration-200" style={{ opacity: calculateOpacity() }}>
               <Image
                  src="/FamHome.png?height=1080&width=1920"
                  alt="Solar panels on a sunny day"
                  fill
                  priority
                  className="object-cover"
               />
               {/* Dark overlay for better text visibility */}
               <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
               <Sun className="h-16 w-16 mb-6 text-yellow-400 animate-pulse" />
               <h1 className="text-4xl md:text-6xl font-bold mb-4">Powering Your Future With Solar Energy</h1>
               <p className="text-xl md:text-2xl max-w-3xl mb-8">
                  Professional installation, cleaning, and remodeling services for sustainable energy solutions.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                     Get a Free Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
                     Our Services
                  </Button>
               </div>

               {/* Scroll Indicator */}
               <div className="absolute bottom-8 animate-bounce">
                  <ArrowDown className="h-8 w-8" />
                  <span className="sr-only">Scroll down</span>
               </div>
            </div>
         </div>

         {/* Services Section (Placeholder) */}
         <section id="services" className="w-full py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Solar Services</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Service cards will go here in future development */}
                  <div className="p-8 border rounded-lg shadow-sm">
                     <h3 className="text-xl font-semibold mb-4">Solar Installation</h3>
                     <p className="text-gray-600">
                        Professional installation of high-efficiency solar panels for residential and commercial properties.
                     </p>
                  </div>
                  <div className="p-8 border rounded-lg shadow-sm">
                     <h3 className="text-xl font-semibold mb-4">Panel Cleaning</h3>
                     <p className="text-gray-600">
                        Regular maintenance and cleaning services to ensure your solar panels operate at maximum efficiency.
                     </p>
                  </div>
                  <div className="p-8 border rounded-lg shadow-sm">
                     <h3 className="text-xl font-semibold mb-4">System Remodeling</h3>
                     <p className="text-gray-600">
                        Upgrade and remodel existing solar systems to improve performance and energy production.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Additional sections will be developed later */}
      </main>
   )
}

