"use client";

import { Button } from "app/components/ui/button";
import { Card, CardContent } from "app/components/ui/card";
import { useScrollAnimation } from "app/hooks/useScrollAnimation";
import {
   ArrowRight,
   CalendarCheck,
   CheckCircle,
   Droplets,
   Eye,
   ShieldCheck,
   TrendingUp,
   Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PanelCleaning() {
   const [activeStep, setActiveStep] = useState(0);
   const scrollY = useScrollAnimation();

   const steps = [
      {
         title: "Inspección Inicial",
         description: "Evaluación del estado actual de tus paneles",
         icon: <Eye className="w-6 h-6" />,
         details:
            "Nuestros técnicos realizan una inspección visual y técnica detallada para identificar acumulación de polvo, suciedad, aves, musgo u otros contaminantes que puedan estar reduciendo el rendimiento de tu sistema.",
      },
      {
         title: "Limpieza Especializada",
         description: "Proceso de limpieza con agua purificada",
         icon: <Droplets className="w-6 h-6" />,
         details:
            "Usamos agua purificada y desionizada junto con herramientas de limpieza suave que no dañan la superficie de los paneles. Eliminamos toda suciedad sin rayar ni comprometer la integridad del vidrio antirreflectante.",
      },
      {
         title: "Verificación de Rendimiento",
         description: "Medición de eficiencia antes y después",
         icon: <TrendingUp className="w-6 h-6" />,
         details:
            "Tras la limpieza, verificamos el rendimiento eléctrico del sistema para confirmar la recuperación de eficiencia. Te entregamos un informe con las métricas de producción antes y después del servicio.",
      },
      {
         title: "Plan de Mantenimiento",
         description: "Programación de limpiezas recurrentes",
         icon: <CalendarCheck className="w-6 h-6" />,
         details:
            "Te ofrecemos un plan de mantenimiento preventivo con visitas programadas según las condiciones ambientales de tu zona, garantizando que tu sistema opere siempre al máximo rendimiento.",
      },
   ];

   const stats = [
      {
         value: "25%",
         label: "Pérdida de eficiencia",
         sub: "en paneles sin limpiar por 6 meses",
      },
      {
         value: "30%",
         label: "Más producción",
         sub: "recuperada tras una limpieza profesional",
      },
      {
         value: "2×",
         label: "Mayor vida útil",
         sub: "con mantenimiento preventivo regular",
      },
   ];

   const benefits = [
      {
         icon: <Zap className="w-8 h-8 text-white" />,
         title: "Máxima Eficiencia",
         description:
            "Recupera hasta un 30% de producción energética perdida por acumulación de polvo y suciedad en la superficie de tus paneles.",
         color: "bg-green-600",
      },
      {
         icon: <ShieldCheck className="w-8 h-8 text-white" />,
         title: "Protección del Sistema",
         description:
            "La suciedad acumulada puede generar puntos calientes (hot spots) que dañan las células solares. La limpieza regular previene daños irreversibles.",
         color: "bg-green-500",
      },
      {
         icon: <TrendingUp className="w-8 h-8 text-white" />,
         title: "Mayor Retorno de Inversión",
         description:
            "Un panel limpio produce más energía, lo que se traduce en mayor ahorro en tu factura eléctrica y un retorno más rápido de tu inversión solar.",
         color: "bg-green-600",
      },
   ];

   const galleryImages = [
      {
         src: "/Solar-Cleaning-2.jpg",
         alt: "Limpieza profesional de paneles solares",
      },
      {
         src: "/Cleaning-image.JPG",
         alt: "Proceso de limpieza de sistema fotovoltaico",
      },
      {
         src: "/Cleaning-Personal.JPG",
         alt: "Equipo técnico de limpieza Voltagene",
      },
   ];

   return (
      <div className="min-h-screen bg-white relative overflow-hidden">
         {/* Animated Waving Lines - Top Section Only */}
         <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1000 600">
               {/* Primary waving line */}
               <path
                  d="M0,150 Q250,100 500,150 T1000,150"
                  stroke="#FCD34D"
                  strokeWidth="4"
                  fill="none"
                  className="opacity-25"
                  style={{ transform: `translateY(${scrollY * 0.12}px)` }}
               >
                  <animate
                     attributeName="d"
                     values="M0,150 Q250,100 500,150 T1000,150;M0,150 Q250,200 500,150 T1000,150;M0,150 Q250,100 500,150 T1000,150"
                     dur="7s"
                     repeatCount="indefinite"
                  />
               </path>

               <path
                  d="M0,200 Q250,150 500,200 T1000,200"
                  stroke="#FCD34D"
                  strokeWidth="3"
                  fill="none"
                  className="opacity-20"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
               >
                  <animate
                     attributeName="d"
                     values="M0,200 Q250,150 500,200 T1000,200;M0,200 Q250,250 500,200 T1000,200;M0,200 Q250,150 500,200 T1000,200"
                     dur="8s"
                     repeatCount="indefinite"
                  />
               </path>

               <path
                  d="M0,250 Q250,200 500,250 T1000,250"
                  stroke="#FCD34D"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-15"
                  style={{ transform: `translateY(${scrollY * 0.08}px)` }}
               >
                  <animate
                     attributeName="d"
                     values="M0,250 Q250,200 500,250 T1000,250;M0,250 Q250,300 500,250 T1000,250;M0,250 Q250,200 500,250 T1000,250"
                     dur="9s"
                     repeatCount="indefinite"
                  />
               </path>

               <path
                  d="M0,300 Q250,250 500,300 T1000,300"
                  stroke="#FCD34D"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-15"
                  style={{ transform: `translateY(${scrollY * 0.06}px)` }}
               >
                  <animate
                     attributeName="d"
                     values="M0,300 Q250,250 500,300 T1000,300;M0,300 Q250,350 500,300 T1000,300;M0,300 Q250,250 500,300 T1000,300"
                     dur="6s"
                     repeatCount="indefinite"
                  />
               </path>

               <path
                  d="M0,350 Q250,300 500,350 T1000,350"
                  stroke="#FCD34D"
                  strokeWidth="1.5"
                  fill="none"
                  className="opacity-10"
                  style={{ transform: `translateY(${scrollY * 0.04}px)` }}
               >
                  <animate
                     attributeName="d"
                     values="M0,350 Q250,300 500,350 T1000,350;M0,350 Q250,400 500,350 T1000,350;M0,350 Q250,300 500,350 T1000,350"
                     dur="11s"
                     repeatCount="indefinite"
                  />
               </path>

               <path
                  d="M0,100 Q250,50 500,100 T1000,100"
                  stroke="#FCD34D"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-15"
                  style={{ transform: `translateY(${scrollY * 0.15}px)` }}
               >
                  <animate
                     attributeName="d"
                     values="M0,100 Q250,50 500,100 T1000,100;M0,100 Q250,150 500,100 T1000,100;M0,100 Q250,50 500,100 T1000,100"
                     dur="5s"
                     repeatCount="indefinite"
                  />
               </path>

               <path
                  d="M0,400 Q250,350 500,400 T1000,400"
                  stroke="#FCD34D"
                  strokeWidth="1"
                  fill="none"
                  className="opacity-10"
                  style={{ transform: `translateY(${scrollY * 0.03}px)` }}
               >
                  <animate
                     attributeName="d"
                     values="M0,400 Q250,350 500,400 T1000,400;M0,400 Q250,450 500,400 T1000,400;M0,400 Q250,350 500,400 T1000,400"
                     dur="10s"
                     repeatCount="indefinite"
                  />
               </path>
            </svg>

            {/* Soft fading overlay */}
            <div
               className="absolute inset-0 bg-linear-to-b from-transparent via-white/20 to-white/80"
               style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            />
         </div>

         {/* ── Hero Section ── */}
         <section className="relative pt-20 pb-20 lg:pb-32">
            <div className="container mx-auto px-4 py-20">
               <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                     <Droplets className="w-4 h-4" />
                     Limpieza & Mantenimiento
                  </div>

                  <h1
                     className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6"
                     style={{ transform: `translateY(${scrollY * 0.02}px)` }}
                  >
                     Limpieza Profesional de
                     <span className="block font-normal text-green-700">
                        Paneles Solares
                     </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                     Recupera la eficiencia perdida de tu sistema fotovoltaico
                     con nuestro servicio especializado de limpieza y
                     mantenimiento preventivo.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/Quotes">
                        <Button
                           size="lg"
                           className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                           Solicitar Limpieza
                           <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                     </Link>
                     <Link href="/Contact">
                        <Button
                           size="lg"
                           variant="outline"
                           className="border-green-300 text-green-800 hover:bg-green-50 px-10 py-4 rounded-2xl text-lg transition-all duration-300"
                        >
                           Contáctanos
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         {/* ── Impact Stats ── */}
         <section className="py-16 bg-gray-50 relative">
            <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {stats.map((stat, index) => (
                        <div
                           key={index}
                           className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:ring-1 hover:ring-green-400"
                        >
                           <p className="text-5xl font-light text-green-600 mb-2">
                              {stat.value}
                           </p>
                           <p className="text-lg font-semibold text-gray-900 mb-1">
                              {stat.label}
                           </p>
                           <p className="text-sm text-gray-500">{stat.sub}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* ── Cleaning Process Steps ── */}
         <section className="py-20 relative bg-white">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                        Nuestro Proceso de Limpieza
                     </h2>
                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Un proceso meticuloso en cuatro pasos para garantizar el
                        máximo rendimiento de tu inversión solar
                     </p>
                  </div>

                  {/* Steps Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                     {steps.map((step, index) => (
                        <Card
                           key={index}
                           className={`cursor-pointer transition-all duration-500 hover:shadow-lg border-0 bg-gray-50 hover:bg-white ${
                              activeStep === index
                                 ? "ring-1 ring-green-500 shadow-lg bg-white scale-105"
                                 : ""
                           }`}
                           onClick={() => setActiveStep(index)}
                        >
                           <CardContent className="p-6 text-center">
                              <div
                                 className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                                    activeStep === index
                                       ? "bg-green-600 text-white"
                                       : "bg-white text-gray-600 shadow-sm"
                                 }`}
                              >
                                 {step.icon}
                              </div>
                              <div className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-1">
                                 Paso {index + 1}
                              </div>
                              <h3 className="text-lg font-medium text-gray-900 mb-2">
                                 {step.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                 {step.description}
                              </p>
                           </CardContent>
                        </Card>
                     ))}
                  </div>

                  {/* Active Step Detail Panel */}
                  <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center transition-all duration-500">
                     <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                        {steps[activeStep]?.icon}
                     </div>
                     <div className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">
                        Paso {activeStep + 1} de {steps.length}
                     </div>
                     <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                        {steps[activeStep]?.title}
                     </h3>
                     <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        {steps[activeStep]?.details}
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* ── Benefits ── */}
         <section className="py-20 bg-green-50/30 relative">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                        ¿Por Qué Limpiar tus Paneles?
                     </h2>
                     <p className="text-lg text-gray-600">
                        La suciedad es el enemigo silencioso de tu sistema
                        solar. Un mantenimiento regular marca la diferencia.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                     {benefits.map((benefit, index) => (
                        <div key={index} className="text-center group">
                           <div
                              className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                           >
                              {benefit.icon}
                           </div>
                           <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              {benefit.title}
                           </h3>
                           <p className="text-gray-600 leading-relaxed">
                              {benefit.description}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* ── Photo Gallery ── */}
         <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                        Nuestro Trabajo en Acción
                     </h2>
                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Cada limpieza es un compromiso con la calidad y el
                        cuidado de tu inversión.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {galleryImages.map((img, index) => (
                        <div
                           key={index}
                           className="relative h-64 rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                           <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                           <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {img.alt}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* ── What's Included ── */}
         <section className="py-20 bg-gray-50 relative">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                        ¿Qué Incluye el Servicio?
                     </h2>
                     <p className="text-lg text-gray-600">
                        Todo lo necesario para mantener tu sistema en óptimas
                        condiciones.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     {[
                        "Inspección visual completa del sistema",
                        "Limpieza con agua purificada y desionizada",
                        "Eliminación de suciedad, polvo y residuos orgánicos",
                        "Revisión de conexiones y estado del cableado",
                        "Verificación del rendimiento post-limpieza",
                        "Informe técnico del servicio realizado",
                        "Detección temprana de anomalías o daños",
                        "Recomendaciones de mantenimiento preventivo",
                     ].map((item, index) => (
                        <div
                           key={index}
                           className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:ring-1 hover:ring-green-300"
                        >
                           <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                           <span className="text-gray-700 text-sm font-medium">
                              {item}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* ── CTA Section ── */}
         <section className="py-24">
            <div className="container mx-auto px-4">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                     ¿Cuándo fue la Última Vez que Limpiaste tus Paneles?
                  </h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                     No esperes a que la suciedad afecte tu factura eléctrica.
                     Solicita una visita de diagnóstico gratuita y descubre
                     cuánta energía estás perdiendo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/Quotes">
                        <Button
                           size="lg"
                           className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                           Solicitar Servicio
                           <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                     </Link>
                     <Link href="/Contact">
                        <Button
                           size="lg"
                           variant="outline"
                           className="border-green-300 text-green-800 hover:bg-green-50 px-12 py-4 rounded-full text-lg transition-all duration-300"
                        >
                           Hablar con un Experto
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
