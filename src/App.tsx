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
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Analisador Sintático LL(1)</h1>

      <GrammarInfo />
      <ParsingTable />

      <hr />

      <div
        style={{
          margin: "20px 0",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleGenerate}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Gerar Sentença Válida
        </button>
        <input
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: a c c f"
        />
        <button
          onClick={handleParse}
          style={{
            padding: "10px",
            cursor: "pointer",
            background: "#007bff",
            color: "white",
            border: "none",
          }}
        >
          Analisar
        </button>
        <button
          onClick={handleReset}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Reiniciar
        </button>
      </div>

      {resultMsg && (
        <div
          style={{
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
            background: isSuccess ? "#d4edda" : "#f8d7da",
            color: isSuccess ? "#155724" : "#721c24",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {resultMsg}
        </div>
      )}

      <StackVisualizer steps={steps} />
    </div>
  );
}
