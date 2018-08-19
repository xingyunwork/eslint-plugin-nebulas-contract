'use strict'

module.exports = {
    rules: {
        "no-jquery": require('./rules/no-jquery'),
        'no-setinterval': require('./scripts/no-setinterval'),
    },
    configs: {
        recommended: {
            env: {
                node: true
            },
            globals: {
            },
            plugins: [
                "backbone"
            ],
            rules: {

            }
        }
    }
};
