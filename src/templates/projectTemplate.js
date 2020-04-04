import React from "react"
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectTemplate = ({data}) => {
   const { markdownRemark } = data;
   const { frontmatter, html } = markdownRemark;
   return (
    <Layout>
        <Helmet>
            <title>{frontmatter.title}</title>
            <span>{frontmatter.date}</span>
        </Helmet>
        <SEO title={frontmatter.title} />
        <section>
            <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/">Go back to the homepage</Link>
        </section>
    </Layout>
   );
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;