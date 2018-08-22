/**
 * @author yucopowo@gmail.com
 * See LICENSE file in root directory for full license.
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
        },
    },

    create: function (context) {
        return {
            Identifier(node) {

                const parent = node.parent;
                if(parent
                    && parent.type === 'MemberExpression'
                    && parent.object
                    && parent.object.type === 'Identifier'
                    && parent.object.name === 'LocalContractStorage'
                    && node.name !== 'LocalContractStorage') {

                    let property = node.name;
                    if( !NVM.checkLocalContractStorageApi(property) ) {

                        context.report({
                            node,
                            message: "Unexpected LocalContractStorage property {{name}}",
                            data:{
                                name: property
                            }
                        });
                    }
                }
            },
        }
    },
};
