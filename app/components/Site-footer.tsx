import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react'
import Link from "next/link"

export function SiteFooter() {
   return (
      <footer className="bg-gray-900 text-white w-full">
         <div className="container mx-auto px-4 py-12">
            {/* Improved responsive grid layout */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               {/* Company Info */}
               <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">Voltagene SRL</h3>
                  <p className="text-gray-300 mb-4">
                     Providing sustainable energy solutions since 2022. We're committed to a greener future through innovative solar technology.
                  </p>
                  <div className="flex space-x-4">
                     <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook size={20} />
                        <span className="sr-only">Facebook</span>
                     </Link>
                     <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                        <span className="sr-only">Twitter</span>
                     </Link>
                     <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                     </Link>
                     <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                     </Link>
                  </div>
               </div>

               {/* Contact Info */}
               <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">Contact Us</h3>
                  <ul className="space-y-3">
                     <li className="flex items-start">
                        <Phone className="h-5 w-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>(555) 123-4567</span>
                     </li>
                     <li className="flex items-start">
                        <Mail className="h-5 w-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>info@voltagene.com</span>
                     </li>
                     <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>123 Solar Avenue, Sunshine City, SC 12345</span>
                     </li>
                  </ul>
               </div>

               {/* Our Team */}
               <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">Our Team</h3>
                  <p className="text-gray-300 mb-2">
                     Our team of certified solar experts brings over 25 years of combined experience in renewable energy solutions.
                  </p>
                  <Link href="#" className="text-green-600 hover:text-green-500 font-medium">
                     Meet the Team →
                  </Link>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                           Our Services
                        </Link>
                     </li>
                     <li>
                        <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                           Recent Projects
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                           Solar Calculators
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                           Financing Options
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                           FAQ
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Bottom Bar - Improved for mobile */}
            <div className="border-t border-gray-800 mt-10 pt-6">
               <div className="flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm text-center sm:text-left">
                     © {new Date().getFullYear()} SolarPro Energy. All rights reserved.
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 mt-4 sm:mt-0">
                     <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        Privacy Policy
                     </Link>
                     <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        Terms of Service
                     </Link>
                     <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        Sitemap
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
