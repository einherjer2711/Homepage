# Wunschliste – Website

Ideen und Aufgaben, die vorgemerkt sind, aber noch warten können.

## Offen

1. **Domain sichern** – pastfive.app bei OVHcloud (Domain + Starter E-Mail, Auto-Verlängerung an, 2FA), danach DNS laut ANLEITUNG-WEBSITE.md.
2. **Impressum/Datenschutz ausfüllen** – Platzhalter für Name, Anschrift, E-Mail (rot markiert),
   am besten mit eigener Adresse wie `hello@pastfive.app`.
3. **Entstehungsnotiz beim Tierpark** – Vorschlag steht, bei Bedarf selbst anpassen.
4. **Screenshots** vom Tierpark (4 Stück, Hochformat) statt der Platzhalter einfügen – echte Handy-Screenshots.
5. **Lese-Token `GAMES_TOKEN` anlegen** (ANLEITUNG-WEBSITE.md, Teil 3) – danach läuft die Automatik für beide Spiele.
6. **Update-Adresse fest in die Zoo-App** eintragen – erst wenn Domain + Automatik laufen.
7. **Tribora auf Englisch** (im Spiel) – danach Website-Hinweis „German only“ und Etikett anpassen.
   Screenshots für Tribora (Querformat!) einfügen.
8. **Neuigkeiten-Seite („Tagebuch“)** – kurze Einträge, was sich bei den Spielen tut. Erst später, wenn es mehr zu erzählen gibt.
9. **Englische Neuerungen** beim Download: Die „Neu:“-Liste kommt aus der version.json und ist derzeit nur
    deutsch. Idee: in der version.json zusätzlich `notes_en` mitliefern.
10. **Google-Play-Eintrag** vorbereiten: Store-Texte, Feature-Grafik (1024×500), Screenshots, Altersfreigabe-Fragebogen,
    „Datensicherheit“-Formular (Antwort: keine Daten erhoben/geteilt). Für neue private Entwicklerkonten verlangt
    Google einen geschlossenen Test mit mehreren Testern über 14 Tage. Play-Store-Symbol liegt in `assets/brand/`.
11. **Geld für die Kosten** (optional): kleiner einmaliger Kaufpreis im Play Store oder freiwilliger „Unterstützen“-Knopf.
    Achtung: Dann ändern sich Impressum-Pflichten und ggf. Steuerthemen.
12. **Teilen-Vorschau** (Bild + Text, wenn der Link z. B. in WhatsApp geteilt wird) – Open-Graph-Bild 1200×630.
13. **QR-Code** zur Download-Seite (praktisch zum Weitergeben an Familie und Freunde).
14. **Sofort-Anstoß** (optional): zoo-game meldet neue Versionen direkt an die Website, statt dass sie stündlich nachschaut.
    Braucht einen zweiten, eng begrenzten Token.

## Erledigt

- Automatik: neue Versionen von Tierpark und Tribora kommen stündlich auf die Website, mit Signaturprüfung.
- Tribora-Seite (DE/EN) mit echtem App-Symbol, Beschreibung, Entstehungsnotiz, Etikett (ab 12), Download.
- Name **pastfive**, Slogan **just play** (DE + EN), Domain **pastfive.app**, Logo „Abendsonne“ (Variante A).
- Website im neuen Stil: ruhig, modern, erwachsen; Startseite mit „Warum pastfive?“ und Versprechen;
  Tierpark-Seite mit Entstehungsnotiz, Ehrlich-Etikett, Download und Installationsanleitung;
  Datenschutz und Impressum – jeweils Deutsch und Englisch; automatische Veröffentlichung über GitHub Pages.
