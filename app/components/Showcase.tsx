import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import React, { ReactNode } from 'react';

interface HoverTextProps {
   children: ReactNode;
}

const Slider = ({ children }: HoverTextProps) => {
   return (
      <Splide
         options={{
            type: 'loop',
            autoplay: true,
            perPage: 1,
         }}
         aria-label="Slider"
      >
         {/* First slide with children overlaid */}
         <SplideSlide className="relative">
            <img className="w-full h-auto object-cover" src="BlueHouse.jpg" alt="BlueHouse" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
               {children}
            </div>
         </SplideSlide>
         {/* Second slide with children overlaid */}
         <SplideSlide className="relative">
            <img className="w-full h-auto object-cover" src="GasStation.png" alt="GasStation" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
               {children}
            </div>
         </SplideSlide>
      </Splide>
   );
};

export default Slider;