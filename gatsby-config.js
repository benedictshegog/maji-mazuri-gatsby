module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "maji-mazuri-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",

    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-51662999-7",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "maji-mazuri-gatsby",
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          standard_page: require("./src/schemas/standard_page.json"),
          page: require("./src/schemas/page.json"),
          post: require("./src/schemas/post.json"),
        },
      },
    },
  ],
};
