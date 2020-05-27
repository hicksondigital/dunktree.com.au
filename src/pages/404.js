import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function FourOFour() {
  return (
    <Layout>
      <main className="content-container">
        <Header />
        <section>
          <h1>Oops!</h1>
          <p className="description-small">¯\_(ツ)_/¯</p>
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
