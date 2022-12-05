import React from 'react'
import type { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RightNav from '@/components/RightNav'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = 'light'
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
        <RightNav />
      </ThemeProvider>
    </>
  )
}

export default Layout
