import { Input } from "app/components/input"
import { SiteFooter } from "app/components/Site-footer"
import { SiteHeader } from "app/components/Site-header"
import { Textarea } from "app/components/textarea"
import { Button } from "app/components/ui/button"
import { Card } from "app/components/ui/card"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
// import Image from "next/image"

// Making this functional.
export default function ContactPage() {
   return (
      <>
         <SiteHeader />
         <main className="min-h-screen bg-white">
            {/* Contact Header Section */}
            <section className="py-16 px-4 md:px-6 lg:px-8">
               <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                     <h1 className="text-4xl font-bold mb-4">Contactanos</h1>
                     <p className="text-gray-600 max-w-2xl mx-auto">
                        ¿Tiene alguna pregunta sobre nuestras soluciones solares? Contacte con nuestro equipo y con gusto le ayudaremos.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Contact Form */}
                     <div>
                        <Card className="p-8 shadow-sm">
                           <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
                           <form className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">
                                       Nombre
                                    </label>
                                    <Input id="firstName" name="firstName" placeholder="Introduce tu nombre" required />
                                 </div>
                                 <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">
                                       Apellido
                                    </label>
                                    <Input id="lastName" name="lastName" placeholder="Introduce tu apellido" required />
                                 </div>
                              </div>

                              <div className="space-y-2">
                                 <label htmlFor="email" className="text-sm font-medium">
                                    E-mail / Correo Electrónico
                                 </label>
                                 <Input id="email" name="email" type="email" placeholder="Introduce tu dirección de correo electrónico" required />
                              </div>

                              <div className="space-y-2">
                                 <label htmlFor="phone" className="text-sm font-medium">
                                    Número de telefono
                                 </label>
                                 <Input id="phone" name="phone" type="tel" placeholder="Introduce tu número de telefono" />
                              </div>

                              <div className="space-y-2">
                                 <label htmlFor="subject" className="text-sm font-medium">
                                    Asunto
                                 </label>
                                 <Input id="subject" name="subject" placeholder="Asunto" required />
                              </div>

                              <div className="space-y-2">
                                 <label htmlFor="message" className="text-sm font-medium">
                                    Mensaje
                                 </label>
                                 <Textarea id="message" name="message" placeholder="Cuéntanos cómo podemos ayudarte" rows={5} required />
                              </div>

                              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                                 Enviar mensaje
                              </Button>
                           </form>
                        </Card>
                     </div>

                     {/* Contact Information */}
                     <div className="space-y-8">
                        <div>
                           <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                           <p className="text-gray-600 mb-8">
                              Contáctenos directamente o visite nuestra oficina.
                              Nuestro equipo está listo para responder sus preguntas y brindarle las soluciones solares que necesita.
                           </p>

                           <div className="space-y-6">
                              <div className="flex items-start">
                                 <div className="flex-shrink-0 mt-1">
                                    <MapPin className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">Our Location</h3>
                                    <p className="text-gray-600">
                                       Calle Principal #123, Santiago de los Caballeros
                                       <br />
                                       República Dominicana
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <div className="flex-shrink-0 mt-1">
                                    <Phone className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">Número de telefono</h3>
                                    <p className="text-gray-600">+1 (809) 555-1234</p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <div className="flex-shrink-0 mt-1">
                                    <Mail className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">Correo Electrónico</h3>
                                    <p className="text-gray-600">info@voltagene.com</p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <div className="flex-shrink-0 mt-1">
                                    <Clock className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">Hora laboral</h3>
                                    <p className="text-gray-600">
                                       Lunes - Viernes: 8:00 AM - 6:00 PM
                                       <br />
                                       Sabado: 9:00 AM - 1:00 PM
                                       <br />
                                       Domingo: Cerrado
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Map */}
                        {/* <div className="mt-8">
                           <h3 className="text-xl font-medium mb-4">Find Us</h3>
                           <div className="relative h-[300px] w-full rounded-lg overflow-hidden border border-gray-200">
                              <Image src="/images/map-placeholder.jpg" alt="Office Location Map" fill className="object-cover" />
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
               <div className="max-w-7xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Ready to Switch to Solar?</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                     Dé el primer paso hacia la independencia energética y la sostenibilidad. Solicite una consulta gratuita con nuestros expertos.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">Obtenga una cotización gratis</Button>
               </div>
            </section>
         </main>
         <SiteFooter />
      </>
   )
}
