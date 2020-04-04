module.exports = {
  siteMetadata: {
    title: `Aaron Brunet`,
    description: `Portfolio for Aaron Brunet, Orlando-based developer with a focus on the changing face of the web.`,
    author: `@aaronbrunet`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`,
          `roboto+condensed\:400,700` 
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aaronbrunet-gatsby`,
        short_name: `starter`,
        start_url: `/aaronbrunet-gatsby/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
