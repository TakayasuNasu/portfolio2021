import React from 'react'
import type { FC } from 'react'
import Layout from '../../components/layout'
import MV from '../../components/atoms/mv'
import Profile from '../../components/organisms/blocks/profile'

const Page: FC = () => (
  <Layout mv={<MV backgroundColorNumber={1} />}>
    <Profile />
  </Layout>
)
export default Page
