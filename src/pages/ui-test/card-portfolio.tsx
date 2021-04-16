import React from 'react'
import type { FC } from 'react'
import Layout from '../../components/layout'
import MV from '../../components/atoms/mv'
import PortfolioBlock from '../../components/organisms/blocks/portfolio'

const Page: FC = () => (
  <Layout mv={<MV />}>
    <PortfolioBlock />
  </Layout>
)
export default Page
