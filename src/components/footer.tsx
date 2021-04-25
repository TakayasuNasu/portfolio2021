import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import H3 from './atoms/headline/h3'
import SNS from './molecules/list/sns-list'
import { vw } from '../util/styled-util'

const Section = styled.section`
  display: grid;
  row-gap: 36px;
  justify-items: center;
  margin-top: ${vw(80)};
  padding-top: 50px;
  padding-bottom: ${vw(70)};
  ${media.greaterThan('medium')`
    margin-top: 80px;
    padding-bottom: 70px;
  `}
  background-color: #ffffff;
  p.copy {
    font-size: 16px;
  }
  div.sns {
    width: ${vw(320)};
    ${media.greaterThan('medium')`
      width: 320px;
    `}
  }
`

const Footer: FC = () => (
  <Section>
    <H3>Thank You For Visiting.</H3>
    <p className="copy">TKY {new Date().getFullYear()}. All rights reserved.</p>
    <div className="sns">
      <SNS />
    </div>
  </Section>
)

export default Footer
