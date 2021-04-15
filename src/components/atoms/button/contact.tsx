import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { vw, pseudo } from '../../../util/styled-util'

const Anchor = styled.a<{ bg?: String }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${vw(88)};
  height: ${vw(40)};
  ${media.greaterThan('medium')`
    width: 120px;
    height: 40px;
  `}
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: ${(props: any) => props.bg || '#2ecc71'};
  transition: background-color 0.3s;
  &:hover {
    background-color: #27ae60;
  }
  &::after {
    ${pseudo('10px', '10px')}
  }
  p.button-text {
    font-size: 20px;
    color: #ecf0f1;
  }
`

type ComponentProps = { bg?: String }

const ContactButton: FC<ComponentProps> = ({ bg, children }) => {
  return (
    <Anchor bg={bg}>
      <p className="button-text">{children}</p>
    </Anchor>
  )
}

export default ContactButton
