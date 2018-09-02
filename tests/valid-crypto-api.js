/**
 * @fileoverview Tests for crypto rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/valid-crypto-api");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();



ruleTester.run("valid-crypto-api", rule, {
    valid: [
        "var crypto = require('crypto.js');crypto.sha256('0123456789');",
        "var Crypto = require('crypto.js');Crypto.base64('0123456789');",
    ],
    invalid: [

        {
            code: "var crypto = require('crypto.js');\ncrypto.sha2561('0123456789');",
            errors: [{
                column: 8,
                line: 2,
                message: 'Unexpected crypto property sha2561',
                type: "Identifier"
            }]
        }

    ],
});


