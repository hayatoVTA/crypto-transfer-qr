# Crypto-Transfer-QR

This is a program for generate QR of crypto address with transfer amount.

<!-- [![Build Status](https://travis-ci.org/hayatoVTA/crypto-transfer-qr.svg?branch=main)](https://travis-ci.org/hayatoVTA/crypto-transfer-qr)
[![GitHub license](https://img.shields.io/github/license/hayatoVTA/rpncc.svg)](https://github.com/hayatoVTA/crypto-transfer-qr) -->
[![npm](https://img.shields.io/npm/v/crypto-transfer-qr.svg)](https://npmjs.com/package/crypto-transfer-qr)
![npm](https://img.shields.io/npm/dt/crypto-transfer-qr)
![NPM](https://img.shields.io/npm/l/crypto-transfer-qr)

## Donation

Support the This Software Foundation!

ETH: 0xF1c51266886c539Bd3e613ff17DBBDF653ae151e

## Install

```bash
$ npm i crypto-transfer-qr
```

And install dependency packages.

```bash
$ npm i qrcode.react
```

## Example

A simple program to Generate Crypto Transfer QRCode.
(The default value is to send 1000 JPYC on the Matic(Polygon) Mainnet into "0xF1c51266886c539Bd3e613ff17DBBDF653ae151e")

```javascript
// import this package
import CryptoTransferQR from "crypto-transfer-qr";

const App = () => {
  return <CryptoTransferQR />;
};

export default App;
```

## Options

Set the options as follows.

:warning: When adding an option, an error will occur if even one is missing.

This program is to send 100 USDC on the Ethereum Mainnet into "0xF1c51266886c539Bd3e613ff17DBBDF653ae151e"

```javascript
<CryptoTransferQR 
  contract="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  chain="1",
  to="0xF1c51266886c539Bd3e613ff17DBBDF653ae151e",
  amount={100},
  decimals="6",
/>
```

|  options  |  format  |
| ---- | ---- |
|  contract  |  string |
|  chain  |  string  |
|  to  |  string  |
|  decimals  |  string  |
|  amount  |  number  |

## More

|  Network Name  |  Chain Id  |
| ---- | ---- |
|  Ethereum Mainnet  |  1 |
|  Binance Smart Chain Mainnet  |  56  |
|  Matic(Polygon) Mainnet  |  137  |
|  xDAI Chain  |  100  |

reference: <a href="https://chainlist.org/" target="_blank">https://chainlist.org/</a>

## License

This software is released under the MIT License, see LICENSE.txt.
