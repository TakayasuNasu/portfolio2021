import React from 'react'
import type { FC } from 'react'

// components
import SocialMedia from '@/components/SocialMedia'
import { H3 } from '@/components/reusable/Headlines'

// style
import { StyledFooter } from './styles'

const Footer: FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <H3>Thank You For Visiting.</H3>
      <p className="copy">
        TAK {new Date().getFullYear()}. All rights reserved.
      </p>

      <div className="social-media">
        <SocialMedia />
      </div>
    </StyledFooter>
  )
}

export default Footer
