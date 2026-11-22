// Liest die version.json des Spiels und zeigt Version, Datum und Neuerungen beim Download-Knopf an.
// Der Knopf zeigt schon im HTML direkt auf die APK – das Skript ist nur die Zugabe (Versionsanzeige).
// Verwendung: <div class="dl" data-json="../download/tierpark/version.json" data-lang="de"> … </div>
(function () {
  document.querySelectorAll('[data-json]').forEach(async function (box) {
    var de = box.getAttribute('data-lang') !== 'en';
    var url = box.getAttribute('data-json');
    var btn = box.querySelector('.btn');
    var info = box.querySelector('.ver');
    try {
      var r = await fetch(url + '?t=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) throw new Error(r.status);
      var j = await r.json();
      var apk = new URL(j.apk || 'Tierpark.apk', new URL(url, location.href)).href;
      btn.href = apk;
      btn.classList.remove('off');
      var html = (de ? 'Aktuelle Version: ' : 'Current version: ') + '<b>' + esc(j.versionName) + '</b>';
      if (j.date) {
        var d = new Date(j.date + 'T12:00:00');
        html += (de ? ' vom ' : ' from ') + d.toLocaleDateString(de ? 'de-AT' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      }
      // Englische Seite: englische Neuerungen nehmen, falls vorhanden (notes_en / title_en)
      var notes = (!de && Array.isArray(j.notes_en) && j.notes_en.length) ? j.notes_en : j.notes;
      var title = (!de && j.title_en) ? j.title_en : j.title;
      if (title) html += '<br><b>' + esc(title) + '</b>';
      if (Array.isArray(notes) && notes.length) {
        html += '<br>' + (de ? 'Neu:' : 'New:') + '<ul>' + notes.slice(0, 8).map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>';
      }
      info.innerHTML = html;
    } catch (e) {
      // Versionsanzeige nicht verfügbar – der Knopf zeigt trotzdem direkt auf die APK
      info.textContent = '';
    }
  });
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
})();
