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
      <div className="about">
      <p>Developer based in Orlando, FL. Special interest in emerging technologies and the changing face of the web.</p>
      <ul>
            <li><a href="https://github.com/aaronbrunet" target="_blank"><i class="fab fa-github-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/aaronwbrunet/" target="_blank"><i class="fab fa-linkedin"></i></a></li>            
        </ul> 
      </div>
    </div>
    <div className="content">
        <h3>Technologies</h3>
        <div className="technologies">        
            <div className="column">
                <h4 className="section">Languages & Frameworks</h4>
                <ul className="tech">            
                    <li>
                        <i className="fab fa-html5"></i>
                    </li>
                    <li>
                        <i className="fab fa-css3-alt"></i>
                    </li>
                    <li>
                        <i className="fab fa-js-square"></i>
                    </li>            
                    <li>
                        <i className="fab fa-react"></i>
                    </li>
                    <li>
                        <i className="fab fa-java"></i>
                    </li>
                </ul>
            </div>
            <div className="column">
                <h4 className="section">Services & Systems</h4>
                <ul className="services">            
                    <li>AEM</li>
                    <li>SharePoint</li>
                    <li>ServiceNow</li>
                </ul>
            </div>
        </div>        
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
