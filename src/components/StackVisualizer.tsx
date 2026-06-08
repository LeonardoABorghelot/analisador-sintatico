import { type Step } from "../engine/parser";

interface StackVisualizerProps {
  steps: Step[];
}

export function StackVisualizer({ steps }: StackVisualizerProps) {
  if (steps.length === 0) return null;

  return (
    <div>
      <h3>Passos da Pilha</h3>
      <table
        border={1}
        cellPadding={8}
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "monospace",
        }}
      >
        <thead style={{ background: "#eee" }}>
          <tr>
            <th style={{ textAlign: "left" }}>Pilha</th>
            <th style={{ textAlign: "left" }}>Entrada Restante</th>
            <th style={{ textAlign: "left" }}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step, idx) => (
            <tr key={idx}>
              <td>{step.stack.join(" ")}</td>
              <td>{step.input}</td>
              <td>{step.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
