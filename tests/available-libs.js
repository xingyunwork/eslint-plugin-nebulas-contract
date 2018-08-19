/**
 * @fileoverview Tests for available-libs rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/available-libs");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("available-libs", rule, {
    valid: [
        "var crypto = require('crypto.js');\nfunction Test(){}",
    ],
    invalid: [
        {
            code: "var another = require('another.js');",
            errors: [{
                ruleId: 'available-libs',
                message: "Available libraries are crypto.js",
                type: "CallExpression",
            }],
        }
    ],
});
