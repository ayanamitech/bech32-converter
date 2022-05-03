# Bech32 Converter - Bitcoin address converter

[![Build Status](https://github.com/ayanamitech/bech32-converter/actions/workflows/build.yml/badge.svg)](https://github.com/ayanamitech/bech32-converter/actions)
[![NPM Package Version](https://img.shields.io/npm/v/@ayanamitech/bech32-converter.svg)](https://npmjs.org/package/@ayanamitech/bech32-converter)
[![NPM Package Downloads](https://img.shields.io/npm/dm/@ayanamitech/bech32-converter.svg)](https://npmjs.org/package/@ayanamitech/bech32-converter)
[![Known Vulnerabilities](https://snyk.io/test/github/ayanamitech/bech32-converter/badge.svg?style=flat-square)](https://snyk.io/test/github/ayanamitech/bech32-converter)
[![GitHub Views](https://img.shields.io/badge/dynamic/json?color=green&label=Views&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/bech32-converter/views.json?raw=True&logo=github)](https://github.com/ayanamitech/bech32-converter)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/bech32-converter/clone.json?raw=True&logo=github)](https://github.com/ayanamitech/bech32-converter)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Convert Electrum compatible Private key to bitcoin address with prefix

## Install

```bash
$ npm i -g bech32-converter
```

## Usage

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
