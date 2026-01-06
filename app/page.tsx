import Link from 'next/link'
import { ArrowRight, Code, Globe, Zap, Shield } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32" aria-label="Główna sekcja - stworzenie strony internetowej w Krotoszynie">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
              Tworzenie Strony Internetowej w Krotoszynie
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
              Programista Stron WWW | Web Developer | Krotoszyn
            </p>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Profesjonalne <strong>stworzenie strony internetowej w Krotoszynie</strong>. 
              Tworzę nowoczesne, responsywne strony WWW, sklepy internetowe oraz strony dla firm. 
              Tanie i profesjonalne strony internetowe na zamówienie. Obsługuję również <strong>Jarocin, Ostrów Wielkopolski i Kalisz</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/50"
              >
                Skontaktuj się
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/oferta"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-700"
              >
                Zobacz ofertę
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/50" aria-label="Usługi tworzenia stron internetowych">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Odkryj więcej
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={100}>
              <Link
                href="/oferta"
                className="group block h-full p-6 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-primary-500"
              >
                <Globe className="w-10 h-10 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Tworzenie Stron WWW</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Profesjonalne tworzenie stron internetowych. Ceny od 1800zł.
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link
                href="/o-mnie"
                className="group block h-full p-6 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-primary-500"
              >
                <Code className="w-10 h-10 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">O mnie</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Poznaj moje doświadczenie i podejście do pracy
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link
                href="/portfolio"
                className="group block h-full p-6 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-primary-500"
              >
                <Zap className="w-10 h-10 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zobacz dotychczas zrealizowane projekty
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Link
                href="/kontakt"
                className="group block h-full p-6 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-primary-500"
              >
                <Shield className="w-10 h-10 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Skontaktuj się i rozpocznijmy współpracę
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-20" aria-label="Kontakt - stworzenie strony internetowej">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Gotowy na rozpoczęcie projektu?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Skontaktuj się ze mną, a wspólnie stworzymy profesjonalną stronę internetową dla Twojej firmy w Krotoszynie lub okolicach.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/50"
            >
              Napisz do mnie
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}

