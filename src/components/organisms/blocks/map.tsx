import React, { useState } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Section = styled.section`
  height: 300px;
  ${media.greaterThan('medium')`
    height: auto;
  `}
`

const Map: FC = () => (
  <Section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10410.435432206437!2d-123.13524974400059!3d49.283808401336415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486722a1f6aa2b3%3A0xd45ea10f34a31c34!2sJervis%20St%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1619508259411!5m2!1sen!2sca"
      width="100%"
      height="100%"
    ></iframe>
  </Section>
)

export default Map
