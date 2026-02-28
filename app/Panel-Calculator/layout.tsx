import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
   title: "Voltagene SRL - Calculadora Solar",
   description:
      "Calcule cuántos paneles solares necesita según su consumo energético mensual",
};

export default function CalculadoraSolarLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <>{children}</>;
}
