///https://www.ag-grid.com/javascript-grid-column-state/

/*
Demo :

- column stateful attributes

*/
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";

export function ColumnStateSample() {
  const { gridReadyHandler, gridColumnApi } = useGridReady();
  const rowData = useFetchOlympicWinnersSmall();
  const saveState = () => {
    if (gridColumnApi) {
      // @ts-ignore
      window.colState = gridColumnApi.getColumnState();
      console.log("Column States", gridColumnApi.getColumnState());
    }
  };
  const restoreState = () => {
    // @ts-ignore
    if (gridColumnApi && window.colState) {
      gridColumnApi.applyColumnState({
        // @ts-ignore
        state: window.colState,
        applyOrder: true,
      });
    }
  };

  const resetState = () => {
    if (gridColumnApi) {
      gridColumnApi.resetColumnState();
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="test-container">
        <div className="test-header">
          <div className="example-section">
            <button onClick={() => saveState()}>Save State</button>
            <button onClick={() => restoreState()}>Restore State</button>
            <button onClick={() => resetState()}>Reset State</button>
          </div>
        </div>
        <div
          className="ag-theme-alpine"
          style={{ height: "600px", width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            onGridReady={gridReadyHandler}
            defaultColDef={{
              sortable: true,
              resizable: true,
              width: 100,
              enableRowGroup: true,
              enableValue: true,
            }}
          >
            <AgGridColumn field="athlete" />
            <AgGridColumn field="age" />
            <AgGridColumn field="country" />
            <AgGridColumn field="sport" />
            <AgGridColumn field="year" />
            <AgGridColumn field="date" />
            <AgGridColumn field="gold" />
            <AgGridColumn field="silver" />
            <AgGridColumn field="bronze" />
            <AgGridColumn field="total" />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
