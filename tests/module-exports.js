/**
 * @fileoverview Tests for module-exports rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/module-exports");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("module-exports", rule, {
    valid: [
        "module.exports = TestContract;",
        "var TestContract = function(){} \n module.exports = TestContract;",
        "var TestContract = function(){} \n module.exports = TestContract; \n function func(){} ",
    ],
    invalid: [
        {
            code: "var TestContract = function() {}",
            errors: [{
                message: '`module.exports = ` is necessary inside of contract.'
            }]
        },
        {
            code: "var TestContract = function() {} \n module.export = TestContract",
            errors: [{
                message: '`module.exports = ` is necessary inside of contract.'
            }]
        },
    ],
});
