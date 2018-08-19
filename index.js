'use strict'

module.exports = {
    rules: {
        "available-libs": require('../rules/available-libs'),
        "no-async": require('../rules/no-async'),
        "no-import": require('../rules/no-import'),
        "no-proxy": require('../rules/no-proxy'),
        "no-window": require('../rules/no-window'),
    },
    rulesConfig: {
        'param-names': 1,
        'always-return': 1,
        'no-return-wrap': 1,
        'no-native': 0,
        'catch-or-return': 1
    },
    configs: {
        recommended: {
            env: {
                node: true
            },
            globals: {
            },
            plugins: [
            ],
            rules: {
                "available-libs": 'error',
                "no-async": 'error',
                "no-import": 'error',
                "no-proxy": 'error',
                "no-window": 'error',
            }
        }
    }
};
