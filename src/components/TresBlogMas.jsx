import React from "react"
import Cardres from "../components/Cardres"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulBlog(sort: { fields: portada___updatedAt }, limit: 3) {
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

const TresBlogMas = () => {
  const { allContentfulBlog } = useStaticQuery(query)
  const { nodes } = allContentfulBlog

  return (
    <section className="bg-neutral">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div>
          <span className="inline-block w-full h-0.5 bg-white"></span>
          <h2 className="text-white mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
            Blogs
          </h2>
        </div>

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
      </div>
    </section>
  )
}

export default TresBlogMas
