"use client"

import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { SiteFooter } from "./components/Site-footer"
import { SiteHeader } from "./components/Site-header"
import { Button } from "./components/ui/button"

export default function Home() {
   const router = useRouter();

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

   // Services data
   const services = [
      {
         id: 1,
         title: "Solar Installation",
         description:
            "Professional installation of high-efficiency solar panels for residential and commercial properties.",
         image: "/GasStation.png?height=400&width=600",
         features: ["Custom system design", "Premium panels", "Expert installation", "Warranty coverage"],
      },
      {
         id: 2,
         title: "Panel Cleaning",
         description:
            "Regular maintenance and cleaning services to ensure your solar panels operate at maximum efficiency.",
         image: "/GasStation.png?height=400&width=600",
         features: ["Increased efficiency", "Extends panel life", "Scheduled maintenance", "Performance monitoring"],
      },
      {
         id: 3,
         title: "System Remodeling",
         description: "Upgrade and remodel existing solar systems to improve performance and energy production.",
         image: "/GasStation.png?height=400&width=600",
         features: ["System assessment", "Technology upgrades", "Capacity expansion", "Performance optimization"],
      },
   ]

   // Recent projects data
   const recentProjects = [
      {
         id: 1,
         title: "Residential Solar Installation",
         location: "Sunnyvale, CA",
         description:
            "Complete rooftop solar panel installation for a 2,500 sq ft home, providing 100% of the family's energy needs.",
         metrics: "12.5 kW system | 30 panels | $15,000 annual savings",
         image: "/FamHome.png?height=600&width=800",
      },
      {
         id: 2,
         title: "Commercial Office Building",
         location: "Austin, TX",
         description: "Large-scale commercial installation for a 4-story office building, reducing energy costs by 65%.",
         metrics: "75 kW system | 180 panels | Carbon reduction: 120 tons/year",
         image: "/FamHome.png?height=600&width=800",
      },
      {
         id: 3,
         title: "Community Solar Farm",
         location: "Boulder, CO",
         description: "Community solar project providing clean energy to 150+ homes in the local neighborhood.",
         metrics: "250 kW system | 600 panels | Powers 150 homes",
         image: "/FamHome.png?height=600&width=800",
      },
   ]

   return (
      <>
         <SiteHeader />
         <main className="flex flex-col items-center">
            {/* Hero Section with Fade Effect */}
            <div ref={heroRef} className="relative w-full h-screen">
               {/* Background Image with Fade Effect */}
               <div className="absolute inset-0 z-0 transition-opacity duration-200" style={{ opacity: calculateOpacity() }}>
                  <Image
                     src="/BlueHouse.jpg?height=1080&width=1920"
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
                  {/* <Sun className="h-16 w-16 mb-6 text-yellow-400 animate-pulse" /> */}
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Powering Your Future With Solar Energy</h1>
                  <p className="text-xl md:text-2xl max-w-3xl mb-8">
                     Professional installation, cleaning, and remodeling services for sustainable energy solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white" onClick={() => {
                        router.push("/Contact")
                     }}>
                        Get a Free Quote
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-black hover:bg-white/20 hover:text-white"
                        onClick={() => {
                           document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                        }}
                     >
                        Our Services
                     </Button>
                  </div>

                  {/* Scroll Indicator - Make it clickable */}
                  <button
                     onClick={() => {
                        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                     }}
                     className="absolute bottom-8 animate-bounce cursor-pointer"
                     aria-label="Scroll to services"
                  >
                     <ArrowDown className="h-8 w-8" />
                  </button>
               </div>
            </div>

            {/* Services Section - Redesigned to be more modern and minimalistic */}
            <section id="services" className="w-full py-24 px-4 bg-white">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solar Services</h2>
                     <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide comprehensive solar solutions to meet your energy needs, from installation to maintenance.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {services.map((service) => (
                        <div
                           key={service.id}
                           className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                           {/* Image Container */}
                           <div className="relative h-56 overflow-hidden">
                              <Image
                                 src={service.image}
                                 alt={service.title}
                                 fill
                                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{service.title}</h3>
                           </div>

                           {/* Content */}
                           <div className="p-6">
                              <p className="text-gray-700 mb-5">{service.description}</p>

                              {/* Features List */}
                              <ul className="space-y-2 mb-6">
                                 {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                       <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></div>
                                       {feature}
                                    </li>
                                 ))}
                              </ul>

                              {/* CTA Button */}
                              <Button
                                 variant="ghost"
                                 className="w-full justify-between text-green-800 hover:text-green-900 hover:bg-green-50 border border-green-200 group-hover:border-green-300 transition-colors"
                              >
                                 Learn More{" "}
                                 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                              </Button>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Recent Projects Section */}
            <section id="projects" className="w-full py-20 px-4 bg-gray-50">
               <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Recent Projects</h2>
                  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                     Take a look at some of our recent solar installations and the impact they&apos;ve made for our clients.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     {recentProjects.map((project) => (
                        <div
                           key={project.id}
                           className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                           <div className="relative h-64">
                              <Image
                                 src={project.image || "/placeholder.svg"}
                                 alt={project.title}
                                 fill
                                 className="object-cover"
                              />
                              <Image
                                 src="/FamHome.png?height=1080&width=1920"
                                 alt="Solar panels on a sunny day"
                                 fill
                                 priority
                                 className="object-cover"
                              />
                           </div>
                           <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                              <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                              <p className="text-gray-700 mb-4">{project.description}</p>
                              <div className="bg-gray-100 p-3 rounded-md mb-4">
                                 <p className="text-sm font-medium text-gray-800">{project.metrics}</p>
                              </div>
                              <Button
                                 variant="outline"
                                 className="w-full flex items-center justify-center gap-2 text-green-800 border-green-800 hover:bg-green-50"
                              >
                                 View Case Study <ExternalLink size={16} />
                              </Button>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="text-center mt-12">
                     <Button className="bg-green-800 hover:bg-green-900 text-white flex items-center gap-2">
                        View All Projects <ArrowRight size={16} />
                     </Button>
                  </div>
               </div>
            </section>

            {/* Additional sections will be developed later */}

            {/* Footer */}
            <SiteFooter />
         </main>
      </>
   )
}

