# API Reference

## `generateProof(input)`
Generates a ZK proof that asserts whether `input.score >= input.threshold` without revealing the actual score.

## `verifyProof(proof, publicSignals)`
Verifies a proof locally.

## `getCommitmentHash(publicSignals)`
Computes a SHA-256 hash (commitment) of the publicSignals.

## ZKVerify Network Functions

### `registerCircuit({ apiKey, name, description, verificationKeyPath })`
Registers a circuit with ZKVerify.

### `deployCircuit({ apiKey, circuitId })`
Deploys the registered circuit to the ZKVerify testnet.

### `verifyProofOnline({ apiKey, circuitId, proof, publicSignals })`
Verifies a proof using ZKVerify’s API.