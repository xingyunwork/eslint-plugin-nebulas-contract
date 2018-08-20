/**
 * @fileoverview Tests for no-import rule.
 * @author yucopowo@gmail.com
 */

"use strict";

module.exports = {
    create: function(context) {
        return {
            "ImportDeclaration": function(node) {
                context.report({
                    node: node,
                    message: "Unexpected import."
                });
            }
        };
    }
};
