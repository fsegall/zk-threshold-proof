
const snarkjs = require('snarkjs');
const fs = require('fs');

async function verifyProof(proof, publicSignals) {
  const vKey = JSON.parse(fs.readFileSync('./build/verification_key.json'));
  return await snarkjs.groth16.verify(vKey, publicSignals, proof);
}

module.exports = { verifyProof };
