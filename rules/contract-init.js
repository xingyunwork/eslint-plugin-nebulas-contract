/**
 * @fileoverview Rule to control usage of module-exports.
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const { NVM } = require('nebulas');
const NVM = require('./util/nvm');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            url: ""
        },

        schema: [
        ],

        fixable: "code"
    },

    create(context) {
        var sourceCode = context.getSourceCode();


        var nvm = new NVM();
        let message = null;
        if( !nvm.checkInit(sourceCode.text) ){
            message = 'smart contract code must have an init() method.'
        }




        return {
            Program(node) {

                // message = (function () {
                //
                //     var module = {
                //         exports: null
                //     };
                //
                //     new Function('module', sourceCode.text).apply({},
                //         [
                //             module
                //         ]);
                //
                //     return typeof module.exports;
                // })();

                if(message){
                    context.report({ node, message: message });
                }

                // context.report({ node, message: sourceCode });
                // context.report({ node, message: 'smart contract code must have an init() method.' });

            }
        }
    }
};
