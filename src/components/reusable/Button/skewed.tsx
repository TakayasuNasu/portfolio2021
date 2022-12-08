import React from 'react'
import { useAppContext } from '@/context/store'

// style
import { StyledSkewedInput, StyledSkewedLabel } from './styles'

type ComponentProps = {
  labelOn: string
  labelOff: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Skewed = React.forwardRef<HTMLInputElement, ComponentProps>(
  ({ id, labelOn, labelOff }, ref): JSX.Element => {
    const {
      state: { mode },
      toggleMode,
    } = useAppContext()

    const checkd = mode == 'light'

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const mode = e.target.checked ? 'light' : 'dark'
      toggleMode(mode)
    }

    return (
      <>
        <StyledSkewedInput
          type="checkbox"
          id={id}
          ref={ref}
          checked={checkd}
          onChange={handleChange}
        />
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
