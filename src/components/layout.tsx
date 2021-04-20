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
  vw,
} from '../util/styled-util'

const Main = styled.main`
  position: relative;
  margin-top: ${vw(-140)};
  margin-left: auto;
  margin-right: auto;
  ${contentsSizeSmall}
  ${media.greaterThan('medium')`
    margin-top: -320px;
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
