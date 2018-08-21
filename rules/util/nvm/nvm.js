"use strict";

// var extend = require('extend');
// var native, {BigNumber, Blockchain, LocalContractStorage, Event} = require("./native");
var native = require("./native");

var BigNumber = native.BigNumber,
    Blockchain = native.Blockchain,
    LocalContractStorage = native.LocalContractStorage,
    Event = native.Event;

var funcRegex = new RegExp("^[a-zA-Z$][A-Za-z0-9_$]*$");

function compiler(source) {
    const module = {
        exports: null
    };

    const context = {

    };

    (new Function(

        'require',
        'module',
        'BigNumber',
        'Blockchain',
        'LocalContractStorage',
        'Event'

        , source)).apply(context,
        [
            function __require__() {
                return {

                }
            },
            module,
            BigNumber,
            Blockchain,
            LocalContractStorage,
            Event
        ]);

    return module.exports;
}

var NVM = function (block, transaction) {
    // extend(native.context.block, block);
    // extend(native.context.transaction, transaction);
    // console.log("block:", native.context.block);
    // console.log("tx:", native.context.transaction);
};

NVM.prototype = {
    checkInit(source) {
        const Contract = compiler(source);
        return Contract.prototype.hasOwnProperty('init');
    },
    deploy: function(source, args) {
        return this.run(source, "init", args);
    },
    call: function(source, func, args) {
        if (funcRegex.test(func)) {
            return this.run(source, func, args);
        } else {
            throw new Error("invalid func");
        }
    },
    run: function(source, func, args) {

        // Blockchain.blockParse(JSON.stringify(native.context.block));
        // Blockchain.transactionParse(JSON.stringify(native.context.transaction));

        const Contract = compiler(source);
        var contract = new Contract();
        if (args === undefined || args.length === 0) {
            args = "[]";
        }
        if (contract[func] != undefined) {
            return contract[func].apply(contract, JSON.parse(args));
        } else {
            throw new Error("function not found");
        }

    }
};

module.exports = NVM;
