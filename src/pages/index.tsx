import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/layout'
import MV from '../components/atoms/mv'
import About from '../components/organisms/blocks/about'
import Portfolio from '../components/organisms/blocks/portfolio'

const Container = styled.div`
  display: grid;
  row-gap: 120px;
`

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={1} />}>
    <Container>
      <About />
      <Portfolio />
    </Container>
  </Layout>
)
export default Page
