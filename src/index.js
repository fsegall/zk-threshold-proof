
const { generateProof } = require("./generateProof");
const { verifyProof } = require("./verifyProof");
const { getCommitmentHash } = require("./hash");

const {
  registerCircuit,
  deployCircuit,
  verifyProofOnline
} = require('./zkRegistry');

module.exports = {
  // 🔢 Core proof functions
  generateProof,
  verifyProof,
  getCommitmentHash,

  // 🌐 ZKVerify Network functions
  registerCircuit,
  deployCircuit,
  verifyProofOnline
};
