"use client";

import { Button } from "app/components/ui/button";
import { Card } from "app/components/ui/card";
import { Input } from "app/components/ui/input";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * LoginPage
 * Employee portal login page.
 * Authentication logic is handled separately — this file covers UI only.
 */
export default function LoginPage() {
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);
      setLoading(true);

      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      try {
         const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
         });

         const data = await response.json();

         if (!response.ok) {
            setError(data.error || "Error al iniciar sesion");
            return;
         }

         router.push("/dashboard");
      } catch (err) {
         setError("Error de conexion, intenta de nuevo mas tarde");
      } finally {
         setLoading(false);
      }
   };

   return (
      <main className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center px-4 py-12">
         <div className="w-full max-w-md">
            {/* Brand header */}
            <div className="text-center mb-8">
               <h1 className="text-2xl font-semibold text-gray-900">
                  Portal de Empleados
               </h1>
               <p className="text-sm text-gray-500 mt-1.5">
                  Ingresa tus credenciales para acceder al sistema
               </p>
            </div>

            {/* Login card */}
            <Card className="p-8 shadow-sm">
               {/* Form */}
               <form className="space-y-6" onSubmit={handleSubmit}>
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

                  {/* Password */}
                  <div className="space-y-2">
                     <div className="flex items-center justify-between">
                        <label
                           htmlFor="password"
                           className="text-sm font-medium"
                        >
                           Contraseña
                        </label>
                        <Link
                           href="#"
                           className="text-sm text-green-600 hover:text-green-700 transition-colors"
                        >
                           Olvidaste tu contraseña?
                        </Link>
                     </div>
                     <div className="relative">
                        <Input
                           id="password"
                           name="password"
                           type={showPassword ? "text" : "password"}
                           placeholder="Introduce tu contraseña"
                           required
                           autoComplete="current-password"
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

                  {/* Error message */}
                  {error && (
                     <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  {/* Submit */}
                  <Button
                     type="submit"
                     disabled={loading}
                     className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                     <LogIn className="mr-2 h-4 w-4" />
                     {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </Button>
               </form>

               {/* Footer link */}

               {/* In a future, we may make a method for CLIENTS check a CLIENT dashboard, for now is only for employees. */}

               {/*<div className="pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600">
                     No tienes una cuenta?{" "}
                     <Link
                        href="/Signup"
                        className="text-green-600 font-medium hover:text-green-700 transition-colors"
                     >
                        Regístrate aquí
                     </Link>
                  </p>
               </div>*/}
            </Card>

            {/* Disclaimer */}
            <p className="text-center text-xs text-gray-400 mt-6">
               Acceso restringido al personal autorizado de Voltagene SRL.
            </p>
         </div>
      </main>
   );
}
