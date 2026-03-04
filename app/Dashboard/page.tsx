"use client";

import { AccountingSection } from "app/components/AccountingSection";
import { EnergySection } from "app/components/EnergySection";
import { FormsSection } from "app/components/FormSection";
import { LoadingScreen } from "app/components/LoadingScreen";
import { OverviewSection } from "app/components/OverviewSection";
import { Button } from "app/components/ui/button";
import {
   BarChart3,
   FileText,
   LayoutDashboard,
   LogOut,
   Menu,
   X,
   Zap,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { ActiveSection } from "app/lib/types";
import type { SessionUser } from "app/lib/types";

export default function DashboardPage() {
   const router = useRouter();
   const [activeSection, setActiveSection] =
      useState<ActiveSection>("overview");
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [user, setUser] = useState<SessionUser | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function checkSession() {
         try {
            const response = await fetch("/api/auth/session");

            if (!response.ok) {
               router.replace("/Login");
               return;
            }

            const data = await response.json();
            setUser(data.user);
         } catch {
            router.replace("/Login");
         } finally {
            setLoading(false);
         }
      }

      checkSession();
   }, [router]);

   if (loading) return <LoadingScreen />;
   if (!user) return null;

   const navItems = [
      { id: "overview" as const, label: "Resumen", icon: LayoutDashboard },
      { id: "forms" as const, label: "Formularios", icon: FileText },
      { id: "accounting" as const, label: "Contabilidad", icon: BarChart3 },
      { id: "energy" as const, label: "Consumo Energético", icon: Zap },
   ];

   const sectionTitles: Record<ActiveSection, string> = {
      overview: "Resumen",
      forms: "Formularios de Clientes",
      accounting: "Contabilidad",
      energy: "Consumo Energético",
   };

   return (
      <div className="flex h-screen bg-gray-50 overflow-hidden">
         {/* Mobile sidebar backdrop */}
         {sidebarOpen && (
            <div
               className="fixed inset-0 bg-black/50 z-40 md:hidden"
               onClick={() => setSidebarOpen(false)}
            />
         )}

         {/* ── Sidebar ── */}
         <aside
            className={`
               fixed md:static inset-y-0 left-0 z-50
               w-64 bg-gray-900 text-white flex flex-col shrink-0
               transform transition-transform duration-300 ease-in-out
               ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}
         >
            {/* Sidebar header */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-white/10">
               <div className="flex items-center gap-3 min-w-0">
                  <Image
                     src="/Logo-main.png"
                     alt="Voltagene SRL"
                     width={36}
                     height={36}
                     className="shrink-0"
                  />
                  <div className="min-w-0">
                     <p className="font-bold text-sm leading-tight truncate">
                        Voltagene SRL
                     </p>
                     <p className="text-xs text-gray-400">Panel de Control</p>
                  </div>
               </div>
               <button
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden text-gray-400 hover:text-white transition-colors shrink-0"
                  aria-label="Cerrar menú"
               >
                  <X className="h-5 w-5" />
               </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-5 px-3 space-y-1 overflow-y-auto">
               {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                     <button
                        key={item.id}
                        onClick={() => {
                           setActiveSection(item.id);
                           setSidebarOpen(false);
                        }}
                        className={`
                           w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                           transition-all duration-200
                           ${isActive ? "bg-green-600 text-white" : "text-gray-300 hover:bg-white/10 hover:text-white"}
                        `}
                     >
                        <Icon className="h-5 w-5 shrink-0" />
                        {item.label}
                     </button>
                  );
               })}
            </nav>

            {/* Sidebar footer */}
            <div className="px-4 py-4 border-t border-white/10">
               <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold shrink-0">
                     {user.name[0]}
                     {user.surname[0]}
                  </div>
                  <div className="min-w-0">
                     <p className="text-sm font-medium text-white truncate">
                        {user.name} {user.surname}
                     </p>
                     <p className="text-xs text-gray-400 truncate">
                        {user.role}
                     </p>
                  </div>
               </div>
               <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/10 gap-2"
                  onClick={async () => {
                     await fetch("/api/auth/logout", { method: "POST" });
                     router.replace("/Login");
                  }}
               >
                  <LogOut className="h-4 w-4" />
                  Cerrar Sesión
               </Button>
            </div>
         </aside>

         {/* ── Main content area ── */}
         <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            {/* Top bar */}
            <header className="bg-white border-b border-gray-200 px-4 md:px-6 h-16 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-3">
                  <button
                     onClick={() => setSidebarOpen(true)}
                     className="md:hidden text-gray-500 hover:text-gray-900 transition-colors"
                     aria-label="Abrir menú"
                  >
                     <Menu className="h-6 w-6" />
                  </button>
                  <h1 className="text-lg font-semibold text-gray-900">
                     {sectionTitles[activeSection]}
                  </h1>
               </div>

               {/* Employee badge */}
               <div className="flex items-center gap-2.5">
                  <div className="hidden sm:flex flex-col items-end">
                     <span className="text-sm font-medium text-gray-900 leading-tight">
                        {user.name} {user.surname}
                     </span>
                     <span className="text-xs text-gray-400">{user.role}</span>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                     {user.name[0]}
                     {user.surname[0]}
                  </div>
               </div>
            </header>

            {/* Active section */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
               {activeSection === "overview" && <OverviewSection />}
               {activeSection === "forms" && <FormsSection />}
               {activeSection === "accounting" && <AccountingSection />}
               {activeSection === "energy" && <EnergySection />}
            </main>
         </div>
      </div>
   );
}
