import React from 'react'
import type { FC } from 'react'
import Slider from 'rc-slider'
import { useInView } from 'react-intersection-observer'
import { H3, H4 } from '@/components/reusable/Headlines'

// style
import { Section, DT, DD } from './styles'
import 'rc-slider/assets/index.css'

// data
import data from '@/data/yml/skills.yml'

const skillProps = { ...data }

const Skils: FC = (): JSX.Element => {
  return (
    <Section id="skills">
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

export default Skils

type ComponentProps = {
  title: string
  max: number
  defaultValue: number
  trackStyle: React.CSSProperties | React.CSSProperties[]
  handleStyle: React.CSSProperties | React.CSSProperties[]
  railStyle: React.CSSProperties
}

const Skill: FC<ComponentProps> = ({
  title,
  max,
  defaultValue,
  trackStyle,
  handleStyle,
  railStyle,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <>
      <DT>
        <H4>{title}</H4>
      </DT>
      <DD ref={ref}>
        <Slider
          max={max}
          defaultValue={defaultValue}
          value={inView ? defaultValue : 0}
          trackStyle={trackStyle}
          handleStyle={handleStyle}
          railStyle={railStyle}
        />
      </DD>
    </>
  )
}
