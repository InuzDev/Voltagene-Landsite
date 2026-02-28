import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
   title: "Voltagene SRL - Limpieza de Paneles Solares",
   description:
      "Servicio profesional de limpieza y mantenimiento de paneles solares para maximizar la eficiencia y prolongar la vida útil de tu sistema fotovoltaico.",
};

export default function PanelCleaningLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <>{children}</>;
}
