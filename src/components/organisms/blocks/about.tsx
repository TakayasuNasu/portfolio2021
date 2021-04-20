import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import H2 from '../../atoms/headline/h2'
import H3 from '../../atoms/headline/h3'
import Image from '../../atoms/image'
import SNS from '../../molecules/list/sns-list'
import Contact from '../../atoms/button/contact'
import { vw, shadow } from '../../../util/styled-util'

const Section = styled.section`
  background-color: #ffffff;
  ${shadow}
  div.inner {
    padding: 45px 25px;
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1.45fr;
      column-gap: 30px;
    `}
  }
  figure.img {
    margin: 0 auto;
    width: ${vw(160)};
    ${media.greaterThan('medium')`
      width: 230px;
    `}
  }
  ul.sns {
    margin-top: 20px;
  }
  div.profile {
    margin-top: 30px;
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  }
  ul.profile-list {
    display: grid;
    row-gap: 40px;
  }
  div.detail {
    margin-top: 50px;
    dl {
      display: grid;
      row-gap: 10px;
      & + dl {
        margin-top: 18px;
      }
      ${media.greaterThan('medium')`
        grid-template-columns: 150px auto;
      `}
    }
    dt {
      font-size: 20px;
      font-weight: 700;
      color: #444444;
      text-transform: capitalize;
    }
    dd {
      font-size: 16px;
    }
  }
`

const About = () => (
  <Section>
    <div className="inner">
      <div className="pic">
        <figure className="img">
          <Image filename="face.jpg" style={{ borderRadius: '50%' }} />
        </figure>
        <SNS />
      </div>
      <div className="profile">
        <ul className="profile-list">
          <li>
            <H2>Takayasu Nasu</H2>
          </li>
          <li>
            <H3>Programmer / Full stack Engineer</H3>
          </li>
          <li>
            <Contact>contact</Contact>
          </li>
        </ul>
        <div className="detail">
          <dl>
            <dt>Address</dt>
            <dd>Jervis St / Vancouver BC</dd>
          </dl>
          <dl>
            <dt>Email</dt>
            <dd>taka.beckham@gmail.com</dd>
          </dl>
          <dl>
            <dt>Phone</dt>
            <dd>+1</dd>
          </dl>
        </div>
      </div>
    </div>
  </Section>
)

export default About
