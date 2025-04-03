import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "./components/ui/theme-provider"
import "./Global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Voltagene SRL - Solar Energy Solutions",
   description:
      "Professional solar panel installation, cleaning, and remodeling services for residential and commercial properties.",
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
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}

