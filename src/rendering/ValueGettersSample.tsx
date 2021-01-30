import { ValueGetterParams } from "ag-grid-community";
import { AgGridColumn } from "ag-grid-react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import React from "react";
import { useGridReady } from "../hooks/useGridReady";

/// https://www.ag-grid.com/javascript-grid-value-getters/

function createRowData(): any[] {
  let rowData = [];
  for (let i = 0; i < 100; ++i) {
    rowData.push({
      a: Math.floor(i % 4),
      b: Math.floor(i % 7),
    });
  }
  return rowData;
}

// value getters
const hashValueGetter = (params: ValueGetterParams): any => {
  return params.node.rowIndex;
};
export function ValueGettersSample() {
  const { gridReadyHandler } = useGridReady();
  return (
    <div className="ag-theme-alpine" style={{ height: "700px", width: "100%" }}>
      <AgGridReact
        onGridReady={gridReadyHandler}
        rowData={createRowData()}
        defaultColDef={{
          flex: 1,
          minWidth: 75,
        }}
      >
        <AgGridColumn
          headerName="#"
          maxWidth={100}
          valueGetter={hashValueGetter}
        />
        <AgGridColumn field="a" />
        <AgGridColumn field="b" />
        <AgGridColumn
          headerName="a + b"
          colId="a+b"
          valueGetter={(p) => p.data.a + p.data.b}
        />
        <AgGridColumn
          headerName="a * 1000"
          minWidth={90}
          valueGetter={(p) => 1000 * p.data.a}
        />
      </AgGridReact>
    </div>
  );
}
