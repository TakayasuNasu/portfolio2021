import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  li {
    justify-self: center;
  }
  a {
    color: #898989;
    text-decoration: none;
  }
  svg {
    font-size: 20px;
  }
`

const SNS = () => (
  <UL className="sns">
    <li>
      <a
        href="https://www.facebook.com/takayasu.nasu.1"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaFacebook aria-label="Facebook" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/taka7beckham"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaTwitter aria-label="Twitter" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/takayasu-nasu-b8054413b/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaLinkedinIn aria-label="LinkedIn" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/TakayasuNasu"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaGithub aria-label="Github" />
      </a>
    </li>
  </UL>
)

export default SNS
