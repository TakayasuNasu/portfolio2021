import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FaCode } from 'react-icons/fa'
import { TiDeviceLaptop, TiEdit, TiHtml5 } from 'react-icons/ti'

import H3 from '../../atoms/headline/h3'
import H4 from '../../atoms/headline/h4'

const Section = styled.section`
  ul.grid {
    display: grid;
    row-gap: 50px;
    margin-top: 30px;
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
    `}
    li {
      background-color: #ffffff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03),
        0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
    }
    article {
      display: grid;
      row-gap: 24px;
      padding-top: 40px;
      padding-bottom: 30px;
      padding-left: 20px;
      padding-right: 20px;
    }
    svg {
      width: 30px;
      height: 34px;
    }
  }
  p.describe {
    font-size: 16px;
    line-height: 1.6;
  }
`

const Profile = () => {
  return (
    <Section>
      <H3>What I do</H3>
      <ul className="grid">
        <li>
          <article>
            <FaCode color="#2879ff" />
            <H4>Full Stack</H4>
            <p className="describe">
              i'm familiar with Backend, Frontend, and Mobile programing, also
              I'm good at creating System Architecture.
            </p>
          </article>
        </li>
        <li>
          <article>
            <TiDeviceLaptop color="#01c853" />
            <H4>Experience</H4>
            <p className="describe">
              i have experience large and small project. in addition Social
              game, web application development, landing page coding, and UX/UI.
            </p>
          </article>
        </li>
        <li>
          <article>
            <TiEdit color="#7C4DFF" />
            <H4>Ambition</H4>
            <p className="describe">
              I study myself a new programming language every year. Then I like
              to incorporate modern technology into my work.
            </p>
          </article>
        </li>
        <li>
          <article>
            <TiHtml5 color="orange" />
            <H4>Strategy</H4>
            <p className="describe">
              I can select technologies based on the technology level of my team
              members. I've led many successful projects with my coworker.
            </p>
          </article>
        </li>
      </ul>
    </Section>
  )
}

export default Profile
