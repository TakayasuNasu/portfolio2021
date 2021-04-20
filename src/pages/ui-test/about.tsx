import React from 'react'
import type { FC } from 'react'
import Layout from '../../components/layout'
import MV from '../../components/atoms/mv'
import About from '../../components/organisms/blocks/about'

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={1} />}>
    <About />
  </Layout>
)
export default Page
