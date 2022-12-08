import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { vmin } from '@/util/styled-util'

export const Wrapper = styled.div`
  div.layer {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    opacity: 1;
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.1s;
    &[data-active='false'] {
      max-height: 0;
      min-height: 0;
      opacity: 0;
      visibility: hidden;
    }
  }
  nav {
    display: grid;
    row-gap: 40px;
    position: fixed;
    z-index: 10;
    top: 70px;
    bottom: 0;
    inset-inline: 0;
    overflow-y: scroll;
    margin-left: auto;
    margin-right: 0;
    padding-block: 30px;
    padding-inline: ${vmin(30)};
    width: 100%;
    ${media.greaterThan('medium')`
      padding-inline: 30px;
      width: 310px;
    `}
    background-color: rgb(43, 43, 43);
    transition: 0.3s;
    &[data-active='false'] {
      padding: 0;
      width: 0;
      transition: 0.4s;
    }
  }
  figure.img {
    overflow: hidden;
    margin-inline: auto;
    width: ${vmin(280)};
    height: ${vmin(280)};
    border-radius: 50%;
    ${media.greaterThan('medium')`
      width: 230px;
      height: 230px;
    `}
  }
  ul.link-list {
    display: grid;
    row-gap: 24px;
    justify-content: flex-start;
    a {
      font-size: 18px;
      color: ${({ theme }) => theme.color.grey};
      &.active {
        color: ${({ theme }) => theme.color.light};
      }
    }
    svg {
      vertical-align: middle;
      margin-right: 16px;
    }
  }
  footer {
    font-size: 16px;
    color: ${({ theme }) => theme.color.grey};
    align-self: end;
    div.toggle {
      margin-block: 20px;
    }
  }
`
