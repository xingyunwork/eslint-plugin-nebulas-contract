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
            MemberExpression(node) {

                // find LocalContractStorage.defineProperties arguments ObjectExpression

                if(node.object
                    && node.object.type === 'Identifier'
                    && node.object.name === 'Event') {

                    if(node.property
                        && node.property.type === 'Identifier') {

                        let property = node.property.name;
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


                }




            },
        }
    },
};
