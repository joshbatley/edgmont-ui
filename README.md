# Edgmont UI Library

### TODO:

- Github actions
  - Test
  - NPM publish
- Scripts
- test
- build
- lint
- typecheck

GA - Tests
On PR open & Push to master
Run build
Run Tests

GA - NPM Publish
On Push to master
Run build
Tag GH release
Run npm publish

> "postbuild": "purgecss --css build/static/css/_.css --content build/index.html build/static/js/_.js --output build/static/css"
