import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import MV from '../components/atoms/mv'
import SEO from '../components/seo'
import H2 from '../components/atoms/headline/h2'

const Container = styled.div`
  display: grid;
  row-gap: 120px;
  padding: 40px 20px 20px;
  background-color: rgba(255, 255, 255, 0.5);
`

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={2} />}>
    <SEO pagetitle="404" />
    <Container>
      <H2>404 Not Found...</H2>
      <Link to="/">Home</Link>
    </Container>
  </Layout>
)
export default Page
