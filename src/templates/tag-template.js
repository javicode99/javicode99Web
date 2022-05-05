import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Cardres from "../components/Cardres"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulBlog.nodes
  return (
    <Layout>
      <Seo titulo={pageContext.tag} />
      <section className="bg-neutral pt-12">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <h2 className="text-white text-center mt-1 text-2xl font-bold tracking-wide uppercase lg:text-3xl">
              {pageContext.tag}
            </h2>
            <span className="inline-block w-full h-0.5 bg-white"></span>
          </div>
          <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 gap-x-3 gap-y-9">
            {recipes.map((a, i) => (
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
    </Layout>
  )
}

export const query = graphql`
  query GetBlogByTags($tag: String) {
    allContentfulBlog(
      sort: { fields: titulo, order: ASC }
      filter: { tags: { eq: $tag } }
    ) {
      nodes {
        titulo
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

export default TagTemplate
