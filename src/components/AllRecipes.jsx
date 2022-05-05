import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulBlog(sort: { fields: titulo, order: ASC }) {
      nodes {
        id
        titulo
        tags
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulBlog.nodes
  return (
    <section className="">
      <TagsList recipes={recipes} />
      <RecipesList />
    </section>
  )
}

export default AllRecipes
