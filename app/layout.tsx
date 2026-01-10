import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://krzysztofpabich.pl'),
  title: 'Tworzenie Strony Internetowej w Krotoszynie | Programista Stron WWW | Krzysztof Pabich',
  description: 'Stworzenie strony internetowej w Krotoszynie - profesjonalne tworzenie stron WWW, sklepów internetowych i stron dla firm. Programista stron internetowych z Krotoszyna obsługuje również Jarocin, Ostrów Wielkopolski i Kalisz. Tanie strony internetowe od 1200zł. Darmowa wycena!',
  keywords: 'stworzenie strony internetowej w krotoszynie, tworzenie stron internetowych Krotoszyn, strony www Krotoszyn, programista Krotoszyn, web developer Krotoszyn, tworzenie strony www Krotoszyn, tworzenie stron internetowych Jarocin, strony internetowe Ostrów Wielkopolski, programista Kalisz, sklepy internetowe Krotoszyn, WooCommerce Krotoszyn, tanie strony internetowe, projektowanie stron www, budowa stron internetowych, strony internetowe dla firm, freelancer web developer Krotoszyn, programista tworzący strony internetowe Krotoszyn, zleć stworzenie strony internetowej Krotoszyn',
  authors: [{ name: 'Krzysztof Pabich' }],
  creator: 'Krzysztof Pabich',
  publisher: 'Krzysztof Pabich',
  openGraph: {
    title: 'Tworzenie Strony Internetowej w Krotoszynie | Programista Stron WWW',
    description: 'Profesjonalne stworzenie strony internetowej w Krotoszynie. Programista stron WWW, sklepy internetowe, strony dla firm. Obsługa: Krotoszyn, Jarocin, Ostrów Wlkp, Kalisz.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://krzysztofpabich.pl',
    siteName: 'Krzysztof Pabich - Programista Stron Internetowych',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Krzysztof Pabich - Programista Stron Internetowych Krotoszyn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tworzenie Strony Internetowej w Krotoszynie | Programista Stron WWW',
    description: 'Profesjonalne stworzenie strony internetowej w Krotoszynie. Programista stron WWW, sklepy internetowe, strony dla firm.',
    images: ['/logo.png'],
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
  verification: {
    // Dodaj kod weryfikacji z Google Search Console:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Web Development',
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
    description: 'Stworzenie strony internetowej w Krotoszynie. Profesjonalne tworzenie stron internetowych w Krotoszynie, Jarocinie, Ostrowie Wielkopolskim i Kaliszu',
    url: 'https://krzysztofpabich.pl',
    telephone: '+48608177748',
    email: 'krzysztofp8852@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Krotoszyn',
      addressRegion: 'Wielkopolska',
      postalCode: '63-700',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.6944',
      longitude: '17.4375',
    },
    areaServed: [
      { 
        '@type': 'City', 
        name: 'Krotoszyn',
        '@id': 'https://www.wikidata.org/wiki/Q1002000'
      },
      { 
        '@type': 'City', 
        name: 'Jarocin',
        '@id': 'https://www.wikidata.org/wiki/Q1002001'
      },
      { 
        '@type': 'City', 
        name: 'Ostrów Wielkopolski',
        '@id': 'https://www.wikidata.org/wiki/Q1002002'
      },
      { 
        '@type': 'City', 
        name: 'Kalisz',
        '@id': 'https://www.wikidata.org/wiki/Q1002003'
      },
    ],
    priceRange: '$$',
    serviceType: [
      'Stworzenie strony internetowej',
      'Tworzenie stron internetowych',
      'Projektowanie stron WWW',
      'Sklepy internetowe WooCommerce',
      'Programowanie stron internetowych',
      'Web Development',
      'Strony internetowe dla firm',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Oferta tworzenia stron internetowych',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pakiet Prosty - Strona wizytówkowa',
            description: 'Responsywna strona wizytówkowa z 4 podstronami i podstawową optymalizacją SEO',
            price: '1200-2400',
            priceCurrency: 'PLN',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pakiet Zwykły - Strona z panelem admina',
            description: 'Strona z panelem administracyjnym do zarządzania treścią',
            price: '2800-4800',
            priceCurrency: 'PLN',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pakiet Plus - Sklep internetowy',
            description: 'Rozbudowana strona lub sklep internetowy z zaawansowanymi funkcjami',
            price: '5600-10000',
            priceCurrency: 'PLN',
          },
        },
      ],
    },
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://krzysztofpabich.pl/#website',
        url: 'https://krzysztofpabich.pl',
        name: 'Krzysztof Pabich - Programista Stron Internetowych',
            description: 'Stworzenie strony internetowej w Krotoszynie - profesjonalne tworzenie stron WWW',
        inLanguage: 'pl-PL',
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
        worksFor: {
          '@type': 'LocalBusiness',
          name: 'Krzysztof Pabich - Programista Stron Internetowych',
        },
        knowsAbout: [
          'Stworzenie strony internetowej',
          'Tworzenie stron internetowych',
          'Programowanie',
          'Web Development',
          'Next.js',
          'React',
          'TypeScript',
          'Strony internetowe Krotoszyn',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Krotoszyn',
          addressRegion: 'Wielkopolska',
          addressCountry: 'PL',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://krzysztofpabich.pl/#service',
        serviceType: 'Tworzenie stron internetowych',
        provider: {
          '@id': 'https://krzysztofpabich.pl/#person',
        },
        areaServed: {
          '@type': 'City',
          name: 'Krotoszyn',
        },
        description: 'Stworzenie strony internetowej w Krotoszynie - profesjonalne tworzenie stron WWW, sklepów internetowych i stron dla firm',
      },
    ],
  }

  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#38bdf8" />
        {/* Google Search Console Verification - dodaj kod z Search Console */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
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

