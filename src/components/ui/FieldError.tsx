"use client"

import { ComponentProps, createContext, useContext } from "react"

type FieldErrorProps = Omit<ComponentProps<"p">, "children">

export default function FieldError(props: FieldErrorProps) {
  const fieldErrorContext = useFieldErrorContext()

  const {
    className,
    isInvalid,
    errors = [],
    ...mergedProps
  } = { ...fieldErrorContext, ...props }

  return (
    <div className={className} {...mergedProps}>
      <p>{isInvalid ? errors.join(", ") : null}</p>
    </div>
  )
}

type FieldErrorContextType =
  | (ComponentProps<typeof FieldError> & {
      id: string
      isInvalid: boolean
      errors?: string[]
    })
  | null

export const FieldErrorContext = createContext<FieldErrorContextType>(null)

function useFieldErrorContext() {
  const context = useContext(FieldErrorContext)
  if (!context) {
    throw new Error(
      "FieldError components must be rendered inside a FieldErrorContext"
    )
  }
  return context
}
