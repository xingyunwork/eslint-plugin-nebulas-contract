'use strict'

const reqAll = require('req-all');
const rules = reqAll('rules', {camelize: false});

module.exports = {
    rules: rules,
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
            rules: (function () {
                const recommended = {};
                Object.keys(rules).forEach(function (name) {
                    recommended[ 'nebulas-contract/'+name ] = 'error';
                });
                return recommended;
            })()
        }
    }
};
