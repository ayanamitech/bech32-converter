#!/usr/bin/env node
const bech32Converter = require('./src');
const process = require('process');

const ConverterCLI = () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('USAGE');
    console.log('  $ bech32 <electrum-wif-key>','\n');
    console.log('DESCRIPTION');
    console.log('  Convert Electrum compatible Private key to bitcoin address with prefix','\n');
    console.log('EXAMPLES');
    console.log('  $ bech32 Kzed66muwwX5gzangqgagPNsmjnXwWmWfgAgTCqdcLjM9UMq7dKF');
    console.log('  Bech32 Address: bc1q6u4x8490kfkn8wf4pqkr9hpvmq5sfgh89tfj8s','\n');
    console.log('  $ bech32 p2pkh:L3vzNuqdPtVfRKKRNpmQ41dNvJ9DBNhz6A7xeyRSmhbxHDUZkGNf');
    console.log('  Legacy Address: 19TTeypgjJaKN1rGimezLbgswgj4L8Db4t','\n');
    console.log('  $ bech32 p2wpkh-p2sh:L4a6bAu9G46jaNAPJVcB433HekpEyzHNmgfKEnT8hYTWkyBfhrrZ');
    console.log('  Segwit Address: 3Ju2mo7mgHgV3TDtqT3sRY1nujHhEbTFzR','\n');
    console.log('  $ bech32 p2wpkh:Kzed66muwwX5gzangqgagPNsmjnXwWmWfgAgTCqdcLjM9UMq7dKF');
    console.log('  Bech32 Address: bc1q6u4x8490kfkn8wf4pqkr9hpvmq5sfgh89tfj8s','\n');
    return;
  }
  const { address, type } = bech32Converter(args[0]);
  console.log(type, 'Address:', address);
};

ConverterCLI();
