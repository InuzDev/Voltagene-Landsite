import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
   title: "Voltagene SRL - Panel de Control",
   description:
      "Panel de control interno para empleados de Voltagene SRL.",
};

export default function DashboardLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return <>{children}</>;
}
