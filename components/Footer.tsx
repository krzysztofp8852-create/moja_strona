import Link from 'next/link'
import { Github, Mail, Phone, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">Krzysztof Pabich</h3>
            <p className="text-gray-400 text-sm">
              Programista tworzący strony internetowe w Krotoszynie, Jarocinie, Ostrowie Wielkopolskim i Kaliszu. 
              Profesjonalne tworzenie stron WWW, sklepów internetowych WooCommerce i aplikacji webowych.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/oferta" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="/o-mnie" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  O mnie
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a
                  href="tel:608177748"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  608 177 748
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:krzysztofp8852@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  krzysztofp8852@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-gray-400" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-gray-400" />
                <a
                  href="https://www.facebook.com/krzysztof.pabich.505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Krzysztof Pabich. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

