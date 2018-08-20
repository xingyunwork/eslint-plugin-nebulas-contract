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


<!-- RULES:END -->


See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

MIT © [yucopowo](https://github.com/yucopowo)



