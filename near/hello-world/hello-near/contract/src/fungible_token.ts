import {
  NearBindgen,
  call,
  view,
  initialize,
  near,
  LookupMap,
  assert,
} from 'near-sdk-js'

@NearBindgen({ requireInit: true })
class FungibleToken {
  accounts: LookupMap
  totalSupply: string

  constructor() {
    this.accounts = new LookupMap('a')
    this.totalSupply = '0'
  }

  @initialize({})
  init({ prefix, totalSupply }) {
    this.accounts = new LookupMap(prefix)
    this.totalSupply = totalSupply
    this.accounts.set(near.signerAccountId(), this.totalSupply)
  }

  internalDeposit({ accountId, amount }) {
    let balance = this.accounts.get(accountId) || BigInt(0)
    let newBalance = BigInt(balance) + BigInt(amount)
    this.accounts.set(accountId, newBalance.toString())

    let newSupply = (BigInt(this.totalSupply) + BigInt(amount)).toString()
    this.totalSupply = newSupply.toString()
  }

  internalWithdraw({ accountId, amount }) {
    let balance = this.accounts.get(accountId) || BigInt(0)
    let newBalance = BigInt(balance) - BigInt(amount)
    assert(newBalance >= 0n, 'Not enough balance')
    this.accounts.set(accountId, newBalance.toString())

    let newSupply = BigInt(this.totalSupply) - BigInt(amount)
    assert(newSupply >= 0n, 'Total supply overflow')
    this.totalSupply = newSupply.toString()
  }

  internalTransfer({ senderId, receiverId, amount, memo }) {
    assert(senderId != receiverId, 'sender and receiver need to be different')
    let amountInt = BigInt(amount)
    assert(amountInt > 0n, 'send amount need to positive')
    this.internalWithdraw({ accountId: senderId, amount })
    this.internalDeposit({ accountId: receiverId, amount })
  }

  @call({})
  ftTransfer({ receiverId, amount, memo }) {
    let senderId = near.predecessorAccountId()
    this.internalTransfer({ senderId, receiverId, amount, memo })
  }

  @call({})
  ftTransferCall({ receiverId, amount, memo, msg }) {
    let senderId = near.predecessorAccountId()
    this.internalTransfer({ senderId, receiverId, amount, memo })
    const promise = near.promiseBatchCreate(receiverId)
    const params = {
      senderId: senderId,
      amount: amount,
      msg: msg,
      receiverId: receiverId,
    }
    const gas = 30000000000000
    near.promiseBatchActionFunctionCall(
      promise,
      'ftOnTransfer',
      JSON.stringify(params),
      0,
      gas,
    )
    return near.promiseReturn(promise)
  }

  @view({})
  ftTotalSupply() {
    return this.totalSupply
  }

  @view({})
  ftBalanceOf({ accountId }) {
    return this.accounts.get(accountId) || '0'
  }
}
