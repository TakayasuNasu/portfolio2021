import React, { useState } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import H3 from '../../atoms/headline/h3'
import Card from '../../molecules/card/portfolio'
import { vw } from '../../../util/styled-util'
import Data from '../../../data/yml/portfolio.yml'

const Section = styled.section`
  div.header {
    ${media.greaterThan('medium')`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  }
  ul.list {
    display: flex;
    margin-top: 20px;
    font-size: 14px;
    color: #848484;
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
    li {
      cursor: pointer;
      & + li {
        padding-left: 15px;
      }
      &.active {
        color: #2879ff;
      }
    }
  }
`

const UL = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: ${vw(260)};
  grid-template-columns: repeat(auto-fit, ${vw(325)});
  justify-content: center;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  width: ${vw(325)};
  border-radius: 2px;
  ${media.greaterThan('medium')`
    grid-gap: 36px;
    grid-auto-rows: 270px;
    grid-template-columns: repeat(auto-fill, 340px);
    width: 100%;
  `}
  ${media.greaterThan('large')`
    grid-gap: 26px;
    grid-auto-rows: 238px;
    grid-template-columns: repeat(auto-fill, 292px);
    width: 100%;
  `}
  li.card {
    @keyframes show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 3%), 0 3px 1px -2px rgb(0 0 0 / 3%),
      0 1px 5px 0 rgb(0 0 0 / 3%);
    animation: show 0.3s linear 0s;
    &.hide {
      display: none;
    }
  }
`

const Portfolio: FC = () => {
  const [type, setType] = useState('ALL')
  const handleClick = (e: any) => {
    setType(e.target.innerHTML)
  }

  const Cards = Data.map((data: any, i: Number) => {
    let className = type != 'ALL' ? (data.type != type ? 'hide' : '') : ''
    return (
      <li className={`card ${className}`} key={i + data.title}>
        <Card
          img={data.img}
          title={data.title}
          siteUrl={data.siteUrl}
          pageUrl={data.pageUrl}
        />
      </li>
    )
  })

  const menu = ['ALL', 'SYSTEM', 'CMS', 'GAME'].map((text) => {
    const className = type == text ? 'active' : ''
    return (
      <li className={className} onClick={(e) => handleClick(e)} key={text}>
        {text}
      </li>
    )
  })

  return (
    <Section id="portfolio">
      <div className="header">
        <H3>Portfolio</H3>
        <ul className="list">{menu}</ul>
      </div>
      <UL>{Cards}</UL>
    </Section>
  )
}

export default Portfolio
