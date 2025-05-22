# How ZK Works

This package uses Groth16 proofs with Circom circuits.

The circuit checks whether a private `score` is greater than or equal to a public `threshold`, without revealing the actual score.

ZKVerify is used to register circuits and verify proofs on-chain or via their API.