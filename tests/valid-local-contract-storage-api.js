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
        "Blockchain.block.coinbase",

    ],
    invalid: [


    ],
});


