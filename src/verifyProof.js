const snarkjs = require("snarkjs");
const fs = require("fs");
const path = require("path");

async function verifyProof(proof, publicSignals) {
  const vkey = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "build", "verification_key.json")));
  return snarkjs.groth16.verify(vkey, publicSignals, proof);
}

module.exports = { verifyProof };