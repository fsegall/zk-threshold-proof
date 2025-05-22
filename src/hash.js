
const crypto = require('crypto');

function getCommitmentHash(publicSignals) {
  const hash = crypto.createHash('sha256');
  const data = publicSignals.join(',');
  hash.update(data);
  return '0x' + hash.digest('hex');
}

module.exports = { getCommitmentHash };
