import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MV from '../components/atoms/mv'
import About from '../components/organisms/blocks/about'
import Skills from '../components/organisms/blocks/skills'
import Portfolio from '../components/organisms/blocks/portfolio'
import Profile from '../components/organisms/blocks/profile'
import Timeline from '../components/organisms/blocks/timeline'
import Contact from '../components/organisms/blocks/contact'
import Map from '../components/organisms/blocks/map'

const Container = styled.div`
  display: grid;
  row-gap: 120px;
  div.contact-map {
    display: grid;
    row-gap: 50px;
    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 0.7fr;
    `}
  }
`

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={1} />}>
    <SEO />
    <Container>
      <About />
      <Skills />
      <Portfolio />
      <Profile />
      <Timeline />
      <div className="contact-map">
        <Contact />
        <Map />
      </div>
    </Container>
  </Layout>
)
export default Page
