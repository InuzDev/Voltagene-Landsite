// analytics tools used by vecel
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "./components/ui/sonner"

// Imports that are required for the website to work properly
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SiteFooter } from "./components/Site-footer"
import { SiteHeader } from "./components/Site-header"
import { ThemeProvider } from "./components/ui/theme-provider"
import "./Global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Voltagene SRL - Soluciones para energía solar",
   description:
      "Servicios profesionales de instalación, limpieza y remodelación de paneles solares para propiedades residenciales y comerciales.",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
               {/* These are the tools used by Vercel for analytiscs */}
               <Analytics />
               <SpeedInsights />
               {/* This is the content of the website, the actual things happens here. */}
               <SiteHeader />
               {children}
               <SiteFooter />
            </ThemeProvider>
         </body>
      </html>
   )
}

