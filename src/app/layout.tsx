import { Inter } from "next/font/google"

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next Playground",
  description: "Next.js Playground",

  authors: {
    name: "Darkstar",
    url: "https://github.com/DarkstarXDD",
  },

  openGraph: {
    type: "website",
    url: "https://challenge-name-darkstarxdd.vercel.app/",
    title: "devfinder",

    description: "Next.js Playground",

    images: {
      url: "https://challenge-name-darkstarxdd.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
  },
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
      <body className={`${inter.variable} font-inter bg-zinc-800 text-white`}>
        {children}
      </body>
    </html>
  )
}
