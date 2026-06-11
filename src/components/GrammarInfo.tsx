import { GRAMMAR_RULES } from "../engine/grammar";

export function GrammarInfo() {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
      <div
        style={{
          flex: 1,
          minWidth: "250px",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#0f172a", borderBottom: "2px solid #cbd5e1", paddingBottom: "10px" }}>
          Gramática
        </h3>
        <ul style={{ paddingLeft: "20px", margin: 0, color: "#334155" }}>
          {GRAMMAR_RULES.map((rule, idx) => (
            <li key={idx} style={{ marginBottom: "6px", fontFamily: "monospace", fontSize: "15px" }}>
              <b>{rule}</b>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "250px",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#0f172a", borderBottom: "2px solid #cbd5e1", paddingBottom: "10px" }}>
          Conjuntos FIRST e FOLLOW
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#334155" }}>
          <p style={{ margin: 0 }}>
            <b style={{ color: "#2563eb" }}>FIRST:</b> S: {"{a, b}"} | A: {"{c, ε}"} | B: {"{d, e}"} | C: {"{f}"}
          </p>
          <p style={{ margin: 0 }}>
            <b style={{ color: "#16a34a" }}>FOLLOW:</b> S: {"{$}"} | A: {"{f}"} | B: {"{$}"} | C: {"{$}"}
          </p>
        </div>
      </div>
    </div>
  );
}