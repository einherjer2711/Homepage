# Anleitung: Website online stellen

> **Stand 22.11.2026: Alles eingerichtet ✅** – pastfive.app ist online (OVH-DNS, GitHub Pages, HTTPS),
> Downloads, Bilder und Update-Datei kommen automatisch aus den Spiele-Repos.
> Die Teile 0–4 unten dienen als Nachschlagewerk. Für den Alltag siehe **„Wartung“** ganz unten.

**Aufteilung:** Domain und E-Mail bei **OVHcloud** (bei .app ist ein Postfach „Starter E-Mail“ dabei),
die Website selbst auf **GitHub Pages** (gratis). Ein Webhosting-Paket brauchst du **nicht**.

---

## Teil 0 – Domain bei OVHcloud bestellen

Beim Bestellen von `pastfive.app` darauf achten:

- [ ] **„Starter E-Mail“ inklusive** – im Warenkorb kontrollieren.
- [ ] **Kein Webhosting** dazubuchen (wird evtl. angeboten – nicht nötig).
- [ ] **Automatische Verlängerung EINGESCHALTET lassen.** Läuft die Domain aus, ist die Website weg und der
      Tierpark findet seine Updates nicht mehr – im schlimmsten Fall schnappt sich jemand anderer die Adresse.
- [ ] **Inhaber-Daten verbergen** (Datenschutz für die Domain-Daten / „Owo“), falls angeboten – dann steht deine
      Anschrift nicht öffentlich im Domain-Verzeichnis.
- [ ] Nach der Bestellung im OVH-Konto die **Zwei-Faktor-Anmeldung** einschalten (Code am Handy).

Danach in der OVH-Verwaltung das Postfach `hello@pastfive.app` anlegen (Bereich **E-Mails**).

---

## Teil 1 – GitHub Pages einschalten

**Wichtig:** GitHub Pages funktioniert bei einem kostenlosen GitHub-Konto nur mit **öffentlichen** Repos
(sonst braucht man GitHub Pro). Das Repo `Homepage` ist deshalb öffentlich.
Für eine Website ist „öffentlich“ kein Problem: Die Seiten sieht ohnehin jeder. Im Repo liegen keine Passwörter
oder Schlüssel – und die APK wird nicht ins Repo gelegt, sondern nur beim Veröffentlichen dazugepackt.

1. Änderungen von Claude in den Zweig `main` übernehmen (Pull Request zusammenführen).
2. Repo öffentlich machen: GitHub → Repo **Homepage** → **Settings** → ganz unten **Danger Zone** →
   **Change visibility** → **Make public** → bestätigen.
3. **Settings → Pages** → bei **Build and deployment → Source** „**GitHub Actions**“ auswählen.
4. **Actions** → „Website veröffentlichen“ → **Run workflow** (oder einfach warten, bis eine Änderung auf `main` kommt).
5. Nach 1–2 Minuten ist die Seite erreichbar unter `https://einherjer2711.github.io/Homepage/`.

---

## Teil 2 – Eigene Domain (z. B. pastfive.app) mit HTTPS

### 2a. Domain bei GitHub „verifizieren“ (Schutz vor Missbrauch – empfohlen, einmalig)

1. GitHub → oben rechts dein Profilbild → **Settings** (Konto, nicht Repo!) → links **Pages** →
   **Add a domain** → `pastfive.app` eingeben.
2. GitHub zeigt einen **TXT-Eintrag** an, z. B. Name `_github-pages-challenge-einherjer2711`, Wert `abc123…`.
3. Diesen TXT-Eintrag beim Domain-Anbieter anlegen (siehe 2b) → bei GitHub **Verify** drücken
   (kann ein paar Minuten bis Stunden dauern).

### 2b. DNS-Einträge beim Domain-Anbieter

