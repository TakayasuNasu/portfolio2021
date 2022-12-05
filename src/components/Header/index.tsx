import React from 'react'
import type { FC } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

// components
import Link from '@/components/reusable/Link'
import { H1 } from '@/components/reusable/Headlines/'
import { Primary as ContactButton } from '@/components/reusable/Button'
import MenuButton from '@/components/reusable/Button/menu'

// style
import { StyledHeader } from './styles'

const Header: FC = (): JSX.Element => {
  return (
    <StyledHeader>
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
          <ContactButton>Contact</ContactButton>
        </AnchorLink>
        <MenuButton />
      </nav>
    </StyledHeader>
  )
}

export default Header
