"use client";

import {
   Activity,
   DollarSign,
   FileText,
   MessageSquare,
   TrendingUp,
   Users,
} from "lucide-react";
import StatusBadge from "./ui/StatusBadge";
import { MOCK_CONTACT_FORMS } from "app/lib/mockData";

export function OverviewSection() {
   const stats = [
      {
         label: "Clientes Activos",
         value: "24",
         change: "+3 este mes",
         trend: "up" as const,
         icon: Users,
         accent: "bg-blue-50 text-blue-600",
      },
      {
         label: "Cotizaciones Pendientes",
         value: "6",
         change: "2 nuevas hoy",
         trend: "neutral" as const,
         icon: FileText,
         accent: "bg-yellow-50 text-yellow-600",
      },
      {
         label: "Instalaciones Activas",
         value: "3",
         change: "En progreso",
         trend: "neutral" as const,
         icon: Activity,
         accent: "bg-purple-50 text-purple-600",
      },
      {
         label: "Facturado este mes",
         value: "RD$ 485K",
         change: "+12% vs anterior",
         trend: "up" as const,
         icon: DollarSign,
         accent: "bg-green-50 text-green-600",
      },
   ];

   return (
      <div className="space-y-6">
         {/* Greeting */}
         <div>
            <h2 className="text-xl font-semibold text-gray-900">
               Bienvenido, David
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
               Aquí tienes un resumen de la actividad reciente.
            </p>
         </div>

         {/* Stat cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat) => {
               const Icon = stat.icon;
               return (
                  <div
                     key={stat.label}
                     className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
                  >
                     <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-gray-500 font-medium">
                           {stat.label}
                        </p>
                        <div className={`p-2 rounded-lg ${stat.accent}`}>
                           <Icon className="h-4 w-4" />
                        </div>
                     </div>
                     <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                     </p>
                     <p
                        className={`text-xs mt-1.5 flex items-center gap-1 ${
                           stat.trend === "up"
                              ? "text-green-600"
                              : "text-gray-500"
                        }`}
                     >
                        {stat.trend === "up" && (
                           <TrendingUp className="h-3 w-3" />
                        )}
                        {stat.change}
                     </p>
                  </div>
               );
            })}
         </div>

         {/* Recent activity */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
               <h3 className="text-sm font-semibold text-gray-900">
                  Actividad Reciente
               </h3>
            </div>
            <div className="divide-y divide-gray-50">
               {MOCK_CONTACT_FORMS.map((form) => (
                  <div
                     key={form.id}
                     className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors"
                  >
                     <div className="flex items-center gap-3 min-w-0">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                           <MessageSquare className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="min-w-0">
                           <p className="text-sm font-medium text-gray-900 truncate">
                              {form.name}
                           </p>
                           <p className="text-xs text-gray-500 truncate">
                              {form.topic}
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 shrink-0 ml-3">
                        <StatusBadge status={form.status} />
                        <span className="text-xs text-gray-400 hidden sm:block">
                           {form.date}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