Im OVHcloud-Kundencenter: **Web Cloud** → **Domainnamen** → `pastfive.app` → Reiter **DNS-Zone**.
Dort gibt es **„Eintrag hinzufügen“** sowie bei jedem Eintrag rechts ein Menü (…) zum **Bearbeiten/Löschen**.
(Menünamen können sich leicht ändern.) Dort:

1. **Alte Einträge entfernen**, die auf eine „Parkseite“ des Anbieters zeigen: alle **A**- und **AAAA**-Einträge
   für `@` (= die Domain selbst) sowie einen evtl. vorhandenen Eintrag für `www`.
   ⚠️ **MX-Einträge und alles, was mit E-Mail zu tun hat (z. B. `mail`, `autodiscover`, SPF-TXT mit „v=spf1“),
   NICHT löschen** – die E-Mail bleibt bei OVH.
2. **Neu anlegen** (Name `@` bedeutet die Domain ohne Vorsatz – bei OVH heißt das Feld „Subdomain“ und bleibt
   dafür **leer**; bei `www` steht dort `www`):

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
| CNAME | www   | `einherjer2711.github.io.` (bei OVH mit Punkt am Ende) |
| TXT   | `_github-pages-challenge-einherjer2711` | (Wert aus Schritt 2a) |

   „TTL“ kannst du auf dem Standardwert lassen.
3. Speichern. Änderungen brauchen meist 10 Minuten bis einige Stunden (selten bis 48 Std.).

### 2c. Domain im Repo eintragen und HTTPS einschalten

1. Repo **Homepage** → **Settings → Pages** → **Custom domain**: `pastfive.app` → **Save**.
2. GitHub prüft die DNS-Einträge („DNS check successful“). Falls ein Fehler kommt: etwas warten und
   erneut „Check again“.
3. Sobald GitHub das Zertifikat ausgestellt hat (bis zu ca. 1 Std.), Haken bei **Enforce HTTPS** setzen.
   **Besonderheit bei .app:** Die Endung erzwingt immer HTTPS. Bis GitHub das Zertifikat ausgestellt hat, zeigt der
   Browser daher eine Fehlermeldung – das ist normal, einfach abwarten.
   Ab dann läuft die Seite verschlüsselt: `https://pastfive.app`. `www.pastfive.app` leitet automatisch weiter.

**Prüfen:** `https://pastfive.app` und `https://www.pastfive.app` im Handy-Browser öffnen – Schloss-Symbol muss da sein.

### Optional: E-Mail-Adresse mit der Domain

Für Impressum und Google Play ist eine eigene Adresse wie `hello@pastfive.app` praktisch (und schützt deine
private Adresse). Das Postfach ist bei OVH dabei (siehe Teil 0). Lesen und schreiben kannst du im Webmail von OVH
oder in deinem gewohnten Mailprogramm; alternativ geht eine Weiterleitung an deine bestehende Adresse.
Die E-Mail-Einträge legt OVH selbst an; sie vertragen sich mit den GitHub-Einträgen oben.

---

## Teil 3 – Automatisch: neue App-Version → Website

**So funktioniert es:** Einmal pro Stunde schaut die Website nach, ob es in `zoo-game` (Tierpark) oder
`epochen-game` (Tribora) eine neue Release gibt. Wenn ja, holt sie die APK, **prüft, ob sie mit dem richtigen
App-Schlüssel signiert ist**, und veröffentlicht sie:

- Tierpark: `https://pastfive.app/download/tierpark/Tierpark.apk` + `version.json` (für den Update-Check in der App)
- Tribora: `https://pastfive.app/download/tribora/Tribora.apk` + `version.json` (wird automatisch erzeugt, für die Website)

Die APKs kommen dabei nie ins Repo. Eine neue App-Version ist spätestens nach etwa einer Stunde auf der Website.

**Einmalig einrichten – einen Lese-Schlüssel („Token“) anlegen:**

