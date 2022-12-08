import React from 'react'
import type { FC } from 'react'
import { useAppContext } from '@/context/store'

// style
import { Section } from './styles'

type ComponentProps = {
  forBackdrop?: boolean
}

const Hero: FC<ComponentProps> = ({ forBackdrop = true }): JSX.Element => {
  const {
    state: { mode },
  } = useAppContext()

  return (
    <Section
      className="Hero-component"
      data-backdrop={forBackdrop}
      data-mode={mode}
    ></Section>
  )
}

export default Hero
