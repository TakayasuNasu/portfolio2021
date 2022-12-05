import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { fontLarge, vmin } from '@/util/styled-util'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.8);
  nav.inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: auto;
    width: 90vw;
    height: 100%;
    ${media.greaterThan('large')`
      width: 1024px;
    `}
    a {
      color: ${({ theme }) => theme.color.subText};
      text-decoration: none;
    }
  }
  ul.anchor-list {
    display: none;
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: repeat(4, auto);
      column-gap: ${vmin(24, 1920)};
      ${fontLarge}
    `}
  }
  button {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`
