import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
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
               <Analytics />
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}

