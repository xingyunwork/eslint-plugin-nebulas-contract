const BigNumber = require("bignumber.js");

function LocalContractStorage() {

}
LocalContractStorage.prototype = {
    rawGet: function (key) {
    },
    rawSet: function (key, value) {
    },
    del: function (key) {
    },
    get: function (key) {
    },
    set: function (key, value) {
    },
    defineProperty: function (obj, fieldName, descriptor) {
    },
    defineProperties: function (obj, props) {
    },
    defineMapProperty: function (obj, fieldName, descriptor) {
    },
    defineMapProperties: function (obj, props) {
    }
};



var Blockchain = function () {
};
Blockchain.prototype = {
    AccountAddress: 0x57,
    ContractAddress: 0x58,
    blockParse: function (str) {
    },
    transactionParse: function (str) {
    },
    transfer: function (address, value) {
    },
    verifyAddress: function (address) {
    }
};

var Event = function () {
};
Event.prototype = {
    Trigger: function (topic, data) {
    }
};





var funcRegex = new RegExp("^[a-zA-Z$][A-Za-z0-9_$]*$");

function NVM() {



}

function compiler(source) {
    const module = {
        exports: null
    };

    const context = {

    };

    (new Function(

        'module',
        'BigNumber',
        'LocalContractStorage',
        'Event'

        , source)).apply(context,
        [
            module,
            BigNumber,
            LocalContractStorage,
            Event
        ]);

    return module.exports;
}

NVM.prototype = {

    checkInit(source) {

        const Contract = compiler(source);

        return Contract.prototype.hasOwnProperty('init');

    }

};

module.exports = NVM;

