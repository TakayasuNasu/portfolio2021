import React from 'react'
import type { FC } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type ComponentProps = {
  pagetitle?: string
  pagedesc?: string
  pagepath?: string
}

const SEO: FC<ComponentProps> = ({ pagetitle, pagedesc, pagepath }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const title = pagetitle
    ? `${pagetitle} - ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const description = pagedesc || data.site.siteMetadata.description
  const url = pagepath
    ? `${data.site.siteMetadata.siteUrl}/${pagepath}`
    : data.site.siteMetadata.siteUrl

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        data-react-helmet="true"
        name="description"
        content={description}
      ></meta>
      <link rel="canonical" href={url}></link>
    </Helmet>
  )
}

export default SEO
