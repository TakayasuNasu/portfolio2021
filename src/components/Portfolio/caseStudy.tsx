import React from 'react'
import type { FC } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// hooks
import useAllFile from '@/hooks/useAllFile'

// components
import { H2, H3 } from '@/components/reusable/Headlines'

// style
import { StyledCaseStudy } from './styles'

type ComponentProps = {
  title: string | null
  date: string | null
  client: string | null
  techStack: string | null
  files: readonly (string | null)[] | null
  children: React.ReactNode
}

const CaseStudy: FC<ComponentProps> = ({
  title,
  client,
  techStack,
  files,
  children,
}): JSX.Element => {
  const images = useAllFile()
  const image = images.find(
    image => image.relativePath == `portfolio/${files?.at(0)}`
  )

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

        <ul className="main">
          <li>
            <figure>
              {image?.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                  image={image?.childImageSharp?.gatsbyImageData}
                  alt="site image"
                />
              )}
            </figure>
          </li>

          <li>
            <H3>- EPISODE</H3>
          </li>

          <li className="body">{children}</li>
        </ul>
      </div>
    </StyledCaseStudy>
  )
}

export default CaseStudy
