const assert = require('assert').strict;
const bech32Converter = require('../src');

const fixtures = [
  {
    address: '19TTeypgjJaKN1rGimezLbgswgj4L8Db4t',
    wif: 'p2pkh:L3vzNuqdPtVfRKKRNpmQ41dNvJ9DBNhz6A7xeyRSmhbxHDUZkGNf',
    type: 'Legacy'
  },
  {
    address: '3Ju2mo7mgHgV3TDtqT3sRY1nujHhEbTFzR',
    wif: 'p2wpkh-p2sh:L4a6bAu9G46jaNAPJVcB433HekpEyzHNmgfKEnT8hYTWkyBfhrrZ',
    type: 'Segwit'
  },
  {
    address: 'bc1q6u4x8490kfkn8wf4pqkr9hpvmq5sfgh89tfj8s',
    wif: 'p2wpkh:Kzed66muwwX5gzangqgagPNsmjnXwWmWfgAgTCqdcLjM9UMq7dKF',
    type: 'Bech32'
  }
];

describe('bech32-converter', function () {
  function unitTest(fixtures) {
    const { address, type } = bech32Converter(fixtures.wif);
    assert.equal(address, fixtures.address);
    assert.equal(type, fixtures.type);
  }
  it('#test-all', function() {
    fixtures.forEach(f => unitTest(f));
  });
});
