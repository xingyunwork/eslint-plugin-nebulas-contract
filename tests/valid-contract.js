/**
 * @fileoverview Tests for contract-init rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/valid-contract.js");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("contract-init", rule, {
    valid: [

        // "var TestContract = function(){};TestContract.prototype.init = function(){};module.exports = TestContract;",
        //
        // {
        //     code: "class TestContract{ init(){} };module.exports = TestContract;",
        //     parser: 'babel-eslint'
        // }

    ],
    invalid: [
        {
            code: 'module.exports = 1;',
            errors: [{
                // column: 18,
                // line: 2,
                message: "A Contract must include an init function.",
                type: "Identifier",
            }],
        },

        // {
        //     code: 'var TestContract = function(){};\nmodule.exports = TestContract;',
        //     errors: [{
        //         ruleId: 'contract-init',
        //         column: 18,
        //         line: 2,
        //         message: "A Contract must include an init function.",
        //         type: "Identifier",
        //     }],
        // },


    ],
});
