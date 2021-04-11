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

const Layout: FC = ({ children }) => (
  <React.Fragment>
    <Header />
    <Main className="container">{children}</Main>
  </React.Fragment>
)

export default Layout
