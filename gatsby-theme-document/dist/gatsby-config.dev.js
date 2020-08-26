"use strict";

module.exports = {
  siteMetadata: {
    title: "TechnoStar's Document",
    name: "TechnoStar",
    siteUrl: "https://www.e-technostar.com",
    description: "This is my description that will be used in the meta tags and important for search results",
    social: [{
      name: "technostar",
      url: "https://www.e-technostar.com"
    }, {
      name: "twitter",
      url: "https://www.e-technostar.com"
    }],
    sidebarConfig: {
      forcedNavOrder: ['/'],
      ignoreIndex: false
    }
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "content",
      name: "content"
    }
  }, {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [{
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 704
        }
      }, {
        resolve: "gatsby-remark-autolink-headers",
        options: {
          icon: false
        }
      }, "gatsby-remark-embed-video"]
    }
  }, {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Document",
      short_name: "Document",
      start_url: "/",
      background_color: "#182952",
      theme_color: "#a2466c",
      display: "standalone",
      icon: 'src/site-icon.png'
    }
  }, "gatsby-plugin-sharp", "gatsby-plugin-emotion", "gatsby-plugin-theme-ui", "gatsby-plugin-react-helmet"]
};