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


                // if( node.type === 'Identifier'
                //     && node.object.name === 'Event') {
                // }

            },

            /*MemberExpression(node) {

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




            },*/
        }
    },
};
