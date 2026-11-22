#!/usr/bin/env bash
# Prüft, ob eine APK mit dem erwarteten App-Schlüssel signiert ist.
# Aufruf: signatur-pruefen.sh <datei.apk> <SHA-256-Fingerabdruck ohne Doppelpunkte>
set -euo pipefail
APK="$1"
EXPECTED=$(echo "$2" | tr -d ':' | tr 'a-f' 'A-F')
APKSIGNER=$(ls -d "$ANDROID_HOME"/build-tools/*/ | sort -V | tail -1)apksigner
GOT=$("$APKSIGNER" verify --print-certs "$APK" | grep -m1 'certificate SHA-256 digest' | awk '{print toupper($NF)}')
if [ "$GOT" != "$EXPECTED" ]; then
  echo "::error::Falsche Signatur bei $(basename "$APK") ($GOT) – wird NICHT veröffentlicht."
  exit 1
fi
echo "✔ $(basename "$APK"): Signatur stimmt."
