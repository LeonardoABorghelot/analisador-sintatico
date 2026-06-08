export function ParsingTable() {
  return (
    <div style={{ overflowX: "auto", marginBottom: "20px" }}>
      <h3>Tabela de Parsing M[A, a]</h3>
      <table
        border={1}
        cellPadding={8}
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ background: "#ddd" }}>
          <tr>
            <th>NT \ T</th> <th>a</th> <th>b</th> <th>c</th> <th>d</th>{" "}
            <th>e</th> <th>f</th> <th>$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>S</b>
            </td>
            <td>S &rarr; a A C</td>
            <td>S &rarr; b B</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <b>A</b>
            </td>
            <td></td>
            <td></td>
            <td>A &rarr; c A</td>
            <td></td>
            <td></td>
            <td>A &rarr; ε</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <b>B</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>B &rarr; d B</td>
            <td>B &rarr; e C</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <b>C</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>C &rarr; f</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
