import React from 'react'
import type { FC } from 'react'

// style
import { StyledH1, StyledH2, StyledH3, StyledH4 } from './styles'

type ComponentProps = { color?: string; children: React.ReactNode }

export const H1: FC<ComponentProps> = ({ children }): JSX.Element => {
  return <StyledH1>{children}</StyledH1>
}

export const H2: FC<ComponentProps> = ({ children }): JSX.Element => {
  return <StyledH2>{children}</StyledH2>
}

export const H3: FC<ComponentProps> = ({ children }): JSX.Element => {
  return <StyledH3>{children}</StyledH3>
}

export const H4: FC<ComponentProps> = ({ children }): JSX.Element => {
  return <StyledH4>{children}</StyledH4>
}
