export function ParsingTable() {
  return (
    <div style={{ overflowX: "auto", marginBottom: "30px" }}>
      <h3 style={{ color: "#0f172a", marginBottom: "15px" }}>Tabela de Parsing M[A, a]</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "15px",
          background: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ background: "#1e293b", color: "#ffffff" }}>
          <tr>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>NT \ T</th>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>a</th>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>b</th>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>c</th>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>d</th>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>e</th>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>f</th>
            <th style={{ padding: "12px", border: "1px solid #334155" }}>$</th>
          </tr>
        </thead>
        <tbody style={{ color: "#334155" }}>
          {[
            { nt: "S", rules: ["S → a A C", "S → b B", "", "", "", "", ""] },
            { nt: "A", rules: ["", "", "A → c A", "", "", "A → ε", ""] },
            { nt: "B", rules: ["", "", "", "B → d B", "B → e C", "", ""] },
            { nt: "C", rules: ["", "", "", "", "", "C → f", ""] },
          ].map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "10px", borderRight: "1px solid #e2e8f0", background: "#f8fafc", fontWeight: "bold" }}>
                {row.nt}
              </td>
              {row.rules.map((rule, j) => (
                <td key={j} style={{ padding: "10px", borderRight: "1px solid #e2e8f0" }}>
                  {rule}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}