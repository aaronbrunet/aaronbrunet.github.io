import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const ProjPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout>
       <div className="post-list">
        {projects.map(project => (
          <div key={project.node.id} className="post-list__item">
            <h2>{project.node.frontmatter.title}</h2>
            <p>{project.node.frontmatter.date}</p>
            <div className="post-list__excerpt">
              <p>{project.node.excerpt}</p>
            </div>
            <Link to={project.node.fields.slug}>Read More</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProjPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;