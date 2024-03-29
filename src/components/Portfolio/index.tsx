import React, { useState } from 'react'
import type { FC } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FiExternalLink, FiList } from 'react-icons/fi'
import Link from '@/components/reusable/Link'
import useAllFile from '@/hooks/useAllFile'
import { H3 } from '@/components/reusable/Headlines'

// style
import { Section, UL, Wrapper, VisualBlock, Div } from './styles'

// data
import Data from '@/data/yml/portfolio.yml'

export type PortfolioYML = {
  img: string
  title: string
  siteUrl: string
  pageUrl: string
  type: string
}

const data = Data as Array<PortfolioYML>

const Portfolio: FC = (): JSX.Element => {
  const [type, setType] = useState('ALL')

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setType(e.currentTarget.innerHTML)
  }

  const cards = data.map((data, i: number) => {
    const className = type != 'ALL' ? (data.type != type ? 'hide' : '') : ''
    return (
      <li className={`card ${className}`} key={i + data.title}>
        <Card
          img={data.img}
          title={data.title}
          siteUrl={data.siteUrl}
          pageUrl={data.pageUrl}
        />
      </li>
    )
  })

  const menu = ['ALL', 'SYSTEM', 'CMS', 'GAME'].map(text => {
    const className = type == text ? 'active' : ''
    return (
      <li className={className} onClick={handleClick} key={text}>
        {text}
      </li>
    )
  })

  return (
    <Section id="portfolio">
      <div className="header">
        <H3>Portfolio</H3>
        <ul className="list">{menu}</ul>
      </div>

      <UL>{cards}</UL>
    </Section>
  )
}

export default Portfolio

type ComponentProps = {
  img: string
  title: string
  siteUrl: string
  pageUrl: string
}

export const Card: FC<ComponentProps> = ({
  img = 's-portal.png',
  title = 'S-Portal',
  siteUrl = '',
  pageUrl = '/',
}): JSX.Element => {
  const images = useAllFile()
  const image = images.find(image => image.relativePath == `portfolio/${img}`)

  return (
    <Wrapper>
      <VisualBlock>
        <figure className="image">
          {image?.childImageSharp?.gatsbyImageData && (
            <GatsbyImage
              image={image?.childImageSharp?.gatsbyImageData}
              alt="site image"
            />
          )}
        </figure>
        <span className="title">{title}</span>
      </VisualBlock>
      <Div className="bottom">
        <a
          className="anchor"
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteUrl && <FiExternalLink />}
        </a>
        <Link to={pageUrl}>
          <FiList />
        </Link>
      </Div>
    </Wrapper>
  )
}
