import React from 'react'
import type { FC } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// hooks
import useAllFile from '@/hooks/useAllFile'
import useMedia from '@/hooks/useMedia'

// components
import { H2, H3 } from '@/components/reusable/Headlines'
import { Card } from './index'

// style
import { StyledCaseStudy, UL } from './styles'

// type
import type { PortfolioYML } from './index'

// data
import Data from '@/data/yml/portfolio.yml'

type ComponentProps = {
  title: string | null
  date: string | null
  client: string | null
  techStack: string | null
  files: readonly (string | null)[] | null
  children: React.ReactNode
}

const data = Data as Array<PortfolioYML>

const portfolios = (([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const data = [array[j], array[i]]
    array[i] = data[0]
    array[j] = data[1]
  }
  return array
})(data)

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
  const columnCount = useMedia<number>(['(min-width: 768px)'], [3], 2)

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

      <UL>
        {portfolios.slice(0, columnCount).map((data, i) => {
          return (
            <li key={i}>
              <Card {...{ ...data }} />
            </li>
          )
        })}
      </UL>
    </StyledCaseStudy>
  )
}

export default CaseStudy
