'use strict'

module.exports = {
    rules: {
        "available-libs": require('./rules/available-libs'),
        "no-async": require('./rules/no-async'),
        "no-import": require('./rules/no-import'),
        "no-proxy": require('./rules/no-proxy'),
        "no-window": require('./rules/no-window'),
    },
    configs: {
        recommended: {
            env: {
                "es6": true,
                "node": true
            },
            globals: {
            },
            plugins: [
                "nebulas-contract"
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
