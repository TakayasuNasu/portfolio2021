import React from 'react'
import type { FC } from 'react'

// style
import { Section } from './styles'

type ComponentProps = {
  forBackdrop?: boolean
}

const Hero: FC<ComponentProps> = ({ forBackdrop = true }): JSX.Element => {
  return (
    <Section className="Hero-component" data-backdrop={forBackdrop}></Section>
  )
}

export default Hero
