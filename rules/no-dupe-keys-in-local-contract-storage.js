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

function isLocalContractStorageDefine(node) {
    if( node.type === 'CallExpression' ) {

        if( node.callee && node.callee.type === 'MemberExpression'

            && node.callee.object.type === 'Identifier'
            && node.callee.object.name === 'LocalContractStorage'

            && node.callee.property.type === 'Identifier'
        ) {

            if(node.callee.property.name === 'defineProperty' || node.callee.property.name === 'defineMapProperty'){
                return true;
            }

            if(node.callee.property.name === 'defineProperties' || node.callee.property.name === 'defineMapProperties'){

                if(node.arguments[1].type === 'ObjectExpression') {
                    return true;
                }

            }
        }
    }
    return false;
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

        var keys = {};

        return {

            CallExpression(node) {
                if( !isLocalContractStorageDefine(node) ){
                    return;
                }

                if(!node.arguments || node.arguments.length < 2 ){
                    return
                }

                const propertyName = node.callee.property.name;

                if(propertyName === 'defineProperty' || propertyName === 'defineMapProperty') {
                    const key = node.arguments[1].value;
                    if(keys[key] && keys[key] === propertyName ){

                        context.report({
                            node: node.arguments[1],
                            message: "disallow duplicate keys in LocalContractStorage.",
                            data:{
                                name: key
                            }
                        });

                    }
                    else{
                        keys[key] = propertyName;
                    }

                }


                if(propertyName === 'defineProperties' || propertyName === 'defineMapProperties') {

                    const properties = node.arguments[1].properties;

                    // const keys = {};

                    properties.forEach(function (property) {

                        if( keys[property.key.name] ){

                            context.report({
                                node: property,
                                message: "disallow duplicate keys in LocalContractStorage.",
                                data:{
                                    name: property.key.name
                                }
                            });

                        }
                        else{
                            keys[property.key.name] = propertyName;
                        }

                    });

                }
            }

        }
    },
};
