#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKER_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
OUTPUT_DIR="${1:-${HOME}/Downloads/Vishome-Lead-Reports/$(date +%F)}"
RAW_JSON="$(mktemp -t vishome-leads.XXXXXX.json)"

cleanup() {
  rm -f "${RAW_JSON}"
}
trap cleanup EXIT

mkdir -p "${OUTPUT_DIR}"
cd "${WORKER_DIR}"

npx wrangler d1 execute vishome_visitors --remote --json \
  --command "SELECT * FROM leads ORDER BY submitted_at DESC" > "${RAW_JSON}"

python3 scripts/lead_report.py "${RAW_JSON}" "${OUTPUT_DIR}"
printf 'Lead report ready: %s\n' "${OUTPUT_DIR}"
