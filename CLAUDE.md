# pastfive – Website (Notizen für Claude)

Der Besitzer ist kein Programmierer: immer **Deutsch**, einfach erklären, vor größeren Umbauten erst besprechen
(nicht vorpreschen). Offene Ideen kommen in `WUNSCHLISTE.md`.

## Festgelegt
- **Label:** pastfive (immer klein, zusammen) – ohne Gesicht/Namen. **Slogan:** „just play“ (auch auf der deutschen Seite).
- **Domain:** pastfive.app (Domain + E-Mail bei OVHcloud inkl. „Starter E-Mail“, Auto-Verlängerung AN; Website auf GitHub Pages).
- **Leitgedanke:** Spiele, die einfach Spiele sind – keine Werbung, keine Käufe im Spiel, keine Daten, offline.
  Gefühl: Pause, kein Druck, keine Pflicht. **Keine Kinderspiel-Seite** – ruhig, modern, erwachsen.
- **Logo:** „Abendsonne“ Variante A (`assets/logo.svg`), Farben Orange #f2762e / #ffa24a, Dunkel #1f1b2e.
- **Schriften:** Outfit (Überschriften), Manrope (Text), lokal in `assets/fonts/` (kein Google-Server).
- **Pro Spiel:** Entstehungsnotiz, **Ehrlich-Etikett** (muss immer stimmen!), Screenshots, Download, Anleitung.
- **Spiele:** Tierpark Sonnenhügel (`zoo-game`, ab 6, DE/EN, Update-Check) und Tribora (`epochen-game`, ab 12,
  DE/EN, Update-Check seit 1.19). Beide Android 7+, beide Internet nur für die Update-Prüfung.
- **Automatik:** `.github/workflows/pages.yml` wird von den Spiele-Releases angestoßen (Secret `HOMEPAGE_TOKEN` in
  den Spiele-Repos; Stunden-Uhr nur Reserve, springt nicht zuverlässig an) und holt die neuesten APKs (Secret `GAMES_TOKEN`,
  nur Lesen), prüft die Signatur, veröffentlicht unter `download/tierpark/` und `download/tribora/`;
  Bildschirmfotos kommen ebenfalls aus den Releases (`screens/…`, als WebP verkleinert).
  Diese Adressen nie ändern – die Tierpark-App nutzt `download/tierpark/version.json` für den Update-Check.
- **Tagebuch/Neuigkeiten-Seite:** vorerst bewusst weggelassen.
