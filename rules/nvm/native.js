

const _global= {};

// if (typeof window !== "undefined") {
//     _global = window;
// }

if (typeof localStorage === "undefined" || localStorage === null) {
    var path = require("path");
    var storageFile = path.join(__dirname, "./.storage");
    var LocalStorage = require('node-localstorage').LocalStorage;
    _global.localStorage = new LocalStorage(storageFile);
}

_global.context = require("./context");
_global._native_blockchain = require("./native/blockchain");
_global._native_log = require("./native/log");
_global._native_event_trigger = require("./native/event");
_global._native_storage_handlers = require("./native/storage").handlers;
_global.NativeStorage = require("./native/storage").NativeStorage;

_global.nativeConsole = _global.console;
_global.console = require("./libs/console");
_global.ContractStorage = require("./libs/storage");
_global.LocalContractStorage = _global.ContractStorage.lcs;
// _global._globalContractStorage = ContractStorage.gcs;
_global.BigNumber = require("bignumber.js");
_global.Blockchain = require("./libs/blockchain");
_global.Event = require("./libs/event");

// _global.Date = require('./libs/date');
// _global.Math.random = require('./libs/random');
// _global.BigNumber.random = _global.Math.random;

module.exports = {
    context: _global.context
};

