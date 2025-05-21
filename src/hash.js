const crypto = require("crypto");

function getCommitmentHash(publicSignals) {
  const raw = publicSignals.join("|");
  return "0x" + crypto.createHash("sha256").update(raw).digest("hex");
}

module.exports = { getCommitmentHash };