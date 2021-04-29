import React from 'react'
import type { FC } from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { MdDateRange } from 'react-icons/md'
import { AiOutlineTeam, AiOutlineTag } from 'react-icons/ai'

import Layout from '../components/layout'
import MV from '../components/atoms/mv'
import H3 from '../components/atoms/headline/h3'
import Button from '../components/atoms/button/base'
import Image from '../components/atoms/image'
import SEO from '../components/seo'
import type { PortfolioPageContext } from '../../gatsby-node'
import type { PortfolioTemplateQuery } from '../../types/graphql-types'

SwiperCore.use([Pagination])

const Section = styled.section`
  background-color: #ffffff;
  ul.list {
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    ${media.greaterThan('medium')`
      padding-left: 20px;
      padding-right: 20px;
    `}
    ${media.greaterThan('large')`
      display: grid;
      grid-template-columns: 38% 38% auto;
    `}
    li {
      ${media.greaterThan('large')`
        padding-left: 15px;
        padding-right: 15px;
      `}
      & + li {
        margin-top: 30px;
        ${media.greaterThan('large')`
          margin-top: 0;
        `}
      }
      p.text {
        margin-top: 10px;
        font-size: 15px;
        color: #848484;
        line-height: 1.65;
      }
    }
  }
  dl.d-list {
    display: flex;
    color: #848484;
    &.first {
      margin-top: 25px;
    }
    & + dl {
      margin-top: 10px;
    }
    dd {
      margin-left: 10px;
      line-height: 1.5;
    }
  }
`

interface PageProps {
  data: PortfolioTemplateQuery
  pageContext: PortfolioPageContext
  location: Location
}

const Page: FC<PageProps> = ({ data, location }) => {
  const SwiperItems = data.mdx?.frontmatter?.files?.map((filename) => (
    <SwiperSlide key={filename}>
      <Image filename={filename} />
    </SwiperSlide>
  ))

  const disabled = data.mdx?.frontmatter?.link ? false : true
  const linkProps = {
    to: data.mdx?.frontmatter?.link as string,
    isExternal: true,
    disabled: disabled,
  }

  return (
    <Layout mv={<MV />}>
      <Section>
        <SEO
          pagetitle={data.mdx?.frontmatter?.title}
          pagepath={location.pathname}
        />
        <Swiper pagination={{ clickable: true }}>{SwiperItems}</Swiper>
        <ul className="list">
          <li>
            <H3 color="#444444">Main Info</H3>
            <p className="text">{data.mdx?.frontmatter?.info ?? ''}</p>
          </li>
          <li>
            <H3 color="#444444">Tech Stack</H3>
            <p className="text">{data.mdx?.frontmatter?.techStack ?? ''}</p>
          </li>
          <li>
            <Button {...linkProps}>WEBSITE</Button>
            <dl className="d-list first">
              <dt>
                <MdDateRange />
              </dt>
              <dd>{data.mdx?.frontmatter?.date ?? ''}</dd>
            </dl>
            <dl className="d-list">
              <dt>
                <AiOutlineTeam />
              </dt>
              <dd>{data.mdx?.frontmatter?.client ?? ''}</dd>
            </dl>
            <dl className="d-list">
              <dt>
                <AiOutlineTag />
              </dt>
              <dd>{data.mdx?.frontmatter?.type ?? ''}</dd>
            </dl>
          </li>
        </ul>
        <MDXRenderer>{data.mdx?.body ?? ''}</MDXRenderer>
      </Section>
    </Layout>
  )
}
export default Page

export const query = graphql`
  query PortfolioTemplate($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        info
        techStack
        type
        client
        link
        files
      }
    }
  }
`
