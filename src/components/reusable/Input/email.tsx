import React from 'react'
import type { ComponentProps } from './text'

// style
import { Input, Label } from './styles'

const InputEmail = React.forwardRef<HTMLInputElement, ComponentProps>(
  (
    { id, name, required, maxLength, placeholder, children },
    ref
  ): JSX.Element => {
    return (
      <>
        <Input
          type="email"
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
InputEmail.displayName = 'InputEmail'

export default InputEmail
