[![npm version](https://img.shields.io/npm/v/zk-threshold-proof.svg)](https://www.npmjs.com/package/zk-threshold-proof)

# zk-threshold-proof

A lightweight SDK to generate and verify zero-knowledge proofs that assert a private value is greater than or equal to a threshold without revealing the actual value.

## 🚀 Features
- Generate proofs locally
- Verify proofs locally
- Create commitment hashes
- Register circuits on ZKVerify
- Deploy circuits to ZKVerify testnet
- Verify proofs online via ZKVerify API

## 📦 Install
```bash
npm install zk-threshold-proof
```

## 🔧 Basic Usage

### Generate and verify proof locally
```javascript
const { generateProof, verifyProof, getCommitmentHash } = require('zk-threshold-proof');

(async () => {
  const { proof, publicSignals } = await generateProof({ score: 720, threshold: 650 });
  const isValid = await verifyProof(proof, publicSignals);
  console.log('Proof valid?', isValid);

  const commitment = getCommitmentHash(publicSignals);
  console.log('Commitment hash:', commitment);
})();
```

## 🌐 ZKVerify Network Integration

### Register, deploy, and verify proofs online
```javascript
const {
  registerCircuit,
  deployCircuit,
  verifyProofOnline
} = require('zk-threshold-proof');

(async () => {
  const apiKey = process.env.ZKVERIFY_API_KEY;

  const circuit = await registerCircuit({
    apiKey,
    name: "credit-score-check",
    description: "Check if score >= threshold",
    verificationKeyPath: "./build/verification_key.json"
  });

  await deployCircuit({ apiKey, circuitId: circuit.id });

  const result = await verifyProofOnline({
    apiKey,
    circuitId: circuit.id,
    proof: {},           // Your generated proof
    publicSignals: []    // Your public signals
  });

  console.log('Proof verified online:', result);
})();
```

## 🛡️ License
MIT License

## 📧 Contact
**Livre Soluções de Software** — contato@livresoltech.com
