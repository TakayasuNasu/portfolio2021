import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import H3 from '../../atoms/headline/h3'
import Skill from '../../molecules/card/skill'
import data from '../../../data/yml/skills.yml'

const Section = styled.section`
  display: grid;
  row-gap: 50px;
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  `}
  dl.d-list {
    margin-top: 30px;
    padding-top: 40px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03),
      0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
  }
`

const skillProps = { ...data }

const Skills: FC = () => {
  return (
    <Section>
      <article>
        <H3>Programing/Framework 01</H3>
        <dl className="d-list">
          <Skill {...skillProps.js} />
          <Skill {...skillProps.php} />
          <Skill {...skillProps.ruby} />
          <Skill {...skillProps.go} />
        </dl>
      </article>
      <article>
        <H3>Programing/Framework 02</H3>
        <dl className="d-list">
          <Skill {...skillProps.swift} />
          <Skill {...skillProps.python} />
          <Skill {...skillProps.node} />
          <Skill {...skillProps.java} />
        </dl>
      </article>
      <article>
        <H3>Database</H3>
        <dl className="d-list">
          <Skill {...skillProps.mysql} />
          <Skill {...skillProps.postgresql} />
          <Skill {...skillProps.sqlite} />
        </dl>
      </article>
      <article>
        <H3>Cloud/Virtualization</H3>
        <dl className="d-list">
          <Skill {...skillProps.docker} />
          <Skill {...skillProps.vagrant} />
          <Skill {...skillProps.aws} />
        </dl>
      </article>
      <article>
        <H3>Other 1</H3>
        <dl className="d-list">
          <Skill {...skillProps.html5} />
          <Skill {...skillProps.wordpress} />
          <Skill {...skillProps.android} />
        </dl>
      </article>
      <article>
        <H3>Other 2</H3>
        <dl className="d-list">
          <Skill {...skillProps.git} />
          <Skill {...skillProps.junit} />
          <Skill {...skillProps.circleci} />
        </dl>
      </article>
    </Section>
  )
}

export default Skills
