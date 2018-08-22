"use strict";

var extend = require('extend');
var t = require('./util/t');
// var native, {BigNumber, Blockchain, LocalContractStorage, Event} = require("./native");
var native = require("./native");
var BigNumber = native.BigNumber,
    Blockchain = native.Blockchain,
    LocalContractStorage = native.LocalContractStorage,
    Event = native.Event,
    Uint = native.Uint;

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
        'Event',
        'Uint'

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
            Event,
            Uint
        ]);

    return module.exports;
}

var NVM = function (block, transaction) {
    // extend(native.context.block, block);
    // extend(native.context.transaction, transaction);
    // console.log("block:", native.context.block);
    // console.log("tx:", native.context.transaction);
};

NVM.checkContract = function (source) {

    const Contract = compiler(source);

    if(Contract === null){
        return null;
    }

    if(typeof Contract !== 'function' || !Contract.prototype){
        return 'Contract must be a Prototype Object or Class in JavaScript or TypeScript.';
    }

    if(!Contract.prototype.init){
        return 'A Contract must include an init function.';
    }

    return null;
};

NVM.checkInit = function (source) {
    const Contract = compiler(source);
    return Contract.prototype.hasOwnProperty('init');
};





NVM.checkBlockchain = function (dotSeparatedKeys) {
    Blockchain.blockParse(JSON.stringify(native.context.block));
    Blockchain.transactionParse(JSON.stringify(native.context.transaction));
    // const hasProperty = Blockchain.hasOwnProperty(method);
    // return hasProperty?hasProperty:!!Blockchain[method];
    return t(Blockchain, dotSeparatedKeys).isDefined;
};

NVM.checkLocalContractStorageApi = function (dotSeparatedKeys) {
    return t(LocalContractStorage, dotSeparatedKeys).isDefined;
};

NVM.checkEventApi = function (dotSeparatedKeys) {
    return t(Event, dotSeparatedKeys).isDefined;
};


NVM.prototype = {
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
