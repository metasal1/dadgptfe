import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dad Gippity',
  description: 'When Dad is not around to answer your questions'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<head>
<meta
    property="og:image"
    content="https://dadgippity.com/api/og"
  />
</head>
      <body className={inter.className}>{children}</body>
        <Analytics />
    </html>
  )
}
