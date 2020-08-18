module.exports = {
  siteMetadata: {
    title: `AECsoft`,
    description: `Thinkers, Builders, Investors in the future of tech in Architecture, Engineering and Construction.`,
    author: `@kylemorin`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-remark-emojis',
      options:{
        active: true,
        class: 'emoji-icon',
        escapeCharacter: '#',
        size: 64,
        styles: {
          display: 'inline',
          margin: '0',
          'margin-top': '1px',
          position: 'relative',
          top: '5px',
          width: '25px'
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
