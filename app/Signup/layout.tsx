import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
   title: "Voltagene SRL - Sign up",
   description: "Registrate como empleado de Voltagene",
};

export default function LoginPage({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <>{children}</>;
}
