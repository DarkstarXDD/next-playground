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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-inter bg-background text-foreground flex min-h-dvh flex-col items-center justify-center text-base font-normal`}
      >
        {children}
      </body>
    </html>
  )
}
