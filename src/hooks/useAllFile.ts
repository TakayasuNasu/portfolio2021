import { useStaticQuery, graphql } from 'gatsby'

const useAllFile = (): Queries.File[] => {
  const data = useStaticQuery<Queries.allFileQuery>(graphql`
    query allFile {
      allFile(filter: { extension: { in: ["jpg", "png"] } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return data?.allFile.nodes as Queries.File[]
}

export default useAllFile
