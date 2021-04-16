import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import H1 from './atoms/headline/h1'
import ContactButton from './atoms/button/contact'
import MenuButton from './atoms/button/menu'
import {
  contentsSizeSmall,
  contentsSizeMedium,
  contentsSizeLarge,
} from '../util/styled-util'

const EmptyBleck = styled.div`
  height: 70px;
  background-color: rgba(255, 255, 255, 0.8);
  ${media.greaterThan('medium')`
  `}
  ${media.greaterThan('large')`
  `}
`

const HeaderStyle = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.8);
  nav.inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    ${contentsSizeSmall}
    height: 100%;
    ${media.greaterThan('medium')`
      ${contentsSizeMedium}
    `}
    ${media.greaterThan('large')`
      ${contentsSizeLarge}
    `}
  }
`

const Header: FC = () => (
  <React.Fragment>
    <HeaderStyle>
      <nav className="inner">
        <H1>@TakayasuNasu</H1>
        <ContactButton>contact</ContactButton>
        <MenuButton />
      </nav>
    </HeaderStyle>
    <EmptyBleck />
  </React.Fragment>
)

export default Header
