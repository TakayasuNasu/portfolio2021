import styled from 'styled-components'

export const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  li {
    justify-self: center;
  }
  a {
    color: #898989;
    text-decoration: none;
  }
  svg {
    font-size: 20px;
  }
`
