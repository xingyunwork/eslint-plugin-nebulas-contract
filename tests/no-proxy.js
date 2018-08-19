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


var o = {name: 1};var p = new Proxy(o,{get: function(target, prop, receiver){return target['name'];}});


const ruleTester = new RuleTester();

ruleTester.run("no-proxy", rule, {
    valid: [
        "function Test(){}",
    ],
    invalid: [
        {
            code: "var o = {name: 1};\nvar p = new Proxy(o,{get: function(target, prop, receiver){return target['name'];}});",
            errors: [{
                message: "Unallowed use of `Proxy`",
                type: "Identifier",
            }],
        }
    ],
});
