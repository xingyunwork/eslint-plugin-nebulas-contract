/**
 * @fileoverview Tests for only-commonjs rule.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("./only-commonjs");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

// ruleTester.run("only-commonjs", rule, {
//     valid: [
//         { code: "import x from 'x'", parserOptions: { sourceType: 'module' } },
//     ],
//     invalid: [
//
//         {   code: 'var x = require("x")',
//             errors: [
//                 { message: 'Expected "import" instead of "require()"' }
//             ]
//         },
//
//
//
//         // {
//         //     code: "var crypto = require('crypto.js');",
//         //     errors: [{
//         //         message: 'Expected "import" instead of "require()"',
//         //         // type: "CallExpression",
//         //     }],
//         // }
//     ],
// });


const EXPORT_MESSAGE = 'Expected "export" or "export default"'
    , IMPORT_MESSAGE = 'Expected "import" instead of "require()"'

ruleTester.run('no-commonjs', rule, {
    valid: [

        // imports
        { code: 'import "x";', parserOptions: { sourceType: 'module' } },
        { code: 'import x from "x"', parserOptions: { sourceType: 'module' } },
        { code: 'import x from "x"', parserOptions: { sourceType: 'module' } },
        { code: 'import { x } from "x"', parserOptions: { sourceType: 'module' } },

        // exports
        { code: 'export default "x"', parserOptions: { sourceType: 'module' } },
        { code: 'export function house() {}', parserOptions: { sourceType: 'module' } },
        {
            code:
                'function someFunc() {\n'+
                '  const exports = someComputation();\n'+
                '\n'+
                '  expect(exports.someProp).toEqual({ a: \'value\' });\n'+
                '}',
            parserOptions: { sourceType: 'module' },
        },

        // allowed requires
        { code: 'function a() { var x = require("y"); }' }, // nested requires allowed
        { code: 'var a = c && require("b")' }, // conditional requires allowed
        { code: 'require.resolve("help")' }, // methods of require are allowed
        { code: 'require.ensure([])' }, // webpack specific require.ensure is allowed
        { code: 'require([], function(a, b, c) {})' }, // AMD require is allowed
        { code: "var bar = require('./bar', true);" },
        { code: "var bar = proxyquire('./bar');" },
        { code: "var bar = require('./ba' + 'r');" },
        { code: 'var zero = require(0);' },
        { code: 'require("x")', options: [{ allowRequire: true }] },

        { code: 'module.exports = function () {}', options: ['allow-primitive-modules'] },
        { code: 'module.exports = function () {}', options: [{ allowPrimitiveModules: true }] },
        { code: 'module.exports = "foo"', options: ['allow-primitive-modules'] },
        { code: 'module.exports = "foo"', options: [{ allowPrimitiveModules: true }] },
    ],

    invalid: [

        // imports
        { code: 'var x = require("x")', errors: [ { message: IMPORT_MESSAGE }] },
        { code: 'require("x")', errors: [ { message: IMPORT_MESSAGE }] },

        // exports
        { code: 'exports.face = "palm"', errors: [ { message: EXPORT_MESSAGE }] },
        { code: 'module.exports.face = "palm"', errors: [ { message: EXPORT_MESSAGE }] },
        { code: 'module.exports = face', errors: [ { message: EXPORT_MESSAGE }] },
        { code: 'exports = module.exports = {}', errors: [ { message: EXPORT_MESSAGE }] },
        { code: 'var x = module.exports = {}', errors: [ { message: EXPORT_MESSAGE }] },
        { code: 'module.exports = {}',
            options: ['allow-primitive-modules'],
            errors: [ { message: EXPORT_MESSAGE }],
        },
        { code: 'var x = module.exports',
            options: ['allow-primitive-modules'],
            errors: [ { message: EXPORT_MESSAGE }],
        },
    ],
})
