import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const HeadLine = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.color || '#898989'};
  ${media.greaterThan('medium')`
  font-size: 18px;
  `}
`

type ComponentProps = { color?: string }

const H4: FC<ComponentProps> = ({ color, children }) => (
  <HeadLine color={color}>{children}</HeadLine>
)

export default H4
