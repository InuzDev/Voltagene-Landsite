"use client";

import { Button } from "app/components/ui/button";
import { useScrollAnimation } from "app/hooks/useScrollAnimation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WorkInProgress() {
   const scrollY = useScrollAnimation();

   return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
         {/* Return Button - Top Left */}
         <div className="absolute top-6 left-6 z-20">
            <Link href="/">
               <Button
                  variant="outline"
                  className="bg-black/50 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105"
               >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
               </Button>
            </Link>
         </div>

         {/* Centered Animated Waving Lines - Full Screen Width */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
               className="w-full h-full"
               viewBox="0 0 100 100"
               preserveAspectRatio="none"
            >
               {/* Line 1 */}
               <path
                  d="M-10,42 Q25,37 50,42 T110,42"
                  stroke="#ffffff"
                  strokeWidth="0.3"
                  fill="none"
                  className="opacity-70"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.8px #ffffff) drop-shadow(0 0 1.6px #ffffff)",
                     transform: `translateY(${scrollY * 0.15}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,42 Q25,37 50,42 T110,42;M-10,42 Q25,47 50,42 T110,42;M-10,42 Q25,37 50,42 T110,42"
                     dur="8s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 2 */}
               <path
                  d="M-10,46 Q25,51 50,46 T110,46"
                  stroke="#ffffff"
                  strokeWidth="0.2"
                  fill="none"
                  className="opacity-50"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.6px #ffffff) drop-shadow(0 0 1.2px #ffffff)",
                     transform: `translateY(${scrollY * 0.08}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,46 Q25,51 50,46 T110,46;M-10,46 Q25,41 50,46 T110,46;M-10,46 Q25,51 50,46 T110,46"
                     dur="12s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 3 */}
               <path
                  d="M-10,50 Q25,45 50,50 T110,50"
                  stroke="#ffffff"
                  strokeWidth="0.4"
                  fill="none"
                  className="opacity-60"
                  style={{
                     filter:
                        "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 2px #ffffff)",
                     transform: `translateY(${scrollY * 0.12}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,50 Q25,45 50,50 T110,50;M-10,50 Q25,55 50,50 T110,50;M-10,50 Q25,45 50,50 T110,50"
                     dur="6s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 4 */}
               <path
                  d="M-10,54 Q25,59 50,54 T110,54"
                  stroke="#ffffff"
                  strokeWidth="0.1"
                  fill="none"
                  className="opacity-40"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.4px #ffffff) drop-shadow(0 0 0.8px #ffffff)",
                     transform: `translateY(${scrollY * 0.06}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,54 Q25,59 50,54 T110,54;M-10,54 Q25,49 50,54 T110,54;M-10,54 Q25,59 50,54 T110,54"
                     dur="15s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 5 */}
               <path
                  d="M-10,48 Q25,43 50,48 T110,48"
                  stroke="#ffffff"
                  strokeWidth="0.3"
                  fill="none"
                  className="opacity-55"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.7px #ffffff) drop-shadow(0 0 1.4px #ffffff)",
                     transform: `translateY(${scrollY * 0.1}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,48 Q25,43 50,48 T110,48;M-10,48 Q25,53 50,48 T110,48;M-10,48 Q25,43 50,48 T110,48"
                     dur="9s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 6 */}
               <path
                  d="M-10,52 Q25,57 50,52 T110,52"
                  stroke="#ffffff"
                  strokeWidth="0.2"
                  fill="none"
                  className="opacity-45"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.5px #ffffff) drop-shadow(0 0 1px #ffffff)",
                     transform: `translateY(${scrollY * 0.04}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,52 Q25,57 50,52 T110,52;M-10,52 Q25,47 50,52 T110,52;M-10,52 Q25,57 50,52 T110,52"
                     dur="11s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 7 */}
               <path
                  d="M-10,56 Q25,51 50,56 T110,56"
                  stroke="#ffffff"
                  strokeWidth="0.1"
                  fill="none"
                  className="opacity-35"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.3px #ffffff) drop-shadow(0 0 0.6px #ffffff)",
                     transform: `translateY(${scrollY * 0.02}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,56 Q25,51 50,56 T110,56;M-10,56 Q25,61 50,56 T110,56;M-10,56 Q25,51 50,56 T110,56"
                     dur="14s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 8 */}
               <path
                  d="M-10,44 Q25,49 50,44 T110,44"
                  stroke="#ffffff"
                  strokeWidth="0.2"
                  fill="none"
                  className="opacity-30"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.4px #ffffff) drop-shadow(0 0 0.8px #ffffff)",
                     transform: `translateY(${scrollY * 0.14}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,44 Q25,49 50,44 T110,44;M-10,44 Q25,39 50,44 T110,44;M-10,44 Q25,49 50,44 T110,44"
                     dur="7s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 9 */}
               <path
                  d="M-10,49 Q25,44 50,49 T110,49"
                  stroke="#ffffff"
                  strokeWidth="0.3"
                  fill="none"
                  className="opacity-65"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.9px #ffffff) drop-shadow(0 0 1.8px #ffffff)",
                     transform: `translateY(${scrollY * 0.07}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,49 Q25,44 50,49 T110,49;M-10,49 Q25,54 50,49 T110,49;M-10,49 Q25,44 50,49 T110,49"
                     dur="10s"
                     repeatCount="indefinite"
                  />
               </path>

               {/* Line 10 */}
               <path
                  d="M-10,53 Q25,48 50,53 T110,53"
                  stroke="#ffffff"
                  strokeWidth="0.1"
                  fill="none"
                  className="opacity-25"
                  style={{
                     filter:
                        "drop-shadow(0 0 0.2px #ffffff) drop-shadow(0 0 0.4px #ffffff)",
                     transform: `translateY(${scrollY * 0.03}px)`,
                  }}
               >
                  <animate
                     attributeName="d"
                     values="M-10,53 Q25,48 50,53 T110,53;M-10,53 Q25,58 50,53 T110,53;M-10,53 Q25,48 50,53 T110,53"
                     dur="13s"
                     repeatCount="indefinite"
                  />
               </path>
            </svg>
         </div>

         {/* Minimalistic Content */}
         <div className="relative z-10 text-center px-4">
            <div className="space-y-6">
               {/* Spanish */}
               <h1 className="text-xl md:text-2xl lg:text-3xl font-extralight text-white tracking-widest">
                  TRABAJO EN PROGRESO
               </h1>

               {/* English */}
               <h2 className="text-xl md:text-2xl lg:text-3xl font-extralight text-white tracking-widest">
                  WORK IN PROGRESS
               </h2>

               {/* Chinese */}
               <h3 className="text-xl md:text-2xl lg:text-3xl font-extralight text-white tracking-widest">
                  施工中
               </h3>

               {/* Japanese */}
               <h4 className="text-xl md:text-2xl lg:text-3xl font-extralight text-white tracking-widest">
                  工事中
               </h4>
            </div>
         </div>
      </div>
   );
}
