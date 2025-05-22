
# 📜 Changelog — zk-threshold-proof

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.2.0] — 2025-05-22
### ✨ Added
- New `zkRegistry` module for ZKVerify network integration.
- Functions:
  - `registerCircuit()` — Register circuits on ZKVerify.
  - `deployCircuit()` — Deploy circuits to ZKVerify testnet.
  - `verifyProofOnline()` — Verify proofs via ZKVerify API.
- Example script `examples/registryExample.js`.

### 📝 Documentation
- README.md updated with ZKVerify usage examples.
- Added `.gitignore` with artifacts and sensitive files filtered.

---

## [0.1.0] — 2025-05-20
### 🚀 Initial Release
- Generate zero-knowledge threshold proofs (value >= threshold) using Circom and SnarkJS.
- Verify proofs locally.
- Generate commitment hashes.
- Example script `examples/runProof.js`.

---
