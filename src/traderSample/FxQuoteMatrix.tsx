import { AgGridReact } from "ag-grid-react";
import React, { useContext, useEffect } from "react";
import { useGridReady } from "../hooks/useGridReady";
import { FX_DELTA_HEADERS } from "./FxDataServices";
import { TraderAppContext } from "./store";

export function FxQuoteMatrix() {
  const { state } = useContext(TraderAppContext);
  const { fxData } = state;
  const { gridReadyHandler, gridApi } = useGridReady();

  useEffect(() => {
    if (gridApi) {
      gridApi.setRowData(fxData);
    }
  }, [fxData, gridApi]);

  //const data = getFxData();
  // const getRowNodeId = (data: any) => {
  //   return data.symbol;
  // };

  // useEffect(() => {
  //   if (gridApi) {
  //     const newRowData = nextProps.rowData;

  //     const updatedRows = [];

  //     for (let i = 0; i < newRowData.length; i++) {
  //         let newRow = newRowData[i];
  //         let currentRowNode = this.gridApi.getRowNode(newRow.symbol);

  //         const {data} = currentRowNode;
  //         for (const def of this.state.columnDefs) {
  //             if (data[def.field] !== newRow[def.field]) {
  //                 updatedRows.push(newRow);
  //                 break;
  //             }
  //         }
  //     }
  //     this.gridApi.applyTransaction({update: updatedRows});
  // }

  // }, [])

  return (
    <div
      style={{ height: "500px", width: "900px" }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        // properties
        columnDefs={FX_DELTA_HEADERS}
        defaultColDef={{
          sortable: false,
          filter: false,
          width: 200,
        }}
        rowData={fxData}
        // callbacks
        //getRowNodeId={getRowNodeId}
        // events
        onGridReady={gridReadyHandler}
      />
    </div>
  );
}
