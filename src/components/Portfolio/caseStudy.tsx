import React from 'react'
import type { FC } from 'react'

// components
import { H2, H3 } from '@/components/reusable/Headlines'

// style
import { StyledCaseStudy } from './styles'

type ComponentProps = {
  title: string
}

const CaseStudy: FC<ComponentProps> = ({ title }): JSX.Element => {
  return (
    <StyledCaseStudy>
      <div className="inner">
        <H2>CASE STUDY</H2>
        <H3>{title}</H3>
      </div>
    </StyledCaseStudy>
  )
}

export default CaseStudy
