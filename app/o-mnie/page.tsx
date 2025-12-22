import { Code, Award, Target, Users } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { metadata } from './metadata'

export { metadata }

const skills = [
  { name: 'Next.js', level: 90 },
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Git', level: 85 },
]

const technologies = [
  'Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL',
  'REST API', 'Git', 'Docker', 'AWS', 'Netlify', 'Vercel'
]

export default function OMnie() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            O mnie
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Programista z pasją do tworzenia nowoczesnych rozwiązań webowych
          </p>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="order-2 md:order-1">
                <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                  <Image
                    src="/ja.jpg"
                    alt="Krzysztof Pabich - Programista z Krotoszyna tworzący strony internetowe"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="order-1 md:order-2">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Jestem programistą tworzącym strony internetowe w Krotoszynie i okolicach (Jarocin, Ostrów Wielkopolski, Kalisz). 
                    Specjalizuję się w tworzeniu nowoczesnych stron WWW, sklepów internetowych oraz aplikacji webowych 
                    z wykorzystaniem najnowszych technologii. Moja pasja do programowania rozpoczęła się w 2019 roku i od tamtej pory 
                    nieustannie rozwijam swoje umiejętności jako web developer.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    W swojej pracy jako programista stron internetowych stawiam na jakość, czytelność kodu i najlepsze praktyki branżowe. 
                    Każdy projekt traktuję indywidualnie, dbając o to, aby rozwiązanie było nie tylko funkcjonalne, ale także wydajne 
                    i łatwe w utrzymaniu. Tworzę profesjonalne strony internetowe dla firm z Krotoszyna, Jarocina, Ostrowa Wlkp i Kalisza. 
                    Jestem ciągle dostępny przy telefonie, emailu lub na platformie discord, dlatego kontakt ze mną jest bardzo łatwy.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Poza programowaniem interesuję się nowymi technologiami, podróżowaniem, finansami, historią, oraz lubię posłuchać sobie rocka :D
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Jako freelancer web developer z Krotoszyna, mam nadzieję, że będę mógł pomóc Ci w tworzeniu profesjonalnej strony internetowej 
                    lub sklepu internetowego dla Twojej firmy. Obsługuję klientów z całej południowej Wielkopolski.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Kluczowe Kompetencje
            </h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 100}>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Technologies Section */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Technologie
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Approach Section */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Moje Podejście
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollReveal delay={100}>
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <Code className="w-10 h-10 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Czysty Kod</h3>
                  <p className="text-gray-400 text-sm">
                    Piszę czytelny, dobrze udokumentowany kod zgodny z najlepszymi praktykami.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <Target className="w-10 h-10 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Skupienie na Celu</h3>
                  <p className="text-gray-400 text-sm">
                    Każdy projekt realizuję z myślą o osiągnięciu konkretnych celów biznesowych.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <Users className="w-10 h-10 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Współpraca</h3>
                  <p className="text-gray-400 text-sm">
                    Utrzymuję stały kontakt z klientem i jestem otwarty na feedback.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <Award className="w-10 h-10 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Jakość</h3>
                  <p className="text-gray-400 text-sm">
                    Dbam o wysoką jakość kodu, testy i optymalizację wydajności.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}

