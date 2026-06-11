import { useState } from "react";
import { LL1Parser, type Step } from "./engine/parser";
import { generateValidSentence } from "./engine/grammar";
import { GrammarInfo } from "./components/GrammarInfo";
import { ParsingTable } from "./components/ParsingTable";
import { StackVisualizer } from "./components/StackVisualizer";

export default function App() {
  const [input, setInput] = useState("");
  const [steps, setSteps] = useState<Step[]>([]);
  const [resultMsg, setResultMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleParse = () => {
    if (!input.trim()) return;
    const parser = new LL1Parser();
    const result = parser.parse(input);
    setSteps(result.steps);
    setResultMsg(result.message);
    setIsSuccess(result.success);
  };

  const handleGenerate = () => {
    setInput(generateValidSentence());
    setSteps([]);
    setResultMsg("");
    setIsSuccess(null);
  };

  const handleReset = () => {
    setSteps([]);
    setResultMsg("");
    setInput("");
    setIsSuccess(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "40px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#334155",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "30px 40px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#0f172a", marginBottom: "40px" }}>
          Analisador Sintático LL(1)
        </h1>

        <GrammarInfo />
        <ParsingTable />

        <hr style={{ border: "0", borderTop: "1px solid #e2e8f0", margin: "30px 0" }} />

        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleGenerate}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                color: "#475569",
                fontWeight: "600",
                transition: "all 0.2s",
              }}
            >
              Gerar Sentença Válida
            </button>
            
            <input
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "12px 16px",
                fontSize: "16px",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                outline: "none",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: a c c f"
            />
            
            <button
              onClick={handleParse}
              style={{
                padding: "12px 24px",
                cursor: "pointer",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: "600",
                boxShadow: "0 2px 4px rgba(37, 99, 235, 0.2)",
              }}
            >
              Analisar
            </button>
            
            <button
              onClick={handleReset}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                background: "#fef2f2",
                border: "1px solid #fca5a5",
                color: "#dc2626",
                borderRadius: "6px",
                fontWeight: "600",
              }}
            >
              Reiniciar
            </button>
          </div>
          
          <div style={{ marginTop: "8px", marginLeft: "4px" }}>
            <small style={{ color: "#64748b", fontSize: "14px" }}>
              <b>OBS:</b> Deve-se adicionar uma letra e após ela um "espaço" (ex: a c c f).
            </small>
          </div>
        </div>

        {resultMsg && (
          <div
            style={{
              padding: "16px",
              marginBottom: "30px",
              borderRadius: "8px",
              background: isSuccess ? "#ecfdf5" : "#fef2f2",
              color: isSuccess ? "#065f46" : "#991b1b",
              border: `1px solid ${isSuccess ? "#a7f3d0" : "#fecaca"}`,
              fontWeight: "600",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            {resultMsg}
          </div>
        )}

        <StackVisualizer steps={steps} />
      </div>
    </div>
  );
}