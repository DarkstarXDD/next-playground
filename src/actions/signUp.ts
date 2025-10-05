"use server"

import { signUpSchema } from "@/lib/schemas"

export async function signUp(formData: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(formData))

  console.log(formData)
  console.log(result)
}
