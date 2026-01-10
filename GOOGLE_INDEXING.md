# Instrukcja przygotowania strony do indeksacji przez Google

## ✅ Wykonane automatycznie

1. ✅ **robots.txt** - skonfigurowany w `app/robots.ts`
2. ✅ **sitemap.xml** - automatycznie generowany w `app/sitemap.ts`
3. ✅ **Structured Data (JSON-LD)** - dodane w `app/layout.tsx`
4. ✅ **Meta tagi SEO** - wszystkie strony mają odpowiednie meta tagi
5. ✅ **Canonical URLs** - dodane na wszystkich stronach
6. ✅ **Manifest.json** - dodany dla PWA i SEO
7. ✅ **Security Headers** - dodane w `next.config.js`
8. ✅ **Alt text dla obrazów** - wszystkie obrazy mają opisowy alt text

## 🔧 Co musisz zrobić ręcznie

### 1. Google Search Console - Weryfikacja strony

1. Wejdź na https://search.google.com/search-console
2. Dodaj nową właściwość (property)
3. Wybierz metodę weryfikacji:
   - **HTML tag** (zalecane): Skopiuj kod weryfikacji
   - **HTML file**: Pobierz plik i umieść w `public/` folderze
   - **DNS**: Dodaj rekord DNS

#### Opcja A: HTML Tag (Najłatwiejsza)
1. Otwórz plik `app/layout.tsx`
2. Znajdź linię z komentarzem:
   ```tsx
   {/* <meta name="google-site-verification" content="your-verification-code" /> */}
   ```
3. Odkomentuj linię i wstaw kod z Search Console:
   ```tsx
   <meta name="google-site-verification" content="TWOJ-KOD-WERYFIKACJI" />
   ```

#### Opcja B: Metadane w Next.js
1. W `app/layout.tsx` znajdź sekcję `verification`
2. Dodaj kod:
   ```tsx
   verification: {
     google: 'TWOJ-KOD-WERYFIKACJI',
   },
   ```

### 2. Przesłanie sitemap.xml do Google

1. Po zweryfikowaniu strony w Google Search Console
2. Przejdź do "Sitemaps" w menu bocznym
3. Wpisz: `https://krzysztofpabich.pl/sitemap.xml`
4. Kliknij "Submit"

### 3. Sprawdzenie indeksacji

1. W Google Search Console przejdź do "Coverage"
2. Sprawdź, czy wszystkie strony są indeksowane
3. Użyj narzędzia "URL Inspection" do sprawdzenia pojedynczych stron
4. Wyszukaj w Google: `site:krzysztofpabich.pl`

### 4. Google Analytics (Opcjonalnie)

Jeśli chcesz dodać Google Analytics:

1. Utwórz konto na https://analytics.google.com
2. Skopiuj Measurement ID (np. G-XXXXXXXXXX)
3. Dodaj do `app/layout.tsx` w sekcji `<head>`:
   ```tsx
   {/* Google Analytics */}
   <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
   <script
     dangerouslySetInnerHTML={{
       __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-XXXXXXXXXX');
       `,
     }}
   />
   ```

## 📋 Checklist przed publikacją

- [ ] Strona działa na domenie produkcyjnej
- [ ] Wszystkie linki działają poprawnie
- [ ] Obrazy się ładują
- [ ] Strona jest responsywna (mobile-friendly)
- [ ] SSL/HTTPS jest włączone
- [ ] Robots.txt jest dostępny pod `/robots.txt`
- [ ] Sitemap.xml jest dostępny pod `/sitemap.xml`
- [ ] Google Search Console weryfikacja dodana
- [ ] Sitemap przesłany do Google Search Console
- [ ] Test prędkości strony (PageSpeed Insights)
- [ ] Test mobilności (Mobile-Friendly Test)

## 🔍 Narzędzia do sprawdzenia SEO

1. **Google Search Console** - https://search.google.com/search-console
2. **PageSpeed Insights** - https://pagespeed.web.dev/
3. **Mobile-Friendly Test** - https://search.google.com/test/mobile-friendly
4. **Rich Results Test** - https://search.google.com/test/rich-results
5. **Lighthouse** - wbudowany w Chrome DevTools

## 📝 Dodatkowe optymalizacje (opcjonalne)

### Open Graph Images
Upewnij się, że obraz `/logo.png` ma rozmiar 1200x630px dla lepszego wyświetlania w mediach społecznościowych.

### Google Business Profile
Jeśli prowadzisz działalność lokalną, stwórz profil Google Business dla lepszego SEO lokalnego.

### Structured Data Testing
Użyj narzędzia [Rich Results Test](https://search.google.com/test/rich-results) do sprawdzenia structured data.

## ⚠️ Ważne uwagi

- Indeksacja przez Google może zająć od kilku dni do kilku tygodni
- Regularnie aktualizuj treść strony (świeża treść = lepsze SEO)
- Monitoruj wyniki w Google Search Console
- Aktualizuj sitemap po dodaniu nowych stron
