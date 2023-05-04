import React from 'react'
import type { FC } from 'react'
import { FaCode } from 'react-icons/fa'
import { TiDeviceLaptop, TiEdit, TiHtml5 } from 'react-icons/ti'
import { H3, H4 } from '@/components/reusable/Headlines'

// styles
import { Section } from './styles'

const Profile: FC = (): JSX.Element => {
  return (
    <Section id="profile">
      <H3>What I do</H3>

      <ul className="grid">
        <li>
          <article>
            <FaCode color="#2879ff" />
            <H4>Full Stack</H4>
            <p className="describe">
              I&apos;m familiar with Backend, Frontend, and Mobile programing,
              also I&apos;m good at creating System Architecture.
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
              members. I&apos;ve led many successful projects with my coworker.
            </p>
          </article>
        </li>
      </ul>
    </Section>
  )
}

export default Profile
