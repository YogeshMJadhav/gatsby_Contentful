module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `khqh4u5iw02q`,
        accessToken:`7a4bb29286c2426724845d4fe8d37bdb8d5f5cb5a399c6f1059e04f6fd904828`,
      },
    },
  ],
}
