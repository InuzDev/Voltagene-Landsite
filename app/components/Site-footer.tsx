import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
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
                     Ofreciendo soluciones de energía sostenible desde 2023. Estamos comprometidos con un futuro más verde a través de tecnología solar innovadora.
                  </p>
                  <div className="flex space-x-4">
                     <Link href="https://www.facebook.com/profile.php?id=61552793234772" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook size={20} />
                        <span className="sr-only">Facebook</span>
                     </Link>
                     {/* <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                        <span className="sr-only">Twitter</span>
                     </Link> */}
                     <Link href="https://www.instagram.com/voltagene/" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                     </Link>
                     {/* <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                     </Link> */}
                  </div>
               </div>

               {/* Contact Info */}
               <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">Contáctanos</h3>
                  <ul className="space-y-3">
                     <li className="flex items-start">
                        <Phone className="h-5 w-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>+1 (849) 490-0306</span>
                     </li>
                     <li className="flex items-start">
                        <Mail className="h-5 w-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>info@voltagene.com</span>
                     </li>
                     <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Penetración, No. 22, Apto. Residencial Carlin V Apto A3, Cerro Hermoso, Santiago de los Caballeros</span>
                     </li>
                  </ul>
               </div>

               {/* Our Team */}
               {/* <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">Our Team</h3>
                  <p className="text-gray-300 mb-2">
                     Nuestro equipo de expertos certificados en energía solar cuenta con más de 25 años de experiencia combinada en soluciones renovables.
                  </p>
                  <Link href="#" className="text-green-600 hover:text-green-500 font-medium">
                     Conoce al equipo →
                  </Link>
               </div> */}

               {/* Quick Links */}
               <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">Enlaces Rápidos</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link href="/Services" className="text-gray-300 hover:text-white transition-colors">
                           Nuestros Servicios
                        </Link>
                     </li>
                     <li>
                        <Link href="/#projects" className="text-gray-300 hover:text-white transition-colors">
                           Proyectos Recientes
                        </Link>
                     </li>
                     <li>
                        <Link href="/Panel-Calculator" className="text-gray-300 hover:text-white transition-colors">
                           Calculadora Solar
                        </Link>
                     </li>
                     {/* <li>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                           Opciones de Financiamiento
                        </Link>
                     </li> */}
                     {/* <li>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                           Preguntas Frecuentes
                        </Link>
                     </li> */}
                  </ul>
               </div>
            </div>

            {/* Bottom Bar - Improved for mobile */}
            <div className="border-t border-gray-800 mt-10 pt-6">
               <div className="flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm text-center sm:text-left">
                     © {new Date().getFullYear()} Voltagene SRL. Todos los derechos reservados.
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 mt-4 sm:mt-0">
                     <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        Política de Privacidad
                     </Link>
                     <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        Términos del Servicio
                     </Link>
                     {/* <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        Mapa del Sitio
                     </Link> */}
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
