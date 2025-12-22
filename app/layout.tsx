import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tworzenie Stron Internetowych Krotoszyn | Programista Stron WWW | Krzysztof Pabich',
  description: 'Profesjonalne tworzenie stron internetowych w Krotoszynie, Jarocinie, Ostrowie Wielkopolskim i Kaliszu. Programista stron WWW, sklepy internetowe WooCommerce, responsywne strony dla firm. Tanie i profesjonalne strony internetowe.',
  keywords: 'tworzenie stron internetowych Krotoszyn, strony www Krotoszyn, programista Krotoszyn, web developer Krotoszyn, tworzenie stron internetowych Jarocin, strony internetowe Ostrów Wielkopolski, programista Kalisz, sklepy internetowe Krotoszyn, WooCommerce Krotoszyn, tanie strony internetowe, projektowanie stron www, budowa stron internetowych, strony internetowe dla firm, freelancer web developer',
  authors: [{ name: 'Krzysztof Pabich' }],
  openGraph: {
    title: 'Tworzenie Stron Internetowych Krotoszyn | Programista Stron WWW',
    description: 'Profesjonalne tworzenie stron internetowych w Krotoszynie i okolicach. Programista stron WWW, sklepy internetowe, strony dla firm.',
    type: 'website',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Krzysztof Pabich - Programista Stron Internetowych',
    description: 'Profesjonalne tworzenie stron internetowych w Krotoszynie, Jarocinie, Ostrowie Wielkopolskim i Kaliszu',
    url: 'https://krzysztofpabich.pl',
    telephone: '+48608177748',
    email: 'krzysztofp8852@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Krotoszyn',
      addressRegion: 'Wielkopolska',
      addressCountry: 'PL',
    },
    areaServed: [
      { '@type': 'City', name: 'Krotoszyn' },
      { '@type': 'City', name: 'Jarocin' },
      { '@type': 'City', name: 'Ostrów Wielkopolski' },
      { '@type': 'City', name: 'Kalisz' },
    ],
    priceRange: '$$',
    serviceType: [
      'Tworzenie stron internetowych',
      'Projektowanie stron WWW',
      'Sklepy internetowe WooCommerce',
      'Programowanie stron internetowych',
      'Web Development',
    ],
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://krzysztofpabich.pl/#website',
        url: 'https://krzysztofpabich.pl',
        name: 'Krzysztof Pabich - Programista Stron Internetowych',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://krzysztofpabich.pl/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://krzysztofpabich.pl/#person',
        name: 'Krzysztof Pabich',
        jobTitle: 'Web Developer',
        knowsAbout: [
          'Tworzenie stron internetowych',
          'Programowanie',
          'Web Development',
          'Next.js',
          'React',
          'TypeScript',
        ],
      },
    ],
  }

  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ParticlesBackground />
        <div className="min-h-screen flex flex-col relative z-10">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

