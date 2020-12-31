import { AgGridReact } from "ag-grid-react";
import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import React from "react";
import { useGridReady } from "../hooks/useGridReady";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./ColumnHeadersSample.css";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";

// https://www.ag-grid.com/javascript-grid-column-header/

export function ColumnHeadersSample() {
  const { gridReadyHandler } = useGridReady();
  const rowData = useFetchOlympicWinnersSmall();

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div style={{ height: "100%", boxSizing: "border-box" }}>
        <div
          className="ag-theme-alpine"
          style={{ height: "700px", width: "100%" }}
        >
          <AgGridReact
            onGridReady={gridReadyHandler}
            rowData={rowData}
            defaultColDef={{ sortable: true, resizable: true }}
            groupHeaderHeight={75}
            headerHeight={150}
            floatingFiltersHeight={50}
            pivotGroupHeaderHeight={50}
            pivotHeaderHeight={100}
          >
            <AgGridColumn headerName="Athlete Details">
              <AgGridColumn
                headerName="Athlete"
                field="athlete"
                width={150}
                suppressSizeToFit={true}
                enableRowGroup={true}
                rowGroupIndex={0}
              />
              <AgGridColumn
                headerName="Age"
                field="age"
                width={90}
                minWidth={75}
                maxWidth={100}
                enableRowGroup={true}
              />
              <AgGridColumn
                headerName="Country"
                field="country"
                width={120}
                enableRowGroup={true}
              />
              <AgGridColumn
                headerName="Year"
                field="year"
                width={90}
                enableRowGroup={true}
                pivotIndex={0}
              />
              <AgGridColumn
                headerName="Sport"
                field="sport"
                width={100}
                enableRowGroup={true}
              />
              <AgGridColumn
                headerName="Gold"
                field="gold"
                width={60}
                enableValue={true}
                suppressMenu={true}
                filter="agNumberColumnFilter"
                aggFunc="sum"
              />
              <AgGridColumn
                headerName="Silver"
                field="silver"
                width={60}
                enableValue={true}
                suppressMenu={true}
                filter="agNumberColumnFilter"
                aggFunc="sum"
              />
              <AgGridColumn
                headerName="Bronze"
                field="bronze"
                width={60}
                enableValue={true}
                suppressMenu={true}
                filter="agNumberColumnFilter"
                aggFunc="sum"
              />
              <AgGridColumn
                headerName="Total"
                field="total"
                width={60}
                enableValue={true}
                suppressMenu={true}
                filter="agNumberColumnFilter"
                aggFunc="sum"
              />
            </AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
