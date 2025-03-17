"use client"

import {
  Disclosure,
  Heading,
  Button,
  DisclosurePanel,
} from "react-aria-components"
import type { ReactNode } from "react"
import type { DisclosureProps } from "react-aria-components"

import { cn } from "@/lib/utils"

import { HiOutlineFunnel } from "react-icons/hi2"

export default function FiltersDisclosure({
  title,
  children,
  className,
  ...props
}: DisclosureProps & {
  title: string
  children: ReactNode
}) {
  return (
    <Disclosure {...props} className={cn("group", className)}>
      <div className="flex flex-col">
        <Heading>
          <Button
            className="group-data-[expanded]:bg-primary-blue flex cursor-pointer items-center justify-center rounded border border-zinc-400 p-2 ring-zinc-500 outline-none data-[focus-visible]:ring-2"
            aria-label={title}
            slot="trigger"
          >
            <HiOutlineFunnel className="stroke-primary-blue size-5 fill-white" />
          </Button>
        </Heading>

        <DisclosurePanel>{children}</DisclosurePanel>
      </div>
    </Disclosure>
  )
}
