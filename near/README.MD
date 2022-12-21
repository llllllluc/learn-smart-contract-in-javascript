# Overview on NEAR
NEAR is a layer 1 blockchain use sharding to improve scalability. It supports smart contract via WASM. So any language compiles to WASM can be support natively, that being said, RUST is the main one that's used at scale. With WASM, NEAR manages to support other VM as long as they can compile to WASM, this is how it supports EVM (Aurora) and QuickJS (javascript VM).

# Overview on JS contract on NEAR
It support smart contract written in JavaScript by using [QuickJS](https://bellard.org/quickjs/). JS contracts can be interpreted by QuickJS vm which resides in NEAR's native WASM. 

Note: JS smart contract is still new on NEAR, comparing to RUST contract which is the go to language to write smart contract on NEAR.

# My hello world experience
NEAR provides a super easy to use cli `create-near-app` to help you scaffold a basic contract that stores a text on chain with 2 methods for reading it and updating it. This cli is similar to `create-react-app` so it gives frontend / fullstack developer a sense of familiarity.

I then followed the example to write the fungible token contract which has basic property of fungible token like supply and balance map, it also supports token transfer function. However I'm not sure it completely follows NEAR's ERC20 standard (NEP141 in NEAR).

Overall I think JS contracts on NEAR is usable but more examples are needed, especially typescript examples since security is very important in smart contract programming.

Bonus point is NEAR also provides frontend codes using `create-near-app` which used `near-js-api` to interact with the contracts, which is super handy!

# Reference
Overview on JS [SDK](https://docs.near.org/tools/near-sdk-js)

[Examples](https://github.com/near/near-sdk-js/tree/develop/examples)
