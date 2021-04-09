import React from 'react'
import type { FC } from 'react'
import { Reset } from 'styled-reset'
import 'typeface-open-sans'
import '../styles/common.scss'

export const Layout: FC = ({ children }) => (
  <div className="wrapper">
    <Reset />
    <main className="container">{children}</main>
  </div>
)
