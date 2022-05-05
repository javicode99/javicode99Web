import React from "react"
import Layout from "../../components/Layout"
import CardresSC from "../../components/CardresSC"
import { graphql } from "gatsby"

const cursos = ({ data }) => {
  const cursos = data.allContentfulCursos.nodes
  return (
    <Layout>
      <section className="bg-neutral pt-12">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <h2 className="text-white text-center mt-1 text-2xl font-bold tracking-wide uppercase lg:text-3xl">
              CURSOS
            </h2>
            <span className="inline-block w-full h-0.5 bg-white"></span>
          </div>
          <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 gap-x-3 gap-y-9">
            {cursos.map((a, i) => (
              <CardresSC
                key={i}
                imagen={a.image.gatsbyImageData}
                titulo={a.titulo}
                miniResumen={a.miniResumen.miniResumen}
                url={a.url}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulCursos {
      nodes {
        titulo
        miniResumen {
          miniResumen
        }
        enOferta
        image {
          gatsbyImageData(width: 300, placeholder: BLURRED, layout: FULL_WIDTH)
        }
        url
      }
    }
  }
`

export default cursos
