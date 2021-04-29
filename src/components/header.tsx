import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'
import H1 from './atoms/headline/h1'
import ContactButton from './atoms/button/contact'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
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
    a {
      color: #898989;
      text-decoration: none;
    }
  }
  ul.anchor-list {
    display: none;
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      font-size: 20px;
    `}
  }
`

type ComponentProps = {
  menu: JSX.IntrinsicAttributes
}

const Header: FC<ComponentProps> = ({ menu }) => (
  <React.Fragment>
    <HeaderStyle>
      <nav className="inner">
        <H1>
          <Link to="/">@TakayasuNasu</Link>
        </H1>
        <ul className="anchor-list">
          <li>
            <AnchorLink to="/#skills">Skills</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#portfolio">Portfolio</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#profile">Profile</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#timeline">Timeline</AnchorLink>
          </li>
        </ul>
        <AnchorLink to="/#contact">
          <ContactButton>contact</ContactButton>
        </AnchorLink>
        {menu}
      </nav>
    </HeaderStyle>
    <EmptyBleck />
  </React.Fragment>
)

export default Header
