import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import {
  FaEnvelope,
  FaRegFolder,
  FaRegFile,
  FaFileAlt,
  FaBookOpen,
} from 'react-icons/fa'
import { BiFootball } from 'react-icons/bi'
import { MdWeb } from 'react-icons/md'
import { RiPagesLine } from 'react-icons/ri'

import Image from '../../atoms/image'
import H2 from '../../atoms/headline/h2'
import SNS from '../../molecules/list/sns-list'
import { vw } from '../../../util/styled-util'

const Wrapper = styled.div`
  div.layer {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    opacity: 1;
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.1s;
    &.hide {
      max-height: 0;
      min-height: 0;
      opacity: 0;
      visibility: hidden;
    }
  }
  nav.right-nav {
    display: grid;
    row-gap: 40px;
    position: fixed;
    z-index: 10;
    top: 70px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    margin-left: auto;
    margin-right: 0;
    padding: 30px 14px;
    width: ${vw(280)};
    ${media.greaterThan('medium')`
      width: 310px;
    `}
    background-color: rgb(43, 43, 43);
    transition: 0.3s;
    &.hide {
      padding: 0;
      width: 0;
      transition: 0.3s;
    }
  }
  figure.img {
    margin: 0 auto;
    width: ${vw(160)};
    ${media.greaterThan('medium')`
      width: 230px;
    `}
  }
  ul.link-list {
    display: grid;
    row-gap: 24px;
    justify-content: center;
    a {
      font-size: 18px;
      color: #969696;
      &.active {
        color: #ffffff;
      }
    }
    svg {
      vertical-align: middle;
      margin-right: 16px;
    }
  }
  footer {
    font-size: 16px;
    color: #969696;
    align-self: end;
  }
`

type ComponentProps = {
  isExpanded: Boolean
  setExpanded: (value: boolean) => void
}

const RightNav: FC<ComponentProps> = ({ isExpanded, setExpanded }) => {
  const classHide: string = isExpanded ? '' : 'hide'
  const close = () => {
    if (isExpanded) {
      setExpanded(false)
    }
  }
  return (
    <Wrapper>
      <div className={`layer ${classHide}`} onClick={close}></div>
      <nav className={`right-nav ${classHide}`}>
        <figure className="img">
          <Image
            filename="face.jpg"
            style={{ borderRadius: '50%' }}
            alt="face"
          />
        </figure>
        <H2 color="#ffffff">Takayasu Nasu</H2>
        <SNS />
        <ul className="link-list">
          <li>
            <AnchorLink to="/#skills">
              <FaFileAlt />
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#portfolio">
              <MdWeb />
              Portfolio
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#profile">
              <FaRegFolder />
              Profile
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#timeline">
              <FaRegFile />
              Timeline
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#contact">
              <FaEnvelope />
              Contact
            </AnchorLink>
          </li>
          <li>
            <a href="https://blog.i-nasu.com" target="_blank">
              <FaBookOpen />
              Blog-ja
            </a>
          </li>
          <li>
            <a href="https://www.i-nasu.com/standings" target="_blank">
              <BiFootball />
              Fanatic Football Fan?
            </a>
          </li>
          <li>
            <a href="https://www.i-nasu.com/portfolio" target="_blank">
              <RiPagesLine />
              Old Page
            </a>
          </li>
        </ul>
        <footer>
          <p>TKY {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
      </nav>
    </Wrapper>
  )
}

export default RightNav
