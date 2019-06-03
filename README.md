# Bitcore

**Infrastructure to build DeVault and blockchain-based applications for the next generation of financial technology.**

## Getting Started

### Requirements

- Trusted P2P Peer
- MongoDB Server >= v3.4

### Checkout the repo

```sh
git clone git@github.com:devaultcrypto/bitcore-dvt.git
git checkout master
npm install
```

## Setup Guide

### 1. Setup Bitcore config

<details>
<summary>Example bitcore.config.json</summary>
<br>

```json
{
  "bitcoreNode": {
    "services": {
      "api": {
      }
    },
    "chains": {
      "DVT": {
        "testnet": {
          "chainSource": "p2p",
          "trustedPeers": [
            {
              "host": "localhost",
              "port": 39039
            }
          ],
          "rpc": {
            "host": "localhost",
            "port": 13339,
            "username": "username",
            "password": "password"
          }
        }
      }
    }
  }
}
```

</details>

### 2. Setup DeVault Node

<details>
<summary>Example DeVault Mainnet Config</summary>

```sh
whitelist=127.0.0.1
txindex=0
listen=1
server=1
irc=1
upnp=1

# Make sure port & rpcport matches the
# bitcore.config.json ports

# network prefix
[main]

rpcallowip=127.0.0.1

rpcuser=username
rpcpassword=password
```

</details>

### 3. Run DeVault node

<details>
<summary>Example Starting a DeVault Node</summary>

```sh
# Path to your devault application and path to the config above
/Applications/DeVault-Qt.app/Contents/MacOS/DeVault-Qt -datadir=/Users/username/blockchains/devault/networks/mainnet/
```

</details>

### 4. Start Bitcore

```sh
npm run node
```

## Applications

- [Bitcore Node](packages/bitcore-node) - A full node with extended capabilities using DeVault Core
- [Bitcore Wallet](packages/bitcore-wallet) - A command-line based wallet client
- [Bitcore Wallet Client](packages/bitcore-wallet-client) - A client for the wallet service
- [Bitcore Wallet Service](packages/bitcore-wallet-service) - A multisig HD service for wallets
- [Insight](packages/insight-previous) - A blockchain explorer web user interface

## Libraries

- [Bitcore Lib](packages/bitcore-lib) - A pure and powerful JavaScript Bitcoin library
- [Bitcore Lib DVT](packages/bitcore-lib-dvt) - A pure and powerful JavaScript DeVault library
- [Bitcore Mnemonic](packages/bitcore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Bitcore P2P](packages/bitcore-p2p) - The peer-to-peer networking protocol for BTC
- [Bitcore P2P DVT](packages/bitcore-p2p-dvt) - The peer-to-peer networking protocol for DVT
- [Crypto Wallet Core](packages/crypto-wallet-core) - A coin-agnostic wallet library for creating transactions, signing, and address derivation

## Extras

- [Bitcore Build](packages/bitcore-build) - A helper to add tasks to gulp
- [Bitcore Client](packages/bitcore-client) - A helper to create a wallet using the bitcore-v8 infrastructure

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/Contributing.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

