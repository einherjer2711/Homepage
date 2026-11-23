# pastfive – Website

Website des Spiele-Labels **pastfive** – *just play*. Domain: **pastfive.app**

Leitgedanke: Spiele, die einfach Spiele sind – keine Werbung, keine Käufe im Spiel, keine Datensammlung, offline spielbar.

Einfache HTML-Seiten ohne Baukasten: Jede Seite ist eine eigene Datei und lässt sich direkt im Browser öffnen.

## Was liegt wo?

| Datei / Ordner | Inhalt |
|---|---|
| `index.html` | Startseite (Deutsch) |
| `tierpark/` | Seite „Tierpark Sonnenhügel“ mit Download und Installationsanleitung |
| `tribora/` | Seite „Tribora – Vom Lagerfeuer zur Fabrik“ mit Download und Installationsanleitung |
| `datenschutz/`, `impressum/` | Datenschutzerklärung und Impressum |
| `en/` | Dasselbe auf Englisch (`en/sunny-hill-zoo/`, `en/tribora/`, `en/privacy/`, `en/imprint/`) |
| `assets/style.css` | Aussehen aller Seiten (Farben ganz oben änderbar) |
| `assets/logo.svg` | Logo „Abendsonne“: untergehende Sonne als Uhr auf fünf nach fünf |
| `assets/favicon.svg` | vereinfachtes Logo für den Browser-Tab |
| `assets/brand/` | Logo als Bild (1024 px) und Play-Store-Symbol (512 px, hell/dunkel) |
| `assets/fonts/` | Schriften Outfit (Überschriften) und Manrope (Text), frei nutzbar |
| `assets/tierpark/` | App-Symbol und (später) Screenshots |
| `assets/download.js` | Zeigt beim Download-Knopf automatisch die aktuelle Version an |
| `.github/workflows/pages.yml` | Veröffentlicht die Website automatisch (bei Änderungen, nach jedem Spiel-Release, stündlich als Reserve) |
| `spiele.json` | **Liste aller Spiele** für die Automatik (Repo, APK-Name, Signatur-Fingerabdruck, Bilder). Neues Spiel = neuer Eintrag. |
| `ANLEITUNG-WEBSITE.md` | **Schritt für Schritt: GitHub Pages, Domain, DNS, HTTPS** |
| `WUNSCHLISTE.md` | Vorgemerkte Ideen für später |

## Feste Adressen (nicht mehr ändern, sobald die App sie verwendet!)

- Tierpark Update-Datei: `https://pastfive.app/download/tierpark/version.json`
- Tierpark App-Datei:   `https://pastfive.app/download/tierpark/Tierpark.apk`
- Tribora App-Datei:    `https://pastfive.app/download/tribora/Tribora.apk`

Diese Dateien liegen **nicht** im Repo, sondern werden beim Veröffentlichen automatisch aus den
Releases von `zoo-game` und `epochen-game` geholt – stündlich, mit Prüfung der App-Signatur (siehe ANLEITUNG-WEBSITE.md, Teil 3).

## Ehrlich-Etikett

Jede Spielseite hat ein „Ehrlich-Etikett“ (Preis, Werbung, Käufe, Daten, Internet, Alter …).
**Es muss immer stimmen** – wenn sich am Spiel etwas ändert, bitte dort mit anpassen.

## Bildschirmfotos

Kommen automatisch aus den Releases der Spiele (Tierpark: `screenshot-de|en-NN-name.png`,
Tribora: `bild-de|en-NN-name.png`) und werden beim Veröffentlichen als WebP verkleinert nach `screens/…` gelegt.
Welche Bilder auf den Spielseiten erscheinen, steht direkt im HTML der Spielseiten (Abschnitt „Einblicke“).
Fehlt ein Bild im Release, verschwindet es auf der Seite einfach.
