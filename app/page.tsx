"use client";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "./components/ui/button";
// Slider props
import { MediaSlider } from "./components/media-slider";
import { ServicesProps, SliderProps } from "./const/const";
import type { Project } from "./lib/types";

export default function Home() {
   const [Projects, setProjects] = useState([]);

   const router = useRouter();

   const [scrollY, setScrollY] = useState(0);
   const heroRef = useRef<HTMLDivElement>(null);

   // fetch the posts from the constant
   useEffect(() => {
      fetch("/api/projects")
         .then((res) => res.json())
         .then((data) => setProjects(data));
   }, []);
   // break line

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // Calculate opacity based on scroll position
   const calculateOpacity = () => {
      if (!heroRef.current) return 1;
      const heroHeight = heroRef.current.offsetHeight;
      // Start fading when scroll position is 20% of hero height
      const fadeStart = heroHeight * 0.2;
      // Complete fade when scroll position is 80% of hero height
      const fadeEnd = heroHeight * 0.8;
      const range = fadeEnd - fadeStart;

      if (scrollY <= fadeStart) return 1;
      if (scrollY >= fadeEnd) return 0;

      return 1 - (scrollY - fadeStart) / range;
   };

   return (
      <>
         <main id="start" className="min-h-screen flex flex-col items-center">
            {/* Hero Section with Fade Effect */}
            <div ref={heroRef} className="relative w-full h-screen">
               {/* Background Image with Fade Effect */}
               <div
                  className="absolute inset-0 z-0 transition-opacity duration-200"
                  style={{ opacity: calculateOpacity() }}
               >
                  {/* Slider for more dynamic experience. */}
                  <MediaSlider
                     autoPlay={true}
                     showControls={false}
                     items={SliderProps}
                  />
                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/30" />
               </div>

               {/* Hero Content */}
               <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                     Impulsando Tu Futuro con Energía Solar
                  </h1>
                  <p className="text-xl md:text-2xl max-w-3xl mb-8">
                     Instalación profesional, limpieza y remodelación para
                     soluciones energéticas sostenibles.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button
                        size="lg"
                        className="bg-green-800 hover:bg-green-900 text-white"
                        onClick={() => {
                           router.push("/Quotes");
                        }}
                     >
                        Solicita una Cotización
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-black hover:bg-white/20 hover:text-white"
                        onClick={() => {
                           document
                              .getElementById("services")
                              ?.scrollIntoView({ behavior: "smooth" });
                        }}
                     >
                        Nuestros Servicios
                     </Button>
                  </div>

                  <button
                     onClick={() => {
                        document
                           .getElementById("services")
                           ?.scrollIntoView({ behavior: "smooth" });
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
                     <h2 className="text-4xl font-light mb-8">
                        Nuestros Servicios
                     </h2>
                     <p className="text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos soluciones solares integrales para satisfacer
                        tus necesidades energéticas, desde la instalación hasta
                        el mantenimiento.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {ServicesProps.map((service) => (
                        <div
                           key={service.id}
                           className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:ring-1 hover:ring-green-500"
                        >
                           {/* Image Container */}
                           <div className="relative h-56 overflow-hidden">
                              <Image
                                 src={service.image}
                                 alt={service.title}
                                 fill
                                 className="object-cover transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-70" />
                              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                 {service.title}
                              </h3>
                           </div>

                           {/* Content */}
                           <div className="p-6">
                              <p className="text-gray-700 mb-5">
                                 {service.description}
                              </p>

                              {/* Features List */}
                              <ul className="space-y-2 mb-6">
                                 {service.features.map((feature, index) => (
                                    <li
                                       key={index}
                                       className="flex items-center text-sm text-gray-600"
                                    >
                                       <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></div>
                                       {feature}
                                    </li>
                                 ))}
                              </ul>

                              {/* CTA Button */}
                              {/* We going to hide the access to this page for now until the development is completed. */}

                              <Button
                                 onClick={() => location.replace(service.url)}
                                 variant="ghost"
                                 className="w-full justify-between text-green-800 hover:text-green-900 hover:bg-green-50 border border-green-200 group-hover:border-green-300 transition-colors"
                              >
                                 Aprende más{" "}
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
                  <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
                     Proyectos Recientes
                  </h2>
                  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                     Conoce algunas de nuestras instalaciones solares más
                     recientes y el impacto que han tenido en nuestros clientes.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     {Projects.slice(0, 3).map((project: Project) => (
                        <Link
                           key={project.id}
                           href={`/Projects/${project.slug}`}
                           className="group bg-white rounded-xl text-black overflow-hidden transition-all duration-300 hover:shadow-xl hover:ring-1 hover:ring-green-500"
                        >
                           <div className="relative h-64">
                              <Image
                                 src={project.imageUrl || "/placeholder.png"}
                                 alt={project.title}
                                 fill
                                 className="object-cover"
                              />
                           </div>
                           <div className="p-6">
                              <h3 className="text-xl text-black font-semibold mb-2 group-hover:text-green-600 transition-colors">
                                 {project.title}
                              </h3>
                              <p className="text-gray-700 mb-4 line-clamp-3">
                                 {project.description}
                              </p>
                              <div className="bg-gray-100 p-3 rounded-md mb-4">
                                 <p className="text-sm font-medium text-gray-800">
                                    {project.metrics}
                                 </p>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>

                  <div className="text-center mt-12">
                     <Button
                        onClick={() => location.replace("/Projects")}
                        className="bg-green-800 hover:bg-green-900 text-white flex items-center gap-2"
                     >
                        Ver más proyectos <ArrowRight size={16} />
                     </Button>
                  </div>
               </div>
            </section>

            {/* Additional sections will be developed later */}
         </main>
      </>
   );
}
