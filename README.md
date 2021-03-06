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
- [no-es6](docs/rules/no-es6.md) - Forbid some ES2015 modules usage.
- [no-settimeout](docs/rules/no-settimeout.md) - Forbid the use of `setInterval` `setTimeout`.

- [available-libs](docs/rules/available-libs.md) - Available libraries are `crypto.js`.
- [module-exports](docs/rules/no-module-exports.md) - `module.exports = ` is necessary inside of contract.
- [valid-contract](docs/rules/valid-contract.md) -  Contract must be a Prototype Object or Class in JavaScript or TypeScript , and include an init function.

- [valid-blockchain-api](docs/rules/valid-blockchain-api.md) -  The Blockchain API check is provided.
- [valid-local-contract-storage-api](docs/rules/valid-local-contract-storage-api.md) -  The LocalContractStorage API check is provided.
- [valid-event-api](docs/rules/valid-event-api.md) -  The Event API check is provided.
- [valid-uint-api](docs/rules/valid-uint-api.md) -  The Uint API check is provided.
- [valid-crypto-api](docs/rules/valid-crypto-api.md) -  The crypto API check is provided.

- [no-dupe-keys-in-local-contract-storage.md](docs/rules/no-dupe-keys-in-local-contract-storage.md) -  disallow duplicate keys in LocalContractStorage.


<!-- RULES:END -->


## Unit Tests

```
$ npm install
$ npm run test
```


See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

MIT © [yucopowo](https://github.com/yucopowo)



