/**
 * @fileoverview Tests for no-settimeout rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-window");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-window", rule, {
    valid: [
        "function Test(){}",
    ],
    invalid: [
        {
            code: "var a=window.name;",
            errors: [{
                column: 7,
                line: 1,
                message: "Avoid using window",
                type: "MemberExpression",
            }],
        }
    ],
});
