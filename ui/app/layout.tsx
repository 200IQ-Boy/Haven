import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import PageTransition from "@/components/page-transition"

export const metadata: Metadata = {
  title: "Haven",
  description: "Application anti-addiction",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
