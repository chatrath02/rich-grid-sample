import { ColDef, ValueGetterParams } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";
import "./HideOpenParentsSample.css";

// https://www.youtube.com/watch?v=gzqjP_kF4NI&t=1136s

export function HideOpenParentsSample() {
  const rowData = useFetchOlympicWinnersSmall();
  const { gridReadyHandler } = useGridReady();
  const defaultColDef: ColDef = {
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <div className="example-wrapper">
        <div className="example-header">
          <span className="legend-item ag-row-level-0"></span>
          <span className="legend-label">Top Level Group</span>
          <span className="legend-item ag-row-level-1"></span>
          <span className="legend-label">Second Level Group</span>
          <span className="legend-item ag-row-level-2"></span>
          <span className="legend-label">Bottom Rows</span>
        </div>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%",
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            rowData={rowData}
            onGridReady={gridReadyHandler}
            autoGroupColumnDef={{
              minWidth: 200,
              filterValueGetter: (params: ValueGetterParams) => {
                var colGettingGrouped = params.colDef.showRowGroup;
                if (
                  colGettingGrouped &&
                  typeof colGettingGrouped === "string"
                ) {
                  var valueForOtherCol = params.api?.getValue(
                    colGettingGrouped,
                    params.node
                  );
                  return valueForOtherCol;
                }
                return undefined;
              },
            }}
            defaultColDef={defaultColDef}
            animateRows={true}
            groupHideOpenParents={true}
          >
            <AgGridColumn field="country" rowGroup={true} hide={true} />
            <AgGridColumn
              headerName="Year"
              valueGetter="data.year"
              rowGroup={true}
              hide={true}
            />
            <AgGridColumn field="athlete" minWidth={200} />
            <AgGridColumn field="gold" aggFunc="sum" />
            <AgGridColumn field="silver" aggFunc="sum" />
            <AgGridColumn field="bronze" aggFunc="sum" />
            <AgGridColumn field="total" aggFunc="sum" />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
