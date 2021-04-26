import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { TiDeviceLaptop } from 'react-icons/ti'

import H3 from '../../atoms/headline/h3'
import H4 from '../../atoms/headline/h4'
import CircleIcon from '../../atoms/icon/circle'
import { vw, shadow } from '../../../util/styled-util'
import data from '../../../data/yml/timeline.yml'

const Section = styled.section`
  ul.timeline-list {
    position: relative;
    margin-top: 30px;
    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 18px;
      width: 1px;
      background-color: #bababa;
      ${media.greaterThan('medium')`
        left: 50%;
      `}
    }
  }
`
type StyledProps = {
  borderColor: String
  flexStyle: Object
  iconStyle: Object
  itemBefore: Object
  itemAfter: Object
}

const LI = styled.li<StyledProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media.greaterThan<StyledProps>('medium')`
    ${(props) => props.flexStyle};
    max-width: 50%;
  `}
  & + li {
    margin-top: 50px;
    ${media.greaterThan('medium')`
      margin-top: -16%;
    `}
  }
  div.circle-icon {
    margin-top: 24px;
    ${media.greaterThan<StyledProps>('medium')`
      ${(props) => props.iconStyle};
    `}
  }
  article {
    display: grid;
    row-gap: 24px;
    position: relative;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - ${vw(104)});
    ${media.greaterThan('medium')`
      width: calc(100% - 80px);
    `}
    background-color: #ffffff;
    border-top: 3px solid ${(props) => props.borderColor || '#2879ff'};
    ${shadow}
    &:before, &:after {
      content: ' ';
      display: inline-block;
      position: absolute;
    }
    &:before {
      top: 28px;
      right: -13px;
      opacity: 0.2;
      border-color: transparent rgba(0, 0, 0, 0.1);
      border-style: solid;
      border-width: 13px 0 13px 13px;
      ${media.greaterThan<StyledProps>('medium')`
        ${(props) => props.itemBefore};
      `}
    }
    &:after {
      top: 30px;
      left: -10px;
      border-top: 10px solid transparent;
      border-left: 0 solid #ffffff;
      border-right: 10px solid #ffffff;
      border-bottom: 10px solid transparent;
      ${media.greaterThan<StyledProps>('medium')`
        ${(props) => props.itemAfter};
      `}
    }
  }
  p.text {
    font-size: 16px;
    line-height: 1.6;
  }
`

const listItem = data.map((data, i) => {
  const [flexStyle, iconStyle, itemBefore, itemAfter] = (() => {
    if (i % 2 == 0) {
      return [
        { flexDirection: 'row-reverse' },
        { marginRight: '-20px' },
        {},
        {
          left: 'auto',
          right: '-10px',
          borderLeft: '10px solid #ffffff',
          borderRight: '0 solid #ffffff',
        },
      ]
    } else {
      return [
        { flexDirection: 'row', marginLeft: '50%' },
        { marginLeft: '-18px' },
        {
          left: '-12px',
          borderLeftWidth: 0,
          borderRightWidth: '12px',
          right: 'auto',
        },
        {},
      ]
    }
  })()
  return (
    <LI
      key={i + data.title}
      borderColor={data.color}
      flexStyle={flexStyle}
      iconStyle={iconStyle}
      itemBefore={itemBefore}
      itemAfter={itemAfter}
    >
      <CircleIcon color={data.color}>
        <TiDeviceLaptop />
      </CircleIcon>
      <article>
        <H4>{data.title}</H4>
        <p className="text">{data.date}</p>
        <p className="text">{data.company}</p>
        <p className="text">{data.text}</p>
      </article>
    </LI>
  )
})

const Timeline: FC = () => (
  <Section>
    <H3>Experience</H3>
    <ul className="timeline-list">{listItem}</ul>
  </Section>
)

export default Timeline
