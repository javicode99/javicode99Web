import React from "react"
import Layout from "../../components/Layout"
import AllRecipes from "../../components/AllRecipes"

const index = () => {
  return (
    <Layout>
      <section className="bg-neutral pt-12">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <h2 className="text-white text-center mt-1 text-2xl font-bold tracking-wide uppercase lg:text-3xl">
              Blogs
            </h2>
            <span className="inline-block w-full h-0.5 bg-white"></span>
          </div>
          <AllRecipes />
        </div>
      </section>
    </Layout>
  )
}

export default index
