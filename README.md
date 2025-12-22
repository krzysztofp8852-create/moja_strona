# Portfolio - Krzysztof Pabich

Nowoczesna, w pełni responsywna strona internetowa typu portfolio dla programisty Krzysztofa Pabicha.

## 🚀 Technologie

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ikony)

## 📋 Wymagania

- Node.js 18+ 
- npm lub yarn

## 🛠️ Instalacja

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom serwer deweloperski:
```bash
npm run dev
```

3. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## 📦 Build dla produkcji

```bash
npm run build
```

Pliki statyczne zostaną wygenerowane w folderze `out/`.

## 🌐 Deployment na Netlify

Projekt jest skonfigurowany do łatwego wdrożenia na Netlify:

1. Zaloguj się do Netlify
2. Połącz repozytorium GitHub/GitLab lub prześlij folder `out/` po zbudowaniu
3. Netlify automatycznie wykryje konfigurację z pliku `netlify.toml`
4. Formularz kontaktowy będzie działał automatycznie dzięki Netlify Forms

### Konfiguracja formularza kontaktowego

Formularz jest już skonfigurowany do pracy z Netlify Forms. Po wdrożeniu na Netlify:
- Wszystkie przesłane formularze będą dostępne w panelu Netlify
- Możesz skonfigurować powiadomienia email w ustawieniach Netlify

## 📁 Struktura projektu

```
├── app/
│   ├── globals.css          # Globalne style Tailwind
│   ├── layout.tsx           # Główny layout z nawigacją i stopką
│   ├── page.tsx             # Strona główna
│   ├── oferta/
│   │   └── page.tsx         # Strona z ofertą usług
│   ├── o-mnie/
│   │   └── page.tsx         # Strona "O mnie"
│   ├── portfolio/
│   │   └── page.tsx         # Portfolio projektów
│   └── kontakt/
│       └── page.tsx         # Formularz kontaktowy
├── components/
│   ├── Navigation.tsx       # Komponent nawigacji
│   └── Footer.tsx           # Komponent stopki
├── next.config.js           # Konfiguracja Next.js
├── tailwind.config.js       # Konfiguracja Tailwind CSS
└── netlify.toml            # Konfiguracja Netlify
```

## 🎨 Funkcjonalności

- ✅ Pełna responsywność (desktop, tablet, mobile)
- ✅ Ciemny motyw z subtelnymi akcentami kolorystycznymi
- ✅ Nowoczesny, minimalistyczny design
- ✅ Animacje i hover effects
- ✅ Formularz kontaktowy z walidacją
- ✅ SEO-ready (meta tags, semantyczny HTML)
- ✅ Szybkie ładowanie i optymalizacja

## 📝 Dostosowanie treści

Wszystkie treści można łatwo edytować w odpowiednich plikach:
- **Oferta**: `app/oferta/page.tsx`
- **O mnie**: `app/o-mnie/page.tsx`
- **Portfolio**: `app/portfolio/page.tsx` (tablica `projects`)
- **Kontakt**: `app/kontakt/page.tsx`

## 📄 Licencja

Projekt prywatny - Krzysztof Pabich

