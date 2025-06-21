import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { CartProvider } from '@/contexts/CartContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Tournis - Joaillerie de luxe à Bordeaux',
  description: 'Joaillerie Tournis à Bordeaux : 127 ans d\'excellence artisanale française. Créations de bijoux sur mesure, alliances uniques, transformations précieuses et expertises gemmologiques. Maîtres joailliers depuis 1896.',
  keywords: 'joaillerie, bijoux, Bordeaux, création sur mesure, transformation bijoux, réparation bijoux, expertise bijoux, alliance, bague de fiançailles',
  authors: [{ name: 'Joaillerie Tournis' }],
  creator: 'Joaillerie Tournis',
  publisher: 'Joaillerie Tournis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1E2846',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#1E2846',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-domaine.com',
    title: 'Tournis - Joaillerie d\'exception à Bordeaux',
    description: 'Joaillerie Tournis à Bordeaux : 127 ans d\'excellence artisanale française. Créations de bijoux sur mesure, alliances uniques, transformations précieuses et expertises gemmologiques.',
    siteName: 'Joaillerie Tournis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tournis - Joaillerie d\'exception à Bordeaux',
    description: 'Joaillerie Tournis à Bordeaux : 127 ans d\'excellence artisanale française. Créations de bijoux sur mesure, alliances uniques, transformations précieuses et expertises gemmologiques.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main style={{ paddingTop: '100px' }}>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
