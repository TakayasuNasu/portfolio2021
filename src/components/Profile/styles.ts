import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { _util } from '@/util/styled-util'

export const Section = styled.section`
  ul.grid {
    display: grid;
    row-gap: 50px;
    margin-top: 30px;
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
    `}
    li {
      background-color: ${({ theme }) => theme.color.sbg};
      ${_util.shadow}
    }
    article {
      display: grid;
      row-gap: 24px;
      padding-top: 40px;
      padding-bottom: 30px;
      padding-left: 20px;
      padding-right: 20px;
    }
    svg {
      width: 30px;
      height: 34px;
    }
  }
  p.describe {
    font-size: 16px;
    line-height: 1.6;
  }
`
