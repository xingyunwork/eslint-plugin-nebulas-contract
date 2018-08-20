/**
 * @fileoverview Rule to control usage of module-exports.
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const { NVM } = require('nebulas');
const NVM = require('./nvm/nvm');

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

        var block = {
            timestamp: 0,
            height: 1
        };

        var transaction = {
            hash: "2933836c3a56ddd789464c7bd3fd92bdb1c974ac62f7b38a34bc48eb33679f52",
            from: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
            to: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
            value: "10",
            nonce: 1,
            timestamp: 1527077193,
            gasPrice: "1000000",
            gasLimit: "20000"
        };

        var nvm = new NVM(block, transaction);
        // console.log("contract:", smartContract);
        let message = '===';
        try {
            message = nvm.deploy(sourceCode, "[]") + '';

        }
        catch (e){
            message = e;
        }
        // console.log("deploy:", deploy);
        //
        // var result = nvm.call(smartContract, "save", "[1]");
        // console.log("call:", result);

        if( message === 'function not found' ){
            message = 'smart contract code must have an init() method.'
        }

        return {
            Program(node) {

                context.report({ node, message: message });

                // context.report({ node, message: sourceCode });
                // context.report({ node, message: 'smart contract code must have an init() method.' });

            }
        }
    }
};
