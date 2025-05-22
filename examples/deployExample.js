
const {
  registerCircuit,
  deployCircuit,
  verifyProofOnline
} = require('zk-threshold-proof');

require('dotenv').config();

(async () => {
  const apiKey = process.env.ZKVERIFY_API_KEY;
  if (!apiKey) {
    console.error('❌ API Key not set in .env file');
    process.exit(1);
  }

  const circuit = await registerCircuit({
    apiKey,
    name: "threshold-proof-circuit",
    description: "Threshold proof circuit for demonstrating zk-threshold-proof",
    verificationKeyPath: "./build/verification_key.json"
  });

  await deployCircuit({ apiKey, circuitId: circuit.id });

  const result = await verifyProofOnline({
    apiKey,
    circuitId: circuit.id,
    proof: {},           
    publicSignals: []    
  });

  console.log('✅ Online verification result:', result);
})();
