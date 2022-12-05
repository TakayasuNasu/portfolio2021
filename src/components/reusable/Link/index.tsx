import React from 'react'
import type { FC } from 'react'
import {
  Link as GatsbyLink,
  GatsbyLinkProps,
  graphql,
  useStaticQuery,
} from 'gatsby'

export interface LinkProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
  children: React.ReactNode
}

const Link: FC<LinkProps> = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}): JSX.Element => {
  const pages = useInternalPaths()
  const { internal, next } = internalLink(to, pages)

  if (internal) {
    return (
      <GatsbyLink
        to={next}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link

const useInternalPaths = () => {
  const {
    pages: { nodes },
  } = useStaticQuery<Queries.allPageQuery>(graphql`
    query allPage {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `)

  return nodes.map(node => node.path)
}

export const internalLink = (
  to: string,
  pages: string[]
): { internal: boolean; next: string } => {
  const host = 'i-nasu.com'
  if (!/^\/(?!\/)/.test(to)) {
    if (!to.includes(host)) return { internal: false, next: to }
    const path = to.substring(to.indexOf(host) + host.length)

    return pages.some(page => page == path)
      ? { internal: true, next: path }
      : { internal: false, next: to }
  }

  return pages.some(page => page == to)
    ? { internal: true, next: to }
    : { internal: false, next: to }
}
