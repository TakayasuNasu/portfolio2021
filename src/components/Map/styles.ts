import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'

export const Section = styled.section`
  height: 300px;
  ${media.greaterThan('medium')`
    height: auto;
  `}
`
