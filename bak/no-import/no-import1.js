import importType from './importType'

function isStaticRequire(node) {
    return node &&
        node.callee &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'require' &&
        node.arguments.length === 1 &&
        node.arguments[0].type === 'Literal' &&
        typeof node.arguments[0].value === 'string'
}

function reportIfMissing(context, node, allowed, name) {
    if (allowed.indexOf(name) === -1 && importType(name, context) === 'builtin') {
        context.report(node, 'Do not import Node.js builtin module "' + name + '"')
    }
}

module.exports = {
    meta: {
        docs: {
        },
    },

    create: function (context) {
        const options = context.options[0] || {}
        const allowed = options.allow || []

        return {
            ImportDeclaration: function handleImports(node) {
                reportIfMissing(context, node, allowed, node.source.value)
            },
            CallExpression: function handleRequires(node) {
                if (isStaticRequire(node)) {
                    reportIfMissing(context, node, allowed, node.arguments[0].value)
                }
            },
        }
    },
}
