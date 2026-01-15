import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { metadata } from './metadata'

export { metadata }

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Rosa',
    description: 'Projekt strony internetowej dla klienta. Nowoczesny design z pełną responsywnością i optymalizacją pod kątem wydajności. Posiada panel admina z możliwościami np. dodawania nowych produktów, kategorii, zmieniania cen i wiele więcej.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/rosa.png',
    demoUrl: 'https://rosakrotoszyn.pl/',
  },
  {
    id: 2,
    title: 'Mariusz - Chiroterapeuta',
    description: 'Strona dla Chiroterapeuty z Krotoszyna, zawiera systemem bookowania, panel admina, oraz potwierdzanie wizyty poprzez e-mail i SMS z możliwością jej odwołania przez klienta',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'System rezerwacji', 'Panel admina'],
    image: '/mariusz.png',
    demoUrl: 'https://www.chiromedic.pl/',
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Portfolio - Realizacje Stron Internetowych
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Zobacz przykłady zrealizowanych projektów stron internetowych dla firm z Krotoszyna, Jarocina, 
            Ostrowa Wielkopolskiego i Kalisza. Każdy projekt został stworzony z dbałością o szczegóły i najlepsze praktyki.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ScrollReveal key={project.id}>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    {project.image && (
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} - Realizacja strony internetowej przez programistę z Krotoszyna`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <span className="flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Zobacz stronę
                        </span>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {project.image && (
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} - Realizacja strony internetowej przez programistę z Krotoszyna`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
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
            Chcesz zrealizować podobny projekt?
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

