"use client";

import { Button } from "app/components/ui/button";
import { Card } from "app/components/ui/card";
import { Input } from "app/components/ui/input";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";

/**
 * SignupPage
 * Employee portal account creation page.
 * Registration logic is handled separately — this file covers UI only.
 */
export default function SignupPage() {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Registration logic to be implemented
   };

   return (
      <main className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center px-4 py-12">
         <div className="w-full max-w-md">
            {/* Brand header */}
            <div className="text-center mb-8">
               <h1 className="text-2xl font-semibold text-gray-900">
                  Crear cuenta de empleado [LOGICA NO EMPLEADA, NO FUNCIONA]
               </h1>
               <p className="text-sm text-gray-500 mt-1.5">
                  Completa el formulario para registrarte en el sistema
               </p>
            </div>

            {/* Signup card */}
            <Card className="p-8 shadow-sm">
               {/* Form */}
               <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* First and last name */}
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
                           name="firstName"
                           placeholder="Introduce tu nombre"
                           required
                           autoComplete="given-name"
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
                           name="lastName"
                           placeholder="Introduce tu apellido"
                           required
                           autoComplete="family-name"
                        />
                     </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium">
                        Correo Electrónico
                     </label>
                     <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="empleado@voltagene.com"
                        required
                        autoComplete="email"
                     />
                  </div>

                  {/* Position */}
                  <div className="space-y-2">
                     <label htmlFor="position" className="text-sm font-medium">
                        Cargo / Posición
                     </label>
                     <Input
                        id="position"
                        name="position"
                        placeholder="Ej. Técnico Solar, Administrador"
                        required
                     />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                     <label htmlFor="password" className="text-sm font-medium">
                        Contraseña
                     </label>
                     <div className="relative">
                        <Input
                           id="password"
                           name="password"
                           type={showPassword ? "text" : "password"}
                           placeholder="Introduce una contraseña segura"
                           required
                           autoComplete="new-password"
                           className="pr-10"
                        />
                        <button
                           type="button"
                           onClick={() => setShowPassword((prev) => !prev)}
                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                           aria-label={
                              showPassword
                                 ? "Ocultar contraseña"
                                 : "Mostrar contraseña"
                           }
                        >
                           {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                           ) : (
                              <Eye className="h-4 w-4" />
                           )}
                        </button>
                     </div>
                  </div>

                  {/* Confirm password */}
                  <div className="space-y-2">
                     <label
                        htmlFor="confirmPassword"
                        className="text-sm font-medium"
                     >
                        Confirmar Contraseña
                     </label>
                     <div className="relative">
                        <Input
                           id="confirmPassword"
                           name="confirmPassword"
                           type={showConfirmPassword ? "text" : "password"}
                           placeholder="Repite tu contraseña"
                           required
                           autoComplete="new-password"
                           className="pr-10"
                        />
                        <button
                           type="button"
                           onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                           }
                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                           aria-label={
                              showConfirmPassword
                                 ? "Ocultar contraseña"
                                 : "Mostrar contraseña"
                           }
                        >
                           {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                           ) : (
                              <Eye className="h-4 w-4" />
                           )}
                        </button>
                     </div>
                  </div>

                  {/* Submit */}
                  <Button
                     type="submit"
                     className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                     <UserPlus className="mr-2 h-4 w-4" />
                     Crear Cuenta
                  </Button>
               </form>

               {/* Footer link */}
               <div className="pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600">
                     Ya tienes una cuenta?{" "}
                     <Link
                        href="/Login"
                        className="text-green-600 font-medium hover:text-green-700 transition-colors"
                     >
                        Inicia sesión
                     </Link>
                  </p>
               </div>
            </Card>

            {/* Disclaimer */}
            <p className="text-center text-xs text-gray-400 mt-6">
               El registro está restringido al personal autorizado de Voltagene
               SRL.
            </p>
         </div>
      </main>
   );
}
