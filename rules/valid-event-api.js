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
                    && parent.object.name === 'Event'
                    && node.name !== 'Event') {

                    let property = node.name;
                    if( !NVM.checkEventApi(property) ) {

                        context.report({
                            node,
                            message: "Unexpected Event property {{name}}",
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
