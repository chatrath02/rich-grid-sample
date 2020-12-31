import { ColDef } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { colDefsRowGroup } from "../common/gridColDefs";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";

function strcmp(a: any, b: any) {
  return a < b ? -1 : a > b ? 1 : 0;
}

export function MultiGroupSample() {
  const rowData = useFetchOlympicWinnersSmall();
  const { gridReadyHandler } = useGridReady();
  const defaultColDef: ColDef = {
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  };

  return (
    <div
      id="myGrid"
      style={{
        height: "600px",
        width: "100%",
      }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        rowData={rowData}
        onGridReady={gridReadyHandler}
        autoGroupColumnDef={{
          minWidth: 100,
          cellRendererParams: {
            suppressCount: true,
          },
          comparator: (a, b) => {
            if (a == null || b == null) return a - b;
            if (!a.substring || !b.substring) return a - b;
            if (a.length < 1 || b.length < 1) return a - b;
            return strcmp(a.substring(0, a.length), b.substring(0, b.length));
          },
        }}
        defaultColDef={defaultColDef}
        animateRows={true}
        enableRangeSelection={true}
        groupMultiAutoColumn={true}
      >
        {colDefsRowGroup.map((col) => (
          <AgGridColumn
            {...col}
            key={col.field}
            hide={
              col.field === "country" || col.field === "year" ? true : false
            }
          />
        ))}
      </AgGridReact>
    </div>
  );
}
