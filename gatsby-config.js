/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const isProd = process.env.NODE_ENV === "production"

module.exports = {
  siteMetadata: {
    title: "Dunktree",
    titleTemplate: "%s – WordPress & web development consultancy",
    description: "WordPress and digital consultancy.",
    url: "https://dunktree.com.au",
    image: "/images/dunktree-dark.png",
    twitterUsername: "@DunktreeHQ",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M9TCM25",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
        routeChangeEventName: "gatsby-route-change",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
