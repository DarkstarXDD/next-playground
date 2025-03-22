"use server"

import { z } from "zod"
import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"

const testUser = {
  id: "1",
  email: "johndoe@email.com",
  password: "john123",
}

const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(2, { message: "Password must have at least 8 characters" })
    .trim(),
})

export async function login(prevState: unknown, formData: FormData) {
  const parsedData = userLoginSchema.safeParse(Object.fromEntries(formData))

  if (!parsedData.success) {
    console.log(parsedData.error?.flatten().fieldErrors)
    return {
      errors: parsedData.error.flatten().fieldErrors,
    }
  }

  const { email, password } = parsedData.data

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    }
  }

  await createSession(testUser.id)

  redirect("/dashboard")
}
