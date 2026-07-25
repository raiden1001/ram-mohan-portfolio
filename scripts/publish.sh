#!/usr/bin/env bash
set -euo pipefail
export PATH="${HOME}/.local/bin:/usr/local/Cellar/gh/2.96.0/bin:/usr/local/bin:${PATH}"
cd "$(dirname "$0")/.."

REPO_NAME="ram-mohan-portfolio"
SSH_USER="ramsimplogics"

if gh auth status >/dev/null 2>&1; then
  USER="$(gh api user --jq .login)"
  if ! gh repo view "${USER}/${REPO_NAME}" >/dev/null 2>&1; then
    gh repo create "${REPO_NAME}" --public --source=. --remote=origin \
      --description "Ram Mohan — Senior Android Engineer portfolio (Impact Atlas)"
  else
    git remote remove origin 2>/dev/null || true
    git remote add origin "https://github.com/${USER}/${REPO_NAME}.git"
  fi
  git push -u origin main
  gh api -X PUT "repos/${USER}/${REPO_NAME}/pages" -f build_type=workflow 2>/dev/null || true
  echo "Repo: https://github.com/${USER}/${REPO_NAME}"
  echo "Site: https://${USER}.github.io/${REPO_NAME}/"
  exit 0
fi

# SSH fallback (create empty public repo on GitHub first if missing)
echo "gh is not logged in — using SSH as ${SSH_USER}"
echo "If push fails with 'repository not found', create an empty public repo:"
echo "  https://github.com/new?name=${REPO_NAME}&visibility=public"
git remote remove origin 2>/dev/null || true
git remote add origin "git@github.com:${SSH_USER}/${REPO_NAME}.git"
git push -u origin main
echo "Repo: https://github.com/${SSH_USER}/${REPO_NAME}"
echo "Site: https://${SSH_USER}.github.io/${REPO_NAME}/"
echo "Then: Settings → Pages → Source: GitHub Actions"
