import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Cardres = ({ imagen, titulo, miniResumen, url }) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-70 md:w-80 cursor-pointer m-auto">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="w-full block h-full"
      >
        <GatsbyImage
          image={imagen}
          alt={titulo}
          className="max-h-40 w-full object-cover"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-gray-800 dark:text-white text-xl font-bold mb-2 text-center">
            {titulo}
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md text-center">
            {miniResumen}
          </p>
          <div className="flex align-middle justify-center mt-2">
            <button className="btn">Ver curso</button>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Cardres
