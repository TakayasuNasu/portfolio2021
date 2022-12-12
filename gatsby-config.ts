import path from 'path'
import type { GatsbyConfig } from 'gatsby'

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `working life history of Takayasu Nasu`,
    description: `優秀なプログラマ/ソフトウェアエンジニアを募集中でしょうか? Are you looking for an excellent programmer / software engineer? 私はバンクーバーに拠点を置くプログラマー、フルスタックエンジニアです。プログラミング以外にも、システム設計、サーバー構築、およびHTMLコーディングを使用できます。I'm a programmer and a full stack engineer based in Vancouver. Besides programming, I can use system design, server construction, iOS, Swift, and HTML coding. Let me show you my skills and career. Please feel free to contact me if you have any questions.`,
    author: `@TakayasuNasu`,
    siteUrl: `https://www.i-nasu.com`,
  },

  graphqlTypegen: true,

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'portfolios',
        path: `${__dirname}/contents/portfolios/`,
      },
    },

    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@': path.join(__dirname, './src'),
      },
    },

    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -70,
        duration: 200,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.ico`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        host: process.env.CONTENTFUL_HOST || `cdn.contentful.com`,
      },
    },
  ],
}

export default config
