import React from 'react'
import type { FC } from 'react'
import { TiDeviceLaptop } from 'react-icons/ti'

// components
import { H3, H4 } from '@/components/reusable/Headlines'
import CircleIcon from '@/components/reusable/circle'

// data
import data from '@/data/yml/timeline.yml'

// style
import { Section, LI } from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const listItem = data.map((data: any, i: number) => {
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

const Timeline: FC = (): JSX.Element => {
  return (
    <Section id="timeline">
      <H3>Experience</H3>
      <ul className="timeline-list">{listItem}</ul>
    </Section>
  )
}

export default Timeline
