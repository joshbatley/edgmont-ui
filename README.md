<p align="center">
  <img src="public/logo-dark.svg#gh-dark-mode-only" height="128"/>
  <img src="public/logo-light.svg#gh-light-mode-only" height="128"/>
</p>
<div align="center">

[![Build][build-image]][build-url] [![NPM Version][version-image]][version-url] [![License][license-image]][license-url] [![Bundle Size][size-image]][size-url]

[build-image]: https://img.shields.io/github/workflow/status/joshbatley/edgmont-ui/Publish%20Package
[build-url]: https://github.com/joshbatley/edgmont-ui/actions
[version-image]: https://img.shields.io/npm/v/edgmont-ui
[version-url]: https://www.npmjs.com/package/edgmont-ui
[license-image]: https://img.shields.io/github/license/joshbatley/edgmont-ui
[license-url]: https://github.com/joshbatley/edgmont-ui/blob/main/LICENSE
[size-image]: https://img.shields.io/bundlephobia/minzip/edgmont-ui
[size-url]: https://bundlephobia.com/package/edgmont-ui

</div>

## Getting Started

### Installation methods

There are a few methods to choose from depending on your usage for edgmont-ui

#### Option 1 - Edgmont-ui theme & Tailwind

##### Install tailwind

Follow this official set-up [guide](https://tailwindcss.com/docs/guides/create-react-app) to get tailwind working within your react application.

##### Install edgmont-ui

```
npm/yarn install edgmont-ui
```

##### Import edgmont-ui tailwind preset

Update the tailwind config

```js
// tailwind.config.js
const preset = require("edgmont-ui/preset");
module.exports = {
  ...preset,
};
```

##### Optional: Datepicker css

Datepicker is a css file so will need to be imported.

```css
/* index.css */
@import "edgmont-ui/dist/datepicker.css";
```

or

```js
// index.js
import "edgmont-ui/dist/datepicker.css";
```

#### Option 2 - Custom theme & Tailwind

##### Install tailwind

Follow this official set-up [guide](https://tailwindcss.com/docs/guides/create-react-app) to get tailwind working within your react application.

##### Install edgmont-ui

```
npm/yarn install edgmont-ui
```

##### Import edgmont-ui tailwind preset

Update the tailwind config to your preferences check edgmont-ui/preset, for the required color names and update to your liking.

```js
// tailwind.config.js
const preset = require("edgmont-ui/preset");
module.exports = {
   theme: {
    colors: ({colors}) => ({
      ...preset.theme.colors,
      primary: colors.green
    })
  }
  content: [
    // Extends you content and include the edgmont-ui package
    'node_modules/edgmont-ui/**/*.{js,jsx,ts,tsx}',
  ],
};
```

##### Optional: Datepicker css

Datepicker is a css file so will need to be imported.

```css
/* index.css */
@import "edgmont-ui/dist/datepicker.css";
```

or

```js
// index.js
import "edgmont-ui/dist/datepicker.css";
```

#### Option 3 - Playground

##### Install edgmont-ui

```
npm/yarn install edgmont-ui
```

##### Add edgmont-ui css with no tailwind required

```css
/* index.css */
@import "edgmont-ui/dist/edgmont.css";
```

or

```js
// index.js
import "edgmont-ui/dist/edgmont.css";
```

> Note: This might be optimized and is not recommended!

## Package used

- React - Framework of choice
- Typescript - Types!!!
- Tailwind - for all styling
- Heroicons - for the few icons needed
- Downshift - a easy to use API for our select element
- React-datepicker - for the datepicker api
- Date-fns - the datepicker date library of choice
- Prism-react-renderer & react-simple-code-editor - for the code editor and syntax highlighter
- React-dropzone - for the file uploader
- React-spring - for any animation/transitions
- React-popper - for tooltip and popover API
- Storybooks - for the docs

## License

This library is MIT licensed.
