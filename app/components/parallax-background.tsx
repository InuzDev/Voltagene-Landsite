"use client";

import { useScrollAnimation } from "app/hooks/useScrollAnimation";

export default function ParallaxBackground() {
   const scrollY = useScrollAnimation();

   return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
         {/* Main animated lines with parallax */}
         <svg
            className="w-full h-full opacity-5"
            viewBox="0 0 1000 1000"
            style={{
               transform: `translateY(${scrollY * 0.1}px)`,
            }}
         >
            <path
               d="M0,300 Q250,200 500,300 T1000,300"
               stroke="#FCD34D"
               strokeWidth="3"
               fill="none"
               className="animate-pulse"
            />
            <path
               d="M0,500 Q250,400 500,500 T1000,500"
               stroke="#FCD34D"
               strokeWidth="2"
               fill="none"
               className="animate-pulse"
               style={{ animationDelay: "2s" }}
            />
            <path
               d="M0,700 Q250,600 500,700 T1000,700"
               stroke="#FCD34D"
               strokeWidth="1"
               fill="none"
               className="animate-pulse"
               style={{ animationDelay: "4s" }}
            />
         </svg>

         {/* Secondary layer with different parallax speed */}
         <svg
            className="w-full h-full opacity-3"
            viewBox="0 0 1000 1000"
            style={{
               transform: `translateY(${scrollY * 0.05}px)`,
            }}
         >
            <path
               d="M0,150 Q250,50 500,150 T1000,150"
               stroke="#FCD34D"
               strokeWidth="1"
               fill="none"
               className="animate-pulse"
               style={{ animationDelay: "1s" }}
            />
            <path
               d="M0,850 Q250,750 500,850 T1000,850"
               stroke="#FCD34D"
               strokeWidth="1"
               fill="none"
               className="animate-pulse"
               style={{ animationDelay: "3s" }}
            />
         </svg>

         {/* Floating particles */}
         <div
            className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"
            style={{
               transform: `translateY(${scrollY * 0.15}px)`,
            }}
         />
         <div
            className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
               transform: `translateY(${scrollY * 0.08}px)`,
               animationDelay: "1s",
            }}
         />
         <div
            className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"
            style={{
               transform: `translateY(${scrollY * 0.12}px)`,
               animationDelay: "2s",
            }}
         />
      </div>
   );
}
