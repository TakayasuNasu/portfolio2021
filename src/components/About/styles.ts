import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { _util } from '@/util/styled-util'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.color.bg};
  ${_util.shadow};
  div.inner {
    padding: 45px 25px;
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1.45fr;
      column-gap: 30px;
    `}
  }
  figure.img {
    overflow: hidden;
    margin-inline: auto;
    border-radius: 50%;
    ${media.greaterThan('medium')`
      width: 230px;
    `}
  }
  ul.social-media {
    margin-top: 20px;
  }
  p.about {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.6;
  }
  div.profile {
    margin-top: 30px;
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  }
  ul.profile-list {
    display: grid;
    row-gap: 40px;
  }
  div.detail {
    margin-top: 50px;
    dl {
      display: grid;
      row-gap: 10px;
      & + dl {
        margin-top: 18px;
      }
      ${media.greaterThan('medium')`
        grid-template-columns: 150px auto;
      `}
    }
    dt {
      font-size: 20px;
      font-weight: 700;
      color: #444444;
      text-transform: capitalize;
    }
    dd {
      font-size: 16px;
    }
  }
`
