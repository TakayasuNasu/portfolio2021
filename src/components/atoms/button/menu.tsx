import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { vw, pseudo } from '../../../util/styled-util'

const share = `
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`

const pcSize = `
width: 45px;
height: 5px;
`

type StyledProps = { active: Boolean }

const Div = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  width: ${vw(45)};
  height: ${vw(45)};
  ${media.greaterThan('medium')`
  width: 45px;
  height: 45px;
  `}
  cursor: pointer;
  span.span {
    display: block;
    position: relative;
    width: ${vw(45)};
    height: 6px;
    ${media.greaterThan('medium')`
    ${pcSize}
    `}
    background: ${(props) => (props.active ? 'transparent' : '#898989')};
    ${share}
    &::before,
    &::after {
      ${pseudo(vw(45), '6px')}
      ${share}
      ${media.greaterThan('medium')`
        ${pcSize}
      `}
      background-color: #898989;
    }
    &::before {
      top: ${(props) => (props.active ? 0 : '-24px')};
      ${media.greaterThan<StyledProps>('medium')`
        top: ${(props) => (props.active ? 0 : '-22px')};
      `}
      transform: ${(props) => (props.active ? 'rotate(45deg)' : 'none')};
    }
    &::after {
      bottom: ${(props) => (props.active ? 0 : '-24px')};
      ${media.greaterThan<StyledProps>('medium')`
        bottom: ${(props) => (props.active ? 0 : '-22px')};
      `}
      transform: ${(props) => (props.active ? 'rotate(-45deg)' : 'none')};
    }
  }
`

type ComponentProps = {
  isExpanded?: Boolean
  setExpanded: (value: boolean) => void
}

const MenuButon: FC<ComponentProps> = ({ isExpanded = false, setExpanded }) => {
  return (
    <Div active={isExpanded} onClick={() => setExpanded(!isExpanded)}>
      <span className="span"></span>
    </Div>
  )
}

export default MenuButon
