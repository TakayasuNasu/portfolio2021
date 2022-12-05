import React from 'react'

// style
import { Input, Label } from './styles'

export type ComponentProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const InputText = React.forwardRef<HTMLInputElement, ComponentProps>(
  (
    { id, name, required, maxLength, placeholder, children },
    ref
  ): JSX.Element => {
    return (
      <>
        <Input
          type="text"
          id={id}
          maxLength={maxLength}
          name={name}
          required={required}
          placeholder={placeholder}
          ref={ref}
        />

        {required ? (
          <Label htmlFor={id}>
            {children}
            <sup>*</sup>
          </Label>
        ) : (
          <Label htmlFor={id}>{children}</Label>
        )}
      </>
    )
  }
)
InputText.displayName = 'InputText'

export default InputText
