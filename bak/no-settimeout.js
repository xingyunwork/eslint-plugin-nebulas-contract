module.exports = {
    create: function (context) {
        var emberVarName = null
        var runVarName = null

        return {
            /**
             * Determine if setTimeout is being used
             * @example `import Ember from 'ember'; setTimeout(() => {}, 100)`
             * @param {ESLintNode} node - call expression node
             */
            CallExpression: function (node) {
                if (!emberVarName || node.callee.name !== 'setTimeout') {
                    return
                }

                var methodCall = (runVarName || emberVarName + '.run') + '.later'
                var argsPlusCloseParen = this.getSourceCode().getText().slice(node.callee.end + 1, node.end)

                context.report({
                    fix: function (fixer) {
                        return fixer.replaceText(node, methodCall + '(this, ' + argsPlusCloseParen)
                    },
                    message: 'Use ' + methodCall + ' instead of setTimeout',
                    node: node
                })
            },

            /**
             * Get Ember variable name from import statement
             * @example `import Ember from 'ember'` would yield "Ember"
             * @example `import Foo from 'ember'` would yield "Foo"
             * @param {ESLintNode} node - import declaration node
             */
            ImportDeclaration: function (node) {
                if (node.source.value === 'ember') {
                    emberVarName = node.specifiers[0].local.name
                }
            },

            /**
             * Determine if run has been destructured or not
             * @param {ESLintNode} node - variable declarator node
             */
            VariableDeclarator: function (node) {
                if (
                    node.id.type === 'ObjectPattern' &&
                    node.init.name === emberVarName &&
                    node.id.properties.length !== 0
                ) {
                    node.id.properties.forEach(function (property) {
                        if (property.key.name === 'run') {
                            runVarName = property.value.name
                        }
                    })
                }
            }
        }
    },
    meta: {
        deprecated: false,
        docs: {
            category: 'Possible Errors',
            description: 'Prevent usage of setTimeout',
            recommended: true
        },
        fixable: 'code'
    }
}
