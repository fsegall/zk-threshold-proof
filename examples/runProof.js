const { generateProof, verifyProof, getCommitmentHash } = require("../src");

(async () => {
  try {
    const input = { score: 720, threshold: 650 };

    console.log("⏳ Gerando prova para:", input);
    const { proof, publicSignals } = await generateProof(input);

    console.log("✅ Prova gerada com sucesso!");
    console.log("📊 publicSignals:", publicSignals);

    const commitment = getCommitmentHash(publicSignals);
    console.log("🔐 zkCommitment Hash:", commitment);

    const valid = await verifyProof(proof, publicSignals);
    console.log("🔎 Verificação da prova:", valid ? "✅ Válida" : "❌ Inválida");
  } catch (err) {
    console.error("❌ Erro:", err);
  }
})();