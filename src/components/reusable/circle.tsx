import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'

type ComponentProps = { color?: string; children: React.ReactNode }

const Div = styled.div<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 38px;
  height: 38px;
  background-color: #ffffff;
  border-radius: 50%;
  * {
    width: 64%;
    height: 64%;
    color: ${props => props.color || '#010101'};
  }
`

const CircleIcon: FC<ComponentProps> = ({ color, children }): JSX.Element => {
  return (
    <Div className="circle-icon" color={color}>
      {children}
    </Div>
  )
}

export default CircleIcon
