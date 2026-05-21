import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Tourisme Agadir | Premium Transfers & Unforgettable Activities',
  description: 'Discover the best of Agadir with our premium transfer services and exciting activities. Airport transfers, city tours, Paradise Valley, quad bikes, camel rides and more.',
  keywords: 'Agadir, Morocco, tourism, transfers, activities, quad bike, camel ride, Paradise Valley, airport transfer',
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
