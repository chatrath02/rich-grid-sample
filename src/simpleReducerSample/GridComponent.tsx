import { AgGridReact } from "ag-grid-react";
import React, { useContext } from "react";
import { useGridReady } from "../hooks/useGridReady";
import { AppContext } from "./store";

function GridComponent() {
  const { gridReadyHandler } = useGridReady();
  const { state } = useContext(AppContext);
  const { rowData, columnDefs } = state;

  return (
    <div
      style={{ height: "400px", width: "100%", marginTop: 15 }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={gridReadyHandler}
        defaultColDef={{ resizable: true, sortable: true, width: 120 }}
      />
    </div>
  );
}

export const GridComponentMemoized = React.memo(GridComponent);
