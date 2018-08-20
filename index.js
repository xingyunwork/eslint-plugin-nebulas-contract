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
            // env: {
            //     "es6": true,
            //     "node": true
            // },
            // globals: {
            // },
            plugins: [
                "nebulas-contract"
            ],
            rules: {
                "nebulas-contract/available-libs": 'error',
                "nebulas-contract/no-async": 'error',
                "nebulas-contract/no-import": 'error',
                "nebulas-contract/no-proxy": 'error',
                "nebulas-contract/no-window": 'error',
            }
        }
    }
};
