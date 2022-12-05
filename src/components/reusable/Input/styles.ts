import styled from 'styled-components'
import { fontSmall } from '@/util/styled-util'

export const Input = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  background-color: transparent;
  border-radius: 0;
  border-bottom: solid 1px ${({ theme }) => theme.color.border};
  &::placeholder {
    font: inherit;
    color: transparent;
  }
  &:focus,
  &:valid {
    &::placeholder {
      color: ${({ theme }) => theme.color.subText};
    }
    & + label {
      transform: translateY(-1.5rem);
    }
  }
`

export const Label = styled.label`
  position: absolute;
  top: 1.5rem;
  transition: 0.4s;
  ${fontSmall}
`
