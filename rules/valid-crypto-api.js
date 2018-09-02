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

function getModuleName(statements) {
    let moduleName = null;

    for (let i = 0; i < statements.length; i++) {
        const statement = statements[i];
        if(  statement.type === "VariableDeclaration" ){
            const declarations = statement.declarations;

            for (let j = 0; j < declarations.length; j++) {

                const declaration = declarations[j];

                if( declaration.type === 'VariableDeclarator'
                    && declaration.init && declaration.init.type === 'CallExpression'
                    && declaration.init.callee.type === 'Identifier'
                    && declaration.init.callee.name === 'require'

                    && declaration.init.arguments
                    && declaration.init.arguments.length > 0
                    && (
                        declaration.init.arguments[0].value === 'crypto.js' ||
                        declaration.init.arguments[0].value === 'crypto'
                    )
                ) {

                    moduleName = declaration.id.name;
                    break;

                }

            }

        }
    }

    return moduleName;
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

        let moduleName = null;

        return {
            'Program': function(node) {
                moduleName = getModuleName(node.body);
                console.log('======moduleName=======');
                console.log(moduleName);
            },
            MemberExpression(node) {

                if(!moduleName){
                    return;
                }

                if(node && node.object && node.property
                    && node.object.type === 'Identifier'
                    && node.object.name === moduleName

                    && node.property.type === 'Identifier'
                ){

                    if(!(
                        node.property.name === 'sha256' ||
                        node.property.name === 'sha3256' ||
                        node.property.name === 'ripemd160' ||
                        node.property.name === 'md5' ||
                        node.property.name === 'base64' ||
                        node.property.name === 'recoverAddress'
                    )){
                        context.report({
                            node: node.property,
                            message: "Unexpected {{moduleName}} property {{name}}",
                            data:{
                                moduleName: moduleName,
                                name: node.property.name
                            }
                        });
                    }
                }

            },
        }
    },
};
