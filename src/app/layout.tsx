import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn to Code',
  description: 'Learn programming concepts!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-gradient-to-br from-emerald-50 via-slate-100 to-blue-100">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
