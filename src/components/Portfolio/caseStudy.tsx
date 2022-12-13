import React from 'react'
import type { FC } from 'react'

// components
import { H2 } from '@/components/reusable/Headlines'

// style
import { StyledCaseStudy } from './styles'

type ComponentProps = {
  title: string | null
  date: string | null
  client: string | null
  techStack: string | null
}

const CaseStudy: FC<ComponentProps> = ({
  title,
  client,
  techStack,
}): JSX.Element => {
  return (
    <StyledCaseStudy>
      <div className="inner">
        <header>
          <aside>
            <p>- CASE STUDY</p>
          </aside>
          <H2>{title}</H2>
        </header>
        <dl className="info">
          <dt>CLIENT</dt>
          <dd>{client}</dd>
          <dt>TECH STACK</dt>
          <dd>{techStack}</dd>
        </dl>
      </div>
    </StyledCaseStudy>
  )
}

export default CaseStudy
