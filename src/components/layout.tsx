import React from 'react'
import type { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { useAppContext } from '@/context/store'
import { lightTheme, darkTheme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RightNav from '@/components/RightNav'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    state: { mode },
  } = useAppContext()

  const currentTheme = mode === 'light' ? lightTheme : darkTheme

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
