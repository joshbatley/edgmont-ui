# Edgmont UI Library

### TODO:

- Github actions
  - Test
  - Github pages
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

GA - Github pages
On Push to master
Run build-storybook

GA - NPM Publish
On Push to master
Run build
Tag GH release
Run npm publish


> "postbuild": "purgecss --css build/static/css/_.css --content build/index.html build/static/js/_.js --output build/static/css"
