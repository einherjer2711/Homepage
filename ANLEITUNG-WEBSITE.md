# Anleitung: Website online stellen

Die Schritte sind so geschrieben, dass du sie der Reihe nach abhaken kannst.
Wo `pastfive.fun` steht, setzt du die endgültige Domain ein.

---

## Teil 1 – GitHub Pages einschalten

**Wichtig vorab:** Das Repo `Homepage` ist derzeit **privat**. GitHub Pages funktioniert bei einem kostenlosen
GitHub-Konto nur mit **öffentlichen** Repos (sonst braucht man GitHub Pro, ca. 4 $/Monat).
Für eine Website ist „öffentlich“ kein Problem: Die Seiten sieht ohnehin jeder. Im Repo liegen keine Passwörter
oder Schlüssel – und die APK wird nicht ins Repo gelegt, sondern nur beim Veröffentlichen dazugepackt.

1. Änderungen von Claude in den Zweig `main` übernehmen (Pull Request zusammenführen).
2. Repo öffentlich machen: GitHub → Repo **Homepage** → **Settings** → ganz unten **Danger Zone** →
   **Change visibility** → **Make public** → bestätigen.
3. **Settings → Pages** → bei **Build and deployment → Source** „**GitHub Actions**“ auswählen.
4. **Actions** → „Website veröffentlichen“ → **Run workflow** (oder einfach warten, bis eine Änderung auf `main` kommt).
5. Nach 1–2 Minuten ist die Seite erreichbar unter `https://einherjer2711.github.io/Homepage/`.

---

## Teil 2 – Eigene Domain (z. B. pastfive.fun) mit HTTPS

### 2a. Domain bei GitHub „verifizieren“ (Schutz vor Missbrauch – empfohlen, einmalig)

1. GitHub → oben rechts dein Profilbild → **Settings** (Konto, nicht Repo!) → links **Pages** →
   **Add a domain** → `pastfive.fun` eingeben.
2. GitHub zeigt einen **TXT-Eintrag** an, z. B. Name `_github-pages-challenge-einherjer2711`, Wert `abc123…`.
3. Diesen TXT-Eintrag beim Domain-Anbieter anlegen (siehe 2b) → bei GitHub **Verify** drücken
   (kann ein paar Minuten bis Stunden dauern).

### 2b. DNS-Einträge beim Domain-Anbieter

Beim Domain-Anbieter (z. B. World4You, easyname, Namecheap, Porkbun …) gibt es einen Bereich wie
„DNS-Verwaltung“ / „DNS-Einstellungen“ / „Nameserver-Einträge“. Dort:

1. **Alte Einträge entfernen**, die auf eine „Parkseite“ des Anbieters zeigen: alle **A**- und **AAAA**-Einträge
   für `@` (= die Domain selbst) sowie einen evtl. vorhandenen Eintrag für `www`.
   ⚠️ **MX-Einträge (E-Mail) NICHT löschen**, falls du E-Mail über die Domain nutzt.
2. **Neu anlegen** (Name `@` bedeutet die Domain ohne Vorsatz; manche Anbieter lassen das Feld dafür leer):

| Typ   | Name  | Wert / Ziel                |
|-------|-------|----------------------------|
| A     | @     | `185.199.108.153`          |
| A     | @     | `185.199.109.153`          |
| A     | @     | `185.199.110.153`          |
| A     | @     | `185.199.111.153`          |
| AAAA  | @     | `2606:50c0:8000::153`      |
| AAAA  | @     | `2606:50c0:8001::153`      |
| AAAA  | @     | `2606:50c0:8002::153`      |
| AAAA  | @     | `2606:50c0:8003::153`      |
| CNAME | www   | `einherjer2711.github.io`  |
| TXT   | `_github-pages-challenge-einherjer2711` | (Wert aus Schritt 2a) |

   „TTL“ kannst du auf dem Standardwert lassen.
