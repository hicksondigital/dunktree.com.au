import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Typed from "typed.js"

class Home extends React.Component {
  componentDidMount() {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-string",
      typeSpeed: 50,
    })
  }

  render() {
    return (
      <Layout>
        <main className="content-container">
          <Header />
          <section>
            <div id="typed-string">
              <h2 className="sub-title">
                Empowering growth through <br />
                quality code &amp; communication.
              </h2>
            </div>
            <h2>
              <span id="typed"></span>
            </h2>
            <p className="description">
              <abbr title="The combinitation of 'dunk' and 'tree' representing the success of a slam dunk, and the growth and long-term stability of a tree. ">
                Dunktree
              </abbr>{" "}
              is the work of Sydney-based web development consultant,{" "}
              <a
                href="https://zacharyhickson.com/about/"
                target="_blank"
                rel="noreferrer"
              >
                Zachary Hickson
              </a>
              , crafting high-quality, fast and ethical websites and
              applications for businesses of all shapes and sizes.
            </p>
            <p className="description">
              Primary services include custom WordPress theme and plugin
              development, API integrations, performance optimisation, JAMstack
              and other web-based projects.
            </p>
            <p className="description-small">
              Some of Dunktree's clients and partners include:
            </p>
            <aside className="clients">
              <client className="client">
                <img
                  src={"/clients/smartline.png"}
                  alt="Smartline Home Loans"
                />
              </client>
              <client className="client">
                <img
                  src={"/clients/smartline.png"}
                  alt="Smartline Home Loans"
                />
              </client>
              <client className="client">
                <img
                  src={"/clients/smartline.png"}
                  alt="Smartline Home Loans"
                />
              </client>
              <client className="client">
                <img
                  src={"/clients/smartline.png"}
                  alt="Smartline Home Loans"
                />
              </client>
            </aside>
            <p className="description-small">
              For availability and business enquiries, please contact{" "}
              <a href="mailto:hello@dunktree.com">hello@dunktree.com</a>
            </p>
          </section>
          <Footer />
        </main>
      </Layout>
    )
  }
}

export default Home
