
const fs = require('fs');
const fetch = require('node-fetch');

async function registerCircuit({ apiKey, name, description, verificationKeyPath }) {
  const verificationKey = fs.readFileSync(verificationKeyPath, 'utf-8');

  const response = await fetch('https://testnet.api.zkverify.com/circuits', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      verificationKey,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Failed to register circuit: ${err}`);
  }

  const data = await response.json();
  return data;
}

async function deployCircuit({ apiKey, circuitId }) {
  const response = await fetch(`https://testnet.api.zkverify.com/circuits/${circuitId}/deploy`, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Failed to deploy circuit: ${err}`);
  }

  const data = await response.json();
  return data;
}

async function verifyProofOnline({ apiKey, circuitId, proof, publicSignals }) {
  const response = await fetch(`https://testnet.api.zkverify.com/circuits/${circuitId}/verify`, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ proof, publicSignals }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Failed to verify proof online: ${err}`);
  }

  const data = await response.json();
  return data;
}

module.exports = {
  registerCircuit,
  deployCircuit,
  verifyProofOnline,
};
