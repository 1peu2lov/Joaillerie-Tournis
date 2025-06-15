import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Tournis - Joaillerie',
  description: 'Joaillerie de luxe à Bordeaux',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main style={{ paddingTop: '100px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
