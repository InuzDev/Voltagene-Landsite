import type { AppProps } from "next/app";
import Script from "next/script";

const mapAPI = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_API}&callback=initMap`

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <script src={mapAPI} />
         <Component {...pageProps} />
      </>
   )
}