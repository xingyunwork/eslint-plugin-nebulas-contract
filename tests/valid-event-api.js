/**
 * @fileoverview Tests for Event rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/valid-event-api");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();



ruleTester.run("valid-event-api", rule, {
    valid: [
        "Event.Trigger('transfer', {Transfer: {from: Blockchain.transaction.from, to: Blockchain.transaction.to, value: Blockchain.transaction.value,}});",
    ],
    invalid: [

        {
            code: "Event.trigger('transfer', {});",
            errors: [{
                message: 'Unexpected Event property trigger',
                type: "MemberExpression"
            }]
        }

    ],
});


