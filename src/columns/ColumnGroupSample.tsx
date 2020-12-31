import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";

export function ColumnGroupSample() {
  const { gridReadyHandler } = useGridReady();
  const rowData = useFetchOlympicWinnersSmall();

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      <AgGridReact
        onGridReady={gridReadyHandler}
        rowData={rowData}
        defaultColDef={{ resizable: true, width: 160 }}
      >
        <AgGridColumn headerName="Athlete Details" marryChildren={true}>
          <AgGridColumn field="athlete" colId="athlete" />
          <AgGridColumn field="country" colId="country" />
        </AgGridColumn>
        <AgGridColumn field="age" colId="age" />
        <AgGridColumn headerName="Sport Results" marryChildren={true}>
          <AgGridColumn field="sport" colId="sport" />
          <AgGridColumn field="total" colId="total" />
          <AgGridColumn field="gold" colId="gold" />
          <AgGridColumn field="silver" colId="silver" />
          <AgGridColumn field="bronze" colId="bronze" />
        </AgGridColumn>
      </AgGridReact>
    </div>
  );
}
