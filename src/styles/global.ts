import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.bg};
  }
`
