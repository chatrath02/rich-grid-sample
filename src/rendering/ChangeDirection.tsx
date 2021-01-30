import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { useGridReady } from "../hooks/useGridReady";
import "./ChangeDirection.css";

function getRowData(): any[] {
  let rowData: any[] = [];
  for (let i = 1; i <= 20; i++) {
    rowData.push({
      group: i < 5 ? "A" : "B",
      a: (i * 863) % 100,
      b: (i * 811) % 100,
      c: (i * 743) % 100,
      d: (i * 677) % 100,
      e: (i * 619) % 100,
      f: (i * 571) % 100,
    });
  }

  return rowData;
}

export function ChangeDirection() {
  const { gridReadyHandler } = useGridReady();

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ height: "700px", width: "100%" }}
    >
      <AgGridReact
        onGridReady={gridReadyHandler}
        rowData={getRowData()}
        suppressAggFuncInHeader={true}
        enableCellChangeFlash={true}
        animateRows={true}
        groupDefaultExpanded={1}
        defaultColDef={{
          flex: 1,
          sortable: true,
        }}
        columnTypes={{
          valueColumn: {
            editable: true,
            aggFunc: "sum",
            valueParser: "Number(newValue",
            filter: "agNumberColumnFilter",
          },
        }}
      >
        <AgGridColumn field="a" type="valueColumn" />
        <AgGridColumn field="b" type="valueColumn" />
        <AgGridColumn field="c" type="valueColumn" />
        <AgGridColumn field="d" type="valueColumn" />
        <AgGridColumn field="e" type="valueColumn" />
        <AgGridColumn field="f" type="valueColumn" />
        <AgGridColumn
          headerName="Total"
          valueGetter="data.a + data.b + data.c + data.d + data.e + data.f"
          editable={false}
          aggFunc="sum"
          cellClass="total-col"
        />
      </AgGridReact>
    </div>
  );
}
