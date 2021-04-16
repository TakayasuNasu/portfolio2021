import React from 'react'
import type { FC } from 'react'
import 'typeface-open-sans'
import styled from 'styled-components'
import media from 'styled-media-query'

import Header from './header'
import '../styles/common.scss'
import {
  contentsSizeSmall,
  contentsSizeMedium,
  contentsSizeLarge,
} from '../util/styled-util'

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
  ${contentsSizeSmall}
  ${media.greaterThan('medium')`
    ${contentsSizeMedium}
  `}
  ${media.greaterThan('large')`
    ${contentsSizeLarge}
  `}
`

type ComponentProps = { mv?: any }

const Layout: FC<ComponentProps> = ({ mv, children }) => (
  <React.Fragment>
    <Header />
    <section className="mv">{mv}</section>
    <Main className="container">{children}</Main>
  </React.Fragment>
)

export default Layout
