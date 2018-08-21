/**
 * @fileoverview Tests for blockchain rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/valid-blockchain-api");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("valid-blockchain-api", rule, {
    valid: [
        "Blockchain.block.coinbase",
        "Blockchain.block.hash",
        "Blockchain.block.height",

        "Blockchain.transaction.from",
        "Blockchain.transaction.to",
        "Blockchain.transaction.value",
        "Blockchain.transaction.nonce",
        "Blockchain.transaction.hash",

        "var result = Blockchain.transfer(address, value);",
        "var result = Blockchain.verifyAddress(address);",

        "var state = Blockchain.getAccountState(address);",
        "var hash = Blockchain.getPreBlockHash(offset);",
        "var seed = Blockchain.getPreBlockSeed(offset);",

    ],
    invalid: [

        {
            code: "Blockchain.block.nonce",
            errors: [{
                message: 'Unexpected Blockchain property block.nonce',
                type: "MemberExpression"
            }],

        },

        {
            code: "Blockchain.transfer1(address, value);",
            errors: [{
                column: 1,
                line: 1,
                message: 'Unexpected Blockchain property transfer1',
                type: "MemberExpression"
            }],

        }
    ],
});


