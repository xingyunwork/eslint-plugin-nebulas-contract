/**
 * @fileoverview Tests for no-settimeout rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-async");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-async", rule, {
    valid: [
        "function Test(){}",
    ],
    invalid: [
        {
            code: "var a=1;\nsetTimeout(function(){  }, 100);",
            errors: [{
                message: "Unexpected setTimeout.",
                type: "CallExpression",
            }],
        },
    ],
});
