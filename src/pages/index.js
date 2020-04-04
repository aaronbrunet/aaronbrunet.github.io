import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

/**
 * <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
 * <Image />
 * </div>
 */


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="title">
      <h1>Aaron Brunet</h1>
      <p className="about">Developer based in Orlando, FL. Special interest in emerging technologies and the changing face of the web.</p>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
