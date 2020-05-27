import React from "react"
import Particles from "react-particles-js"
import SEO from "./seo"

export default function Layout({ children }) {
  return (
    <div id="wrapper">
      <SEO />
      <div className="particles-container">
        <Particles />
      </div>
      {children}
    </div>
  )
}
