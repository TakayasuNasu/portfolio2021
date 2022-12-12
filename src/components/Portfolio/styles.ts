import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { fontMedium } from '@/util/styled-util'

export const Section = styled.section`
  div.header {
    ${media.greaterThan('medium')`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  }
  ul.list {
    display: flex;
    margin-top: 20px;
    font-size: 14px;
    color: #848484;
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
    li {
      cursor: pointer;
      & + li {
        padding-left: 15px;
      }
      &.active {
        color: #2879ff;
      }
    }
  }
`

export const UL = styled.ul`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  ${media.greaterThan('medium')`
    grid-gap: 36px;
    grid-auto-rows: 270px;
    grid-template-columns: repeat(auto-fill, 340px);
    width: 100%;
  `}
  ${media.greaterThan('large')`
    grid-gap: 26px;
    grid-auto-rows: 238px;
    grid-template-columns: repeat(auto-fill, 292px);
    width: 100%;
  `}
  li.card {
    @keyframes show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 3%), 0 3px 1px -2px rgb(0 0 0 / 3%),
      0 1px 5px 0 rgb(0 0 0 / 3%);
    animation: show 0.3s linear 0s;
    &.hide {
      display: none;
    }
  }
`
export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
    width: 340px;
  `}
  ${media.greaterThan('large')`
    width: 292px;
  `}
`

export const VisualBlock = styled.div`
  position: relative;
  width: 100%;
  ${media.greaterThan('medium')`
    height: 222px;
  `}
  ${media.greaterThan('large')`
    height: 190px;
  `}
  figure.image {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7));
    }
    &:hover {
      transform: scale(1.1, 1.1);
    }
    > div {
      height: 100%;
    }
  }
  span.title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    ${fontMedium}
    font-weight: 500;
    color: ${({ theme }) => theme.color.light};
  }
`

export const Div = styled.div`
  padding: 11px 30px;
  text-align: right;
  font-size: 22px;
  background-color: #ffffff;
  a {
    color: #848484;
    & + a {
      padding-left: 30px;
    }
  }
`

export const StyledCaseStudy = styled.section`
  background-color: ${({ theme }) => theme.color.sbg};
`
