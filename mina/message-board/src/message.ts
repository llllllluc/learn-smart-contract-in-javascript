import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
  PrivateKey,
  PublicKey,
  isReady,
  Poseidon,
  Encoding,
} from 'snarkyjs';

export { isReady, Field, Encoding };

// Wait till our SnarkyJS instance is ready
await isReady;

export const users = {
  Bob: PrivateKey.fromBase58(
    "EKFAdBGSSXrBbaCVqy4YjwWHoGEnsqYRQTqz227Eb5bzMx2bWu3F"
  ),
  SuperBob: PrivateKey.fromBase58(
    "EKEitxmNYYMCyumtKr8xi1yPpY3Bq6RZTEQsozu2gGf44cNxowmg"
  ),
  MegaBob: PrivateKey.fromBase58(
    "EKE9qUDcfqf6Gx9z6CNuuDYPe4XQQPzFBCfduck2X4PeFQJkhXtt"
  ), // This one says duck in it :)
  Jack: PrivateKey.fromBase58(
    "EKFS9v8wxyrrEGfec4HXycCC2nH7xf79PtQorLXXsut9WUrav4Nw"
  ),
}

export class Message extends SmartContract {
  @state(Field) message = State<Field>()
  @state(Field) messageHistoryHash = State<Field>()
  @state(PublicKey) user1 = State<PublicKey>()
  @state(PublicKey) user2 = State<PublicKey>()
  @state(PublicKey) user3 = State<PublicKey>()


  @method init() {
    this.user1.set(users['Bob'].toPublicKey())
    this.user2.set(users['SuperBob'].toPublicKey())
    this.user3.set(users['MegaBob'].toPublicKey())
    this.message.set(Field.zero)
    this.messageHistoryHash.set(Field.zero)
  }

  @method publishMessage(message: Field, signerPrivateKey: PrivateKey) {
    const signerPublicKey = signerPrivateKey.toPublicKey()

    const user1 = this.user1.get()
    this.user1.assertEquals(user1)

    const user2 = this.user1.get()
    this.user2.assertEquals(user2)

    const user3 = this.user1.get()
    this.user3.assertEquals(user3)

    signerPublicKey
      .equals(user1)
      .or(signerPublicKey.equals(user2))
      .or(signerPublicKey.equals(user3))
      .assertEquals(true)

    this.message.set(message)

    const oldHash = this.messageHistoryHash.get()
    this.messageHistoryHash.assertEquals(oldHash)

    const newHash = Poseidon.hash([message, oldHash])
    this.messageHistoryHash.set(newHash)
  }
}

