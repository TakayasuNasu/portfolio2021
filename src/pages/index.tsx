import React from 'react'
import type { FC } from 'react'
import type { HeadFC } from 'gatsby'
import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'

// components
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skils from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Profile from '@/components/Profile'
import Timeline from '@/components/Timeline'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import Map from '@/components/Map'

const StyledContainer = styled.div`
  display: grid;
  row-gap: 120px;
  position: relative;
  margin-inline: auto;
  width: 90vw;
  ${media.greaterThan('medium')`
    width: min(85%, 940px);
  `}
  div.contact-map {
    display: grid;
    row-gap: 50px;
    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 0.7fr;
    `}
  }
`

const Page: FC = () => (
  <Layout>
    <Hero />
    <StyledContainer>
      <About />
      <Skils />
      <Portfolio />
      <Profile />
      <Timeline />
      <Blogs />
      <div className="contact-map">
        <Contact />
        <Map />
      </div>
    </StyledContainer>
  </Layout>
)
export default Page

export const Head: HeadFC = () => <SEO />
