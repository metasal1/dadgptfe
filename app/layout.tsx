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
 <meta name="description" content="When Dads not around to answer your questions" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dadgippity" />
        <meta name="twitter:creator" content="@metasal_" />
        <meta property="twitter:title" content="Come talk to DadGippity" />
        <meta property="twitter:description" content="When dad is not around to answer your questions" />
        <meta property="og:url" content="https://dadgippity.com" />
        <meta property="og:title" content="Come talk to DadGippity" />
        <meta property="og:description" content="When dad is not around to answer your questions" />
        <link rel="icon" href="/favicon.ico" />

</head>
      <body className={inter.className}>{children}</body>
        <Analytics />
    </html>
  )
}
