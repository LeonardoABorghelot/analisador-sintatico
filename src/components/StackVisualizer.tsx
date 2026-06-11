import { type Step } from "../engine/parser";

interface StackVisualizerProps {
  steps: Step[];
}

export function StackVisualizer({ steps }: StackVisualizerProps) {
  if (steps.length === 0) return null;

  return (
    <div style={{ overflowX: "auto" }}>
      <h3 style={{ color: "#0f172a", borderBottom: "2px solid #cbd5e1", paddingBottom: "10px" }}>
        Passos de Execução da Pilha
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "monospace",
          fontSize: "14px",
          marginTop: "15px",
        }}
      >
        <thead style={{ background: "#f1f5f9", color: "#475569" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #cbd5e1" }}>Pilha</th>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #cbd5e1" }}>Entrada Restante</th>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #cbd5e1" }}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step, idx) => (
            <tr key={idx} style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "12px", color: "#2563eb", fontWeight: "bold" }}>
                {step.stack.join(" ")}
              </td>
              <td style={{ padding: "12px", color: "#16a34a" }}>
                {step.input}
              </td>
              <td style={{ padding: "12px", color: "#475569" }}>
                {step.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}