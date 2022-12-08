/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { _util, vmin } from '@/util/styled-util'

export const Section = styled.section`
  ul.timeline-list {
    position: relative;
    margin-top: 30px;
    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 18px;
      width: 1px;
      background-color: #bababa;
      ${media.greaterThan('medium')`
        left: 50%;
      `}
    }
  }
`

type StyledProps = {
  borderColor: any
  flexStyle: any
  iconStyle: any
  itemBefore: any
  itemAfter: any
}

export const LI = styled.li<StyledProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media.greaterThan<StyledProps>('medium')`
    ${props => props.flexStyle};
    max-width: 50%;
  `}
  & + li {
    margin-top: 50px;
    ${media.greaterThan('medium')`
      margin-top: -26%;
    `}
    ${media.greaterThan('large')`
      margin-top: -12%;
    `}
  }
  div.circle-icon {
    margin-top: 24px;
    ${media.greaterThan<StyledProps>('medium')`
      ${props => props.iconStyle};
    `}
  }
  article {
    display: grid;
    row-gap: 24px;
    position: relative;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - ${vmin(60)});
    ${media.greaterThan('medium')`
      width: calc(100% - 40px);
    `}
    ${_util.shadow};
    background-color: ${({ theme }) => theme.color.sbg};
    border-top: 3px solid ${props => props.borderColor || '#2879ff'};
    &:before,
    &:after {
      content: ' ';
      display: inline-block;
      position: absolute;
    }
    &:before {
      top: 28px;
      right: -13px;
      opacity: 0.2;
      border-color: transparent rgba(0, 0, 0, 0.1);
      border-style: solid;
      border-width: 13px 0 13px 13px;
      ${media.greaterThan<StyledProps>('medium')`
        ${props => props.itemBefore};
      `}
    }
    &:after {
      top: 30px;
      left: -10px;
      border-top: 10px solid transparent;
      border-left: 0 solid #ffffff;
      border-right: 10px solid #ffffff;
      border-bottom: 10px solid transparent;
      ${media.greaterThan<StyledProps>('medium')`
        ${props => props.itemAfter};
      `}
    }
  }
  p.text {
    font-size: 16px;
    line-height: 1.6;
  }
`
