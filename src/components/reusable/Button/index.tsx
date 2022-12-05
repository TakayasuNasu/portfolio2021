import React from 'react'
import type { FC } from 'react'

// style
import { StyledPrimaryButton, StyledSecondlyButton } from './styles'

type ComponentProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Primary: FC<ComponentProps> = ({
  onClick,
  children,
}): JSX.Element => {
  return (
    <StyledPrimaryButton onClick={onClick}>
      {children}
      <span className="arrow"></span>
    </StyledPrimaryButton>
  )
}

export const Secondly: FC<ComponentProps> = ({
  onClick,
  children,
}): JSX.Element => {
  return (
    <StyledSecondlyButton onClick={onClick}>
      {children}
      <span className="arrow"></span>
    </StyledSecondlyButton>
  )
}
