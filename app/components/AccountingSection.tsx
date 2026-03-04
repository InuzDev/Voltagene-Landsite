"use client";

import {
   BarChart3,
   DollarSign,
   FileText,
   TrendingDown,
   TrendingUp,
} from "lucide-react";
import { MOCK_TRANSACTIONS } from "app/lib/mockData";

export function AccountingSection() {
   const stats = [
      {
         label: "Ingresos del Mes",
         value: "RD$ 655,000",
         change: "+12% vs anterior",
         trend: "up" as const,
         icon: TrendingUp,
         accent: "bg-green-50 text-green-600",
      },
      {
         label: "Gastos del Mes",
         value: "RD$ 132,000",
         change: "-5% vs anterior",
         trend: "down" as const,
         icon: TrendingDown,
         accent: "bg-red-50 text-red-500",
      },
      {
         label: "Facturas Pendientes",
         value: "4",
         change: "RD$ 85,000 total",
         trend: "neutral" as const,
         icon: FileText,
         accent: "bg-yellow-50 text-yellow-600",
      },
      {
         label: "Ganancia Neta",
         value: "RD$ 523,000",
         change: "+18% vs anterior",
         trend: "up" as const,
         icon: DollarSign,
         accent: "bg-blue-50 text-blue-600",
      },
   ];

   return (
      <div className="space-y-6">
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
                              : stat.trend === "down"
                                ? "text-red-500"
                                : "text-gray-500"
                        }`}
                     >
                        {stat.trend === "up" && (
                           <TrendingUp className="h-3 w-3" />
                        )}
                        {stat.trend === "down" && (
                           <TrendingDown className="h-3 w-3" />
                        )}
                        {stat.change}
                     </p>
                  </div>
               );
            })}
         </div>

         {/* Chart placeholder */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
               Ingresos vs Gastos
            </h3>
            <p className="text-xs text-gray-400 mb-5">
               Comparativa mensual del ejercicio actual
            </p>
            <div className="h-56 bg-gray-50 rounded-lg flex flex-col items-center justify-center border border-dashed border-gray-200">
               <BarChart3 className="h-10 w-10 text-gray-300 mb-2" />
               <p className="text-sm text-gray-400 font-medium">
                  Gráfica de ingresos y gastos
               </p>
               <p className="text-xs text-gray-400 mt-1">
                  Integra tu herramienta de visualización aquí
               </p>
            </div>
         </div>

         {/* Transactions table */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
               <h3 className="text-sm font-semibold text-gray-900">
                  Transacciones Recientes
               </h3>
               <span className="text-xs text-gray-400">
                  {MOCK_TRANSACTIONS.length} registros
               </span>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-sm">
                  <thead>
                     <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                           Descripción
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                           Categoría
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                           Monto
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                           Fecha
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                           Tipo
                        </th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                     {MOCK_TRANSACTIONS.map((tx) => (
                        <tr
                           key={tx.id}
                           className="hover:bg-gray-50 transition-colors"
                        >
                           <td className="px-5 py-3.5 text-gray-900 max-w-xs">
                              <span className="truncate block">
                                 {tx.description}
                              </span>
                           </td>
                           <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">
                              {tx.category}
                           </td>
                           <td
                              className={`px-5 py-3.5 font-semibold whitespace-nowrap ${tx.type === "income" ? "text-green-600" : "text-red-500"}`}
                           >
                              {tx.type === "income" ? "+" : "-"} RD${" "}
                              {tx.amount.toLocaleString("es-DO")}
                           </td>
                           <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap hidden sm:table-cell">
                              {tx.date}
                           </td>
                           <td className="px-5 py-3.5">
                              <span
                                 className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.type === "income" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
                              >
                                 {tx.type === "income" ? "Ingreso" : "Gasto"}
                              </span>
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
