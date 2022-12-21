# Overview on Agoric
Agoric is a layer 1 blockchain built using the cosmos / tendermint stack. Meaning it use tendermint as consensus, cosmos sdk for basic functionalities like staking, governance, etc. Agoric provides smart contract by implementing a cosmos sdk module for its JS vm, similar to cosmwasm which is a cosmos sdk provides WASM and ethermint which provides EVM.

# Overview on JS contract on Agoric
Although it's JS but it's pretty different from regular js. Agoric use a subset of JS with its library, together it's called harden JS. Which can be seen as JS tuned for blockchain like what node does to JS for the backend.

Writing JS contract involves lots of Agoric lib in many expressions, which has a pretty high learning curve in my opinion. 

# My hello world experience
Similar to others, Agoric has a cli that can create a template contract which is a fungible token (like ERC20) on Agoric, it also scaffold the frontend that can use sdk to interact with the on chain contract.

One interesting thing in development is unlike other chains, Agoric requires you to have a local process (now is a docker container) running and this process serve as the proxy talking to either devnet / localnet. This thing also has a UI which all dapp kinda need to gain permission on the UI. I found this thing very clumsy and cannot work smoothly. Although Agoric said they will include it with popular wallet providers like Keplr when this launches in mainnet. Oh that's right, now Agoric doesn't support smart contract in mainnet, it's still in devnet.

Also the doc seems to not be up to dated, I wasn't able to follow it to deploy the contract without errors.

As a VM built from ground up, it's understandable to have issues, but it does need more work to make it production ready, both on tooling and docs.

# Reference
[Docs](https://docs.agoric.com/)
