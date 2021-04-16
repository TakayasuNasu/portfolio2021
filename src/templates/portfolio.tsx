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
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'

import Layout from '../components/layout'
import MV from '../components/atoms/mv'
import H3 from '../components/atoms/headline/h3'
import Button from '../components/atoms/button/contact'
import Image from '../components/atoms/image'
import { vw } from '../util/styled-util'
import type { PortfolioPageContext } from '../../gatsby-node'
import type { PortfolioTemplateQuery } from '../../types/graphql-types'

SwiperCore.use([Pagination])

const Section = styled.section`
  margin-top: ${vw(-220)};
  background-color: #ffffff;
  ${media.greaterThan('medium')`
    margin-top: -400px;
  `}
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
    }
  }
  p.button-text {
    font-size: 16px;
  }

  div.pre-post {
    margin-top: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #2879ff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03),
      0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
  }
  ul.pre-post-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      color: #ffffff;
      text-decoration: none;
    }
    span {
      display: none;
      padding-left: 8px;
      padding-right: 8px;
      ${media.greaterThan('medium')`
        display: block;
      `}
    }
  }
`

interface PageProps {
  data: PortfolioTemplateQuery
  pageContext: PortfolioPageContext
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout mv={<MV />}>
    <Section>
      <Swiper pagination={{ clickable: true }}>
        <SwiperSlide>
          <Image filename="s-portal.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image filename="feedlp01.png" />
        </SwiperSlide>
      </Swiper>
      <ul className="list">
        <li>
          <H3 color="#444444">Main Info</H3>
          <p className="text">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
        </li>
        <li>
          <H3 color="#444444">Client</H3>
          <p className="text">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
        </li>
        <li>
          <Button>WEBSITE</Button>
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
            <dd>Themeforest</dd>
          </dl>
          <dl className="d-list">
            <dt>
              <AiOutlineTag />
            </dt>
            <dd>Design</dd>
          </dl>
        </li>
      </ul>
      <div className="pre-post">
        <ul className="pre-post-list">
          <li>
            <Link to="/">
              <HiOutlineArrowLeft />
              <span>pre</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>post</span>
              <HiOutlineArrowRight />
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  </Layout>
)
export default Page

export const query = graphql`
  query PortfolioTemplate($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD", locale: "en-CA")
      }
    }
  }
`
