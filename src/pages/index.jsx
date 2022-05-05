import Layout from "../components/Layout"
import Seo from "../components/SEO"
import React from "react"
import Contact from "../components/contact"
// import TresCursosMas from "../components/TresCursosMas"
import TresBlogMas from "../components/TresBlogMas"
import TresCursosMas from "../components/TresCursosMas"
import PopupForm from "../components/PopupForm"

export default function Home() {
  return (
    <Layout>
      <Seo
        titulo="Javicode99"
        descripcion="Podras encontrar todo lo que necesites para entender la tecnilogía en este lugar."
      />
      <main>
        <div className="hero min-h-screen bg-neutral-focus">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="card h-[58vh] bg-base-100 shadow-xl hidden lg:flex">
              <iframe
                src="https://www.youtube.com/embed/eRJLod1fqzc?controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                odestbranding="1"
                className="h-[inherit]"
              ></iframe>
            </div>
            <div className="p-5 sm:pr-40">
              <h2 className="text-5xl sm:text-7xl text-white font-bold">
                SIMPLE
              </h2>
              <h2 className="text-5xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-400 font-bold ">
                SENCILLO
              </h2>
              <h3 className="text-5xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-400 font-bold ">
                RAPIDO
              </h3>
              <p className="py-10 text-lg text-white">
                Tu conocimiento de tecnologia a otro nivel.
              </p>

              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCM-mUhNSYjYJsDDt2sUua0Q"
                rel="noreferrer"
              >
                <button className="btn btn-success text-white">VER MAS</button>
              </a>
            </div>
          </div>
        </div>
        {/* Apartado de blogs */}
        <TresBlogMas />
        {/* Apartado de cursos */}
        <TresCursosMas />
        {/* Contacto */}
        <Contact />
        <PopupForm />
      </main>
    </Layout>
  )
}
