require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `${process.env.SITE_TITLE}`,
    description: `${process.env.SITE_DESCRIPTION}`,
    author: `liveresin`,
    siteUrl: `${process.env.SITE_URL}`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
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
        name: `${process.env.SITE_TITLE}`,
        short_name: `${process.env.SITE_TITLE}`,
        start_url: `/`,
        background_color: `${process.env.BG_COLOR}`,
        theme_color: `${process.env.THEME_COLOR}`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `${process.env.INSTAGRAM_USER}`,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `${process.env.MAILCHIMP_ACTION}`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `${process.env.SITE_URL}`,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
  ],
}
