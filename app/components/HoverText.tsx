import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

//* Check documentation for the slider in https://splidejs.com/integration/react-splide/

export const HoverText = () => {
   // This text is shown over the slider while it moves with it.
   return (
      <div className="relative h-96 w-full">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl p-6 shadow-xl">
               <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
               <p className="text-gray-600 mb-4">
                  Discover our latest collection of stunning visuals and engaging stories.
               </p>
               <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => {/* Add your click handler here */ }}
               >
                  Learn More
               </button>
            </div>
         </div>
      </div>
   )
}