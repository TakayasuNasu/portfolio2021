import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.siteMetaQuery>(graphql`
    query siteMeta {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return data?.site?.siteMetadata
}

export default useSiteMetadata
