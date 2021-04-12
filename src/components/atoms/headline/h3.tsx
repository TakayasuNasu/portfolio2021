import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const HeadLine = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.color || '#898989'};
  ${media.greaterThan('medium')`
  font-size: 24px;
  `}
`

type ComponentProps = { color?: String }

const H3: FC<ComponentProps> = ({ color, children }) => (
  <HeadLine color={color}>{children}</HeadLine>
)

export default H3
