// Low priority, need to be redo

'use client'
import { useEffect } from "react"
import { SiteHeader } from "./components/Site-header"
import './Global.css'
// Error boundaries must be Client Components - Next.Js docs

export default function GlobalError(
   // Arguments
   { error, reset }:
      // Arguments type
      {
         error: Error & { digest?: string }
         reset: () => void
      }
) {
   // Start of the function

   // log the error to an error reporting service
   useEffect(() => {
      console.error(error)
   }, [error])
   return (
      // Global errors must include html and body tags, only Global errors
      <html>
         <body>
            <SiteHeader />
            <div className="text-center bg-green-900 text-white">
               <h1>Oh no!</h1>
               <h2>Algo a salido mal, vuelva a intentarlo de nuevo:</h2>
               {/* Attempt to recover by trying to re-render the segment */}
               <button onClick={() => reset()}>Reintentar</button>
               <br />
               <p>Si este error sigue persistiendo, contacte al departamento IT</p>
            </div>
         </body>
      </html>
   )
}