1. GitHub → oben rechts Profilbild → **Settings** → ganz unten links **Developer settings** →
   **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. Ausfüllen:
   - **Token name:** `pastfive-website liest Spiele`
   - **Expiration:** z. B. 1 Jahr (Datum im Kalender notieren – dann einfach neu anlegen)
   - **Repository access:** **Only select repositories** → **zoo-game** und **epochen-game** auswählen
   - **Permissions → Repository permissions → Contents:** **Read-only** (sonst nichts ändern)
3. **Generate token** → den angezeigten Text (beginnt mit `github_pat_…`) kopieren. Er wird nur einmal angezeigt.
4. Repo **Homepage** → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
   - **Name:** `GAMES_TOKEN`
   - **Secret:** den kopierten Text einfügen → **Add secret**
5. **Actions** → „Website veröffentlichen“ → **Run workflow**. Nach 1–2 Minuten sollte
   `https://pastfive.app/download/tierpark/version.json` (und `…/tribora/version.json`) im Browser die Versionsdaten zeigen.

**Warum ist das sicher?** Der Schlüssel kann nur die zwei Spiele-Repos **lesen** – nichts ändern, nichts löschen,
keine anderen Repos sehen. Er liegt verschlüsselt bei GitHub und taucht nie in einer Datei auf. Und selbst wenn jemand eine fremde
APK unterschieben wollte: Ohne deinen Signaturschlüssel wird sie nicht veröffentlicht.

**Gut zu wissen:** GitHub pausiert stündliche Abläufe, wenn 60 Tage lang nichts im Repo passiert. Dann unter
**Actions** einfach „Enable workflow“ drücken.

---

## Teil 4 – Update-Adresse in der App

✅ Erledigt: Seit Tierpark 1.1.14 steht `https://pastfive.app/download/tierpark/version.json` fest in der App
(`zoo-game`, `www/index.html`, `UPDATE_URL`).
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
- **Google Play:** verlangt eine öffentlich erreichbare Datenschutzerklärung (→ `https://pastfive.app/datenschutz/`)
  und eine Kontakt-E-Mail. Bei Konten, die Geld verdienen, wird auch die Adresse öffentlich angezeigt.

✅ Erledigt: Name, Wohnort (ohne Straße) und hello@pastfive.app sind eingetragen. Sobald Geld ins Spiel kommt
(Kaufpreis, Spenden), Impressum um die volle Anschrift ergänzen.

---

## Wartung – was ab und zu zu tun ist

| Wann | Was |
|---|---|
| **Neue Spielversion** | Nichts. Die Website holt APK, Bilder und Versionsinfo selbst (stündlich bzw. bei jeder Website-Änderung). Eilt es: Repo Homepage → **Actions** → „Website veröffentlichen“ → **Run workflow**. |
| **Lese-Schlüssel `GAMES_TOKEN` läuft ab** – aktuell ca. **20.02.2027** (90 Tage; Erinnerung am 06.02.2027 ist gesetzt) | GitHub → Settings → Developer settings → Fine-grained tokens → **Regenerate** → neuen Text im Repo Homepage unter Settings → Secrets → Actions → `GAMES_TOKEN` → **Update** einfügen. Ohne gültigen Schlüssel kommen keine neuen Versionen mehr auf die Website (die alten bleiben). |
| **Roter Lauf unter Actions** | Meist ein kurzer GitHub-Aussetzer → „Re-run jobs“. Sonst Claude das Protokoll ansehen lassen. |
| **60 Tage keine Änderung im Repo** | GitHub pausiert die stündliche Prüfung → unter **Actions** „Enable workflow“ drücken. |
| **Jährlich (November)** | OVH verlängert die Domain automatisch (ca. 21,49 €) – Zahlungsmittel aktuell halten. |
| **Spiel ändert sich** (Preis, Internet, Sprachen, Alter) | **Ehrlich-Etikett** auf der Spielseite anpassen – und ggf. die Datenschutzerklärung. |
