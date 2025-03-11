"use client"

import { createContext, useContext, type ComponentProps } from "react"
import { tv } from "tailwind-variants"

const inputStyles = tv({
  base: "rounded border border-zinc-500 px-4 py-2 text-zinc-800 shadow focus-visible:ring-1 focus-visible:ring-zinc-700 focus-visible:outline-none",
})

export const InputContext = createContext<ComponentProps<typeof Input>>({})

export default function Input(props: ComponentProps<"input">) {
  const inputContext = useContext(InputContext)

  const { ref, className, ...mergedProps } = { ...inputContext, ...props }

  return (
    <input ref={ref} className={inputStyles({ className })} {...mergedProps} />
  )
}
