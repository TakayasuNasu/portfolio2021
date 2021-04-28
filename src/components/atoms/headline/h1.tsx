import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const HeadLine = styled.h1`
  font-size: 22px;
  color: ${(props) => props.color || '#898989'};
  ${media.greaterThan('medium')`
  font-size: 24px;
  `}
`

type ComponentProps = { color?: string }

const H1: FC<ComponentProps> = ({ color, children }) => (
  <HeadLine color={color}>{children}</HeadLine>
)

export default H1
