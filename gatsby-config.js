/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /*La congiguración del sitio es esta!*/
  siteMetadata: {
    title: "la tecnología en tus manos!",
    description: "Un lugar para encontrar las recetas que mas amas",
    author: "@javicoro99",
    person: { name: "john", age: 32 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 43 },
    ],
    site: "Home",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:100,200,300,400,500,600,700,800,900`,
          //Asi se especifica las fuentes con este plugin se coloca i luego del numero si es italic
          `Exo\:500i`,
        ],
        display: "swap",
        //estes apartado define si es una fuente variable o no, solo funciona con fuentes estrictamente variables
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aq18o2a651nq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://dev.us14.list-manage.com/subscribe/post?u=c5e8568619b2cfdb2d5eb9239&amp;id=129480f7dd",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
