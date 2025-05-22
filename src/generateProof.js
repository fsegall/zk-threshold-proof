
const snarkjs = require('snarkjs');
const fs = require('fs');

async function generateProof(input) {
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    input,
    './build/credit_score_js/credit_score.wasm',
    './build/credit_score.zkey'
  );
  return { proof, publicSignals };
}

module.exports = { generateProof };
