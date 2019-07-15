/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `QuarkOwl LTD - JavaScript Engineering Solutions`,
    description: ``,
    author: `QuarkOwl LTD`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
    'gatsby-plugin-ui-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `700`],
          },
          {
            family: `Material Icons`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QuarkOwl LTD - JavaScript Engineering Solutions`,
        short_name: `QuarkOwl`,
        start_url: `/`,
        background_color: `#f7fafd`,
        theme_color: `#00b9f1`,
        display: `standalone`,
        lang: `en`,
        icon: `static/QOSquareLogo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
