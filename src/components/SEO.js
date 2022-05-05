import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ titulo, descripcion }) => {
  const { site } = useStaticQuery(query)
  const metaDesciption = descripcion || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title={`${titulo} | ${site.siteMetadata.title}`}
      meta={[{ name: `descripcion`, content: metaDesciption }]}
    ></Helmet>
  )
}

export default SEO
