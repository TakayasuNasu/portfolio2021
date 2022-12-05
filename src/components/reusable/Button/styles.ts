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
