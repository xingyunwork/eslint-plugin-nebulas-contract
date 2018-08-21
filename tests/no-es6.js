/**
 * @fileoverview Tests for no-es6-modules rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-es6");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-es6", rule, {
    valid: [
        "var crypto = require('crypto.js');",
        "var TestContract = function() {}\nmodule.exports = TestContract;",
    ],
    invalid: [
        {
            code: "import crypto from 'crypto.js'",
            errors: [{
                message: 'Unexpected import statement. Use require() instead.'
            }],
            parser: 'babel-eslint'
        },
        {
            code: "class TestContract{}\nexport default foo;",
            errors: [{
                message: 'Unexpected default export statement. Use module.exports instead.'
            }],
            parser: 'babel-eslint'
        }
    ],
});
