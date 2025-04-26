// Still unused, fix the errors. - No explicit use of any

// "use client"

// import React, { useEffect, useRef } from "react"

// interface MapProps {
//    lat: number
//    lng: number
// }

// export default function GoogleMap({ lat, lng }: MapProps) {
//    const mapRef = useRef<HTMLDivElement>(null)

//    useEffect(() => {
//       const initializeMap = () => {
//          if (!window.google || !mapRef.current) return

//          const map = new window.google.maps.Map(mapRef.current, {
//             center: { lat, lng },
//             zoom: 15
//          })

//          new window.google.maps.Marker({
//             position: { lat, lng },
//             map,
//             title: "Estamos aqui!"
//          })
//       }

//       if (window.google) {
//          initializeMap();
//       } else {
//          (window as any).initMap = initializeMap
//       }
//    }, [lat, lng])

//    return (
//       <div ref={mapRef} />
//    )
// }