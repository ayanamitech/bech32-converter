const bitcoin = require('bitcoinjs-lib');
const { ECPair } = require('ecpair');

/**
  Parse string based on colon and trim the trailing colon, returns string array.
**/
const trimColon = (text) => text.toString().replace(/^(.*?):*$/, '$1').split(':');

/**
  Convert electrum style private key to bitcoin address
  @params {string} WIF private key with address prefix
  @returns {address, type}
  @example
  // returns { address: 'bc1q6u4x8490kfkn8wf4pqkr9hpvmq5sfgh89tfj8s', type: 'Bech32' }
  bech32Converter('Kzed66muwwX5gzangqgagPNsmjnXwWmWfgAgTCqdcLjM9UMq7dKF');
  // returns { address: '19TTeypgjJaKN1rGimezLbgswgj4L8Db4t', type: 'Legacy' }
  bech32Converter('p2pkh:L3vzNuqdPtVfRKKRNpmQ41dNvJ9DBNhz6A7xeyRSmhbxHDUZkGNf');
  // returns { address: '3Ju2mo7mgHgV3TDtqT3sRY1nujHhEbTFzR', type: 'Segwit' }
  bech32Converter('p2wpkh-p2sh:L4a6bAu9G46jaNAPJVcB433HekpEyzHNmgfKEnT8hYTWkyBfhrrZ');
  // returns { address: 'bc1q6u4x8490kfkn8wf4pqkr9hpvmq5sfgh89tfj8s', type: 'Bech32' }
  bech32Converter('p2wpkh:Kzed66muwwX5gzangqgagPNsmjnXwWmWfgAgTCqdcLjM9UMq7dKF');
**/
const bech32Converter = (wif) => {
  const parsePrivateKey = trimColon(wif);
  // Return bech32 address as a default prefix when prefix is not supplied
  const [ prefix, keys ] = parsePrivateKey.length === 2 ? [ parsePrivateKey[0], ECPair.fromWIF(parsePrivateKey[1]) ] : [ 'p2wpkh', ECPair.fromWIF(parsePrivateKey[0]) ];
  switch (prefix) {
  case 'p2pkh': {
    const { address } = bitcoin.payments.p2pkh({ pubkey: keys.publicKey });
    return { address, type: 'Legacy' };
  }
  case 'p2wpkh-p2sh': {
    const { address } = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2wpkh({ pubkey: keys.publicKey }),
    });
    return { address, type: 'Segwit' };
  }
  case 'p2wpkh': {
    const { address } = bitcoin.payments.p2wpkh({ pubkey: keys.publicKey });
    return { address, type: 'Bech32' };
  }
  default:
    throw new Error('Address prefix not supported');
  }
};

module.exports = bech32Converter;
