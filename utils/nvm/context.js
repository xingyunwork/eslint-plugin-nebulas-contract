"use strict";

var block = {
    timestamp: 0,
    height: 1,
    seed: "s",
    coinbase: 1,
    hash: 'hash'
};

var transaction = {
    hash: "hash",
    from: "from",
    to: "to",
    value: "0",
    nonce: 1,
    timestamp: 0,
    gasPrice: "0",
    gasLimit: "0"
};

var state = function() {
};

module.exports = {
    block: block,
    transaction: transaction,
    state: state
};