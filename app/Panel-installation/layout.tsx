import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
   title: "Voltagene SRL - Instalación Solar",
   description:
      "Instalación de sistemas solares fotovoltaicos para hogares, industrias y empresas",
};

export default function PanelInstallationLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <>{children}</>;
}
