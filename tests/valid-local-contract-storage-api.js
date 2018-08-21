/**
 * @fileoverview Tests for LocalContractStorage rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/valid-local-contract-storage-api");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();


ruleTester.run("valid-blockchain-api", rule, {
    valid: [
        "LocalContractStorage.rawGet",
        "LocalContractStorage.rawSet",
        "LocalContractStorage.defineProperty",
        "LocalContractStorage.defineProperties",
        "LocalContractStorage.defineMapProperty",
        "LocalContractStorage.defineMapProperties",
        "LocalContractStorage.del",
        "LocalContractStorage.get",
        "LocalContractStorage.set",
    ],
    invalid: [

        {
            code: "LocalContractStorage.defineMyProperties",
            errors: [{
                message: 'Unexpected LocalContractStorage property defineMyProperties',
                type: "MemberExpression"
            }],

        }

    ],
});


