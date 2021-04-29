import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { vw } from '../../util/styled-util'

const backgroundColors = [
  'linear-gradient(135deg, #6b73ff 10%, #000dff 100%);',
  'linear-gradient(to top, #f2fcfe, #1c92d2);',
  'linear-gradient(to right, #6A82FB, #FC5C7D);',
  'background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);',
]

const Section = styled.section<{ bgColorNum?: Number }>`
  position: relative;
  width: 100%;
  height: ${vw(220)};
  background-image: ${(props: any) => backgroundColors[props.bgColorNum]};
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

type ComponentProps = {
  backgroundColorNumber?: Number
}

const MV: FC<ComponentProps> = ({ backgroundColorNumber = 0 }) => (
  <Section bgColorNum={backgroundColorNumber} />
)
export default MV
