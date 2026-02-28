// Low priority, need to be redo

"use client";
import { useEffect } from "react";
import { SiteHeader } from "./components/Site-header";
import "./Global.css";
// Error boundaries must be Client Components - Next.Js docs

export default function GlobalError({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   useEffect(() => {
      console.error(error);
   }, [error]);
   return (
      <html>
         <body>
            <SiteHeader />
            <div className="text-center bg-green-900 text-white">
               <h1>Oh no!</h1>
               <h2>Algo a salido mal, vuelva a intentarlo de nuevo:</h2>
               {/* Attempt to recover by trying to re-render the segment */}
               <button onClick={() => reset()}>Reintentar</button>
               <br />
               <p>
                  Si este error sigue persistiendo, contacte al departamento IT
               </p>
            </div>
         </body>
      </html>
   );
}
