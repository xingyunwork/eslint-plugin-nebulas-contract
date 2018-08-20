function isRequire(node) {
    return node &&
        node.callee &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'require' &&
        node.arguments.length >= 1
}

function isAvailableLib(arg) {
    return arg.type === 'Literal' && arg.value === 'crypto.js';
}

module.exports = {
    meta: {
        docs: {
        },
    },

    create: function (context) {
        return {
            CallExpression(node) {
                if (isRequire(node) && !isAvailableLib(node.arguments[0]) ) {
                    context.report({
                        node,
                        message: 'Available libraries are crypto.js',
                    })
                }
            },
        }
    },
}
