# Usage Examples

## ✅ Local Proof Generation

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

## 🚀 Register and Deploy Circuit on ZKVerify

```javascript
const { registerCircuit, deployCircuit } = require('zk-threshold-proof');
require('dotenv').config();

(async () => {
  const apiKey = process.env.ZKVERIFY_API_KEY;

  const circuit = await registerCircuit({
    apiKey,
    name: 'threshold-check',
    description: 'Check if score >= threshold',
    verificationKeyPath: './build/verification_key.json'
  });

  console.log('Circuit registered:', circuit);

  await deployCircuit({ apiKey, circuitId: circuit.id });
  console.log('Circuit deployed successfully');
})();
```

## 🌐 Verify Proof Online

```javascript
const { verifyProofOnline } = require('zk-threshold-proof');

(async () => {
  const result = await verifyProofOnline({
    apiKey: process.env.ZKVERIFY_API_KEY,
    circuitId: 'YOUR_CIRCUIT_ID',
    proof: {}, 
    publicSignals: [] 
  });

  console.log('Online proof valid?', result.valid);
})();
```