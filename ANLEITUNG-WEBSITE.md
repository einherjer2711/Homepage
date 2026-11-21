# Anleitung: Website online stellen

Die Schritte sind so geschrieben, dass du sie der Reihe nach abhaken kannst.

**Aufteilung:** Domain und E-Mail bei **domaintechnik.at**, die Website selbst auf **GitHub Pages** (gratis).
Bei domaintechnik brauchst du dafür **kein Webspace-Paket** – Domain + DNS-Verwaltung (+ E-Mail, falls gewünscht) reicht.

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

## Teil 2 – Eigene Domain (z. B. pastfive.app) mit HTTPS

### 2a. Domain bei GitHub „verifizieren“ (Schutz vor Missbrauch – empfohlen, einmalig)

1. GitHub → oben rechts dein Profilbild → **Settings** (Konto, nicht Repo!) → links **Pages** →
   **Add a domain** → `pastfive.app` eingeben.
2. GitHub zeigt einen **TXT-Eintrag** an, z. B. Name `_github-pages-challenge-einherjer2711`, Wert `abc123…`.
3. Diesen TXT-Eintrag beim Domain-Anbieter anlegen (siehe 2b) → bei GitHub **Verify** drücken
   (kann ein paar Minuten bis Stunden dauern).

### 2b. DNS-Einträge beim Domain-Anbieter

Bei domaintechnik.at im Kundenbereich die Domain auswählen und die **DNS-Verwaltung** öffnen
(Bezeichnung kann leicht abweichen, z. B. „DNS-Einträge“ oder „Zoneneditor“). Dort:

1. **Alte Einträge entfernen**, die auf eine „Parkseite“ des Anbieters zeigen: alle **A**- und **AAAA**-Einträge
   für `@` (= die Domain selbst) sowie einen evtl. vorhandenen Eintrag für `www`.
   ⚠️ **MX-Einträge und alles, was mit E-Mail zu tun hat (z. B. `mail`, `autodiscover`, SPF-TXT), NICHT löschen** –
   die E-Mail bleibt bei domaintechnik.
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

1. Repo **Homepage** → **Settings → Pages** → **Custom domain**: `pastfive.app` → **Save**.
2. GitHub prüft die DNS-Einträge („DNS check successful“). Falls ein Fehler kommt: etwas warten und
   erneut „Check again“.
3. Sobald GitHub das Zertifikat ausgestellt hat (bis zu ca. 1 Std.), Haken bei **Enforce HTTPS** setzen.
   **Besonderheit bei .app:** Die Endung erzwingt immer HTTPS. Bis GitHub das Zertifikat ausgestellt hat, zeigt der
   Browser daher eine Fehlermeldung – das ist normal, einfach abwarten.
   Ab dann läuft die Seite verschlüsselt: `https://pastfive.app`. `www.pastfive.app` leitet automatisch weiter.

**Prüfen:** `https://pastfive.app` und `https://www.pastfive.app` im Handy-Browser öffnen – Schloss-Symbol muss da sein.

### Optional: E-Mail-Adresse mit der Domain

Für Impressum und Google Play ist eine eigene Adresse wie `hallo@pastfive.app` praktisch (und schützt deine
private Adresse). Das richtest du direkt bei domaintechnik ein – als eigenes Postfach oder als Weiterleitung an
deine bestehende Adresse. Die E-Mail-Einträge legt domaintechnik dabei selbst an; sie vertragen sich mit den
GitHub-Einträgen oben.

---

## Teil 3 – Automatisch: neue App-Version → Website

**So funktioniert es:** Einmal pro Stunde schaut die Website nach, ob es im Repo `zoo-game` eine neue Release gibt.
Wenn ja, holt sie `Tierpark.apk` und `version.json`, **prüft, ob die APK mit deinem App-Schlüssel signiert ist**,
und veröffentlicht beides unter `https://pastfive.app/download/tierpark/`. Die APK kommt dabei nie ins Repo.
Eine neue App-Version ist also spätestens nach etwa einer Stunde auf der Website.

**Einmalig einrichten – einen Lese-Schlüssel („Token“) anlegen:**

1. GitHub → oben rechts Profilbild → **Settings** → ganz unten links **Developer settings** →
   **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. Ausfüllen:
   - **Token name:** `pastfive-website liest zoo-game`
   - **Expiration:** z. B. 1 Jahr (Datum im Kalender notieren – dann einfach neu anlegen)
   - **Repository access:** **Only select repositories** → nur **zoo-game** auswählen
   - **Permissions → Repository permissions → Contents:** **Read-only** (sonst nichts ändern)
3. **Generate token** → den angezeigten Text (beginnt mit `github_pat_…`) kopieren. Er wird nur einmal angezeigt.
4. Repo **Homepage** → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
   - **Name:** `ZOO_GAME_TOKEN`
   - **Secret:** den kopierten Text einfügen → **Add secret**
5. **Actions** → „Website veröffentlichen“ → **Run workflow**. Nach 1–2 Minuten sollte
   `https://pastfive.app/download/tierpark/version.json` im Browser die Versionsdaten zeigen.

**Warum ist das sicher?** Der Schlüssel kann nur `zoo-game` **lesen** – nichts ändern, nichts löschen, keine anderen
Repos sehen. Er liegt verschlüsselt bei GitHub und taucht nie in einer Datei auf. Und selbst wenn jemand eine fremde
APK unterschieben wollte: Ohne deinen Signaturschlüssel wird sie nicht veröffentlicht.

**Gut zu wissen:** GitHub pausiert stündliche Abläufe, wenn 60 Tage lang nichts im Repo passiert. Dann unter
**Actions** einfach „Enable workflow“ drücken.

---

## Teil 4 – Update-Adresse in der App

Erst wenn Teil 2 und 3 laufen und `https://pastfive.app/download/tierpark/version.json` im Browser
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
- **Google Play:** verlangt eine öffentlich erreichbare Datenschutzerklärung (→ `https://pastfive.app/datenschutz/`)
  und eine Kontakt-E-Mail. Bei Konten, die Geld verdienen, wird auch die Adresse öffentlich angezeigt.

**Zu tun:** In `impressum/`, `datenschutz/` und den englischen Gegenstücken die rot markierten Platzhalter
`[Vor- und Nachname]`, `[Straße …]`, `[E-Mail-Adresse]` ausfüllen (oder Claude die Angaben geben).
Wenn du deine Straße nicht veröffentlichen möchtest: Für die reine Offenlegung genügt der Ort; dann aber
bewusst entscheiden (siehe ECG-Hinweis oben).
