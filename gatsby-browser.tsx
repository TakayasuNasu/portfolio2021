import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { AppContextProvider } from './src/context/store'
import './src/styles/common.scss'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <AppContextProvider>{element}</AppContextProvider>
}
