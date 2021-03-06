# soundfont2

This is a SoundFont2 parser (and soon to be editor), written in TypeScript. It works in Node.js and (modern) web browsers. The parser is based on the [SoundFont 2.01 specification](http://www.synthfont.com/SFSPEC21.PDF), but is currently not fully compliant yet. The end goal is to be fully compliant with the [SoundFont 2.04 specification](http://www.synthfont.com/sfspec24.pdf).

This library is not ready for production yet, hence the version 0.x.x. Some SoundFonts may be parsed incorrectly and the API may have breaking changes in the future. The first release that is suitable for production use-cases will be version 1.0.0 and it will follow semver from there on.

## Installation

The library can be installed with `yarn`, `npm` or using a `<script>` tag.

```bash
$ yarn add soundfont2
```

For full installation instructions, please refer to [the documentation](https://mrtenz.github.io/soundfont2/getting-started/installation.html).

## Getting Started

See [Getting Started](https://mrtenz.github.io/soundfont2/getting-started/).
