import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vitality Feed - Your Daily Dose of Health',
  description: 'A Base MiniApp that delivers curated daily health tips and encourages consistent engagement for users seeking a healthier lifestyle.',
  openGraph: {
    title: 'Vitality Feed',
    description: 'Your Daily Dose of Health, Delivered.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
