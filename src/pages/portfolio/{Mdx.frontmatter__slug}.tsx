import React from 'react'
import type { FC } from 'react'
import type { HeadFC } from 'gatsby'
import { graphql, PageProps } from 'gatsby'
import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'

// components
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import Hero from '@/components/Hero'
import CaseStudy from '@/components/Portfolio/caseStudy'

// style
const StyledContainer = styled.div`
  display: grid;
  row-gap: 120px;
  position: relative;
  margin-inline: auto;
  width: 90vw;
  ${media.greaterThan('medium')`
    width: min(85%, 940px);
  `}
`

const Page: FC<PageProps<Queries.portfolioBySlugQuery>> = ({
  data: { mdx },
  children,
}): JSX.Element => {
  if (!mdx?.frontmatter) return <></>
  return (
    <Layout>
      <Hero />
      <StyledContainer>
        <CaseStudy {...{ ...mdx.frontmatter, children }} />
      </StyledContainer>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query portfolioBySlug($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        date
        client
        techStack
        files
      }
    }
  }
`
export const Head: HeadFC<Queries.portfolioBySlugQuery> = ({
  data: { mdx },
}) => {
  if (!mdx?.frontmatter) return <SEO />
  const {
    frontmatter: { title },
  } = mdx

  return <SEO pagetitle={title || undefined} />
}
