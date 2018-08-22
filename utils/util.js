module.exports = {

    getModuleExports: function getModuleExports(statements) {
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
    },

    /**
     * Gets the property name of a given node.
     * The node can be a MemberExpression, a Property, or a MethodDefinition.
     *
     * If the name is dynamic, this returns `null`.
     *
     * For examples:
     *
     *     a.b           // => "b"
     *     a["b"]        // => "b"
     *     a['b']        // => "b"
     *     a[`b`]        // => "b"
     *     a[100]        // => "100"
     *     a[b]          // => null
     *     a["a" + "b"]  // => null
     *     a[tag`b`]     // => null
     *     a[`${b}`]     // => null
     *
     *     let a = {b: 1}            // => "b"
     *     let a = {["b"]: 1}        // => "b"
     *     let a = {['b']: 1}        // => "b"
     *     let a = {[`b`]: 1}        // => "b"
     *     let a = {[100]: 1}        // => "100"
     *     let a = {[b]: 1}          // => null
     *     let a = {["a" + "b"]: 1}  // => null
     *     let a = {[tag`b`]: 1}     // => null
     *     let a = {[`${b}`]: 1}     // => null
     *
     * @param {ASTNode} node - The node to get.
     * @returns {string|null} The property name if static. Otherwise, null.
     */
    getStaticPropertyName(node) {
        let prop;

        switch (node && node.type) {
            case "Property":
            case "MethodDefinition":
                prop = node.key;
                break;

            case "MemberExpression":
                prop = node.property;
                break;

            // no default
        }

        switch (prop && prop.type) {
            case "Literal":
                return String(prop.value);

            case "TemplateLiteral":
                if (prop.expressions.length === 0 && prop.quasis.length === 1) {
                    return prop.quasis[0].value.cooked;
                }
                break;

            case "Identifier":
                if (!node.computed) {
                    return prop.name;
                }
                break;

            // no default
        }

        return null;
    },

};
