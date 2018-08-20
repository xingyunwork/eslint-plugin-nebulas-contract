# eslint-plugin-nebulas-contract

ESLint rules for Nebulas Smart Contracts


## Install

```
$ npm install --save-dev eslint eslint-plugin-nebulas-contract
```

## Recommended configuration

Configure it in `package.json`.

<!-- EXAMPLE_CONFIGURATION:START -->
```json
{
  "name": "my-nebulas-contract-project",
  "eslintConfig": {
    "env": {
      "es6": true
    },
    "plugins": [
      "nebulas-contract"
    ],
    "extends": "plugin:nebulas-contract/recommended",
    "rules": {

    }
  }
}
```
<!-- EXAMPLE_CONFIGURATION:END -->


## Rules

<!-- RULES:START -->
- [no-window](docs/rules/no-window.md) - Forbid the use of `window`.
- [no-proxy](docs/rules/no-proxy.md) - Forbid the use of `Proxy`.
- [no-es6-modules](docs/rules/no-es6-modules.md) - Forbid ES2015 modules usage.
- [no-settimeout](docs/rules/no-settimeout.md) - Forbid the use of `setInterval` `setTimeout`.
- [no-module-exports](docs/rules/no-module-exports.md) - `module.exports = ` is necessary inside of contract.
- [available-libs](docs/rules/available-libs.md) - Available libraries are `crypto.js`.

<!-- RULES:END -->


## Unit Tests

```
$ npm install
$ npm run test
```


See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

MIT © [yucopowo](https://github.com/yucopowo)



