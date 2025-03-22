"use client"

import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import SubmitButton from "@/components/login/SubmitButton"
import { useActionState } from "react"
import { login } from "@/actions/actions"

export default function LoginForm() {
  const [formState, formAction] = useActionState(login, undefined)

  return (
    <form action={formAction} className="grid w-full max-w-96 gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" />
        {formState?.errors.email && (
          <p className="text-destructive">{formState.errors.email}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input name="password" id="password" type="password" />
        {formState?.errors.password && (
          <p className="text-destructive">{formState.errors.password}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  )
}
