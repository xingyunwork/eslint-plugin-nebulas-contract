/**
 * @fileoverview Tests for no-import rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-import");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-import", rule, {
    valid: [
        "var crypto = require('crypto.js');",
    ],
    invalid: [
        {
            code: "import crypto from 'crypto.js'",
            errors: [{
                message: 'Unexpected import.'
            }],
            parser: 'babel-eslint'
        }
    ],
});
