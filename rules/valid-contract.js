/**
 * @fileoverview Rule to control usage of module-exports.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var NVM = require('../utils/nvm/nvm');

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

        let message = null;
        try {
            message = NVM.checkContract(sourceCode.text);
        }
        catch (e) {
            message = e.message;
        }

        console.log("message:", message);

        return {
            Identifier(cnode) {

                console.log('===console.log(cnode);==');
                console.log(cnode);


                let node = cnode.parent.left;

                console.log(node);

                if( node && node.type === "MemberExpression" && node.object && node.property ) {

                    if(
                        node.object.type === "Identifier"
                        && node.object.name === "module"

                        && node.property.type === "Identifier"
                        && node.property.name === "exports"

                        && message
                    ) {
                        context.report({ node: cnode , message: message });
                    }
                }
            }
        }
    }
};
