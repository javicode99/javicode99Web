import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import slugify from "slugify"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"

const Bold = ({ children }) => <span className="bold">{children}</span>

const Text = ({ children }) => <p className="text-justify m-5">{children}</p>
// Las opciones del raw o markdown de contentfull las imagenes se llaman de la manera mencionada
// abajo y los tipos de datos salen de aqui https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
// https://www.gatsbyjs.com/plugins/gatsby-source-contentful/#embedding-an-image-in-a-rich-text-field
// Arriba se demuestra como se llama una imagen ya que el metodo embet asset en mayuscula no funciona.

// Los elementos dados por children casi siempre son p o algun tipo de texto.
const options = {
  renderMark: {
    [MARKS.ITALIC]: text => <i>{text}</i>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
    [MARKS.BOLD]: text => <Bold className="font-bold">{text}</Bold>,
    [MARKS.CODE]: text => (
      <div className="bg-black py-5 px-4 rounded-md my-6">{text}</div>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.QUOTE]: (node, children) => (
      <div class="max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow mx-20 my-6">
        <div class="mb-2">
          <div class="h-3 text-3xl text-left text-gray-600">“</div>
          <p class="px-10 text-md text-center text-gray-600">{children}</p>
          <div class="h-3 text-3xl text-right text-gray-600">”</div>
        </div>
      </div>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline" target="_blank" rel="noreferrer">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc ml-4 my-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal ml-4 my-4">{children}</ol>
    ),
    [BLOCKS.HR]: (node, children) => <hr className="my-6" />,
    "embedded-asset-block": node => {
      const { gatsbyImageData } = node.data.target
      if (!gatsbyImageData) {
        // asset is not an image
        return null
      }
      return <GatsbyImage image={gatsbyImageData} className="rounded-md m-4" />
    },
  },
}

const RecipeTemplate = ({ data }) => {
  const { titulo, miniResumen, tags, createdAt, contenido } =
    data.contentfulBlog
  const date = new Date(createdAt)
  let año = date.getFullYear()
  let mes = date.getMonth()
  let dia = date.getDay()
  return (
    <Layout>
      <Seo titulo={titulo} descripcion={miniResumen} />
      <div className="bg-neutral ">
        <div className="mx-auto max-w-3xl px-12 py-8 sm:px-10 sm:py-12 lg:max-w-6xl lg:py-20 lg:px-48 xl:max-w-6xl text-white">
          <h1 className="text-5xl font-bold">{titulo}</h1>
          <div className="my-5">
            {tags.map((a, i) => {
              let x = slugify(a, { lower: true })
              return (
                <Link
                  className="mr-3 bg-yellow-400 px-3 py-1 cursor-pointer text-black rounded-sm hover:text-white"
                  to={`/tags/${x}`}
                  key={i}
                >
                  {a}
                </Link>
              )
            })}
          </div>
          <p>{` ${año}/${mes}/${dia}`}</p>
          <div className="mt-4 prose prose-slate">
            {renderRichText(contenido, options)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Recuerda las querys que con export son para las paginas y las const son para los componentes.

export const query = graphql`
  query getOneBlog($titulo: String) {
    contentfulBlog(titulo: { eq: $titulo }) {
      portada {
        gatsbyImageData(width: 300, placeholder: BLURRED, layout: FULL_WIDTH)
      }
      miniResumen
      titulo
      tags
      createdAt
      contenido {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default RecipeTemplate
