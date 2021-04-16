import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { vw } from '../../util/styled-util'

const Section = styled.section`
  position: relative;
  width: 100%;
  height: ${vw(280)};
  background-image: linear-gradient(135deg, #6b73ff 10%, #000dff 100%);
  ${media.greaterThan('medium')`
  height: 480px;
  `}
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 32%;
    background-image: url('/img/bg/wave.svg');
    background-size: 100% 140%;
    ${media.greaterThan('medium')`
      height: 60%;
      background-size: cover;
    `}
  }
`

const MV: FC = () => <Section></Section>
export default MV
