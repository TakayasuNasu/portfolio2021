import React from 'react'
import type { FC } from 'react'

// style
import { Section } from './styles'

const Map: FC = (): JSX.Element => {
  return (
    <Section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.3577578786!2d-123.19394362633216!3d49.2578263202102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1668587589991!5m2!1sen!2sca"
        width="100%"
        height="100%"
      ></iframe>
    </Section>
  )
}

export default Map
