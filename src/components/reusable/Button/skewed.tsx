import React from 'react'

import { StyledSkewed, StyledSkewedLabel } from './styles'

type ComponentProps = {
  labelOn: string
  labelOff: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Skewed = React.forwardRef<HTMLInputElement, ComponentProps>(
  ({ id, labelOn, labelOff }, ref): JSX.Element => {
    return (
      <>
        <StyledSkewed type="checkbox" id={id} ref={ref} />
        <StyledSkewedLabel
          htmlFor={id}
          data-label-on={labelOn}
          data-label-off={labelOff}
        ></StyledSkewedLabel>
      </>
    )
  }
)
Skewed.displayName = 'Skewed'

export default Skewed
