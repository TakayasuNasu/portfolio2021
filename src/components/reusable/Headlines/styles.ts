import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'

export const StyledH1 = styled.h1`
  font-size: clamp(10px, 24 / 426 * 100vw, 24px);
  ${media.greaterThan('medium')`
    font-size: clamp(16px, 28 / 1920 * 100vw, 28px);
  `}
`

export const StyledH2 = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${props => props.color || '#898989'};
  ${media.greaterThan('medium')`
    font-size: 42px;
  `}
`

export const StyledH3 = styled.h3`
  font-size: clamp(16px, 28 / 426 * 100vw, 28px);
  font-weight: 500;
  color: ${props => props.color || '#898989'};
  ${media.greaterThan('medium')`
    font-size: clamp(28px, 46 / 1920 * 100vw, 46px);
  `}
`

export const StyledH4 = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color || '#898989'};
  ${media.greaterThan('medium')`
    font-size: 18px;
  `}
`
