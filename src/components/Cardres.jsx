import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"

const Cardres = ({ imagen, titulo, subCategoria, miniResumen, tags }) => {
  const urlTitulo = slugify(titulo, { lower: true })
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-70 md:w-80 cursor-pointer m-auto">
      <Link to={`/blog/${urlTitulo}`} className="w-full block h-full">
        <GatsbyImage
          image={imagen}
          alt={titulo}
          className="max-h-40 w-full object-cover"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-indigo-500 text-md font-medium">{subCategoria}</p>
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {titulo}
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {miniResumen}
          </p>
          <div className="flex flex-wrap justify-starts items-center mt-4">
            {tags.map((e, i) => (
              <div
                key={i}
                className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
              >
                #{e}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cardres
