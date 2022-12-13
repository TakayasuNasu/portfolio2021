import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { fontSmall, fontMedium, fontLarge } from '@/util/styled-util'

export const StyledH1 = styled.h1`
  font-size: clamp(10px, 24 / 426 * 100vw, 24px);
  ${media.greaterThan('medium')`
    font-size: clamp(16px, 28 / 1920 * 100vw, 28px);
  `}
`

export const StyledH2 = styled.h2`
  font-size: clamp(18px, 26 / 426 * 100vw, 26px);
  font-weight: 500;
  color: ${props => props.color || '#898989'};
  ${media.greaterThan('medium')`
    font-size: clamp(26px, 42 / 1920 * 100vw, 42px);
  `}
`

export const StyledH3 = styled.h3`
  font-size: clamp(12px, 18 / 426 * 100vw, 18px);
  font-weight: 500;
  color: ${props => props.color || '#898989'};
  ${media.greaterThan('medium')`
    font-size: clamp(16px, 28 / 1920 * 100vw, 28px);
  `}
`

export const StyledH4 = styled.h4`
  ${fontLarge}
  color: ${props => props.color || '#898989'};
`

export const StyledH5 = styled.h5`
  ${fontMedium}
  color: ${props => props.color || '#898989'};
`

export const StyledH6 = styled.h6`
  ${fontSmall}
  color: ${props => props.color || '#898989'};
`
