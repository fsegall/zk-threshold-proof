[![npm version](https://img.shields.io/npm/v/zk-threshold-proof.svg)](https://www.npmjs.com/package/zk-threshold-proof)

# [zk-threshold-proof](https://www.npmjs.com/package/zk-threshold-proof)

🔐 A Zero-Knowledge SDK to prove that a private input is greater than or equal to a threshold — without revealing the actual value.

Built with Circom + snarkjs.

---

## 📦 Use cases

- ✅ Prove that someone is over 18 (without revealing age)
- ✅ Prove that a score is above a certain level (e.g., credit, reputation, etc.)
- ✅ Prove that your salary is above a threshold (e.g., job requirements)
- ✅ Prove you hold ≥ X tokens, reputation, experience, or time

---

## 🛠️ Features

- Groth16 zk-SNARKs
- Circom-based circuit: `privateInput >= threshold`
- Commitment hash generator (optional)
- Works locally or integrated with ZK verification services

---

## 📁 Directory structure

```
src/
├── generateProof.js      → Generates a zk proof (Groth16)
├── verifyProof.js        → Verifies the proof locally
├── hash.js               → Optional hash of publicSignals (commitment)
└── index.js              → Unified API
```

---

## 🚀 Example usage

```js
const { generateProof, verifyProof, getCommitmentHash } = require("zk-threshold-proof");

(async () => {
  const input = { score: 720, threshold: 650 };

  const { proof, publicSignals } = await generateProof(input);
  const commitment = getCommitmentHash(publicSignals);
  const isValid = await verifyProof(proof, publicSignals);

  console.log("zkCommitment:", commitment);
  console.log("Is valid:", isValid);
})();
```

> See `examples/runProof.js` for a complete runnable script.

---

## 📄 License

MIT
