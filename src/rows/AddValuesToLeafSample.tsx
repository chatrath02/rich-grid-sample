import { ColDef } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { colDefsRowGroup } from "../common/gridColDefs";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";

// https://www.youtube.com/watch?v=gzqjP_kF4NI&t=1136s

export function AddValuesToLeafSample() {
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
          headerName: "Group",
          field: "athlete",
          minWidth: 250,
        }}
        defaultColDef={defaultColDef}
        animateRows={true}
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
