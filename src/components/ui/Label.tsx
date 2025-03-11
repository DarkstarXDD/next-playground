"use client"

import { createContext, useContext, type ComponentProps } from "react"
import { tv } from "tailwind-variants"

const labelStyles = tv({
  base: "block text-sm font-semibold text-zinc-900",
})

export const LabelContext = createContext<ComponentProps<typeof Label>>({})

export default function Label(props: ComponentProps<"label">) {
  const labelContext = useContext(LabelContext)

  const { ref, className, children, ...mergedProps } = {
    ...labelContext,
    ...props,
  }

  return (
    <label ref={ref} className={labelStyles({ className })} {...mergedProps}>
      {children}
    </label>
  )
}
