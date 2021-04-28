import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Layout from '../../components/layout'
import MV from '../../components/atoms/mv'
import Contact from '../../components/organisms/blocks/contact'
import Map from '../../components/organisms/blocks/map'

const ContactAndMap = styled.div`
  display: grid;
  row-gap: 50px;
  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 0.7fr;
  `}
`

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={1} />}>
    <ContactAndMap>
      <Contact />
      <Map />
    </ContactAndMap>
  </Layout>
)
export default Page
