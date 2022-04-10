#!/usr/bin/env bash
files=()
for d in packages/*; do
  files+=("${d//packages\//}")
  mkdir docs/"${d//packages/}"
  rsync -a "${d:1}"/build/ "${d//packages/docs}"
done

links=""
for f in "${files[@]}"; do
  links+="<a href='$f'>$f<\/a>\n"
done

sed "s/{{links}}/${links}/g" scripts/doc-template.html > docs/index.html
