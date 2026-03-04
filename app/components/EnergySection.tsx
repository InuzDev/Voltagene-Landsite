"use client";

import { useState } from "react";
import { BarChart3, DollarSign, Sun, Zap } from "lucide-react";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "app/components/ui/select";
import { MOCK_ENERGY_CLIENTS } from "app/lib/mockData";

export function EnergySection() {
   const [selectedId, setSelectedId] = useState<number>(1);

   const client =
      MOCK_ENERGY_CLIENTS.find((c) => c.id === selectedId) ??
      MOCK_ENERGY_CLIENTS[0];

   if (!client) return null;

   const energyStats = [
      {
         label: "Sistema Instalado",
         value: `${client.systemKwp} kWp`,
         icon: Zap,
         accent: "bg-yellow-50 text-yellow-600",
      },
      {
         label: "Producción Hoy",
         value: `${client.dailyKwh} kWh`,
         icon: Sun,
         accent: "bg-orange-50 text-orange-500",
      },
      {
         label: "Producción del Mes",
         value: `${client.monthlyKwh.toLocaleString("es-DO")} kWh`,
         icon: BarChart3,
         accent: "bg-blue-50 text-blue-600",
      },
      {
         label: "Ahorro Estimado",
         value: `RD$ ${client.monthlySavings.toLocaleString("es-DO")}`,
         icon: DollarSign,
         accent: "bg-green-50 text-green-600",
      },
   ];

   return (
      <div className="space-y-6">
         {/* Client selector */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <label
               htmlFor="client-select"
               className="block text-sm font-medium text-gray-700 mb-2"
            >
               Seleccionar Cliente
            </label>
            <Select
               value={String(selectedId)}
               onValueChange={(val) => setSelectedId(Number(val))}
            >
               <SelectTrigger
                  id="client-select"
                  className="w-full sm:w-80 border-gray-200 bg-white text-sm text-gray-900 shadow-sm focus:ring-green-500 focus:border-green-500"
               >
                  <SelectValue placeholder="Seleccionar cliente" />
               </SelectTrigger>
               <SelectContent>
                  {MOCK_ENERGY_CLIENTS.map((c) => (
                     <SelectItem
                        key={c.id}
                        value={String(c.id)}
                        className="text-sm text-gray-900 cursor-pointer"
                     >
                        {c.name} — {c.location}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </div>

         {/* Energy stat cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {energyStats.map((stat) => {
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
                  </div>
               );
            })}
         </div>

         {/* Chart placeholder */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
               Producción Energética
            </h3>
            <p className="text-xs text-gray-400 mb-5">
               Historial de generación para {client.name}
            </p>
            <div className="h-56 bg-gray-50 rounded-lg flex flex-col items-center justify-center border border-dashed border-gray-200">
               <Zap className="h-10 w-10 text-gray-300 mb-2" />
               <p className="text-sm text-gray-400 font-medium">
                  Gráfica de producción energética
               </p>
               <p className="text-xs text-gray-400 mt-1">
                  Conecta tu API de monitoreo solar aquí
               </p>
            </div>
         </div>

         {/* All clients table */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
               <h3 className="text-sm font-semibold text-gray-900">
                  Todos los Clientes
               </h3>
               <span className="text-xs text-gray-400">
                  {MOCK_ENERGY_CLIENTS.length} sistemas activos
               </span>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-sm">
                  <thead>
                     <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                           Cliente
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                           Ubicación
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                           Sistema
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                           Prod. Mensual
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                           Ahorro / Mes
                        </th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                     {MOCK_ENERGY_CLIENTS.map((c) => (
                        <tr
                           key={c.id}
                           onClick={() => setSelectedId(c.id)}
                           className={`cursor-pointer transition-colors ${c.id === selectedId ? "bg-green-50" : "hover:bg-gray-50"}`}
                        >
                           <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">
                              {c.name}
                           </td>
                           <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">
                              {c.location}
                           </td>
                           <td className="px-5 py-3.5 text-gray-700 whitespace-nowrap">
                              {c.systemKwp} kWp
                           </td>
                           <td className="px-5 py-3.5 text-gray-700 whitespace-nowrap hidden sm:table-cell">
                              {c.monthlyKwh.toLocaleString("es-DO")} kWh
                           </td>
                           <td className="px-5 py-3.5 font-semibold text-green-600 whitespace-nowrap">
                              RD$ {c.monthlySavings.toLocaleString("es-DO")}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}
