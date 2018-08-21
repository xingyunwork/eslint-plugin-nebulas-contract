/**
 * @fileoverview Tests for contract-init rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/contract-init.js");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("contract-init", rule, {
    valid: [

        "var TestContract = function(){};TestContract.prototype.init = function(){};module.exports = TestContract;",
        {
            code: "class TestContract{ init(){} };module.exports = TestContract;",
            parser: 'babel-eslint'
        }

    ],
    invalid: [
        {
            code: 'var TestContract = function(){};module.exports = TestContract;',
            errors: [{
                ruleId: 'contract-init',
                message: "smart contract code must have an init() method.",
                type: "Program",
            }],
        },


    ],
});