/**
 * @fileoverview Rule to control usage of module-exports.
 * @author Brandon Mills
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

        var nvm = new NVM();
        let message = null;

        try {
            if( !nvm.checkInit(sourceCode.text) ){
                message = 'smart contract code must have an init() method.'
            }
        }
        catch (e) {

        }

        let moduleExportsName = '';
        /*Program(node) {
                moduleExportsName = getModuleExports(node.body)
            },
            VariableDeclarator(node) {


                if(message && moduleExportsName == ){
                    context.report({ node, message: message });
                }
            }

            MemberExpression(node) {

                if(
                    node.object.type === "Identifier"
                    && node.object.name === "module"

                    && node.property.type === "Identifier"
                    && node.property.name === "exports"

                    && message
                ) {
                    context.report({ node: node.parent , message: message });
                }
            }
        */

        return {
            Identifier(cnode) {
                let node = cnode.parent.left;

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
