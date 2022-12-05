import React, { useState, useEffect, useRef } from 'react'
import type { FC } from 'react'

// hooks
import useWindowSize from '@/hooks/useWindowSize'

// components
import { H4 } from '@/components/reusable/Headlines'
import InputText from '@/components/reusable/Input/text'
import InputEmail from '@/components/reusable/Input/email'
import {
  Primary as Submit,
  Secondly as Button,
} from '@/components/reusable/Button'

// style
import { Section } from './styles'

const Contact: FC = (): JSX.Element => {
  const [done, sent] = useState(false)

  const formDiv = useRef<HTMLDivElement>(null)
  const thanksDiv = useRef<HTMLDivElement>(null)
  const inputName = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputMessage = useRef<HTMLInputElement>(null)

  const size = useWindowSize()

  useEffect(() => {
    if (formDiv.current && thanksDiv.current) {
      const max = Math.max(
        formDiv.current.clientHeight,
        thanksDiv.current.clientHeight
      )

      formDiv.current.style.height = `${max}px`
      thanksDiv.current.style.height = `${max}px`
    }
  }, [formDiv, thanksDiv, size])

  const handleSendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = (() => {
      if (!inputName.current?.value) return false
      if (!inputEmail.current?.value) return false
      if (!inputMessage.current?.value) return false
      return true
    })()

    if (result) {
      e.preventDefault()
      postToSlack()
      sent(true)
      if (inputMessage.current?.value) {
        inputMessage.current.value = ''
      }
    }
  }

  const again = () => sent(!done)

  const postToSlack = () => {
    const channel = '@taka'
    const username = 'slackbot'
    const text = `${inputEmail.current?.value} - ${inputName.current?.value}\n${inputMessage.current?.value}`
    const payload = {
      channel: channel,
      username: username,
      text: text,
    }
    fetch(
      `https://hooks.slack.com/services/${process.env.GATSBY_SLACK_TOKEN}`,
      {
        method: 'post',
        body: JSON.stringify(payload),
      }
    )
      .then(res => {
        if (!res.ok) {
          throw new Error(`Server error ${res.status}`)
        }
        return res.json()
      })
      .catch(error => console.error(error))
  }

  return (
    <Section id="contact">
      <div className="form" data-visible={!done} ref={formDiv}>
        <H4>Please feel free to send message to me if you have a question.</H4>

        <form>
          <ul className="input-list">
            <li>
              <InputText
                id="input-name"
                placeholder="Your Name"
                required={true}
                ref={inputName}
              >
                Name
              </InputText>
            </li>
            <li>
              <InputEmail
                id="input-email"
                placeholder="Email"
                required={true}
                ref={inputEmail}
              >
                Email
              </InputEmail>
            </li>
            <li>
              <InputText
                id="input-message"
                placeholder="Message"
                required={true}
                ref={inputMessage}
              >
                Message
              </InputText>
            </li>
            <li>
              <Submit onClick={handleSendMessage}>Send Message</Submit>
            </li>
          </ul>
        </form>
      </div>

      <div className="thanks" data-visible={done} ref={thanksDiv}>
        <ul className="thanks">
          <li>
            <p className="text">
              I appreciate you contact me. I&lsquo;ll reply the email you fill
              in.
              <br />
              ※Attention please, a confirmation email will not be sent.
            </p>
          </li>
          <li>
            <Button onClick={again}>Again</Button>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Contact
