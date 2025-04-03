import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "./components/ui/theme-provider"
import "./styles/global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Solar Energy Solutions",
   description: "Professional solar panel installation, cleaning, and remodeling services",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body>
            <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}


