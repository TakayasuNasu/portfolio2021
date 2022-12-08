import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { vmin, vmax } from '@/util/styled-util'

export const Section = styled.section`
  position: relative;
  width: 100%;
  aspect-ratio: 2.4/1;
  ${media.greaterThan('medium')`
    aspect-ratio: 4.6/1;
  `}
  background-image: linear-gradient(to top, #f2fcfe, #1c92d2);
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
  &[data-mode='dark'] {
    &::after {
      background-image: url('/img/bg/wave-dark.svg');
    }
  }
  &[data-backdrop='true'] {
    margin-bottom: ${vmax(-50)};
    ${media.greaterThan('medium')`
      margin-bottom: ${vmin(-50)};
    `}
    ${media.greaterThan('laptop')`
      margin-bottom: -220px;
    `}
  }
`
