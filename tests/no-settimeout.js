/**
 * @fileoverview Tests for no-settimeout rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-settimeout");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-settimeout", rule, {
    valid: [
        "function Test(){}",
    ],
    invalid: [
        {
            code: "var a=1;\nsetTimeout(function(){  }, 100);",
            errors: [{
                column: 1,
                line: 2,
                message: "Unexpected setTimeout.",
                type: "CallExpression",
            }],
        },
        {
            code: "var a=1;\nsetTimeout(() => {}, 100);",
            errors: [{
                message: "Unexpected setTimeout.",
                type: "CallExpression",
            }],
            parser: 'babel-eslint'
        },
        {
            code: "var a=1;\nsetInterval(() => {}, 100);",
            errors: [{
                message: "Unexpected setInterval.",
                type: "CallExpression",
            }],
            parser: 'babel-eslint'
        },
    ],
});
