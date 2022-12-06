import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { fontSmall } from '@/util/styled-util'

export const StyledPrimaryButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  ${media.greaterThan('medium')`
    padding: 10px 16px;
  `}
  ${fontSmall}
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.green};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    span.arrow {
      transform: rotate(-45deg) translate(4px, 4px);
      border-color: text-hover-color;
    }
    span.arrow:before {
      opacity: 1;
      width: 8px;
    }
  }
  span.arrow {
    width: 6px;
    height: 6px;
    border-right: 2px solid #c2ffe9;
    border-bottom: 2px solid #c2ffe9;
    position: relative;
    transform: rotate(-45deg);
    margin: 0 6px;
    transition: all 0.3s ease;
    &:before {
      display: block;
      background-color: currentColor;
      width: 3px;
      transform-origin: bottom right;
      height: 2px;
      position: absolute;
      opacity: 0;
      bottom: calc(-2px / 2);
      transform: rotate(45deg);
      transition: all 0.3s ease;
      content: '';
      right: 0;
    }
  }
`

export const StyledSecondlyButton = styled(StyledPrimaryButton)`
  background-color: ${({ theme }) => theme.color.blue};
`

export const StyledSkewed = styled.input`
  display: none;
  &:checked {
    & + label {
      background-color: ${({ theme }) => theme.color.blue};
      &:before {
        left: -100%;
      }
      &:after {
        left: 0;
      }
      &:active:after {
        left: 10%;
      }
    }
  }
`

export const StyledSkewedLabel = styled.label`
  overflow: hidden;
  display: block;
  position: relative;
  margin-inline: auto;
  width: 4em;
  height: 2em;
  transform: skew(-10deg) translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.smoke};
  &:after,
  &:before {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    font-weight: bold;
    line-height: 2em;
    color: ${({ theme }) => theme.color.light};
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    text-align: center;
    transform: skew(10deg);
    transition: all 0.2s ease;
  }
  &:before {
    left: 0;
    content: attr(data-label-off);
  }
  &:after {
    left: 100%;
    content: attr(data-label-on);
  }
  &:active {
    &:before {
      left: -10%;
    }
  }
`
