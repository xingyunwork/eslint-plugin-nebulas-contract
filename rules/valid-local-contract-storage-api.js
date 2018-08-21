/**
 * @author yucopowo@gmail.com
 * See LICENSE file in root directory for full license.
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var NVM = require('../utils/nvm/nvm');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------


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

                // find LocalContractStorage.defineProperties arguments ObjectExpression







            },
        }
    },
};
