import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-neutral">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
