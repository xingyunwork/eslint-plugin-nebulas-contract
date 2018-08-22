/**
 * @fileoverview Rule to control usage of module-exports.
 * @author yucopowo@gmail.com
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

function getModuleExports(statements) {
    const directives = [];

    for (let i = statements.length - 1; i >=0; i--) {
        const statement = statements[i];
        if(  statement.type === "ExpressionStatement"
            && statement.expression.type === "AssignmentExpression"
            && statement.expression.operator === "="
            && statement.expression.left.type === "MemberExpression"
            && statement.expression.left.object.type === "Identifier" && statement.expression.left.object.name === "module"
            && statement.expression.left.property.type === "Identifier" && statement.expression.left.property.name === "exports"

        ){
            directives[i] = statement;
            break;
        }
    }

    return directives;
}

function getLastLocation(sourceCode) {
    if( !sourceCode.lines || sourceCode.lines.length === 0 ){
        return {
            column: 0,
            line: 0
        }
    }
    let lastLine = sourceCode.lines.slice(-1);
    return {
        column: lastLine.length>0?lastLine[0].length:0,
        line: sourceCode.lines.length
    };
}
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
        const sourceCode = context.getSourceCode();
        const src = sourceCode.getText();

        if (!src.length) {
            return;
        }

        const location = getLastLocation(sourceCode);
        return {
            'Program': function(node) {
                const directives = getModuleExports(node.body);
                if (node.body.length > 0 && directives.length === 0) {
                    context.report({
                        node,
                        loc: location,
                        message: '`module.exports = ` is necessary inside of contract.'
                    });
                }
            }
        }
    }
};
