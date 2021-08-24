## Crypto-Transfer-QR

这是一个用于生成带有转账金额的加密货币地址QR的程序。

<!-- [![Build Status](https://travis-ci.org/hayatoVTA/crypto-transfer-qr.svg?branch=main)](https://travis-ci.org/hayatoVTA/crypto-transfer-qr)
[![GitHub license](https://img.shields.io/github/license/hayatoVTA/rpncc.svg)](https://github.com/hayatoVTA/crypto-transfer-qr) -->
[![npm](https://img.shields.io/npm/v/crypto-transfer-qr.svg)](https://npmjs.com/package/crypto-transfer-qr)
![npm](https://img.shields.io/npm/dt/crypto-transfer-qr)
![NPM](https://img.shields.io/npm/l/crypto-transfer-qr)

### 捐献

支持本软件基金会!

ETH: 0xF1c51266886c539Bd3e613ff17DBBDF653ae151e

### 安装


```bash
$ npm i crypto-transfer-qr
```

And install dependency packages.

```bash
$ npm i qrcode.react
```

### 例子

一个简单的程序来生成加密传输QRC代码。
(默认值是在Matic(Polygon)主网上发送1000日元到 "0xF1c51266886c539Bd3e613ff17DBBDF653ae151e")

```javascript
// import this package
import CryptoTransferQR from "crypto-transfer-qr";

const App = () => {
  return <CryptoTransferQR />;
};

export default App;
```

### 财产

设置选项如下。

:警告。在添加选项时，如果连一个都没有，就会出现错误。

这个程序是在以太坊主网上发送100美元到 "0xF1c51266886c539Bd3e613ff17DBBDF653ae151e"

```javascript
<CryptoTransferQR 
  contract="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  chain="1"
  to="0xF1c51266886c539Bd3e613ff17DBBDF653ae151e"
  amount={100}
  decimals="6"
/>
```

属性|类型|默认值
----------|----------------------|--------------
`contract` | `string` | `'0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c'` !
`链'| `string`| `'1'`。
`to`|`string`|`'0xF1c51266886c539Bd3e613ff17DBBDF653ae151e'`。
`decimals` | `string` | `'18'`
`数额`| `number`| `1000`。
`renderAs`| `string` (`'canvas' 'svg'`) | `'canvas'`。
`大小'| `number'| `200`。
`bgColor` | `string` (CSS颜色) | `'#FFFFFF'`。
`fgColor` | `string` (CSS颜色) | `'#000000'`。
`level` | `string` (`'L' 'M' 'Q' 'H') | `'L'`)
`includeMargin`|`boolean`|`false`。

### 更多

|  Network Name  |  Chain Id  |
| ---- | ---- |
|  Ethereum Mainnet  |  1 |
|  Binance Smart Chain Mainnet  |  56  |
|  Matic(Polygon) Mainnet  |  137  |
|  xDAI Chain  |  100  |

参考: <a href="https://chainlist.org/" target="_blank">https://chainlist.org/</a>

### 信息

灵感来自 https://github.com/Nuko973663/jpycpayqr/

### 许可证

本软件在MIT许可下发布，见LICENSE.txt。
