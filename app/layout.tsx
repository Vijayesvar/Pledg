import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pledg - Crypto-Backed INR Loans',
  description: 'India\'s first peer-to-peer crypto-backed INR loan platform. Get instant liquidity against your crypto assets.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
