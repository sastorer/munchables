require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Munchables`,
    siteTitleAlt: `Munchables - A Little Bit of Everything`,
    siteHeadline: `Munchables - A Little Bit of Everything`,
    siteUrl: `https://munchables.io`,
    siteDescription: `Munchables`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@thesarahstorer`,
  },
  plugins: [
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",
    
      /* Plugin options */
      options: {
    
        /* Font loading mode */
        mode: "async",

        scope: "html",
    
        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Web fonts. File link should point to font CSS file. */
        web: [{
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "opake",
            /* URL to the font CSS file with @font-face definition */
            file: "https://use.typekit.net/xcj1bih.css",
          },
        ],
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
