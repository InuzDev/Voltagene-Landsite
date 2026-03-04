"use client";

import { useState } from "react";
import StatusBadge from "./ui/StatusBadge";
import { MOCK_CONTACT_FORMS, MOCK_QUOTE_REQUESTS } from "app/lib/mockData";
import type { FormsTab } from "app/lib/types";

export function FormsSection() {
   const [tab, setTab] = useState<FormsTab>("contact");

   return (
      <div className="space-y-5">
         {/* Tab switcher */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-1 inline-flex gap-1">
            <button
               onClick={() => setTab("contact")}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  tab === "contact"
                     ? "bg-green-600 text-white shadow-sm"
                     : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
               }`}
            >
               Formularios de Contacto
            </button>
            <button
               onClick={() => setTab("quotes")}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  tab === "quotes"
                     ? "bg-green-600 text-white shadow-sm"
                     : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
               }`}
            >
               Solicitudes de Cotización
            </button>
         </div>

         {/* Table card */}
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
               <h3 className="text-sm font-semibold text-gray-900">
                  {tab === "contact"
                     ? "Formularios de Contacto"
                     : "Solicitudes de Cotización"}
               </h3>
               <span className="text-xs text-gray-400">
                  {tab === "contact"
                     ? MOCK_CONTACT_FORMS.length
                     : MOCK_QUOTE_REQUESTS.length}{" "}
                  registros
               </span>
            </div>

            <div className="overflow-x-auto">
               {tab === "contact" ? (
                  <table className="w-full text-sm">
                     <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Nombre
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Correo
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                              Teléfono
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                              Asunto
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Fecha
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Estado
                           </th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                        {MOCK_CONTACT_FORMS.map((form) => (
                           <tr
                              key={form.id}
                              className="hover:bg-gray-50 transition-colors"
                           >
                              <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">
                                 {form.name}
                              </td>
                              <td className="px-5 py-3.5 text-gray-600">
                                 {form.email}
                              </td>
                              <td className="px-5 py-3.5 text-gray-600 hidden md:table-cell whitespace-nowrap">
                                 {form.phone}
                              </td>
                              <td className="px-5 py-3.5 text-gray-600 hidden lg:table-cell max-w-xs">
                                 <span className="truncate block">
                                    {form.topic}
                                 </span>
                              </td>
                              <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">
                                 {form.date}
                              </td>
                              <td className="px-5 py-3.5">
                                 <StatusBadge status={form.status} />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               ) : (
                  <table className="w-full text-sm">
                     <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Nombre
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Correo
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                              Distribuidor
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                              Asunto
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Fecha
                           </th>
                           <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Estado
                           </th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                        {MOCK_QUOTE_REQUESTS.map((req) => (
                           <tr
                              key={req.id}
                              className="hover:bg-gray-50 transition-colors"
                           >
                              <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">
                                 {req.name}
                              </td>
                              <td className="px-5 py-3.5 text-gray-600">
                                 {req.email}
                              </td>
                              <td className="px-5 py-3.5 text-gray-600 hidden md:table-cell">
                                 {req.distributor}
                              </td>
                              <td className="px-5 py-3.5 text-gray-600 hidden lg:table-cell max-w-xs">
                                 <span className="truncate block">
                                    {req.topic}
                                 </span>
                              </td>
                              <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">
                                 {req.date}
                              </td>
                              <td className="px-5 py-3.5">
                                 <StatusBadge status={req.status} />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               )}
            </div>
         </div>
      </div>
   );
}
