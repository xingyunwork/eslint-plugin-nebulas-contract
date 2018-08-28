/**
 * @fileoverview Tests for LocalContractStorage rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-dupe-keys-in-local-contract-storage");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();


ruleTester.run("valid-blockchain-api", rule, {
    valid: [
        "LocalContractStorage.defineMapProperty(this, 'allocation');",
        "LocalContractStorage.defineMapProperty(this, 'allocation0');LocalContractStorage.defineMapProperty(this, 'allocation1');",
        "LocalContractStorage.defineProperty(this, 'allocation');LocalContractStorage.defineMapProperty(this, 'allocation');",


        "LocalContractStorage.defineProperties(this, {name: null, 'count': null});",
    ],
    invalid: [
        {
            code: "LocalContractStorage.defineProperty(this, 'allocation');\nLocalContractStorage.defineProperty(this, 'allocation');",
            errors: [{
                column: 43,
                line: 2,
                message: 'disallow duplicate keys in LocalContractStorage.',
                type: "Literal"
            }],

        },
        {
            code: "LocalContractStorage.defineMapProperty(this, 'allocation');\nLocalContractStorage.defineMapProperty(this, 'allocation');",
            errors: [{
                column: 46,
                line: 2,
                message: 'disallow duplicate keys in LocalContractStorage.',
                type: "Literal"
            }],

        },

        {
            code: "LocalContractStorage.defineProperties(this, {name: null, name: null});",
            errors: [{
                column: 58,
                line: 1,
                message: 'disallow duplicate keys in LocalContractStorage.',
                type: "Property"
            }],

        },

        {
            code: "LocalContractStorage.defineProperties(this, {name: null, count: null});\nLocalContractStorage.defineProperties(this, {name: null});",
            errors: [{
                column: 46,
                line: 2,
                message: 'disallow duplicate keys in LocalContractStorage.',
                type: "Property"
            }],

        },
    ],
});


