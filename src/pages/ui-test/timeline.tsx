import React from 'react'
import type { FC } from 'react'
import Layout from '../../components/layout'
import MV from '../../components/atoms/mv'
import Timeline from '../../components/organisms/blocks/timeline'

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={1} />}>
    <Timeline />
  </Layout>
)
export default Page
