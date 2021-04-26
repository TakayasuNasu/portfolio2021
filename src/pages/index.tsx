import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/layout'
import MV from '../components/atoms/mv'
import About from '../components/organisms/blocks/about'
import Skills from '../components/organisms/blocks/skills'
import Portfolio from '../components/organisms/blocks/portfolio'
import Profile from '../components/organisms/blocks/profile'
import Timeline from '../components/organisms/blocks/timeline'

const Container = styled.div`
  display: grid;
  row-gap: 120px;
`

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={1} />}>
    <Container>
      <About />
      <Skills />
      <Portfolio />
      <Profile />
      <Timeline />
    </Container>
  </Layout>
)
export default Page
