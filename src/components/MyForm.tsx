"use client"

import { testAction } from "@/actions/actions"

export default function MyForm() {
  return (
    <form
      action={testAction}
      className="grid gap-2"
      onSubmit={(e) => {
        e.preventDefault()
        console.log("Test")
        e.currentTarget.requestSubmit()
      }}
    >
      <label htmlFor="input">Name</label>
      <input
        type="text"
        name="username"
        id="input"
        className="border border-zinc-600 px-4 py-2"
      />
      <button className="cursor-pointer bg-amber-800">Submit</button>
    </form>
  )
}
