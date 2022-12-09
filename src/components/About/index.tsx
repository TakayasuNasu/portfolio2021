import React from 'react'
import type { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

// hooks and components
import useSiteMasta from '@/hooks/useContentfulSiteMasta'
import { useAppContext } from '@/context/store'
import { H2, H3 } from '@/components/reusable/Headlines'
import { Primary as ContactButton } from '@/components/reusable/Button'
import SockalMedia from '@/components/SocialMedia'

// style
import { Section } from './styles'

const About: FC = (): JSX.Element => {
  const masta = useSiteMasta()
  const data = masta?.data?.map(d => {
    return {
      key: d?.key || '',
      value: d?.value || '',
    }
  })

  const {
    state: { mode },
  } = useAppContext()

  return (
    <Section>
      <div className="inner">
        <div className="pic">
          <figure className="img">
            {mode == 'light' ? (
              <StaticImage src="../../images/face.jpg" alt="Picture of me." />
            ) : (
              <StaticImage src="../../images/face.png" alt="Picture of me." />
            )}
          </figure>

          <SockalMedia />

          <p className="about">
            Senior Full-Stack Web Developer with more than 10 years of
            experience in Information Technology Industry. Fukuoka university |
            Oita.
          </p>
        </div>

        <div className="profile">
          <ul className="profile-list">
            <li>
              <H2>Takayasu Nasu</H2>
            </li>
            <li>
              <H3>Programmer / Full Stack Developer</H3>
            </li>
            <li>
              <AnchorLink to="/#contact">
                <ContactButton>Contact</ContactButton>
              </AnchorLink>
            </li>
          </ul>

          <div className="detail">
            <dl>
              <dt>Address</dt>
              <dd>{data && data.find(d => d.key == 'address')?.value}</dd>
            </dl>
            <dl>
              <dt>Email</dt>
              <dd>{data && data.find(d => d.key == 'email')?.value}</dd>
            </dl>
            <dl>
              <dt>Phone</dt>
              <dd>+1</dd>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
