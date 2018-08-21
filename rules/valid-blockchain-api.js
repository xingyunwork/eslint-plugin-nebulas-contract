/**
 * @author yucopowo@gmail.com
 * See LICENSE file in root directory for full license.
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var NVM = require('./util/nvm/nvm');

// var getModuleExports  = require('./util/util').getModuleExports;
//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

function isDefined(properties) {
    return NVM.checkBlockchain(properties.join('.'));
}

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

                const properties = [];

                if(node.object
                    && node.object.type === 'Identifier'
                    && node.object.name === 'Blockchain') {

                    if(node.property
                        && node.property.type === 'Identifier') {

                        properties.push(node.property.name);
                        if(!node.computed){

                            let parent = node.parent;
                            if(parent
                                && parent.property
                                && parent.property.type === 'Identifier'){
                                properties.push(parent.property.name);
                            }

                        }


                    }


                }

                if(properties.length > 0 && !isDefined(properties)) {

                    context.report({
                        node,
                        message: "Unexpected Blockchain property {{name}}",
                        data:{
                            name: properties.join('.')
                        }
                    });

                }

            },
        }
    },
}
