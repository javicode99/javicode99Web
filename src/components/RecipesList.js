import React from "react"
import Cardres from "../components/Cardres"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulBlog {
      nodes {
        titulo
        createdAt
        subCategoria
        portada {
          gatsbyImageData(width: 300, placeholder: BLURRED, layout: FULL_WIDTH)
        }
        miniResumen
        tags
      }
    }
  }
`

const RecipeList = () => {
  const { allContentfulBlog } = useStaticQuery(query)
  const { nodes } = allContentfulBlog

  return (
    <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 gap-x-3 gap-y-9">
      {nodes.map((a, i) => (
        <Cardres
          key={i}
          imagen={a.portada.gatsbyImageData}
          titulo={a.titulo}
          subCategoria={a.subCategoria}
          miniResumen={a.miniResumen}
          tags={a.tags}
        />
      ))}
    </div>
  )
}

export default RecipeList
