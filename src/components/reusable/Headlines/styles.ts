import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'

export const StyledH1 = styled.h1`
  font-size: 22px;
  ${media.greaterThan('medium')`
    font-size: 24px;
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
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color || '#898989'};
  ${media.greaterThan('medium')`
    font-size: 24px;
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
