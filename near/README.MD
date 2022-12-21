# Overview on NEAR
NEAR is another blockchain build from ground up, it has its own ecosystem and tooling. It used [WASM](https://webassembly.org/) (WebAssembly) as its virtual machine. It support smart contract written in JavaScript by using [QuickJS](https://bellard.org/quickjs/). My understanding is it will compile the js contracts to WASM bytecodes then it can be run on NEAR.

# My hello world experience
NEAR provides a super easy to use cli `create-near-app` to help you scaffold a basic contract that stores a text on chain with 2 methods for reading it and updating it. This cli is similar to `create-react-app` so it gives frontend / fullstack developer a sense of familiarity.

I then followed the example to write the fungible token contract which has basic property of fungible token like supply and balance map, it also supports token transfer function. However I'm not sure it completely follows NEAR's ERC20 standard (NEP141 in NEAR).

Overall I think JS contracts on NEAR is usable but more examples are needed, especially typescript examples since security is very important in smart contract programming.

# Reference
Overview on JS [SDK](https://docs.near.org/tools/near-sdk-js)

[Examples](https://github.com/near/near-sdk-js/tree/develop/examples)
