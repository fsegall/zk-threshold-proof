const snarkjs = require("snarkjs");
const fs = require("fs");
const path = require("path");

async function generateProof({ score, threshold }) {
  const input = { score: String(score), threshold: String(threshold) };

  const wasmPath = path.join(__dirname, "..", "build", "credit_score_js", "credit_score.wasm");
  const zkeyPath = path.join(__dirname, "..", "build", "credit_score.zkey");

  const wc = require("../build/credit_score_js/witness_calculator.js");
  const buffer = fs.readFileSync(wasmPath);
  const witnessCalculator = await wc(builder => builder(buffer));
  const witness = await witnessCalculator.calculateWTNSBin(input, 0);

  const { proof, publicSignals } = await snarkjs.groth16.prove(zkeyPath, witness);
  return { proof, publicSignals };
}

module.exports = { generateProof };