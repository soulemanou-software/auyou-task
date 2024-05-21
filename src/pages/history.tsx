// import * as React from " react"
// import {useEffect} from "react"
import "../components/glace.css"
export default function History() {
 
  return (
    <div className="w-screen h-screen px-2 bg-gray-300 glass-texture md:px-40">
      <h1 className="py-5 text-5xl font-bold text-center capitalize ">history</h1>
      <div className="relative flex flex-col items-center justify-start w-full gap-10 text-black rounded-md shadow-xl mb-2b ring-white ring-2 content-texture bg-opacity-5 hover:border-green-500 md:flex-row ring-opacity-50">
        <div className="w-full h-full px-2 rounded-lg backdrop-blur-sm">
          <p>{Date.now().toString()}</p>
          <div className="leading-loose ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae nam minima excepturi alias facilis sint, laudantium culpa quibusdam quod perferendis repudiandae voluptatum ad! Illo quo voluptatibus quidem quae veritatis.
          </div>
        </div>
      </div>
    </div>
  )
}