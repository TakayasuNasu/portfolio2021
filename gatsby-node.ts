import { resolve } from 'path'
import type { GatsbyNode } from 'gatsby'
import type { CreatePagesQuery } from 'graphql-types'

export interface PortfolioPageContext {
  name: string
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const data = await graphql<CreatePagesQuery>(`
    query CreatePages {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.data?.allMdx.nodes.forEach(
    (node: CreatePagesQuery['allMdx']['nodes'][0]) => {
      const slug = node.frontmatter?.slug
      if (slug) {
        actions.createPage({
          path: `/portfolio${slug}`,
          component: resolve(__dirname, 'src', 'templates', 'portfolio.tsx'),
          context: { slug }
        })
      }
  })
}