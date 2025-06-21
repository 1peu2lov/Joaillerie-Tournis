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
  title: 'Joaillerie Tournis Bordeaux - Bijoux sur mesure depuis 1896',
  description: 'Joaillerie Tournis Bordeaux : bijoux sur mesure, alliances uniques et expertises depuis 1896. Créations artisanales, transformations et réparations par nos maîtres joailliers.',
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
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: process.env.NODE_ENV === 'production' 
      ? 'https://tournis.netlify.app' 
      : 'http://localhost:3000',
  },
  themeColor: '#1E2846',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NODE_ENV === 'production' 
      ? 'https://tournis.netlify.app' 
      : 'http://localhost:3000',
    title: 'Joaillerie Tournis Bordeaux - Bijoux sur mesure depuis 1896',
    description: 'Joaillerie Tournis Bordeaux : bijoux sur mesure, alliances uniques et expertises depuis 1896. Créations artisanales, transformations et réparations par nos maîtres joailliers.',
    siteName: 'Joaillerie Tournis',
    images: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? 'https://tournis.netlify.app/img/og-image.jpg'
          : 'http://localhost:3000/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joaillerie Tournis - Bijoux sur mesure à Bordeaux',
        type: 'image/jpeg',
      }
    ],
    countryName: 'France',
    region: 'Nouvelle-Aquitaine',
    placeName: 'Bordeaux',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joaillerie Tournis Bordeaux - Bijoux sur mesure depuis 1896',
    description: 'Joaillerie Tournis Bordeaux : bijoux sur mesure, alliances uniques et expertises depuis 1896. Créations artisanales, transformations et réparations par nos maîtres joailliers.',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: 'Joaillerie Tournis',
    description: 'Joaillerie de luxe à Bordeaux depuis 1896. Créations sur mesure, transformations, réparations et expertises de bijoux par nos maîtres joailliers.',
         url: process.env.NODE_ENV === 'production' 
       ? 'https://tournis.netlify.app' 
       : 'http://localhost:3000',
    telephone: '+33-5-56-XX-XX-XX',
         email: 'contact@tournis.netlify.app',
    foundingDate: '1896',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Adresse de la joaillerie',
      addressLocality: 'Bordeaux',
      addressRegion: 'Nouvelle-Aquitaine',
      postalCode: '33000',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.8378',
      longitude: '-0.5792'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/joaillerie-tournis',
      'https://www.instagram.com/joaillerie-tournis',
      'https://www.linkedin.com/company/joaillerie-tournis'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de joaillerie',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création de bijoux sur mesure',
            description: 'Conception artisanale de bijoux uniques'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transformation de bijoux',
            description: 'Redonnez vie à vos bijoux anciens'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réparation de bijoux',
            description: 'Réparations de précision par nos experts'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Expertise de bijoux',
            description: 'Évaluation professionnelle de vos bijoux'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  }

  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
