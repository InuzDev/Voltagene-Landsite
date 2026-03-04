"use client";

const StatusBadge = ({ status }: { status: string }) => {
   const palette: Record<string, string> = {
      Pendiente: "bg-yellow-100 text-yellow-700",
      Revisado: "bg-blue-100 text-blue-700",
      Respondido: "bg-green-100 text-green-700",
      "En proceso": "bg-purple-100 text-purple-700",
      Completado: "bg-green-100 text-green-700",
   };

   return (
      <span
         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${palette[status] ?? "bg-gray-100 text-gray-600"}`}
      >
         {status}
      </span>
   );
};

export default StatusBadge;
