"use client";
import { DropdownSelect } from "app/components/DropdownSelect";
import { Button } from "app/components/ui/button";
import { Card } from "app/components/ui/card";
import { Input } from "app/components/ui/input";
import { Toaster } from "app/components/ui/sonner";
import { Distributor } from "app/const/const";
import { formatPhoneNumber } from "app/lib/utils";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

// This is recycling the contact us form, main differences are the form itself.

export default function ContactPage() {
   const [dist, setDistributor] = useState<string>("EDENORTE"); // Default value for the distributor
   const [rawValue, setRawValue] = useState("");
   const [formattedValue, setFormattedValue] = useState("");
   const [result, setResult] = React.useState("");
   console.log(rawValue); // avoid unused variable error

   // Format the number.
   const HandleFormatNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      const cleaned = input.replace(/\D/g, "");

      if (cleaned.length <= 11) {
         setRawValue(cleaned);
         setFormattedValue(formatPhoneNumber(cleaned));
      }
   };

   // This is where the form submit starts. Sending it to the destinated target.
   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult("Sending...");

      const form = event.currentTarget; // more reliable than event.target
      const formData = new FormData(form);

      formData.append("distribuidora", dist);
      formData.append("access_key", "eb583560-aae6-487b-a3c3-e97756fe2a81");

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
         });

         const data = await response.json();

         if (data.success) {
            setResult("Form submitted successfully");
            form.reset(); // reset the form
         } else {
            console.error("An error occurred:", data);
            setResult(data.message);
         }
      } catch (error) {
         console.error("Network error:", error);
         setResult("Something went wrong. Please try again.");
      }
   };

   console.info(result); // This is just to avoid eslint errors during deployment

   return (
      <>
         <main className="min-h-screen pt-16 bg-white">
            {/* Contact Header Section */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
               <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                     <h1 className="text-4xl font-bold mb-4">
                        Consigue una cotización
                     </h1>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Contact Form */}
                     <div>
                        <Card className="p-8 shadow-sm">
                           <form className="space-y-6" onSubmit={onSubmit}>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                                    <label
                                       htmlFor="firstName"
                                       className="text-sm font-medium"
                                    >
                                       Nombre
                                    </label>
                                    <Input
                                       id="firstName"
                                       name="Nombre"
                                       placeholder="Introduce tu nombre"
                                       required
                                    />
                                 </div>
                                 <div className="space-y-2">
                                    <label
                                       htmlFor="lastName"
                                       className="text-sm font-medium"
                                    >
                                       Apellido
                                    </label>
                                    <Input
                                       id="lastName"
                                       name="Apellido"
                                       placeholder="Introduce tu apellido"
                                       required
                                    />
                                 </div>
                              </div>

                              {/* It is required to add email? Ask HQ */}

                              {/* <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                E-mail / Correo Electrónico
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Introduce tu dirección de correo electrónico"
                                                required
                                            />
                                        </div> */}

                              <div className="space-y-2">
                                 <label
                                    htmlFor="phone"
                                    className="text-sm font-medium"
                                 >
                                    Número de telefono
                                 </label>
                                 <Input
                                    id="phone"
                                    name="Número de telefono"
                                    value={formattedValue}
                                    onChange={HandleFormatNumber}
                                    type="tel"
                                    placeholder="Introduce tu número de telefono"
                                 />{" "}
                              </div>

                              {/* Fix the dropdown menu, which aren't sending the designated data */}

                              <div className="space-y-2">
                                 <DropdownSelect
                                    id="energyProvider"
                                    label="Distribuidora de energía"
                                    name="distribuidora"
                                    placeholder="Selecciona tu distribuidora de energía"
                                    value={dist}
                                    onChange={setDistributor}
                                    options={Distributor}
                                 />
                              </div>

                              {/* Breakdown, check the Todo oomment */}

                              <div className="space-y-2">
                                 <label
                                    htmlFor="message"
                                    className="text-sm font-medium"
                                 >
                                    Mensaje
                                 </label>
                                 <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Nota extra sobre tu consulta"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                 ></textarea>
                              </div>

                              <Button
                                 type="submit"
                                 className="w-full bg-green-600 hover:bg-green-700"
                              >
                                 Enviar mensaje
                              </Button>
                           </form>
                        </Card>
                     </div>

                     {/* Contact Information */}
                     <div className="space-y-8">
                        <div>
                           <h2 className="text-2xl font-semibold mb-6">
                              Información de contacto
                           </h2>
                           <p className="text-gray-600 mb-8">
                              Contáctenos directamente con nuestro número de
                              telefono. Nuestro equipo está listo para responder
                              sus preguntas y brindarle las soluciones solares
                              que necesita.
                           </p>

                           <div className="space-y-6">
                              <div className="flex items-start">
                                 <div className="shrink-0 mt-1">
                                    <MapPin className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">
                                       Nuestra ubicación
                                    </h3>
                                    <p className="text-gray-600">
                                       Penetración, No. 22, Apto. Residencial
                                       Carlin V Apto A3, Cerro Hermoso, Santiago
                                       de los Caballeros
                                       <br />
                                       República Dominicana
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <div className="shrink-0 mt-1">
                                    <Phone className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">
                                       Número de telefono
                                    </h3>
                                    <p className="text-gray-600">
                                       +1 (849) 490-0306
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <div className="shrink-0 mt-1">
                                    <Mail className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">
                                       Correo Electrónico
                                    </h3>
                                    <p className="text-gray-600">
                                       info@voltagene.com
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <div className="text-base font-medium">
                                    <Instagram className="h-5 w-5 text-green-500" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">
                                       Instagram
                                    </h3>
                                    <p className="text-gray-600">@Voltagene</p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <div className="shrink-0 mt-1">
                                    <Clock className="h-5 w-5 text-green-600" />
                                 </div>
                                 <div className="ml-3">
                                    <h3 className="text-base font-medium">
                                       Hora laboral
                                    </h3>
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

                        {/* Let get the map from google maps. */}

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

            <Toaster />
         </main>
      </>
   );
}
