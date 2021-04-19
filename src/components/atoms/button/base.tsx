import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ButtonStyled from './styled'

const Anchor = styled(ButtonStyled)`
  p.button-text {
    font-size: 16px;
  }
`

type ComponentProps = {
  bg?: String
  to?: string
  isExternal?: Boolean
  disabled?: Boolean
}

const Base: FC<ComponentProps> = ({
  bg,
  to = '/',
  isExternal = false,
  disabled = false,
  children,
}) => {
  return (
    <Anchor bg={bg} disabled={disabled}>
      {isExternal ? (
        <a href={to} target="_blank">
          <p className="button-text">{children}</p>
        </a>
      ) : (
        <Link to={to}>
          <p className="button-text">{children}</p>
        </Link>
      )}
    </Anchor>
  )
}

export default Base
