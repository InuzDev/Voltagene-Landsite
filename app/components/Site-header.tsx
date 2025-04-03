import { Sun } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function SiteHeader() {
   return (
      <header className="fixed top-0 w-full z-50 bg-transparent">
         <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
               <Sun className="h-6 w-6 text-yellow-400" />
               <span className="font-bold text-white">SolarPro</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-white">
               <Link href="#services" className="hover:text-yellow-300 transition-colors">
                  Services
               </Link>
               <Link href="#about" className="hover:text-yellow-300 transition-colors">
                  About
               </Link>
               <Link href="#projects" className="hover:text-yellow-300 transition-colors">
                  Projects
               </Link>
               <Link href="#testimonials" className="hover:text-yellow-300 transition-colors">
                  Testimonials
               </Link>
               <Link href="#contact" className="hover:text-yellow-300 transition-colors">
                  Contact
               </Link>
            </nav>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Get a Quote</Button>
         </div>
      </header>
   )
}

