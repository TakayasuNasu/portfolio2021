import type { GatsbyConfig } from 'gatsby'

let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `working life history of Takayasu Nasu`,
    description: `優秀なプログラマ/ソフトウェアエンジニアを募集中でしょうか? Are you looking for an excellent programmer / software engineer? 私はバンクーバーに拠点を置くプログラマー、フルスタックエンジニアです。プログラミング以外にも、システム設計、サーバー構築、およびHTMLコーディングを使用できます。I'm a programmer and a full stack engineer based in Vancouver. Besides programming, I can use system design, server construction, iOS, Swift, and HTML coding. Let me show you my skills and career. Please feel free to contact me if you have any questions.`,
    author: `@TakayasuNasu`,
    siteUrl: `https://www.i-nasu.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'portfolios',
        path: `${__dirname}/contents/portfolios/`,
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      }
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -70
      }
    },
  ]
}

export default config