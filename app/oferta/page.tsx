import { Globe, Settings, ShoppingCart, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { metadata } from './metadata'

export { metadata }

interface Package {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  features: string[]
  price: string
  cta: string
  highlight?: boolean
}

const packages: Package[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Pakiet Prosty',
    subtitle: 'Strona wizytówkowa + SEO',
    description: 'Idealna dla początkujących i małych firm',
    features: [
      'Responsywna strona wizytówkowa z 4 podstronami',
      'Podstawowa optymalizacja SEO',
      'Nowoczesny i estetyczny design',
      'Łatwy kontakt z klientami dzięki formularzowi',
    ],
    price: '1 200 – 2 400 zł',
    cta: 'Zamów teraz – wyróżnij swoją firmę w sieci!',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Pakiet Zwykły',
    subtitle: 'Strona z panelem admina',
    description: 'Dla firm, które chcą mieć pełną kontrolę nad treścią',
    features: [
      'Strona z panelem administracyjnym',
      'Możliwość łatwej aktualizacji treści i zdjęć',
      'Responsywny design dopasowany do wszystkich urządzeń',
      'Podstawowe SEO, by Twoja strona była widoczna w Google',
    ],
    price: '2 800 – 4 800 zł',
    cta: 'Zamów teraz – zarządzaj swoją stroną samodzielnie!',
    highlight: true,
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Pakiet Plus',
    subtitle: 'Rozbudowana strona / sklep internetowy',
    description: 'Dla firm potrzebujących zaawansowanej strony lub sklepu online',
    features: [
      'Rozbudowana strona lub sklep internetowy z panelem administracyjnym',
      'Integracja z systemami płatności i innymi funkcjami e-commerce',
      'Zaawansowane SEO, optymalizacja prędkości i bezpieczeństwa',
      'Dodatkowe funkcje: formularze, galerie, blog, system rezerwacji itp.',
    ],
    price: '5 600 – 10 000 zł',
    cta: 'Zamów teraz – rozwiń biznes w internecie!',
  },
]

export default function Oferta() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Oferta Tworzenia Stron Internetowch w całej Polsce
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Profesjonalne tworzenie stron internetowych w całej Polsce. 
            Wybierz pakiet dopasowany do potrzeb Twojej firmy - od prostej strony wizytówkowej po zaawansowany sklep internetowy.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div
                    className={`group relative p-8 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      pkg.highlight
                        ? 'bg-gradient-to-br from-primary-900/30 to-primary-800/20 border-2 border-primary-500 shadow-lg shadow-primary-500/20'
                        : 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-primary-500'
                    }`}
                  >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Najpopularniejszy
                    </span>
                  </div>
                )}
                <div className={`mb-4 group-hover:scale-110 transition-transform inline-block ${
                  pkg.highlight ? 'text-primary-400' : 'text-primary-400'
                }`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-primary-400 font-semibold mb-3">{pkg.subtitle}</p>
                <p className="text-gray-400 mb-6 text-sm">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <Check className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-400 mb-2">
                    {pkg.price}
                  </div>
                </div>
                <Link
                  href="/kontakt"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/50'
                      : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Zainteresowany współpracą?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Skontaktuj się ze mną, a omówimy szczegóły Twojego projektu.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/50"
            >
              Skontaktuj się
            </a>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}

