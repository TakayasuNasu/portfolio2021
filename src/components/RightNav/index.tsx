import React from 'react'
import type { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { BiFootball } from 'react-icons/bi'
import { MdWeb } from 'react-icons/md'
import { RiPagesLine } from 'react-icons/ri'
import {
  FaEnvelope,
  FaRegFolder,
  FaRegFile,
  FaFileAlt,
  FaBookOpen,
} from 'react-icons/fa'

// context
import { useAppContext } from '@/context/store'

// context and component
import { H2 } from '@/components/reusable/Headlines'
import SockalMedia from '@/components/SocialMedia'
import Skewed from '@/components/reusable/Button/skewed'

// style
import { Wrapper } from './styles'

const RightNav: FC = (): JSX.Element => {
  const {
    state: { expanded },
    close,
  } = useAppContext()

  return (
    <Wrapper>
      <div className="layer" data-active={expanded} onClick={close}></div>

      <nav data-active={expanded}>
        <figure className="img">
          <StaticImage src="../../images/face.png" alt="Picture of me." />
        </figure>

        <H2>Takayasu Nasu</H2>

        <SockalMedia />

        <ul className="link-list">
          <li onClick={close}>
            <AnchorLink to="/#skills">
              <FaFileAlt />
              Skills
            </AnchorLink>
          </li>
          <li onClick={close}>
            <AnchorLink to="/#portfolio">
              <MdWeb />
              Portfolio
            </AnchorLink>
          </li>
          <li onClick={close}>
            <AnchorLink to="/#profile">
              <FaRegFolder />
              Profile
            </AnchorLink>
          </li>
          <li onClick={close}>
            <AnchorLink to="/#timeline">
              <FaRegFile />
              Timeline
            </AnchorLink>
          </li>
          <li onClick={close}>
            <AnchorLink to="/#contact">
              <FaEnvelope />
              Contact
            </AnchorLink>
          </li>

          <li>
            <a
              href="https://weblog.i-nasu.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaBookOpen />
              Blog
            </a>
          </li>

          <li>
            <a
              href="https://www.i-nasu.com/standings"
              target="_blank"
              rel="noreferrer"
            >
              <BiFootball />
              Fanatic Football Fan?
            </a>
          </li>

          <li>
            <a
              href="https://www.i-nasu.com/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <RiPagesLine />
              Old Page
            </a>
          </li>
        </ul>

        <footer>
          <div className="toggle">
            <Skewed id="toggle-mode-sidebar" labelOn="Light" labelOff="Dark" />
          </div>
          <p>TAK {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
      </nav>
    </Wrapper>
  )
}

export default RightNav
