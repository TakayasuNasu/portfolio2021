import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'

export const StyledFooter = styled.footer`
  display: grid;
  row-gap: 36px;
  justify-items: center;
  padding-top: 50px;
  ${media.greaterThan('medium')`
    margin-top: 80px;
    padding-bottom: 70px;
  `}
  background-color: ${({ theme }) => theme.color.bg};
  p.copy {
    font-size: 16px;
  }
  div.social-media {
    ${media.greaterThan('medium')`
      width: 320px;
    `}
  }
`
