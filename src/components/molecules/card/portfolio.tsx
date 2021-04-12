import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiExternalLink, FiList } from 'react-icons/fi'
import Image from '../../atoms/image'
import { vw, pseudo } from '../../../util/styled-util'

const Wrapper = styled.div`
  width: ${vw(324)};
  ${media.greaterThan('medium')`
    width: 340px;
  `}
  ${media.greaterThan('large')`
    width: 292px;
  `}
`

const VisualBlock = styled.div`
  position: relative;
  width: 100%;
  height: ${vw(212)};
  ${media.greaterThan('medium')`
    height: 222px;
  `}
  ${media.greaterThan('large')`
    height: 190px;
  `}
  figure.image {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7));
    }
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  span.title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-weight: 500;
    color: #ffffff;
  }
`

const Div = styled.div`
  padding: 11px 30px;
  text-align: right;
  font-size: 22px;
  background-color: #ffffff;
  a {
    color: #848484;
    & + a {
      padding-left: 30px;
    }
  }
`

const objectFit = {
  height: '100%',
  objectFit: 'cover',
}

type ComponentProps = {
  img: String
  title: String
  siteUrl: String
  pageUrl: String
}

const Card: FC<ComponentProps> = ({
  img = 's-portal.png',
  title = 'S-Portal',
  siteUrl = '',
  pageUrl = '/',
}) => {
  return (
    <Wrapper>
      <VisualBlock>
        <figure className="image">
          <Image filename={img} alt={title} style={objectFit} />
        </figure>
        <span className="title">{title}</span>
      </VisualBlock>
      <Div className="bottom">
        <a className="anchor" href={siteUrl}>
          <FiExternalLink />
        </a>
        <Link to={pageUrl}>
          <FiList />
        </Link>
      </Div>
    </Wrapper>
  )
}

export default Card
