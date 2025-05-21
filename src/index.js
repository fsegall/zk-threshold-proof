const { generateProof } = require("./generateProof");
const { verifyProof } = require("./verifyProof");
const { getCommitmentHash } = require("./hash");

module.exports = {
  generateProof,
  verifyProof,
  getCommitmentHash
};