import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useInView } from 'react-intersection-observer'

import H4 from '../../atoms/headline/h4'

const DT = styled.dt`
  & ~ dt {
    margin-top: 30px;
  }
`

const DD = styled.dd`
  padding-top: 12px;
  * {
    transition: 1.5s;
  }
`

type ComponentProps = {
  title: String
  max: Number
  defaultValue: Number
  trackStyle: Object
  handleStyle: Object
  railStyle: Object
}

const Skill: FC<ComponentProps> = ({
  title,
  max,
  defaultValue,
  trackStyle,
  handleStyle,
  railStyle,
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Skill
