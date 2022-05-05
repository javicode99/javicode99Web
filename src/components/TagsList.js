import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="container">
      <div className="text-white text-center mt-5 mb-5 grid gap-2 grid-cols-2 grid-rows-3 md:grid-cols-7 md:grid-rows-2">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link
              to={`/tags/${slug}`}
              key={index}
              className={`text-xs mr-2 py-5 md:py-2 px-4 text-gray-600 ${
                text === "Dificil"
                  ? "bg-red-500 text-white"
                  : text === "Facil"
                  ? "bg-green-500 text-white"
                  : text === "Python"
                  ? "bg-blue-500 text-white"
                  : text === "React"
                  ? "bg-blue-400 text-white"
                  : text === "Ruby"
                  ? "bg-red-300 text-white"
                  : text === "Snipet"
                  ? "bg-yellow-500 text-white"
                  : text === "Tutorial"
                  ? "bg-emerald-500 text-white"
                  : "bg-neutral-800 text-white"
              } rounded-sm`}
            >
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
