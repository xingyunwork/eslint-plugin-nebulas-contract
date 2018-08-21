# The Blockchain API check is provided.

Blockchain API:

    // current block 
    Blockchain.block;
    
    // current transaction, transaction's value/gasPrice/gasLimit auto change to BigNumber object
    Blockchain.transaction;
    
    // transfer NAS from contract to address
    Blockchain.transfer(address, value);
    
    // verify address
    Blockchain.verifyAddress(address);
    
    // get accout state
    Blockchain.getAccountState(address);
    
    // get previous block's hash
    Blockchain.getPreBlockHash(offset);
    
    // get previous block's random seed
    Blockchain.getPreBlockSeed(offset);

### Fail

```js
Blockchain.block.nonce
Blockchain.transfer1(address, value);
```

### Pass

```js
Blockchain.block.coinbase
Blockchain.block.hash
Blockchain.block.height

Blockchain.transaction.from
Blockchain.transaction.to
Blockchain.transaction.value
Blockchain.transaction.nonce
Blockchain.transaction.hash

var result = Blockchain.transfer(address, value);
var result = Blockchain.verifyAddress(address);
var state = Blockchain.getAccountState(address);
var hash = Blockchain.getPreBlockHash(offset);
var seed = Blockchain.getPreBlockSeed(offset);

```