3. Speichern. Änderungen brauchen meist 10 Minuten bis einige Stunden (selten bis 48 Std.).

### 2c. Domain im Repo eintragen und HTTPS einschalten

1. Repo **Homepage** → **Settings → Pages** → **Custom domain**: `pastfive.fun` → **Save**.
2. GitHub prüft die DNS-Einträge („DNS check successful“). Falls ein Fehler kommt: etwas warten und
   erneut „Check again“.
3. Sobald GitHub das Zertifikat ausgestellt hat (bis zu ca. 1 Std.), Haken bei **Enforce HTTPS** setzen.
   Ab dann läuft die Seite nur noch verschlüsselt: `https://pastfive.fun`. `www.pastfive.fun` leitet automatisch weiter.

**Prüfen:** `https://pastfive.fun` und `https://www.pastfive.fun` im Handy-Browser öffnen – Schloss-Symbol muss da sein.

### Optional: E-Mail-Adresse mit der Domain

Für Impressum und Google Play ist eine eigene Adresse wie `hallo@pastfive.fun` praktisch (und schützt deine
private Adresse). Viele Domain-Anbieter bieten dafür eine kostenlose **E-Mail-Weiterleitung** an deine
bestehende Adresse an.

---

## Teil 3 – Automatisch: neue App-Version → Website

*(Vorschlag – wird erst nach deiner Zustimmung eingerichtet. Details stehen in Claudes Antwort.)*

---

## Teil 4 – Update-Adresse in der App

Erst wenn Teil 2 und 3 laufen und `https://pastfive.fun/download/tierpark/version.json` im Browser
die Versionsdatei zeigt, wird diese Adresse fest in die App (`zoo-game`, `www/index.html`, `UPDATE_URL`) eingetragen.
Alte, bereits installierte Apps ohne eingetragene Adresse: einmalig unter ⚙️ Einstellungen → „Update-Quelle“
die Adresse einfügen – oder die neue Version einmal von Hand installieren.

---

## Impressum & Offenlegung in Österreich – was ist nötig?

*(Allgemeine Hinweise, keine Rechtsberatung. Im Zweifel hilft z. B. die Wirtschaftskammer oder ein Rechtsanwalt.)*

- **Offenlegung nach § 25 Mediengesetz:** gilt für **jede** Website, auch private. Für eine „kleine Website“
  (wie diese) reichen: **Name** und **Wohnort** (Ort genügt laut Gesetz) des Medieninhabers.
- **Impressum nach § 5 E-Commerce-Gesetz:** gilt für Angebote, die (meist) wirtschaftlich sind. Für eine rein
  private, kostenlose Seite ist das umstritten. **Empfehlung:** trotzdem Name, Anschrift und E-Mail angeben –
  spätestens wenn du Geld verdienst (Werbung, Verkauf, Spenden) ist es Pflicht, dann kommen ggf. noch
  Unternehmensgegenstand, Gewerbebehörde, UID-Nummer usw. dazu.
- **Datenschutzerklärung (DSGVO):** nötig, weil beim Besuch technisch IP-Adressen verarbeitet werden (GitHub).
  Ist bereits vorbereitet.
- **Google Play:** verlangt eine öffentlich erreichbare Datenschutzerklärung (→ `https://pastfive.fun/datenschutz/`)
  und eine Kontakt-E-Mail. Bei Konten, die Geld verdienen, wird auch die Adresse öffentlich angezeigt.

**Zu tun:** In `impressum/`, `datenschutz/` und den englischen Gegenstücken die rot markierten Platzhalter
`[Vor- und Nachname]`, `[Straße …]`, `[E-Mail-Adresse]` ausfüllen (oder Claude die Angaben geben).
Wenn du deine Straße nicht veröffentlichen möchtest: Für die reine Offenlegung genügt der Ort; dann aber
bewusst entscheiden (siehe ECG-Hinweis oben).
