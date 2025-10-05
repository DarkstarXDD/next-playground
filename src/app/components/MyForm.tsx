"use client"

import { signUp } from "@/actions/signUp"

export default function MyForm() {
  return (
    <form className="m-auto grid max-w-30 gap-2">
      <input name="firstName" className="border border-white" />
      <input name="lastName" className="border border-white" />

      <button formAction={signUp} type="submit">
        Submit
      </button>
    </form>

    // <button formAction={signUp}>Click Me</button>
  )
}
