import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { fontMedium, _util } from '@/util/styled-util'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.color.sbg};
  ${_util.shadow}
  div.form,
  div.thanks {
    padding: 30px 20px;
    transition: 1s;
    ${media.greaterThan('medium')`
      padding: 30px 40px;
    `}
    &[data-visible='true'] {
      opacity: 1;
      visibility: visible;
    }
    &[data-visible='false'] {
      max-height: 0;
      padding-block: 0;
      opacity: 0;
      visibility: hidden;
    }
  }
  ul.input-list,
  ul.thanks {
    display: grid;
    row-gap: 50px;
    margin-top: 24px;
    > li {
      position: relative;
      padding-top: 1.5em;
    }
  }
  p.text {
    ${fontMedium}
    line-height: 1.6;
  }
`
