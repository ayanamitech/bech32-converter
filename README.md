# Bech32 Converter - Bitcoin address converter

[![Build Status](https://github.com/ayanamitech/bech32-converter/actions/workflows/build.yml/badge.svg)](https://github.com/ayanamitech/bech32-converter/actions)
[![NPM Package Version](https://img.shields.io/npm/v/bech32-converter.svg)](https://npmjs.org/package/bech32-converter)
[![NPM Package Downloads](https://img.shields.io/npm/dm/bech32-converter.svg)](https://npmjs.org/package/bech32-converter)
[![Known Vulnerabilities](https://snyk.io/test/github/ayanamitech/bech32-converter/badge.svg?style=flat-square)](https://snyk.io/test/github/ayanamitech/bech32-converter)
[![GitHub Views](https://img.shields.io/badge/dynamic/json?color=green&label=Views&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/bech32-converter/views.json?raw=True&logo=github)](https://github.com/ayanamitech/bech32-converter)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/bech32-converter/clone.json?raw=True&logo=github)](https://github.com/ayanamitech/bech32-converter)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Convert Electrum compatible Private key to bitcoin address with prefix

## Install

```bash
# For CLI
$ npm i -g bech32-converter

# To import as a commonjs library
$ npm i --save bech32-converter
```

## Browser

You can import `bech32-converter` using jsDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/npm/bech32-converter@latest"></script>
```

Or you could alternatively use UNPKG CDN as well

```html
<script src="https://unpkg.com/bech32-converter@latest"></script>
```

## Usage

### Node.js (As a CLI)

```bash
$ npm i -g bech32-converter
```

```bash
$ bech32

USAGE
  $ bech32 <electrum-wif-key>

DESCRIPTION
  Convert Electrum compatible WIF key to bitcoin address with prefix

EXAMPLES
  $ bech32 Kzed66muwwX5gzangqgagPNsmjnXwWmWfgAgTCqdcLjM9UMq7dKF
  Bech32 Address: bc1q6u4x8490kfkn8wf4pqkr9hpvmq5sfgh89tfj8s

  $ bech32 p2pkh:L3vzNuqdPtVfRKKRNpmQ41dNvJ9DBNhz6A7xeyRSmhbxHDUZkGNf
  Legacy Address: 19TTeypgjJaKN1rGimezLbgswgj4L8Db4t

  $ bech32 p2wpkh-p2sh:L4a6bAu9G46jaNAPJVcB433HekpEyzHNmgfKEnT8hYTWkyBfhrrZ
  Segwit Address: 3Ju2mo7mgHgV3TDtqT3sRY1nujHhEbTFzR

  $ bech32 p2wpkh:Kzed66muwwX5gzangqgagPNsmjnXwWmWfgAgTCqdcLjM9UMq7dKF
  Bech32 Address: bc1q6u4x8490kfkn8wf4pqkr9hpvmq5sfgh89tfj8s
```

### Node.js (As a library)

```bash
$ npm i --save bech32-converter
```

```js
const bech32Converter = require('bech32-converter');

const test = bech32Converter('p2pkh:L3vzNuqdPtVfRKKRNpmQ41dNvJ9DBNhz6A7xeyRSmhbxHDUZkGNf');

// Will return "Legacy Address: 19TTeypgjJaKN1rGimezLbgswgj4L8Db4t"
console.log(test);
```

### Browser

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/bech32-converter@latest"></script>
  </head>
  <body>
    <h2>Result</h2><pre id="result-query">Waiting for data</pre><br>
    <script>
      const init = () => {
        const example = bech32Converter('p2pkh:L3vzNuqdPtVfRKKRNpmQ41dNvJ9DBNhz6A7xeyRSmhbxHDUZkGNf');
        document.getElementById("result-query").textContent = JSON.stringify(example, undefined, 2);
      };
      init();
    </script>
  </body>
</html>
```

### TO-DO

- [] Optimise library, minify the size for browser build
- [] Support WASM enabled ecpair@^2 version (Check webpack support again)
