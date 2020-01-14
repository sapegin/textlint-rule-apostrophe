# textlint-rule-apostrophe

[![textlint fixable rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) [![Build Status](https://travis-ci.org/sapegin/textlint-rule-apostrophe.svg)](https://travis-ci.org/sapegin/textlint-rule-apostrophe) [![npm](https://img.shields.io/npm/v/textlint-rule-apostrophe.svg)](https://www.npmjs.com/package/textlint-rule-apostrophe)

[Textlint](https://github.com/textlint/textlint) rule to check and fix correct apostrophe usage: replace `'` and `‘` with `’`.

![](https://d3vv6lp55qjaqc.cloudfront.net/items/273Q363N452m0x0b393E/apostrophe.png)

## Installation

```shell
npm install textlint-rule-apostrophe
```

Then enable the rule in your `.textlintrc`:

```js
{
  "rules": {
    "apostrophe": true
  }
}
```

Read more about [configuring textlint](https://github.com/textlint/textlint/blob/master/docs/configuring.md).

## Usage

```shell
textlint --fix --rule apostrophe Readme.md
```

## Other textlint rules

- [textlint-rule-diacritics](https://github.com/sapegin/textlint-rule-diacritics) — words with diacritics
- [textlint-rule-stop-words](https://github.com/sapegin/textlint-rule-stop-words) — filler words, buzzwords and clichés
- [textlint-rule-terminology](https://github.com/sapegin/textlint-rule-terminology) — correct terms spelling

## Change log

The change log can be found on the [Releases page](https://github.com/sapegin/textlint-rule-apostrophe/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Sponsoring

This software has been developed with lots of coffee, buy me one more cup to keep it going.

<a href="https://www.buymeacoffee.com/sapegin" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" height="51" width="217" ></a>

## Authors and license

[Artem Sapegin](https://sapegin.me) and [contributors](https://github.com/sapegin/textlint-rule-apostrophe/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
