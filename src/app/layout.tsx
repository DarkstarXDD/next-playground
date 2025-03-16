import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "PetroPlus - by App360",
  description: "Gas Station App",
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
        className={`${inter.variable} font-inter bg-gray-400 text-base font-normal text-zinc-900`}
      >
        {children}
      </body>
    </html>
  )
}
