/**
 * @fileoverview Tests for Uint rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/valid-uint-api");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();



ruleTester.run("valid-uint-api", rule, {
    valid: [
        "var Uint64 = Uint.Uint64;",
        "var Uint128 = Uint.Uint128;",
        "var Uint256 = Uint.Uint256;",
        "var Uint512 = Uint.Uint512;",
    ],
    invalid: [

        {
            code: "var Uint65 = Uint.Uint65;",
            errors: [{
                column: 19,
                line: 1,
                message: 'Unexpected Uint property Uint65',
                type: "Identifier"
            }]
        }

    ],
});


