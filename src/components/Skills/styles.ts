import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'

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
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03),
      0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
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
