import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'

const Div = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #2879ff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03),
    0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
  ul.pre-post-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      color: #ffffff;
      text-decoration: none;
    }
    span {
      display: none;
      padding-left: 8px;
      padding-right: 8px;
      ${media.greaterThan('medium')`
        display: block;
      `}
    }
  }
`

type ComponentProps = {
  preUrl?: string
  postUrl?: string
  preText?: String
  postText?: String
}

const PrePostNav: FC<ComponentProps> = ({
  preUrl,
  postUrl,
  preText,
  postText,
}) => (
  <Div>
    <ul className="pre-post-list">
      <li>
        <Link to={preUrl}>
          <HiOutlineArrowLeft />
          <span>{preText}</span>
        </Link>
      </li>
      <li>
        <Link to={postUrl}>
          <span>{postText}</span>
          <HiOutlineArrowRight />
        </Link>
      </li>
    </ul>
  </Div>
)

export default PrePostNav
