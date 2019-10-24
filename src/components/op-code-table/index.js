import InstructionCell from "../instruction-cell";

const OpCodeTable = ({ opCodesGrid, caption }) => (
  <table className="op-code-table">
    <caption>{ caption }</caption>
    <tbody>
      <tr>
        <td></td>
        {
          Array(16).fill('').map((value, index) => (
            <th scope="col" key={`x${index.toString()}`}>{`x${index.toString(16).toUpperCase()}`}</th>
          ))
        }
      </tr>
      {
        opCodesGrid.map((gridRow, rowIndex) => (
          <tr key={`${rowIndex.toString(16)}x`}>
            <th scope="row">{`${rowIndex.toString(16).toUpperCase()}x`}</th>
            {
              gridRow.map((gridCell, columnIndex) => {
                const cellKey = `${rowIndex}${columnIndex}`;
                const doesCellContainInstruction = typeof(gridCell) === "object";

                if (doesCellContainInstruction) {
                  return (
                    <InstructionCell
                      key={cellKey}
                      instruction={gridCell}
                    />
                  );
                } else {
                  return (
                    <td key={cellKey} className="instruction"></td>
                  );
                }
              })
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default OpCodeTable;