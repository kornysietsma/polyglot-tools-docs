module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteTitle: `polyglot-tools-docs`,
    defaultTitle: `polyglot-tools-docs`,
    siteTitleShort: `polyglot-tools-docs`,
    siteDescription: `Korny's polyglot tool documentation site - WIP`,
    siteUrl: `https://polyglot.korny.info`,
    siteAuthor: `@kornys`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Theme by Rocketseat`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/kornysietsma/polyglot-tools-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://polyglot.korny.info`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
