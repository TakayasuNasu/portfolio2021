import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { pseudo } from '../../../util/styled-util'

const share = `
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`

const pcSize = `
width: 45px;
height: 5px;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  ${media.greaterThan('medium')`
  width: 45px;
  height: 45px;
  `}
  cursor: pointer;
  span.span {
    display: block;
    position: relative;
    width: 50px;
    height: 6px;
    ${media.greaterThan('medium')`
    ${pcSize}
    `}
    background: ${(props) => (props.active ? 'transparent' : '#898989')};
    ${share}
    &::before,
    &::after {
      ${pseudo('50px', '6px')}
      ${share}
      ${media.greaterThan('medium')`
        ${pcSize}
      `}
      background-color: #898989;
    }
    &::before {
      top: ${(props) => (props.active ? 0 : '-24px')};
      ${media.greaterThan('medium')`
        top: ${(props) => (props.active ? 0 : '-22px')};
      `}
      transform: ${(props) => (props.active ? 'rotate(45deg)' : 'none')};
    }
    &::after {
      bottom: ${(props) => (props.active ? 0 : '-24px')};
      ${media.greaterThan('medium')`
        bottom: ${(props) => (props.active ? 0 : '-22px')};
      `}
      transform: ${(props) => (props.active ? 'rotate(-45deg)' : 'none')};
    }
  }
`

type ComponentProps = { isExpanded: Boolean }

const MenuButon = ({ isExpanded = false }: ComponentProps) => {
  return (
    <Div active={isExpanded}>
      <span className="span"></span>
    </Div>
  )
}

export default MenuButon
