#!/usr/bin/env bash
echo "Moving build into docs folder"
for d in packages/*; do
  files=("${d//packages\//}")
  if [ "$files" == "docs" ]; then
    echo "${d//packages/docs}"
    rsync -a $(pwd)"/${d}"/dist/ "${d//packages/.}"
  else
    mkdir docs/"${d//packages/}"
    rsync -a $(pwd)"/${d}"/docs/ "${d//packages/docs}"
  fi
done
