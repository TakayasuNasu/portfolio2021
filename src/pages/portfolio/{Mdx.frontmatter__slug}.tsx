import React from 'react'
import type { FC } from 'react'
import type { HeadFC } from 'gatsby'
import { graphql, PageProps } from 'gatsby'

// components
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import Hero from '@/components/Hero'
import CaseStudy from '@/components/Portfolio/caseStudy'

const Page: FC<PageProps<Queries.portfolioBySlugQuery>> = ({
  data: { mdx },
}): JSX.Element => {
  if (!mdx?.frontmatter) return <></>
  const { title } = mdx.frontmatter
  return (
    <Layout>
      <Hero />
      {title && <CaseStudy {...{ title }} />}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query portfolioBySlug($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
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
