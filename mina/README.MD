# Overview on JS contract on Mina
Mina is another blockchain built from ground up with a focus on privacy. It used zero knowledge to enable users keep their data off chain and only submit the zk proof on chain, for example: user can submit the zk proof of a sudoku solution on chain, then public can know whether user solved the sudoku by verifying the zk proof, without knowing the actual solution. 

Therefore Mina smart contracts are different from other blockchains. 
1. Storage is divided into 2 parts, on chain part and off chain part.
2. Because of the existence of off chain part, developers need to do extract validation in contracts. 
3. Since smart contracts are run off chain, gas fee is small because it's only for verification.

Similar to Algorand's PyTeal, Mina provides a library called [SnarkyJS](https://github.com/o1-labs/snarkyjs/) to help you write contracts in TypeScript.

# My hello world experience
Mina provides an easy to use cli for you to scaffold a zk app. I tried the example app which is a sudoku and followed the [tutorial](https://docs.minaprotocol.com/en/zkapps/simple-anonymous-message-board-tutorial) to create my own anonymous message board app.

Both the example and message board apps are easy to understand and easy to deploy to testnet. Overall it's a fun experience!

But zkapp is not mainnet ready yet, so we can only deploy them to testnet. And there aren't much ERC20 like token standards so it's a little hard to do what people usually do with blockchain: DeFi! And more examples on cross contracts call would be nice.

# Reference
[Overview](https://docs.minaprotocol.com/en/zkapps) on writing a zk app.
