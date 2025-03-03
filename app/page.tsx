'use client'

// Home page of Voltagene SRL, contact and slider is shown here. Also Location with Google Maps
import HoverText from "components/HoverText"
import Slider from "components/Showcase"
import React from "react"

export default function Page() {
   return (
      <Slider>
         <HoverText />
      </Slider>
   )
}