import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { shadow } from '../../../util/styled-util'

type ComponentProps = { color?: String }

const Div = styled.div<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 38px;
  height: 38px;
  background-color: #ffffff;
  border-radius: 50%;
  ${shadow}
  * {
    width: 64%;
    height: 64%;
    color: ${(props) => props.color || '#010101'};
  }
`

const CircleIcon: FC<ComponentProps> = ({ color, children }) => (
  <Div className="circle-icon" color={color}>
    {children}
  </Div>
)

export default CircleIcon
