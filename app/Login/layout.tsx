import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
   title: "Voltagene SRL - Log in",
   description: "Ingresar al dashboard de Voltagene SRL",
};

export default function LoginPage({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <>{children}</>;
}
