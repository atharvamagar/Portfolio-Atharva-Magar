import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atharva Magar - Portfolio",
  description: "Web Developer, UI/UX Designer, Freelancer, Content Creator, and Artist",
  keywords: "web developer, ui/ux designer, freelancer, content creator, artist, portfolio",
  authors: [{ name: "Atharva Magar" }],
  openGraph: {
    title: "Atharva Magar - Portfolio",
    description: "Web Developer, UI/UX Designer, Freelancer, Content Creator, and Artist",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
