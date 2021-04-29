import React, { useState, useRef } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import axios from 'axios'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import '@rmwc/textfield/styles'
import '@rmwc/button/styles'

import H4 from '../../atoms/headline/h4'
import { shadow } from '../../../util/styled-util'

const Section = styled.section`
  div.form,
  div.thanks {
    display: grid;
    row-gap: 50px;
    padding: 30px 20px;
    opacity: 1;
    visibility: visible;
    transition: 1s;
    background-color: #ffffff;
    ${shadow}
    ${media.greaterThan('medium')`
    padding: 30px 40px;
      height: 488px;
    `}
    &.hide {
      padding: 0;
      max-height: 0;
      opacity: 0;
      visibility: hidden;
    }
  }
  input {
    background-color: #ffffff;
  }
  p.text {
    font-size: 16px;
    line-height: 1.6;
  }
`

const Contact: FC = () => {
  const [done, setDone] = useState(false)
  const inputName = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputMessage = useRef<HTMLInputElement>(null)
  let hide: string = done ? 'hide' : ''
  let visible: string = done ? '' : 'hide'
  const again = () => setDone(!done)

  const handlDone = () => {
    const result = (() => {
      if (!inputName.current?.value) return false
      if (!inputEmail.current?.value) return false
      if (!inputMessage.current?.value) return false
      return true
    })()
    if (result) {
      postToSlack()
      setDone(!done)
      if (inputMessage.current?.value) {
        inputMessage.current.value = ''
      }
    } else {
      alert('input missing!')
    }
  }

  const postToSlack = async () => {
    const channel = '@taka'
    const username = 'slackbot'
    const text = `${inputEmail.current?.value} - ${inputName.current?.value}\n${inputMessage.current?.value}`
    const data = `payload={
      "channel": "${channel}",
      "username": "${username}",
      "text": "${text}"
    }`
    await axios
      .post(
        `https://hooks.slack.com/services/${process.env.GATSBY_SLACK_TOKEN}`,
        data
      )
      .catch((error) => console.error(error))
  }

  return (
    <Section id="contact">
      <div className={`form ${hide}`}>
        <H4>Please feel free to send message to me if you have a question.</H4>
        <TextField inputRef={inputName} ripple label="Name" />
        <TextField inputRef={inputEmail} ripple label="Email" />
        <TextField inputRef={inputMessage} ripple label="Message" />
        <Button ripple label="Send Message" raised onClick={handlDone} />
      </div>
      <div className={`thanks ${visible}`}>
        <p className="text">
          I appreciate you contact me.
          <br />
          ※Attention please, a confirmation email will not be sent.
        </p>
        <Button ripple label="Again" raised onClick={again} />
      </div>
    </Section>
  )
}

export default Contact
