/**
 * @fileoverview Tests for contract-init rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/contract-init.js");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("contract-init", rule, {
    valid: [
        `
var TestContract = function(){} 
console.log(1);
module.exports = TestContract;
        `
        // "var TestContract = function(){};TestContract.prototype.init = function(){};module.exports = TestContract;",
    ],
    invalid: [

    ],
});
