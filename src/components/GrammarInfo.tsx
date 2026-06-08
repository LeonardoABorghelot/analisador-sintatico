import { GRAMMAR_RULES } from "../engine/grammar";

export function GrammarInfo() {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <div
        style={{
          flex: 1,
          background: "#f4f4f4",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h3>Gramática</h3>
        <ul style={{ paddingLeft: "20px" }}>
          {GRAMMAR_RULES.map((rule, idx) => (
            <li key={idx}>
              <b>{rule}</b>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          background: "#f4f4f4",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h3>Conjuntos</h3>
        <p>
          <b>FIRST:</b> S: {"{a, b}"} | A: {"{c, ε}"} | B: {"{d, e}"} | C:{" "}
          {"{f}"}
        </p>
        <p>
          <b>FOLLOW:</b> S: {"{$}"} | A: {"{f}"} | B: {"{$}"} | C: {"{$}"}
        </p>
      </div>
    </div>
  );
}
