export function LoadingScreen() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
         <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 rounded-full border-4 border-green-200 border-t-green-600 animate-spin" />
            <p className="text-sm text-gray-500">Verificando sesión...</p>
         </div>
      </div>
   );
}
