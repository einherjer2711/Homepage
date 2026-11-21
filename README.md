# pastfive – Website

Website für die Handyspiele (Arbeitstitel **pastfive** – „Spiele für den Feierabend / Games for after five“).
Einfache HTML-Seiten ohne Baukasten: Jede Seite ist eine eigene Datei und lässt sich direkt im Browser öffnen.

## Was liegt wo?

| Datei / Ordner | Inhalt |
|---|---|
| `index.html` | Startseite (Deutsch) |
| `tierpark/` | Seite „Tierpark Sonnenhügel“ mit Download und Installationsanleitung |
| `datenschutz/`, `impressum/` | Datenschutzerklärung und Impressum |
| `en/` | Dasselbe auf Englisch (`en/sunny-hill-zoo/`, `en/privacy/`, `en/imprint/`) |
| `assets/style.css` | Aussehen aller Seiten (Farben ganz oben änderbar) |
| `assets/logo.svg` | Logo: Uhr auf fünf nach fünf |
| `assets/tierpark/` | App-Symbol und (später) Screenshots |
| `assets/download.js` | Zeigt beim Download-Knopf automatisch die aktuelle Version an |
| `.github/workflows/pages.yml` | Veröffentlicht die Website automatisch bei jeder Änderung auf `main` |
| `ANLEITUNG-WEBSITE.md` | **Schritt für Schritt: GitHub Pages, Domain, DNS, HTTPS** |
| `WUNSCHLISTE.md` | Vorgemerkte Ideen für später |

## Feste Adressen (nicht mehr ändern, sobald die App sie verwendet!)

- Update-Datei: `https://<domain>/download/tierpark/version.json`
- App-Datei:   `https://<domain>/download/tierpark/Tierpark.apk`

Diese zwei Dateien liegen **nicht** im Repo, sondern werden beim Veröffentlichen automatisch aus den
Releases von `zoo-game` geholt (siehe ANLEITUNG-WEBSITE.md, Teil 3 – wird erst nach Zustimmung eingerichtet).

## Screenshots einfügen

1. Screenshots am Handy machen (Hochformat), z. B. als `1.jpg` … `4.jpg` in `assets/tierpark/screens/` legen.
2. In `tierpark/index.html` und `en/sunny-hill-zoo/index.html` jeweils `<div class="ph">…</div>` ersetzen durch
   `<img src="../assets/tierpark/screens/1.jpg" alt="Kurze Beschreibung">` (englische Seite: `../../assets/…`).
