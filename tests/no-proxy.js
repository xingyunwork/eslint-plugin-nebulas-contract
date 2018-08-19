/**
 * @fileoverview Tests for no-proxy rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-proxy");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-proxy", rule, {
    valid: [
        "function Test(){}",
    ],
    invalid: [
        {
            code: "var o = {name: 1};\nvar p = new Proxy(o,{get: function(target, prop, receiver){return target['name'];}});",
            errors: [{
                ruleId: 'no-proxy',
                message: "Unallowed use of `Proxy`",
                type: "Identifier",
            }],
        }
    ],
});
