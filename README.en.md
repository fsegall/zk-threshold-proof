[![npm version](https://img.shields.io/npm/v/zk-threshold-proof.svg)](https://www.npmjs.com/package/zk-threshold-proof)

# zk-threshold-proof

🔐 A lightweight Zero-Knowledge SDK to prove that a private value is greater than or equal to a threshold — without revealing the actual value.

Built using Circom and snarkjs, this SDK is suitable for decentralized applications that require selective disclosure with strong privacy guarantees.

---

## 🌐 Example Use Cases

- ✅ Prove someone is over 18 without revealing age
- ✅ Prove a credit score is above a threshold
- ✅ Prove a salary meets a minimum requirement
- ✅ Prove token holdings or time-based criteria (e.g., staking period)

---

## ⚙️ Features

- ✅ Groth16 ZK-SNARKs
- ✅ Circom-based logic: `input ≥ threshold`
- ✅ Optional commitment hash generation
- ✅ Can be integrated with ZKVerify or used offline

---

## 📁 File Structure

```
src/
├── generateProof.js      // Create a ZK proof
├── verifyProof.js        // Verify proof using vkey
├── hash.js               // Hash publicSignals as commitment
└── index.js              // Exports SDK methods
```

---

## 🧪 Example Usage

```js
const { generateProof, verifyProof, getCommitmentHash } = require("zk-threshold-proof");

(async () => {
  const { proof, publicSignals } = await generateProof({ score: 720, threshold: 650 });
  const commitment = getCommitmentHash(publicSignals);
  const valid = await verifyProof(proof, publicSignals);

  console.log("Commitment hash:", commitment);
  console.log("Proof valid:", valid);
})();
```

See `examples/runProof.js` for a full working demo.

---

## 📄 License

MIT — Free for personal and commercial use.
