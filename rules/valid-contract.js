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
        let sourceCode = context.getSourceCode();

        let message = null;
        try {
            message = NVM.checkContract(sourceCode.text);
        }
        catch (e) {
            message = e.message;
        }

        return {

            AssignmentExpression(node) {

                if(!message){
                    return;
                }

                if( node.operator && node.operator === '='

                    && node.left
                    && node.left.type === 'MemberExpression'

                    && node.left.object
                    && node.left.object.type === 'Identifier'
                    && node.left.object.name === 'module'

                    && node.left.property
                    && node.left.property.type === 'Identifier'
                    && node.left.property.name === 'exports'

                ) {
                    context.report({ node: node.right , message: message });
                }
            }

        }
    }
};
