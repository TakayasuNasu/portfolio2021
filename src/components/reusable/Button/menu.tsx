import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { useAppContext } from '@/context/store'
import { _util, vmin } from '@/util/styled-util'

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${media.greaterThan('medium')`
    width: 45px;
    height: 45px;
  `}
  cursor: pointer;
  span.span {
    display: block;
    position: relative;
    width: ${vmin(54)};
    height: 6px;
    ${media.greaterThan('medium')`
      width: 45px;
    `}
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.subText};
    transition: all 0.4s ease-in-out;
    &::before,
    &::after {
      ${_util.pseudo}
      width: ${vmin(54)};
      height: 6px;
      ${media.greaterThan('medium')`
        width: 45px;
      `}
      border-radius: 5px;
      background-color: ${({ theme }) => theme.color.subText};
      transition: all 0.4s ease-in-out;
      transform: none;
    }
    &::before {
      top: -14px;
    }
    &::after {
      bottom: -14px;
    }
    &[data-active='true'] {
      background-color: transparent;
      &::before {
        top: 0;
        transform: rotate(45deg);
      }
      &::after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }
  }
`

const Menu: FC = (): JSX.Element => {
  const {
    state: { expanded },
    toggle,
  } = useAppContext()

  return (
    <StyledMenu onClick={toggle}>
      <span className="span" data-active={expanded}></span>
    </StyledMenu>
  )
}

export default Menu
