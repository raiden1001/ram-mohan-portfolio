#!/usr/bin/env bash
# One-shot: auth (if needed) → create public repo → push → enable Pages via Actions
set -euo pipefail
export PATH="${HOME}/.local/bin:/usr/local/bin:${PATH}"
cd "$(dirname "$0")/.."

if ! gh auth status >/dev/null 2>&1; then
  echo "Logging into GitHub (browser device flow)…"
  gh auth login --hostname github.com --git-protocol https --web
fi

USER="$(gh api user --jq .login)"
REPO="ram-mohan-portfolio"

if ! gh repo view "${USER}/${REPO}" >/dev/null 2>&1; then
  gh repo create "${REPO}" --public --source=. --remote=origin --description "Ram Mohan — Senior Android Engineer portfolio (Impact Atlas)"
else
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/${USER}/${REPO}.git"
fi

git push -u origin main

# Ensure Pages uses GitHub Actions
gh api -X PUT "repos/${USER}/${REPO}/pages" \
  -f build_type=workflow \
  -f source[branch]=main \
  -f source[path]=/ \
  2>/dev/null || true

echo ""
echo "Repo:  https://github.com/${USER}/${REPO}"
echo "Site:  https://${USER}.github.io/${REPO}/"
echo "Enable Pages → Source: GitHub Actions in repo Settings if the site 404s for a few minutes."
