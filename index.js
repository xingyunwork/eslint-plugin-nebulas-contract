'use strict'

module.exports = {
    rules: {
        'no-setinterval': require('./rules/no-setinterval'),
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