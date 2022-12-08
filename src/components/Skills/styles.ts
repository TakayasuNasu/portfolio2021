import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { _util } from '@/util/styled-util'

export const Section = styled.section`
  display: grid;
  row-gap: 50px;
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  `}
  dl.d-list {
    margin-top: 30px;
    padding-top: 40px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${({ theme }) => theme.color.sbg};
    ${_util.shadow};
  }
`

export const DT = styled.dt`
  & ~ dt {
    margin-top: 30px;
  }
`

export const DD = styled.dd`
  padding-top: 12px;
  * {
    transition: 1.5s;
  }
`
