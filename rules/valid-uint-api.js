/**
 * @author yucopowo@gmail.com
 * See LICENSE file in root directory for full license.
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
        },
    },

    create: function (context) {
        return {
            MemberExpression(node) {

                if(node && node.object && node.property
                    && node.object.type === 'Identifier'
                    && node.object.name === 'Uint'

                    && node.property.type === 'Identifier'
                ){

                    if(!(
                        node.property.name === 'Uint64' ||
                        node.property.name === 'Uint128' ||
                        node.property.name === 'Uint256' ||
                        node.property.name === 'Uint512'
                    )){
                        context.report({
                            node: node.property,
                            message: "Unexpected Uint property {{name}}",
                            data:{
                                name: node.property.name
                            }
                        });
                    }
                }

            },
        }
    },
};
