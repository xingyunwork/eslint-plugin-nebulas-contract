/**
 * @fileoverview Rule to control usage of module-exports.
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var NVM = require('./util/nvm/nvm');

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

                if(message){
                    context.report({ node, message: message });
                }

            }
        }
    }
};
