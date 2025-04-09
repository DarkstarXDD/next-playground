import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "NextJS Playground",
  description: "NextJS Playground",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter font-regular flex min-h-dvh flex-col items-center justify-center bg-zinc-800 text-white`}
      >
        {children}
      </body>
    </html>
  )
}
