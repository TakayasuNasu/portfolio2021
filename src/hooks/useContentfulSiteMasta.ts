import { graphql, useStaticQuery } from 'gatsby'

const useSiteMasta = () => {
  const data = useStaticQuery<Queries.siteMastaQuery>(graphql`
    query siteMasta {
      masta: contentfulSiteMasta {
        name
        data {
          key
          value
        }
      }
    }
  `)

  return data?.masta
}

export default useSiteMasta
