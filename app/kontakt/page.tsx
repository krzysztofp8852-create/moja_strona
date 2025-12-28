'use client'

import { useState } from 'react'
import { Mail, Github, Send, CheckCircle, Phone, Facebook } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Imię jest wymagane'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Wiadomość musi mieć co najmniej 10 znaków'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Send email via Vercel API Route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Response error:', response.status, errorText)
        throw new Error(`Błąd serwera: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(data.message || 'Błąd podczas wysyłania formularza')
      }
    } catch (error: any) {
      console.error('Error submitting form:', error)
      setErrors({ 
        submit: error.message || 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub skontaktuj się bezpośrednio przez email.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Kontakt - Programista Stron Internetowych Krotoszyn
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Skontaktuj się z programistą stron internetowych w Krotoszynie. Darmowa wycena strony WWW lub sklepu internetowego. 
            Obsługa: region całej Polski.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ScrollReveal>
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollReveal delay={100}>
                <div>
              <h2 className="text-2xl font-bold mb-6">Wyślij wiadomość</h2>
              {isSubmitted ? (
                <div className="p-6 bg-green-900/20 border border-green-500 rounded-lg flex items-center text-green-400">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span>Wiadomość została wysłana pomyślnie!</span>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Imię *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.name
                          ? 'border-red-500'
                          : 'border-gray-700'
                      }`}
                      placeholder="Twoje imię"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-gray-700'
                      }`}
                      placeholder="twoj@email.pl"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                        errors.message
                          ? 'border-red-500'
                          : 'border-gray-700'
                      }`}
                      placeholder="Napisz swoją wiadomość..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400 text-sm">
                      {errors.submit}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Wysyłanie...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Wyślij wiadomość
                      </>
                    )}
                  </button>
                </form>
              )}
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal delay={200}>
                <div>
              <h2 className="text-2xl font-bold mb-6">Alternatywne formy kontaktu</h2>
              <div className="space-y-6">
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a
                        href="tel:608177748"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        608 177 748
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:krzysztofp8852@gmail.com"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        krzysztofp8852@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="flex items-start">
                    <Github className="w-6 h-6 text-primary-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <a
                        href="https://github.com/krzysztofp8852-create"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        github.com/krzysztofpabich
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="flex items-start">
                    <Facebook className="w-6 h-6 text-primary-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Facebook</h3>
                      <a
                        href="https://www.facebook.com/krzysztof.pabich.505"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        facebook.com/krzysztof.pabich.505
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
                <h3 className="font-semibold mb-3">Czas odpowiedzi</h3>
                <p className="text-gray-400 text-sm">
                  Staram się odpowiadać na wszystkie wiadomości w ciągu 24-48 godzin. 
                  W przypadku pilnych spraw, proszę o kontakt telefoniczny.
                </p>
              </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}

